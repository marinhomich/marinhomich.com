import ResetPassForm from "@/components/forms/reset-pass-form"

export const metadata = {
  title: "Reset Password",
}

export default function ResetPassPage() {
  return (
    <div className="mx-auto mt-4 w-11/12 max-w-md sm:w-full">
      <ResetPassForm />
    </div>
  )
}
