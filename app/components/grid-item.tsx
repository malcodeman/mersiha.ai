import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"div">;

export function GridItem(props: Props) {
  const { className } = props;

  return (
    <div
      {...props}
      className={cn(
        "rounded-[20px] border border-[#272727] bg-[#161616] p-5 transition-colors hover:border-[#00F0FF]",
        className,
      )}
    />
  );
}
