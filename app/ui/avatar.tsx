import { Avatar as ArkAvatar, AvatarImageProps } from "@ark-ui/react";
import { equals } from "ramda";
import { cn } from "@/lib/utils";

type Props = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  shape?: "square" | "rounded" | "full";
} & AvatarImageProps;

export function Avatar(props: Props) {
  const { size = "md", shape = "full", className, ...rest } = props;

  return (
    <ArkAvatar.Root>
      <ArkAvatar.Image
        {...rest}
        alt=""
        className={cn(
          "object-cover",
          equals(size, "xs") && "size-8",
          equals(size, "sm") && "size-9",
          equals(size, "md") && "size-10",
          equals(size, "lg") && "size-11",
          equals(size, "xl") && "size-12",
          equals(size, "2xl") && "size-16",
          equals(shape, "rounded") && "rounded-md",
          equals(shape, "full") && "rounded-full",
          className,
        )}
      />
    </ArkAvatar.Root>
  );
}
