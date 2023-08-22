import Container from "@/components/Container";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function UsersLoading() {
  return (
    <Container title="User Details">
      <Skeleton className="h-8 w-56" />
    </Container>
  );
}
