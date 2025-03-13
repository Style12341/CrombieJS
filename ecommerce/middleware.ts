import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifySession } from './app/lib/session'

const protectedRoutesPrefixes = ['/profile', '/admin']

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isProtected = protectedRoutesPrefixes.some(prefix => path.startsWith(prefix))
    const session = await verifySession()
    if (isProtected && !session.isAuth) {
        return NextResponse.redirect(new URL('/login', request.nextUrl).toString())
    }
    if (session?.userRole != 'ADMIN' && path.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/profile', request.nextUrl).toString())
    }
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/profile/:path*', '/admin/:path*']
}