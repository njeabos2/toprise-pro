import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define routes that should be protected
const isProtectedRoute = createRouteMatcher([
  '/' // Add any additional routes here
]);// Update clerkMiddleware to manually protect routes

// https://stackoverflow.com/questions/78357339/authmiddleware-doesnt-exist-after-installing-clerk
export default clerkMiddleware((auth, req) =>{
  if (isProtectedRoute(req)) {
    auth().protect(); // Protect the route if it matches the defined criteria
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