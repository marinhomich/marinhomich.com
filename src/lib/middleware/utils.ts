import { type NextRequest } from "next/server";

export const parse = (req: NextRequest) => {
  const domain = req.headers.get("host")!
 
 
  let path = req.nextUrl.pathname;

  return { domain, path };
};