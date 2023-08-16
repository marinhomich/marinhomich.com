import { isMacOs } from "@/lib/utils";
import { useKBar } from "kbar";

export default function Search() {
  const { query } = useKBar();
  // console.log(query.toggle());
  return (
    <button
      onClick={() => query.toggle()}
      className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-stone-700  hover:bg-stone-700 hover:text-accent-foreground relative h-9 p-0 xl:h-10 w-full xl:justify-start xl:px-3 xl:py-2"
    >
      {/* <Icons.search className="h-4 w-4 xl:mr-2" aria-hidden="true" /> */}
      <span className="inline-flex">Search here...</span>
      <kbd className="pointer-events-none absolute right-1.5 top-2 flex h-6 select-none items-center gap-1 rounded bg-stone-700 px-1.5 font-mono text-[10px] font-medium opacity-100">
        <abbr title={isMacOs() ? "Command" : "Control"}>
          {isMacOs() ? "⌘" : "Ctrl+"}
        </abbr>
        K
      </kbd>
    </button>
  );
}
