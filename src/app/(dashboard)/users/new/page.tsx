import CreateUserButton from "@/components/user-create-button";

export default function CreateUser() {
  return (
    <div className="flex max-w-screen-xl flex-col space-y-12 p-8">
      <div className="flex flex-col space-y-6">
        <h1 className="font-cal text-3xl font-bold dark:text-white">
          Novo Usuário
        </h1>
        <CreateUserButton />
      </div>
    </div>
  );
}
