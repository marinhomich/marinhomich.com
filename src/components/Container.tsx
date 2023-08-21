import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface ContainerProps {
  title: string;
  children?: React.ReactNode;
  link?: string;
  linkTitle?: string;
}

export default function Container(props: ContainerProps) {
  return (
    <>
      <div className="flex mx-auto justify-between max-w-5xl px-6 py-8">
        <h1 className="text-[28px] leading-[34px] tracking-[-0.416px] text-slate-12 font-bold">
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
      <div className="mx-auto max-w-5xl px-6">{props.children}</div>
    </>
  );
}
