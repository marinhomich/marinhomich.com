import Container from "@/components/Container";

export default function AnalyticsUserPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <Container title="User Analytics">
      <p>{params.id}</p>
    </Container>
  );
}
