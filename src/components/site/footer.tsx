import { social } from "@/config/social"

export default function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4  md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={social.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            marinhomich
          </a>
        </p>
      </div>
    </footer>
  )
}