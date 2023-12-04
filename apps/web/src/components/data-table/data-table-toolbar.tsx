"use client"

import { useCallback } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { type Table } from "@tanstack/react-table"
import { debounce } from "lodash"

import { createUrl } from "@/lib/utils"
import { Input } from "@/components/ui/input"

import { Icons } from "../icons"
import { DataTableViewOptions } from "./data-table-view-options"

// import { DataTableViewOptions } from "@/app/examples/tasks/components/data-table-view-options"

// import { priorities, statuses } from "../data/data"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  placeholder: string
}

const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: Icons.PenLine,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Icons.PenLine,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Icons.PenLine,
  },
  {
    value: "done",
    label: "Done",
    icon: Icons.PenLine,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: Icons.PenLine,
  },
]
export function DataTableToolbar<TData>({
  table,
  placeholder,
}: DataTableToolbarProps<TData>) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const newParams = new URLSearchParams(searchParams.toString())
  const handleChange = useCallback(
    debounce((e) => {
      if (e.target.value) {
        newParams.set("search", e.target.value)
      } else {
        newParams.delete("search")
      }
      router.push(createUrl(pathname, newParams))
    }, 500),
    []
  )

  return (
    <div className="flex items-center py-4">
      <Input
        placeholder={placeholder}
        defaultValue={searchParams?.get("search") || ""}
        onChange={handleChange}
        className="max-w-sm"
      />

      {/* {table.getColumn("email") && (
        <DataTableFacetedFilter
          column={table.getColumn("email")}
          title="Status"
          options={statuses}
        />
      )}
      {isFiltered && (
        <Button
          variant="ghost"
          onClick={() => table.resetColumnFilters()}
          className="h-8 px-2 lg:px-3"
        >
          Reset
          <Icons.add className="ml-2 h-4 w-4" />
        </Button>
      )} */}
      <DataTableViewOptions table={table} />
    </div>
  )
}
