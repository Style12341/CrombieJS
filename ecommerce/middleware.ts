import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher([
    '/profile(.*)',
])
const isAdminRoute = createRouteMatcher([
    '/admin(.*)',
])

export default clerkMiddleware(async (auth, req) => {
    const { sessionClaims } = await auth()
    const isAdmin = sessionClaims?.metadata?.role == 'ADMIN'
    if (isProtectedRoute(req)) {
        await auth.protect()
    }

    if (
        (isAdminRoute(req) && !isAdmin)
    ) {
        // Custom redirect to profile instead of sign in
        const profileUrl = new URL('/profile', req.url)
        return NextResponse.redirect(profileUrl)
    }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}