import { LuImage } from "react-icons/lu";
import { Carousel } from "@/ui/carousel";
import { CONFERENCE_IMAGES } from "@/lib/constants";
import { GridItem } from "./grid-item";
import { GridHeader } from "./grid-header";

export function ConferenceImagesCard() {
  return (
    <GridItem className="relative flex flex-col">
      <GridHeader index={8} title="Snaps" Icon={LuImage} />
      <Carousel items={CONFERENCE_IMAGES} />
    </GridItem>
  );
}
