import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

import { Separator } from "./ui/separator"

interface ContainerProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
  link?: string
  linkTitle?: string
}

export default function Container(props: ContainerProps) {
  return (
    <>
      <div className="space-y-6 p-10 pb-16 md:block">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{props.title}</h2>
            <p className="text-sm text-muted-foreground">{props.subtitle}</p>
          </div>
          {props.link && (
            <Link
              href={props.link}
              className={buttonVariants({ variant: "outline" })}
            >
              {props.linkTitle}
            </Link>
          )}
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8  lg:flex-row lg:space-x-12 lg:space-y-0">
          <div className="flex-1 ">{props.children}</div>
        </div>
      </div>
    </>
  )
}
