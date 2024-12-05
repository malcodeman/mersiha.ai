"use client";
import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { useDocumentVisibility } from "@react-hookz/web";
import { ifElse } from "ramda";
import { Text } from "@/ui/text";

type Props = {
  value: number;
};

export function CardIndex(props: Props) {
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
    <Text className="absolute right-5 top-5 text-sm font-semibold">
      / 0<NumberFlow value={value} />
    </Text>
  );
}
