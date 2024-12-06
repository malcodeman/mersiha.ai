import { LuPresentation } from "react-icons/lu";
import { Heading } from "@/ui/heading";
import { GridItem } from "./grid-item";
import { CardIndex } from "./card-index";

export function ProfileCard() {
  return (
    <GridItem className="relative aspect-square sm:aspect-auto">
      <div className="absolute inset-0 rounded-[20px] bg-[url('/profile-sm.webp')] bg-cover bg-center brightness-50 sm:bg-[url('/profile-lg.webp')]" />
      <CardIndex value={7} />
      <div className="relative flex flex-col gap-2 md:flex-row md:items-center">
        <LuPresentation size={24} />
        <Heading>Me at DSC Europe 24</Heading>
      </div>
    </GridItem>
  );
}
