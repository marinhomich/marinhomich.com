import { type NextRequest } from "next/server"

export const parse = (req: NextRequest) => {
  const domain = req.headers.get("host")!

  let path = req.nextUrl.pathname

  // fullPath is the full URL path (along with search params)
  const searchParams = req.nextUrl.searchParams.toString()
  const fullPath = `${path}${searchParams.length > 0 ? `?${searchParams}` : ""}`

  return { domain, path, fullPath }
}
