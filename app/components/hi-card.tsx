import { LuUser } from "react-icons/lu";
import { Heading } from "@/ui/heading";
import { Text } from "@/ui/text";
import { GridItem } from "./grid-item";

export function HiCard() {
  return (
    <GridItem className="relative">
      <Text className="absolute right-5 top-5 text-sm font-semibold">/ 01</Text>
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center">
        <LuUser size={24} />
        <Heading>Hi, I&apos;m Mersiha 👋</Heading>
      </div>
      <Text>
        a data scientist 🥼 with a passion for turning raw data into impactful
        insights 📈 with AI and machine learning 🤖.
      </Text>
      <Text>I like running 🏃‍♂️, hiking ⛰️ and practising yoga 🧘‍♀️.</Text>
    </GridItem>
  );
}
