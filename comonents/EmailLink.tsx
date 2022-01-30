import { Box, Link as ChakraLink } from "@chakra-ui/react";
import { motion } from "framer-motion";

const LINK = {
  label: "mersiha996@gmail.com",
  value: "mailto:mersiha996@gmail.com",
};

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
        href={LINK.value}
        _hover={{ color: "#0c44fd" }}
        style={{ writingMode: "vertical-rl" }}
      >
        {LINK.label}
      </ChakraLink>
    </Box>
  );
}

export default EmailLink;
