"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { type CommandBar } from "@/types"
import { type DialogProps } from "@radix-ui/react-alert-dialog"
import { useTheme } from "next-themes"

// import { type Product } from "@/db/schema"

import { cn, isMacOs } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
// import { useDebounce } from "@/hooks/use-debounce"
import { Icons } from "@/components/icons"

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter()
  const { setTheme } = useTheme()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  const group: CommandBar[] = [
    {
      category: "Users",
      items: [
        {
          id: 1,
          icon: "add",
          myAction: function () {
            router.push("/users/new")
          },
          name: "Create New User...",
        },
      ],
    },
    {
      category: "Navigation",
      items: [
        {
          id: 1,
          icon: "chevronRight",
          myAction: function () {
            router.push("/")
          },
          name: "Go to Home",
        },
        {
          id: 2,
          icon: "chevronRight",
          myAction: function () {
            router.push("/users")
          },
          name: "Go to Users",
        },
        {
          id: 3,
          icon: "chevronRight",
          myAction: function () {
            router.push("/logs")
          },
          name: "Go to Logs",
        },
      ],
    },

    {
      category: "General",
      items: [
        {
          id: 1,
          icon: "moon",
          myAction: function () {
            setTheme("dark")
          },
          name: "Change Theme to Dark",
        },
        {
          id: 2,
          icon: "sun",
          myAction: function () {
            setTheme("light")
          },
          name: "Change Theme to Light",
        },
        {
          id: 3,
          icon: "monitor",
          myAction: function () {
            setTheme("system")
          },
          name: "Change Theme to System",
        },
      ],
    },
  ]

  return (
    <div>
      <Button
        variant="outline"
        className={cn(
          "relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <Icons.search className="mr-2 h-4 w-4" aria-hidden="true" />
        <span className="hidden lg:inline-flex">Search here...</span>
        <span className="inline-flex lg:hidden">Search...</span>

        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {group.map((group) => (
            <CommandGroup key={group.category} heading={group.category}>
              {group.items.map((item) => {
                const Icon = Icons[item.icon]
                return (
                  <CommandItem
                    key={item.id}
                    onSelect={() =>
                      runCommand(() => {
                        item.myAction()
                      })
                    }
                  >
                    <Icon className="mr-2 h-4 w-4" aria-hidden="true" />

                    {item.name}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </div>
  )
}
