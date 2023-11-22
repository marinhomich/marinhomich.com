import AuthForm from "@/components/forms/auth-form"
import SiteFooter from "@/components/site/footer"

export const metadata = {
  title: "Login",
}
export default function LoginPage() {
  return (
    <div className="mx-auto w-11/12 max-w-md sm:w-full">
      <AuthForm />
      <SiteFooter />
    </div>
  )
}
