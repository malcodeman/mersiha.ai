import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"button">;

export function Button(props: Props) {
  const { className } = props;

  return (
    <button
      {...props}
      className={cn(
        "flex items-center justify-center gap-1 border border-[#F2F2F2] bg-[#0a0a0a] px-4 py-1.5 text-base font-semibold text-white transition-all hover:bg-[#F2F2F2] hover:text-[#0A0A0A]",
        className,
      )}
    />
  );
}
