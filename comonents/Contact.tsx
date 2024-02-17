import {
  Center,
  Container,
  Text,
  Heading,
  Divider,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import constants from "../lib/constants";

import SocialLinks from "./SocialLinks";

const REPO_LINK = "https://github.com/malcodeman/mersiha.ai";

function Contact() {
  return (
    <Center id="contact" as="section" paddingY={[8, 16, 32]}>
      <Container maxW={"container.md"}>
        <Center flexDirection={"column"}>
          <Heading>Contact</Heading>
          <Divider marginY={6} />
          <Text mb={4}>
            Whether you have a question or just want to say hi, I&apos;ll try my
            best to get back to you!
          </Text>
          <ChakraLink
            as={motion.a}
            whileHover={{ y: 2 }}
            href={constants.PROFILE.LINK.value}
            _hover={{ color: "#0c44fd" }}
            mb={32}
          >
            <Button>Say Hi</Button>
          </ChakraLink>
          <SocialLinks display={["flex", "flex", "flex", "none"]} mb={4} />
          <ChakraLink
            as={motion.a}
            whileHover={{ y: 2 }}
            href={REPO_LINK}
            _hover={{ color: "#0c44fd" }}
          >
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by malcodeman
          </ChakraLink>
        </Center>
      </Container>
    </Center>
  );
}

export default Contact;
