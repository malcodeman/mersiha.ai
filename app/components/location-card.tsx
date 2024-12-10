import { LuMapPinHouse } from "react-icons/lu";
import { GridItem } from "./grid-item";
import { GridHeader } from "./grid-header";

export function LocationCard() {
  return (
    <GridItem className="relative min-h-52">
      <div className="absolute inset-0 rounded-[20px] bg-[url('/berlin-sm.webp')] bg-cover bg-center brightness-50 sm:bg-[url('/berlin-lg.webp')]" />
      <GridHeader
        index={4}
        title="Located in Berlin"
        Icon={LuMapPinHouse}
        className="relative"
      />
    </GridItem>
  );
}
