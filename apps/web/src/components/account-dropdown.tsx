"use client"

import { useState } from "react"
import Link from "next/link"
import { signOut } from "next-auth/react"

import { stripeSession } from "@/lib/stripe-actions"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Icons } from "./icons"
import { useToast } from "./ui/use-toast"

export default function AccountDropdown({ session }: any) {
  const { toast } = useToast()

  const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const user = {
    firstName: "Michel",
    lastName: "Marinho",
  }
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="/_static/user.png"
                alt={session.user.name ?? ""}
              />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session?.user?.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session?.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() =>
                stripeSession()
                  .then((res) => (window.location.href = res || ""))
                  .catch(() => {
                    toast({
                      title: "Something went wrong.",
                      description: "Friday, February 10, 2023 at 5:57 PM",
                      variant: "destructive",
                    })
                  })
              }
            >
              <Icons.heart className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>Sponsor</span>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/account">
                <Icons.user className="mr-2 h-4 w-4" aria-hidden="true" />
                Account
                <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild disabled>
              <Link href="/dashboard/stores">
                <Icons.terminal className="mr-2 h-4 w-4" aria-hidden="true" />
                Dashboard
                <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings">
                <Icons.settings className="mr-2 h-4 w-4" aria-hidden="true" />
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild onSelect={() => setShowDeleteAlert(true)}>
            <div>
              <Icons.logout className="mr-2 h-4 w-4" aria-hidden="true" />
              Logout
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sair do Dashboard?</AlertDialogTitle>
            <AlertDialogDescription>
              Você poderá entrar novamente a qualquer momento. Se quiser trocar
              de conta, faça isso adicionando uma conta existente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar.</AlertDialogCancel>
            <AlertDialogAction
              disabled={isLoading}
              onClick={(e) => {
                e.preventDefault()
                setIsLoading(true)
                signOut()
              }}
            >
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.logout className="mr-2 h-4 w-4" />
              )}
              <span>Sair.</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
