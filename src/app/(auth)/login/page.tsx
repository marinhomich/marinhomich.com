import AuthForm from "@/components/forms/auth-form";
import Image from "next/image";

export const metadata = {
  title: "Login | Michel Marinho",
};

export default function LoginPage() {
  return (
    // <div className="mx-5 border border-stone-200 py-10 dark:border-stone-700 sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:shadow-md">

    // </div>

    <div className="mx-auto mt-4 w-11/12 max-w-md sm:w-full">
      <AuthForm />
    </div>
  );
}
