import { LuMapPinHouse } from "react-icons/lu";
import { Heading } from "@/ui/heading";
import { Text } from "@/ui/text";
import { GridItem } from "./grid-item";

export function LocationCard() {
  return (
    <GridItem className="relative bg-[#0a0a0a] bg-[url('/berlin-sm.webp')] bg-cover bg-center bg-blend-difference sm:bg-[url('/berlin-lg.webp')]">
      <Text className="absolute right-5 top-5 text-sm font-semibold">/ 04</Text>
      <div className="flex items-center gap-2">
        <LuMapPinHouse size={24} />
        <Heading>Located in Berlin 🐻</Heading>
      </div>
    </GridItem>
  );
}
