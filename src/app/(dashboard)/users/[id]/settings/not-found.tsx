import Link from "next/link"

import { Skeleton } from "@/components/ui/skeleton"
import Container from "@/components/Container"

export default function NotFound() {
  return (
    <Container title="User not found">
      <Link href="/">Return Home</Link>
    </Container>
  )
}
