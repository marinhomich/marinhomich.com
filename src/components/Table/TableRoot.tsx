import { Card, Table } from "@tremor/react";
import { ReactNode } from "react";

interface TableRootProps {
  children: ReactNode;
}

export function TableRoot({ children }: TableRootProps) {
  return (
    <Card>
      <Table>{children}</Table>
    </Card>
  );
}
