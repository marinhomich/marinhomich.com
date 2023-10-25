import { headers } from "next/headers"
import Link from "next/link"

export default function NotFound() {
  const domain = headers().get("host")

  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={`https://${domain}`}>Return Home</Link>
    </div>
  )
}
