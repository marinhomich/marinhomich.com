import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ContainerProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  link?: string;
  linkTitle?: string;
}

export default function Container(props: ContainerProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
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
      <div>{props.children}</div>
    </div>
  );
}
