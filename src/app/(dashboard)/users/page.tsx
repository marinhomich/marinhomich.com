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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i}>
                <p>oi</p>
                </div>
            ))}
          </div>
          }
        >
          {/* @ts-expect-error Server Component */}
          <Users userId={params.id}/>
        </Suspense>
      </div>
    </div>
  );
}
