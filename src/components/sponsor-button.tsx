import { stripeSession } from "@/lib/stripe-actions";
import { Heart } from "lucide-react";
import { toast } from "react-toastify";

export default function ButtonSponsor() {
  return (
    <button
      onClick={() =>
        stripeSession()
          .then((res) => (window.location.href = res || ""))
          .catch(() => {
            toast.error("Something went wrong.");
          })
      }
      className="flex items-center justify-between rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:bg-stone-700 active:bg-stone-800"
    >
      <div className="flex items-center space-x-3">
        <Heart width={18} />
        <span className="text-sm font-medium">Sponsor</span>
      </div>
      <p>↗</p>
    </button>
  );
}
