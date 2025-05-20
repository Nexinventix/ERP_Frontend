import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const isAuthPage = request.nextUrl.pathname.startsWith('/login')
  const selectedModule = request.cookies.get('selectedModule')?.value

  // If trying to access auth pages while logged in
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL(selectedModule || '/', request.url))
  }

  // If trying to access protected routes without auth
  if (!token && !isAuthPage) {
    const redirectUrl = new URL('/login', request.url)
    // Store the original destination
    if (selectedModule) {
      redirectUrl.searchParams.set('callbackUrl', selectedModule)
    }
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

// Add your protected routes here
export const config = {
  matcher: [
    '/fleet/:path*',
    '/admin/:path*',
    '/login',
    '/dashboard/:path*'
    // Add other protected routes
  ]
}