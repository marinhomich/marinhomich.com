import { NextResponse, type NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

let locales = ["en", "es"]
export default async function middleware(req: NextRequest) {
  const url = req.nextUrl
  const path = url.pathname
  const session = await getToken({ req })

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  if (
    !session &&
    (path == "/login" || path == "/signup" || path == "/reset-password")
  ) {
    return NextResponse.next()
    // return NextResponse.redirect(new URL("/login", req.url));
  } else if (
    (session && path == "/login") ||
    path == "/signup" ||
    path == "/reset-password"
  ) {
    return NextResponse.redirect(new URL("/", req.url))
  }
  // return NextResponse.rewrite(
  //   new URL(`/app${path === "/" ? "" : path}`, req.url),
  // );
}

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
}
