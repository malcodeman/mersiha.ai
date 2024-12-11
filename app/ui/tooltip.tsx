import { cn } from "@/lib/utils";
import { Tooltip as ArkTooltip } from "@ark-ui/react";

type Props = {
  children: React.ReactNode;
  content: string;
  className?: string;
};

export function Tooltip(props: Props) {
  const { children, content, className } = props;

  return (
    <ArkTooltip.Root closeDelay={0} openDelay={0}>
      <ArkTooltip.Trigger disabled asChild>
        {children}
      </ArkTooltip.Trigger>
      <ArkTooltip.Positioner>
        <ArkTooltip.Content
          className={cn(
            "rounded border border-[#272727] bg-[#161616] p-1",
            className,
          )}
        >
          {content}
        </ArkTooltip.Content>
      </ArkTooltip.Positioner>
    </ArkTooltip.Root>
  );
}
