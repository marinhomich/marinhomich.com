import AuthForm from "@/components/auth-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="mx-5 border border-stone-200 py-10 dark:border-stone-700 sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:shadow-md">
      <Image
        alt="Michel Marinho"
        width={100}
        height={100}
        className="relative mx-auto h-12 w-auto dark:scale-110 dark:rounded-full dark:border dark:border-stone-400"
        src="/logo.png"
      />
      <h1 className="mt-6 text-center font-cal text-3xl dark:text-white">
        Dashboard
      </h1>

      <div className="mx-auto mt-4 w-11/12 max-w-xs sm:w-full">
        <AuthForm />
      </div>
    </div>
  );
}
