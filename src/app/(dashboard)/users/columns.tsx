"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { toast } from "react-toastify"

import { deleteUser } from "@/lib/actions"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

export type User = {
  id: number
  name: string | null
  email: string
  password: string
  createdAt: Date
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "actions",
    cell: function Cell({ row }) {
      const item = row.original
      const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false)
      const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false)
      const router = useRouter()
      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>

              <Link href={`/users/${item.id}`}>
                <DropdownMenuItem>View User</DropdownMenuItem>
              </Link>
              {item.email !== "demo@marinhomich.dev" && (
                <DropdownMenuItem onSelect={() => setShowDeleteAlert(true)}>
                  Delete User
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  disabled
                  className="bg-red-500 focus:ring-red-500"
                  onClick={async (event) => {
                    event.preventDefault()
                    setIsDeleteLoading(true)

                    const deleted = await deleteUser(item.id).then(
                      (res: any) => {
                        return true
                      }
                    )

                    if (deleted) {
                      setIsDeleteLoading(false)
                      setShowDeleteAlert(false)
                      toast.error("Usuário Deletado com sucesso")

                      router.refresh()
                    }
                  }}
                >
                  {isDeleteLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Icons.trash className="mr-2 h-4 w-4" />
                  )}
                  <span>Delete</span>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )
    },
  },
]
