import { NextResponse, type NextRequest } from "next/server"

import { HOME_DOMAIN } from "../constants"
import { parse } from "./utils"

export default async function ApiMiddleware(req: NextRequest) {
  const { fullPath } = parse(req)
  if (fullPath === "/") {
    return NextResponse.redirect(`${HOME_DOMAIN}/article/marinhomich-api`, {
      status: 301,
    })

    // special case for metatags
  }

  // Note: we don't have to account for paths starting with `/api`
  // since they're automatically excluded via our middleware matcher
  return NextResponse.rewrite(new URL(`/api${fullPath}`, req.url))
}
