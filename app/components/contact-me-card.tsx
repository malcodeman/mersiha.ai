import { LuMail, LuArrowUpRight } from "react-icons/lu";
import { Heading } from "@/ui/heading";
import { Text } from "@/ui/text";
import { Button } from "@/ui/button";
import { EMAIL } from "@/lib/constants";
import { GridItem } from "./grid-item";
import { CardIndex } from "./card-index";

export function ContactMeCard() {
  return (
    <GridItem className="relative sm:col-span-2">
      <CardIndex value={5} />
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center">
        <LuMail size={24} className="min-w-6" />
        <Heading>Get in touch 🤙</Heading>
      </div>
      <Text className="mb-4">
        Feel free to reach out for collaboration, or just a friendly hello.
      </Text>
      <a href={`mailto:${EMAIL}?subject=Hello`}>
        <Button className="w-full sm:w-auto">
          Contact me <LuArrowUpRight />
        </Button>
      </a>
    </GridItem>
  );
}
