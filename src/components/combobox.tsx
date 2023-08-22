"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
// import { type Product } from "@/db/schema"

import { isMacOs } from "@/lib/utils";
// import { useDebounce } from "@/hooks/use-debounce"
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CommandBar } from "@/types";

export function Combobox() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = React.useCallback((callback: () => unknown) => {
    setOpen(false);
    callback();
  }, []);

  React.useEffect(() => {
    if (!open) {
      console.log("Abriu");
    }
  }, [open]);

  const group: CommandBar[] = [
    {
      category: "Users",
      items: [
        {
          id: 1,
          icon: "add",
          router: "/users/new",
          name: "Create New User...",
        },
      ],
    },
    {
      category: "Navigation",
      items: [{ id: 1, icon: "chevronRight", router: "/", name: "Go to Home" }],
    },
  ];

  return (
    <>
      <Button
        variant="outline"
        className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border bg-secondary  hover:bg-secondary hover:text-accent-foreground relative h-9 p-0 xl:h-10 w-full xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <Icons.search className="h-4 w-4 mr-2" aria-hidden="true" />
        <span className="inline-flex">Search here...</span>
        <span className="sr-only">Search here</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <abbr title={isMacOs() ? "Command" : "Control"}>
            {isMacOs() ? "⌘" : "Ctrl+"}
          </abbr>
          K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {group.map((group) => (
            <CommandGroup key={group.category} heading={group.category}>
              {group.items.map((item) => {
                const Icon = Icons[item.icon];
                return (
                  <CommandItem
                    key={item.id}
                    onSelect={() =>
                      handleSelect(() => router.push(item.router))
                    }
                  >
                    <Icon className="mr-2 h-4 w-4" aria-hidden="true" />

                    {item.name}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}