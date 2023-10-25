import { Skeleton } from "@/components/ui/skeleton"
import Container from "@/components/Container"

export default function UsersLoading() {
  return (
    <Container title="User Details">
      <Skeleton className="h-8 w-56" />
    </Container>
  )
}
