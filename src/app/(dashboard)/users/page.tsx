import prisma from "@/lib/prisma";

export default async function Users() {
  const data = await prisma.user.findMany({})
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //   },
  // })

  console.log(data)
  // if (!data ) {
  //   return <p>tem nada</p>
  // }
  return (
    <div className="flex max-w-screen-xl flex-col space-y-12 p-8">
      <div className="flex flex-col space-y-6">
        <h1 className="font-cal text-3xl font-bold dark:text-white">
          Página de Usuários
        </h1>
      {data.map((item) => (
        <div key={item.id}>
            <p>{item.name}</p>
        </div>
      ))}
      </div>
    </div>
  );
}
