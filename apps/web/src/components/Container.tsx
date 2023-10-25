import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

interface ContainerProps {
  title: string
  children?: React.ReactNode
  link?: string
  linkTitle?: string
}

export default function Container(props: ContainerProps) {
  return (
    <>
      <div className="mx-auto flex max-w-5xl justify-between px-6 py-8">
        <h1 className="text-slate-12 text-[28px] font-bold leading-[34px] tracking-[-0.416px]">
          {props.title}
        </h1>
        {props.link && (
          <Link
            href={props.link}
            className={buttonVariants({ variant: "outline" })}
          >
            {props.linkTitle}
          </Link>
        )}
      </div>
      <div className="mx-auto max-w-5xl px-6 pb-6">{props.children}</div>
    </>
  )
}
