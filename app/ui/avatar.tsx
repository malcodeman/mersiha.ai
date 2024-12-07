import { Avatar as ArkAvatar, AvatarImageProps } from "@ark-ui/react";
import { cn } from "@/lib/utils";

type Props = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
} & AvatarImageProps;

export function Avatar(props: Props) {
  const { className, ...rest } = props;

  return (
    <ArkAvatar.Root>
      <ArkAvatar.Image
        {...rest}
        className={cn("size-16 rounded-full object-cover", className)}
      />
    </ArkAvatar.Root>
  );
}
