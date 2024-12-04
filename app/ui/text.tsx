import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"p">;

export function Text(props: Props) {
  const { className } = props;

  return <p {...props} className={cn("text-base text-[#757575]", className)} />;
}
