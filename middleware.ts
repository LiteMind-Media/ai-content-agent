// This file is a middleware that runs on every request.
// It checks if the user is authenticated and redirects them to the sign-in page if they are not.
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create a route matcher for public routes
const isProtectedRoute = createRouteMatcher(["/video(.*)"]);

// Export the middleware
export default clerkMiddleware(async (auth, req) => {
  // Get the user ID and redirect function from the auth object
  const { userId, redirectToSignIn } = await auth();

  // If the user is not authenticated and the route is not public, redirect them to the sign-in page
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
