import { TableHead, TableHeaderCell, TableRow } from "@tremor/react";


interface TableHeaderProps{
    header: string[]
}

export function TableHeader({header}: TableHeaderProps) {
    
  return (
    <TableHead>
      <TableRow>
        {header.map((item) => (
            <TableHeaderCell key={item}>{item}</TableHeaderCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
