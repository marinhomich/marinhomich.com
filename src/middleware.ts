import { NextResponse, type NextRequest } from "next/server"

import { API_HOSTNAMES, APP_HOSTNAMES, isHomeHostname } from "./lib/constants"
import ApiMiddleware from "./lib/middleware/api"
import AppMiddleware from "./lib/middleware/app"
import { parse } from "./lib/middleware/utils"

export default async function middleware(req: NextRequest) {
  const { domain, path } = parse(req)

  if (isHomeHostname(domain)) {
    return NextResponse.rewrite(new URL(`/home${path}`, req.url))
  }

  // for App
  if (APP_HOSTNAMES.has(domain)) {
    return AppMiddleware(req)
  }

  // for API
  if (API_HOSTNAMES.has(domain)) {
    return ApiMiddleware(req)
  }

  // rewrite everything else to `/[domain]/[path] dynamic route
  return NextResponse.rewrite(new URL(`/${domain}${path}`, req.url))
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /_proxy/ (special page for OG tags proxying)
     * 4. /_static (inside /public)
     * 5. /_vercel (Vercel internals)
     * 6. /favicon.ico, /sitemap.xml, /robots.txt (static files)
     */
    "/((?!api/|_next/|_proxy/|_static|_vercel|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
}
