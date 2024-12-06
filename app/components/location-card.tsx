import { LuMapPinHouse } from "react-icons/lu";
import { Heading } from "@/ui/heading";
import { GridItem } from "./grid-item";
import { CardIndex } from "./card-index";

export function LocationCard() {
  return (
    <GridItem className="relative">
      <div className="absolute inset-0 rounded-[20px] bg-[url('/berlin-sm.webp')] bg-cover bg-center brightness-50 sm:bg-[url('/berlin-lg.webp')]" />
      <CardIndex value={4} />
      <div className="relative flex flex-col gap-2 md:flex-row md:items-center">
        <LuMapPinHouse size={24} />
        <Heading>Located in Berlin</Heading>
      </div>
    </GridItem>
  );
}
