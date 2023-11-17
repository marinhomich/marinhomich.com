import Balancer from "react-wrap-balancer"

export default function HomePage() {
  return (
    <main className="container flex min-h-[100vh-56px] w-full flex-col items-start justify-center pt-48">
      <div className="max-w-4xl">
        <h1
          className="animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-4xl font-bold text-transparent opacity-0 drop-shadow-sm md:text-7xl/[5rem]"
          style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
        >
          <Balancer>Michel Marinho</Balancer>
        </h1>

        <p
          className="mt-6 animate-fade-up  text-muted-foreground/80 opacity-0 md:text-xl"
          style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
        >
          <Balancer>Frontend Developer.</Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.40s", animationFillMode: "forwards" }}
        ></div>
      </div>
    </main>
  )
}
