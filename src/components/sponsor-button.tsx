import { toast } from "react-toastify"

import { stripeSession } from "@/lib/stripe-actions"

import { Icons } from "./icons"

export default function ButtonSponsor() {
  return (
    <li>
      <button
        className={`flex justify-between space-x-3 rounded-lg px-2 py-1 w-full transition-all duration-150 ease-in-out  hover:bg-secondary/80 active:bg-secondary`}
        onClick={() =>
          stripeSession()
            .then((res) => (window.location.href = res || ""))
            .catch(() => {
              toast.error("Something went wrong.")
            })
        }
      >
        <span className="flex h-8 items-center gap-2 rounded-md px-2 text-sm bg-slate-6 text-slate-12">
          <Icons.heart width={18} />
          <span className="text-sm font-medium">Sponsor</span>
        </span>
        <Icons.arrowUpRight width={18} />
      </button>
    </li>
  )
}
