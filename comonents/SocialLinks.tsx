import { Wrap, WrapItem, Link as ChakraLink } from "@chakra-ui/react";
import { map } from "ramda";
import { siLinkedin, siInstagram } from "simple-icons/icons";
import { motion } from "framer-motion";

import SimpleIcon from "./misc/SimpleIcon";

const LINKS = [
  {
    value: "https://www.linkedin.com/in/mersiha-ceranic",
    icon: <SimpleIcon size={24} path={siLinkedin.path} />,
  },
  {
    value: "https://www.instagram.com/mceranic1",
    icon: <SimpleIcon size={24} path={siInstagram.path} />,
  },
];

function SocialLinks() {
  return (
    <Wrap
      display={["none", "none", "none", "flex"]}
      direction={"column"}
      position={"fixed"}
      left={"32px"}
      bottom={"32px"}
      spacing={4}
    >
      {map(
        (item) => (
          <WrapItem
            as={motion.div}
            key={item.value}
            whileHover={{ y: 2 }}
            _hover={{ color: "#0c44fd" }}
          >
            <ChakraLink href={item.value} isExternal>
              {item.icon}
            </ChakraLink>
          </WrapItem>
        ),
        LINKS
      )}
    </Wrap>
  );
}

export default SocialLinks;
