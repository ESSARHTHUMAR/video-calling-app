

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware

const protectedRoute = createRouteMatcher([
  "/",
  "/upcoming",
  "/recordings",
  "/meeting(.*)",
  "/personal-room",
  "/previous",
]);

export default clerkMiddleware((auth, req) => {
    // Allow signed out users to access the specified routes:
    // publicRoutes: ['/anyone-can-visit-this-route'],
    if (protectedRoute(req)) auth().protect();
  },
  { debug: true }
);

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)",
  ],
};
