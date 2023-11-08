export default function CustomDomainPage({
  params,
}: {
  params: { domain: string; key: string }
}) {
  console.log(params.domain)

  return <p>{params.domain}</p>
}
