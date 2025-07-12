import { LuMail, LuArrowUpRight } from "react-icons/lu";
import { Text } from "@/ui/text";
import { Button } from "@/ui/button";
import { EMAIL } from "@/lib/constants";
import { GridItem } from "./grid-item";
import { GridHeader } from "./grid-header";

export function ContactMeCard() {
  return (
    <GridItem className="relative flex flex-col sm:col-span-2">
      <GridHeader index={6} title="Get in touch 🤙" Icon={LuMail} />
      <Text className="mb-4">
        Feel free to reach out for collaboration, or just a friendly hello.
      </Text>
      <a href={`mailto:${EMAIL}?subject=Hello`} className="mt-auto">
        <Button className="w-full sm:w-auto">
          Contact me <LuArrowUpRight />
        </Button>
      </a>
    </GridItem>
  );
}
