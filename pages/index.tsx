import Head from "next/head";
import { Center, Container, Heading, Text } from "@chakra-ui/react";

import constants from "../lib/constants";

import About from "../comonents/About";
import Experience from "../comonents/Experience";
import Talks from "../comonents/Talks";
import Contact from "../comonents/Contact";
import SocialLinks from "../comonents/SocialLinks";
import EmailLink from "../comonents/EmailLink";

function Home() {
  return (
    <>
      <Head>
        <title>{constants.PROFILE.NAME}</title>
      </Head>
      <Center as="section" minHeight={"calc(100vh - 8em)"}>
        <Container maxW={"container.md"}>
          <Text mb={"4"}>Hi, my name is</Text>
          <Heading mb={"4"}>Mersiha Karamustafić</Heading>
          <Text mb={"4"}>
            Data Science developer with strong analytical, problem solving and
            communication skills. Highly motivated and hardworking individual,
            with an ability to meet deadlines and produce work to a high
            standard. Eager to learn, meet new people and keep pushing the
            limits for self-improvement. Enjoys using technology to find
            solutions for challenging problems in everyday life.
          </Text>
        </Container>
      </Center>
      <About />
      <Experience />
      <Talks />
      <Contact />
      <SocialLinks
        display={["none", "none", "none", "flex"]}
        direction={"column"}
        position={"fixed"}
        left={"32px"}
        bottom={"32px"}
      />
      <EmailLink />
    </>
  );
}

export default Home;
