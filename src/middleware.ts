import { NextResponse, type NextRequest } from "next/server";
import { APP_HOSTNAMES, isHomeHostname } from "./lib/constants";
import AppMiddleware from "./lib/middleware/app";
import { parse } from "./lib/middleware/utils";

export default async function middleware(req: NextRequest) {
  const {domain, path} = parse(req)
 
  if (isHomeHostname(domain)) {
    return NextResponse.rewrite(new URL(`/home${path}`, req.url));
  }

  // rewrites for app pages
  if (APP_HOSTNAMES.has(domain)) {
    return AppMiddleware(req);
  
  }
  
  // rewrite everything else to `/[domain]/[path] dynamic route
  return NextResponse.rewrite(new URL(`/${domain}${path}`, req.url))
}

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
}
