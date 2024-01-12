import { NextResponse, type NextRequest } from "next/server"

import { parse } from "./utils"

export default async function TesteMiddleware(req: NextRequest) {
  const { fullPath } = parse(req)

  return NextResponse.rewrite(new URL(`/teste${fullPath}`, req.url))
}
