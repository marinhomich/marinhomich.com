import Container from "@/components/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container title="User not found">
      <Link href="/">Return Home</Link>
    </Container>
  );
}
