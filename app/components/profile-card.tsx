import { LuPresentation } from "react-icons/lu";
import { GridItem } from "./grid-item";
import { GridHeader } from "./grid-header";

export function ProfileCard() {
  return (
    <GridItem className="relative aspect-square sm:aspect-auto">
      <div className="absolute inset-0 rounded-[20px] bg-[url('/profile-sm.webp')] bg-cover bg-center brightness-50 sm:bg-[url('/profile-lg.webp')]" />
      <GridHeader
        index={8}
        title="Me at DSC Europe 24"
        Icon={LuPresentation}
        className="relative"
      />
    </GridItem>
  );
}
