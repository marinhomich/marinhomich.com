import { User } from "@/lib/sequelize/model/user.model"

export default async function LogsPage() {
  const users = await User.findAll()
  console.log(JSON.stringify(users, null, 2))

  return (
    <div>
      <p>Página de Log oi </p>
    </div>
  )
}
