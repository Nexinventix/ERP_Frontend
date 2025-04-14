'use client'
import React from 'react'
import {
  Search,
  Filter,
  MoreVertical,
  PlusIcon,

} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const users:any = [
  {
    id: 1,
    name: "Sandeep Kandula",
    email: "SandeepKandula@gmail.com",
    status: "Active",
    department: "Fleet Management",
    avatar: "",
    role: "Manager",
  },
  {
    id: 2,
    name: "Nick",
    email: "nick@dreamworks.com",
    status: "Inactive",
    department: "HR Department",
    avatar: "",
    role: "Staff",
  },
  {
    id: 3,
    name: "Chuks",
    email: "chuks@dreamworks.com",
    status: "Inactive",
    department: "HR Department",
    avatar: "",
    role: "Staff",
  },
  {
    id: 4,
    name: "Michael Angelo",
    email: "michaelangelo@dreamworks.com",
    status: "Inactive",
    department: "Finance",
    avatar: "",
    role: "Manager",
  },
  {
    id: 5,
    name: "Ahmad Zarah",
    email: "ahmadzarah@dreamworks.com",
    status: "Inactive",
    department: "HR Department",
    avatar: "",
    role: "Staff",
  },
  {
    id: 6,
    name: "Jack Wilson",
    email: "jackwilson@dreamworks.com",
    status: "Inactive",
    department: "Finance",
    avatar: "",
    role: "Staff",
  },
  {
    id: 7,
    name: "Sophia King",
    email: "sophiaking@dreamworks.com",
    status: "Inactive",
    department: "Fleet Management",
    avatar: "",
    role: "Staff",
  },
]
const Admin = () => {
  return (
  <div>
    <main className="flex-1">
      

        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">User management</h2>
            <p className="text-sm text-gray-500">Manage your team members and their account permission here</p>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Total Users</CardTitle>
                <CardDescription>All registered users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">07</div>
                <p className="text-xs text-gray-500">1 active, 6 inactive</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Departments</CardTitle>
                <CardDescription>User distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Fleet Management</span>
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">HR Department</span>
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Finance</span>
                    <span className="text-sm font-medium">2</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>System Status</CardTitle>
                <CardDescription>All systems operational</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-green-600">Online</span>
                </div>
                <p className="mt-2 text-xs text-gray-500">Last updated: 5 minutes ago</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="all-users" className="mb-6">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="all-users">All Users</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="inactive">Inactive</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input type="search" placeholder="Search" className="w-64 pl-10" />
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                <Link href="/admin/invite-users">
                  <Button size="sm" className="gap-2">
                    <PlusIcon className="h-4 w-4" />
                    Invite Employee
                  </Button>
                </Link>
              </div>
            </div>

            <TabsContent value="all-users" className="mt-4">
              <div className="overflow-hidden rounded-lg border bg-white">
                <div className="grid grid-cols-12 border-b bg-gray-50 px-6 py-3 text-sm font-medium text-gray-500">
                  <div className="col-span-4">Names</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-3">Department</div>
                  <div className="col-span-2">Role</div>
                  <div className="col-span-1">Actions</div>
                </div>
                <div className="divide-y">
                  {users.map((user:any) => (
                    <div key={user.id} className="grid grid-cols-12 items-center px-6 py-4">
                      <div className="col-span-4 flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <Badge
                          variant={user.status === "Active" ? "default" : "outline"}
                          className={
                            user.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-red-100 text-red-800 hover:bg-red-100"
                          }
                        >
                          {user.status}
                        </Badge>
                      </div>
                      <div className="col-span-3 text-sm">{user.department}</div>
                      <div className="col-span-2 text-sm">{user.role}</div>
                      <div className="col-span-1 text-right">
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="active" className="mt-4">
              <div className="overflow-hidden rounded-lg border bg-white">
                <div className="grid grid-cols-12 border-b bg-gray-50 px-6 py-3 text-sm font-medium text-gray-500">
                  <div className="col-span-4">Names</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-3">Department</div>
                  <div className="col-span-2">Role</div>
                  <div className="col-span-1">Actions</div>
                </div>
                <div className="divide-y">
                  {users
                    .filter((user:any) => user.status === "Active")
                    .map((user:any) => (
                      <div key={user.id} className="grid grid-cols-12 items-center px-6 py-4">
                        <div className="col-span-4 flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{user.status}</Badge>
                        </div>
                        <div className="col-span-3 text-sm">{user.department}</div>
                        <div className="col-span-2 text-sm">{user.role}</div>
                        <div className="col-span-1 text-right">
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="inactive" className="mt-4">
              <div className="overflow-hidden rounded-lg border bg-white">
                <div className="grid grid-cols-12 border-b bg-gray-50 px-6 py-3 text-sm font-medium text-gray-500">
                  <div className="col-span-4">Names</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-3">Department</div>
                  <div className="col-span-2">Role</div>
                  <div className="col-span-1">Actions</div>
                </div>
                <div className="divide-y">
                  {users
                    .filter((user:any) => user.status === "Inactive")
                    .map((user:any) => (
                      <div key={user.id} className="grid grid-cols-12 items-center px-6 py-4">
                        <div className="col-span-4 flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
                            {user.status}
                          </Badge>
                        </div>
                        <div className="col-span-3 text-sm">{user.department}</div>
                        <div className="col-span-2 text-sm">{user.role}</div>
                        <div className="col-span-1 text-right">
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
  </div>
  )
}

export default Admin