import Link from "next/link"

export default function NotFound() {
  return (
    <main className="container h-full  py-[110px] text-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold ">404</h1>
        <p className="text-2xl ">Page not found</p>
        <Link href={"/"}>Return to Home</Link>
      </div>
    </main>
  )
}
