import Users from "@/components/Users";
import { Suspense } from "react";

export default function AllUsers({ params }: { params: { id: string } }) {

  return (
    <div className="flex max-w-screen-xl flex-col space-y-12 p-8">
      <div className="flex flex-col space-y-6">
        <h1 className="font-cal text-3xl font-bold dark:text-white">
          Página de Usuários
        </h1>
        <Suspense
          fallback={
            <p>carregando</p>
          }
        >
          {/* @ts-expect-error Server Component */}
          <Users userId={params.id}/>
        </Suspense>
      </div>
    </div>
  );
}
