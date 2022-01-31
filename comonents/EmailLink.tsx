import { Box, Link as ChakraLink } from "@chakra-ui/react";
import { motion } from "framer-motion";

import constants from "../lib/constants";

function EmailLink() {
  return (
    <Box
      display={["none", "none", "none", "block"]}
      position={"fixed"}
      right={"32px"}
      bottom={"32px"}
    >
      <ChakraLink
        as={motion.a}
        whileHover={{ y: 2 }}
        href={constants.PROFILE.LINK.value}
        _hover={{ color: "#0c44fd" }}
        style={{ writingMode: "vertical-rl" }}
      >
        {constants.PROFILE.LINK.label}
      </ChakraLink>
    </Box>
  );
}

export default EmailLink;
