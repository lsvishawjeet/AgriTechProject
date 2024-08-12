
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


const isProtectedRoute = createRouteMatcher([
  '/home/predict(.*)',
]);

export default clerkMiddleware((auth, req) => {
  publicRoutes: ["/api/webhooks/clerk"]
  if (isProtectedRoute(req)) auth().protect();
  const currentUrl = new URL(req.url);
  if(currentUrl.pathname == "/"){
    return NextResponse.redirect(new URL("/home", req.url))
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};