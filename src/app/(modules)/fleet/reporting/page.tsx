"use client"

import { PieChart, User, Gauge, BarChart3, Settings } from "lucide-react"

export default function ReportingAnalytics() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Reporting & Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Vehicle Utilization Card */}
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="flex items-center justify-center h-36 p-6">
            <div className="text-slate-500">
              <PieChart size={64} strokeWidth={1.5} />
            </div>
          </div>
          <div className="bg-gray-600 text-white py-3 px-4 text-center">Analyze vehicle utilization</div>
        </div>

        {/* Downtime Card */}
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="flex items-center justify-center h-36 p-6">
            <div className="text-slate-500">
              <User size={64} strokeWidth={1.5} />
            </div>
          </div>
          <div className="bg-gray-600 text-white py-3 px-4 text-center">Downtime</div>
        </div>

        {/* Fuel Expense Card */}
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="flex items-center justify-center h-36 p-6">
            <div className="text-slate-500">
              <Gauge size={64} strokeWidth={1.5} />
            </div>
          </div>
          <div className="bg-gray-600 text-white py-3 px-4 text-center">Fuel Expense</div>
        </div>

        {/* Revenue Card */}
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="flex items-center justify-center h-36 p-6">
            <div className="text-slate-500">
              <BarChart3 size={64} strokeWidth={1.5} />
            </div>
          </div>
          <div className="bg-gray-600 text-white py-3 px-4 text-center">Revenue</div>
        </div>

        {/* Maintenance Expense Card */}
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="flex items-center justify-center h-36 p-6">
            <div className="text-slate-500">
              <Settings size={64} strokeWidth={1.5} />
            </div>
          </div>
          <div className="bg-gray-600 text-white py-3 px-4 text-center">Maintenance Expense</div>
        </div>
      </div>
    </div>
  )
}
