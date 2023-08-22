import Container from "@/components/Container";
import { getUserByID } from "@/lib/prisma/user";
import { notFound } from "next/navigation";

export default async function userId({ params }: { params: { id: number } }) {
  const data = await getUserByID(params.id);

  if (!data) {
    notFound();
  }

  return (
    <Container title={`User Details: ${data.id}`}>
      <p>{data.email}</p>
    </Container>
  );
}
