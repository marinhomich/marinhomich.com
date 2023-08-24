import SignUpForm from "@/components/forms/signup-form"

export const metadata = {
  title: "Signup",
}

export default function SignupPage() {
  return (
    <div className="mx-auto mt-4 w-11/12 max-w-md sm:w-full">
      <SignUpForm />
    </div>
  )
}
