import { LuImage } from "react-icons/lu";
import { Heading } from "@/ui/heading";
import { Carousel } from "@/ui/carousel";
import { CONFERENCE_IMAGES } from "@/lib/constants";
import { GridItem } from "./grid-item";
import { CardIndex } from "./card-index";

export function ConferenceImagesCard() {
  return (
    <GridItem className="relative flex flex-col">
      <CardIndex value={8} />
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center">
        <LuImage size={24} className="min-w-6" />
        <Heading>Snaps</Heading>
      </div>
      <Carousel items={CONFERENCE_IMAGES} />
    </GridItem>
  );
}
