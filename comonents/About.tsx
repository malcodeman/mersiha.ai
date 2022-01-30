import {
  Center,
  Box,
  Container,
  Text,
  Heading,
  Grid,
  Image,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import { map } from "ramda";
import { siPostgresql, siTableau, siPython } from "simple-icons/icons";

import SimpleIcon from "./misc/SimpleIcon";

const SKILLS = [
  {
    label: "SQL",
    icon: <SimpleIcon color="#0c44fd" size={32} path={siPostgresql.path} />,
  },
  {
    label: "Tableau",
    icon: <SimpleIcon color="#0c44fd" size={32} path={siTableau.path} />,
  },
  {
    label: "Python",
    icon: <SimpleIcon color="#0c44fd" size={32} path={siPython.path} />,
  },
];

function About() {
  return (
    <Center id="about" as="section" paddingY={"8"}>
      <Container maxW={"container.md"}>
        <Heading mb={"6"}>About me</Heading>
        <Grid gridTemplateColumns={["1fr", "2fr 1fr"]} gridGap={"6"}>
          <Box>
            <Text mb={"4"}>
              Data Science developer with strong analytical, problem solving and
              communication skills. Highly motivated and hardworking individual,
              with an ability to meet deadlines and produce work to a high
              standard.
            </Text>
            <Text mb={"4"}>
              Eager to learn, meet new people and keep pushing the limits for
              self-improvement.
            </Text>
            <Text mb={"4"}>
              Enjoys using technology to find solutions for challenging problems
              in everyday life.
            </Text>
            <Text mb={"4"}>
              Here are a few technologies I&apos;ve been working with recently:
            </Text>
            <Wrap spacing={4}>
              {map(
                (item) => (
                  <WrapItem key={item.label} alignItems={"center"}>
                    {item.icon}
                    <Text ml={"2"}>{item.label}</Text>
                  </WrapItem>
                ),
                SKILLS
              )}
            </Wrap>
          </Box>
          <Image borderRadius="md" src="profile.jpg" alt="" />
        </Grid>
      </Container>
    </Center>
  );
}

export default About;
