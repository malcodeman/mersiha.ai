import {
  Wrap,
  WrapItem,
  Link as ChakraLink,
  WrapProps,
} from "@chakra-ui/react";
import { map } from "ramda";
import { siLinkedin, siInstagram } from "simple-icons/icons";
import { motion } from "framer-motion";

import SimpleIcon from "./misc/SimpleIcon";

const LINKS = [
  {
    value: "https://www.linkedin.com/in/mersiha-karamustafic",
    icon: <SimpleIcon size={24} path={siLinkedin.path} />,
  },
  {
    value: "https://www.instagram.com/mceranic1",
    icon: <SimpleIcon size={24} path={siInstagram.path} />,
  },
];

function SocialLinks(props: WrapProps) {
  return (
    <Wrap spacing={4} {...props}>
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
