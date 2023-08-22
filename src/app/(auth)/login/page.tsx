import AuthForm from "@/components/forms/auth-form";

export const metadata = {
  title: "Login | Michel Marinho",
};

export default function LoginPage() {
  return (
    <div className="mx-auto mt-4 w-11/12 max-w-md sm:w-full">
      <AuthForm />
    </div>
  );
}
