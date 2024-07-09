import { type Metadata } from "next"
import { type ReadonlyURLSearchParams } from "next/navigation"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { siteConfig } from "@/config/site"

import { HOME_DOMAIN } from "./constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function isMacOs() {
  if (typeof window === "undefined") return false

  return window.navigator.userAgent.includes("Mac")
}

export function isMobileOs() {
  if (typeof window === "undefined") return false

  return window.navigator.userAgent.includes("mobile")
}

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

export function formatDate(date: Date | string | number) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}
export function constructMetadata({
  title = "Michel Marinho",
  description = "Frontend Developer",
  noIndex = false,
}: {
  title?: string
  template?: string
  isRoot?: boolean
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "Michel Marinho",
      "marinhomich",
      "Tailwind CSS",
      "Server Components",
      "Radix UI",
    ],
    authors: [
      {
        name: "Michel Marinho",
        url: "https://marinhomich.dev",
      },
    ],
    openGraph: {
      title,
      description,
      images: [
        {
          url: `${siteConfig.url}/og.jpg`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/og.jpg`],
      creator: "@marinhomich",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: `${siteConfig.url}/manifest.webmanifest`,
    metadataBase: new URL(HOME_DOMAIN),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`

  return `${pathname}${queryString}`
}
