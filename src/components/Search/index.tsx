"use client";

import { Button } from "@tremor/react";
import { useKBar } from "kbar";
import SearchIcon from "./SearchIcon";

export function DocsSearch() {
  const { query } = useKBar();

  return (
    <div>
      <Button
        className="w-full justify-between"
        variant="secondary"
        onClick={() => query.toggle()}
        icon={SearchIcon}
        iconPosition="right"
      >
        Search...{" "}
      </Button>
    </div>
  );
}
