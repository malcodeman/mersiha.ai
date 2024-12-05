import { IconType } from "react-icons";
import { Text } from "@/ui/text";
import { GridItem } from "./grid-item";

type Props = {
  url: string;
  counter: number;
  icon: IconType;
  iconColor?: string;
};

export function SocialMediaLinkCard(props: Props) {
  const { url, counter, icon: Icon, iconColor = "#F2F2F2" } = props;

  return (
    <a href={url} target="_blank">
      <GridItem className="relative h-full">
        <Text className="absolute right-5 top-5 text-sm font-semibold">
          / 0{counter}
        </Text>
        <div className="flex h-full items-center justify-center">
          <Icon size={64} color={iconColor} />
        </div>
      </GridItem>
    </a>
  );
}
