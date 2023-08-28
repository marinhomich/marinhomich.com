import Link from "next/link"

import Container from "@/components/Container"

export default function NotFound() {
  return (
    <Container title="User not found">
      <Link href="/">Return Home</Link>
    </Container>
  )
}
