import Link from "next/link"
import { format, intervalToDuration, parseISO } from "date-fns"

import items from "@/config/about"
import { Separator } from "@/components/ui/separator"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shells/shell"

export const metadata = {
  title: "About",
}

const description = "Hey, I'm Michel Marinho."

const getDuration = (startDate: string, endDate: string | undefined) => {
  const durationObj = intervalToDuration({
    start: parseISO(startDate),
    end: endDate ? parseISO(endDate) : new Date(),
  })

  let durationStr = ""

  if (durationObj.years! > 1) {
    durationStr = `${durationObj.years} yrs `
  } else if (durationObj.years === 1) {
    durationStr = `${durationObj.years} yr `
  }

  durationStr += `${durationObj.months} mos`

  return durationStr
}

export default function HomePage() {
  return (
    <Shell className="md:pb-10">
      <PageHeader
        id="articles-header"
        aria-labelledby="articles-header-heading"
      >
        <PageHeaderHeading>About</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
      </PageHeader>
      <Separator className="mb-2.5" />
      <section id="about-section" aria-labelledby="about-section-heading">
        <p className="text-base text-muted-foreground sm:text-lg">
          I am passionate about programming and design. I love working on
          projects that challenge my skills and allow me to learn something new.
          Throughout my career, I have developed skills in interface design and
          learned techniques and methodologies to make the user experience the
          best possible. I am always seeking ways to improve my abilities and
          contribute to the Frontend development community.
        </p>
        <h2 className="my-8 text-2xl font-semibold leading-none tracking-tight">
          Career
        </h2>

        {items.map((item, index) => (
          <div className="mb-10 space-y-2" key={index}>
            <h3 className="font-semibold leading-none tracking-tight">
              {item.jobTitle}
            </h3>
            <div>
              <Link
                className="underline"
                href={item.companyUrl}
                target="_blank"
              >
                {item.company}
              </Link>

              <span className="text-muted-foreground"> • {item.location}</span>
            </div>
            <div className="text-muted-foreground">
              <span>{format(parseISO(item.startDate), "LLL yyyy")}</span>
              <span> – </span>
              <span>
                {item.endDate
                  ? format(parseISO(item.endDate), "LLL yyyy")
                  : "Present"}
              </span>
              <span> • </span>
              <span>{getDuration(item.startDate, item.endDate)}</span>
            </div>
          </div>
        ))}
      </section>
    </Shell>
  )
}
