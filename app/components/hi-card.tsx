import { LuUser } from "react-icons/lu";
import { Heading } from "@/ui/heading";
import { Text } from "@/ui/text";
import { GridItem } from "./grid-item";

export function HiCard() {
  return (
    <GridItem>
      <div className="mb-4 flex items-center gap-2">
        <LuUser size={24} />
        <Heading>Hi, I&apos;m Mersiha 👋</Heading>
        <Text className="ml-auto text-sm font-semibold">/ 01</Text>
      </div>
      <Text>
        a data scientist 🥼 with a passion for turning raw data into impactful
        insights 📈 with AI and machine learning 🤖.
      </Text>
      <Text>I like running 🏃‍♂️, hiking ⛰️ and practising yoga 🧘‍♀️.</Text>
    </GridItem>
  );
}
