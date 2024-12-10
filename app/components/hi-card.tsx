import { LuUser } from "react-icons/lu";
import { Text } from "@/ui/text";
import { Highlight } from "@/ui/highlight";
import { GridItem } from "./grid-item";
import { GridHeader } from "./grid-header";

export function HiCard() {
  return (
    <GridItem className="relative">
      <GridHeader
        index={1}
        title="Hi, I'm Mersiha Karamustafić 👋"
        Icon={LuUser}
      />
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
