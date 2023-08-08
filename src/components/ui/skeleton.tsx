function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={"animate-pulse rounded-md bg-red-500 h-5 w-2/"}
      {...props}
    />
  );
}

export { Skeleton };
