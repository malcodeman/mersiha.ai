"use client";
import { Highlight as ArkHighlight, HighlightProps } from "@ark-ui/react";

export function Highlight(props: HighlightProps) {
  return (
    <ArkHighlight
      {...props}
      className="rounded-[4px] bg-[#00F0FF80] p-1 text-[#0A0A0A]"
    />
  );
}
