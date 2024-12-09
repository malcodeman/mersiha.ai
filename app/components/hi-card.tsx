import { LuUser } from "react-icons/lu";
import { Heading } from "@/ui/heading";
import { Text } from "@/ui/text";
import { Highlight } from "@/ui/highlight";
import { GridItem } from "./grid-item";
import { CardIndex } from "./card-index";

export function HiCard() {
  return (
    <GridItem className="relative">
      <CardIndex value={1} />
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center">
        <LuUser size={24} className="min-w-6" />
        <Heading>Hi, I&apos;m Mersiha Karamustafić 👋</Heading>
      </div>
      <Text>
        <Highlight
          query={["data scientist", "AI"]}
          text="a data scientist with a passion for turning raw data into impactful
        insights with AI and machine learning 🤖."
        />
      </Text>
      <Text>I like running 🏃‍♂️, hiking ⛰️ and practising yoga 🧘‍♀️.</Text>
    </GridItem>
  );
}
