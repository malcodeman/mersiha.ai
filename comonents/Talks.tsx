import {
  Center,
  Box,
  Container,
  Text,
  Heading,
  Grid,
  Divider,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { map } from "ramda";
import { siYoutube, siFacebook } from "simple-icons/icons";
import { format } from "date-fns";
import { motion } from "framer-motion";

import SimpleIcon from "./misc/SimpleIcon";

const TALKS = [
  {
    icon: <SimpleIcon color="#0c44fd" size={32} path={siYoutube.path} />,
    label: "Teamwork makes the dream work",
    url: "https://youtu.be/Hbz8B4Xu61k",
    title: "BEST Mostar",
    subtitle: ["Dragana Stipanović"],
    date: new Date("2021-03-25 00:00"),
  },
  {
    icon: <SimpleIcon color="#0c44fd" size={32} path={siYoutube.path} />,
    label: "Data for Business",
    url: "https://youtu.be/6uT9LVivfO0",
    title: "Digital Business Disruptors",
    subtitle: ["Amir Sabirović", "Maikel Groenewoud"],
    date: new Date("2020-05-30 00:00"),
  },
  {
    icon: <SimpleIcon color="#0c44fd" size={32} path={siFacebook.path} />,
    label: "Power BI",
    url: "https://fb.watch/aSGMB6jA9t",
    title: "IT Girls",
    subtitle: ["Arijana Drinić", "Amra Dautbegović"],
    date: new Date("2020-05-27 00:00"),
  },
];

function Talks() {
  const bg = useColorModeValue(
    "var(--chakra-colors-gray-100)",
    "var(--chakra-colors-whiteAlpha-200)"
  );
  return (
    <Center id="talks" as="section" paddingY={16}>
      <Container maxW={"container.md"}>
        <Heading mb={6}>Talks</Heading>
        <Divider marginY={6} />
        <Grid
          gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
          gridGap={6}
        >
          {map(
            (item) => (
              <ChakraLink key={item.url} href={item.url} isExternal>
                <Box
                  backgroundColor={bg}
                  borderRadius={"md"}
                  padding={3}
                  as={motion.div}
                  whileHover={{ y: 2 }}
                >
                  {item.icon}
                  <Text fontSize={"lg"} marginY={4}>
                    {item.label}
                  </Text>
                  <Text mb={4} opacity={0.8}>
                    {item.title} - with{" "}
                    {map((item) => `${item}, `, item.subtitle)}
                  </Text>
                  <Text fontSize={"sm"} textTransform={"uppercase"}>
                    {format(item.date, "MMMM dd, yyyy")}
                  </Text>
                </Box>
              </ChakraLink>
            ),
            TALKS
          )}
        </Grid>
      </Container>
    </Center>
  );
}

export default Talks;
