import Link from "next/link";

export default function UsersLoading() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-cal text-3xl font-bold">Usuários</h1>
        <Link
          href={"/users/new"}
          className="flex h-8 w-36 items-center justify-center space-x-2 rounded-lg border text-sm transition-all focus:outline-none sm:h-9  border-black bg-black text-white hover:bg-white hover:text-black active:bg-stone-100 dark:border-stone-700 dark:hover:border-stone-200 dark:hover:bg-black dark:hover:text-white dark:active:bg-stone-800"
        >
          Novo Usuário
        </Link>
      </div>
      <div className="h-10 w-48 animate-pulse rounded-md bg-stone-800" />
    </>
  );
}
