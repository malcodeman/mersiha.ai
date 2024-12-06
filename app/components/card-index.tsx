"use client";
import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { useDocumentVisibility } from "@react-hookz/web";
import { ifElse } from "ramda";
import { Text } from "@/ui/text";
import { cn } from "@/lib/utils";

type Props = {
  value: number;
  className?: string;
};

export function CardIndex(props: Props) {
  const { className } = props;
  const [value, setValue] = useState(0);
  const isVisible = useDocumentVisibility();

  useEffect(() => {
    const updateValue = ifElse(
      () => isVisible,
      () => setValue(props.value),
      () => setValue(0),
    );

    updateValue();
  }, [isVisible, props.value]);

  return (
    <Text
      className={cn("absolute right-5 top-5 text-sm font-semibold", className)}
    >
      / 0<NumberFlow value={value} />
    </Text>
  );
}
