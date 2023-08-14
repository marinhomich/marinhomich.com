import { ReactNode } from "react";

interface TableRootProps {
  children: ReactNode;
}

export function TableButton({ children }: TableRootProps) {
  return <div>{children}</div>;
}
