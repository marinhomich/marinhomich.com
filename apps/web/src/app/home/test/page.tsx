import { getUsers } from "@/lib/actions/users"

export default async function TestPage() {
  const data = await getUsers()

  return <p>{data[0].email}</p>
}
