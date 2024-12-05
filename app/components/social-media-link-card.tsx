import { IconType } from "react-icons";
import { GridItem } from "./grid-item";
import { CardIndex } from "./card-index";

type Props = {
  url: string;
  index: number;
  icon: IconType;
  iconColor?: string;
};

export function SocialMediaLinkCard(props: Props) {
  const { url, index, icon: Icon, iconColor = "#F2F2F2" } = props;

  return (
    <a href={url} target="_blank">
      <GridItem className="relative h-full">
        <CardIndex value={index} />
        <div className="flex h-full items-center justify-center">
          <Icon size={64} color={iconColor} />
        </div>
      </GridItem>
    </a>
  );
}
