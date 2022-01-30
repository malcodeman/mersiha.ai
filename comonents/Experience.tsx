import {
  Center,
  Container,
  Text,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  List,
  ListItem,
  ListIcon,
  Link as ChakraLink,
  Divider,
} from "@chakra-ui/react";
import { map, reverse } from "ramda";
import { ChevronRight } from "react-feather";
import { useMediaQuery } from "@react-hookz/web";

const EXPERIENCE_TABS = reverse([
  "EESTEC",
  "Cosylab",
  "BCWT",
  "University of Dayton",
  "IEEE Innovation",
  "Mistral",
]);
const EXPERIENCE_PANELS = reverse([
  {
    company: "EESTEC",
    title: "Public Relations Team Coordinator",
    website: "https://www.eestec-sa.ba",
    startDate: "Oct 2016",
    endDate: "Dec 2016",
    description: [
      "Worked well independently and on a team to solve problems.",
      "Served as a friendly, hardworking, and punctual employee.",
      "Organized and prioritized work to complete assignments in a timely, efficient manner.",
    ],
  },
  {
    company: "Cosylab",
    title: "Participant",
    website: "https://www.cosylab.com",
    startDate: "Oct 2016",
    endDate: "Dec 2016",
    description: [
      "Worked well independently and on a team to solve problems.",
      "Served as a friendly, hardworking, and punctual employee.",
      "Organized and prioritized work to complete assignments in a timely, efficient manner.",
    ],
  },
  {
    company: "BCWT",
    title: "Participant",
    website: "https://bcwt.bg",
    startDate: "Oct 2016",
    endDate: "Dec 2016",
    description: [
      "Worked well independently and on a team to solve problems.",
      "Served as a friendly, hardworking, and punctual employee.",
      "Organized and prioritized work to complete assignments in a timely, efficient manner.",
    ],
  },
  {
    company: "University of Dayton",
    title: "Intern",
    website: "https://udayton.edu/udri",
    startDate: "Oct 2016",
    endDate: "Dec 2016",
    description: [
      "Worked well independently and on a team to solve problems.",
      "Served as a friendly, hardworking, and punctual employee.",
      "Organized and prioritized work to complete assignments in a timely, efficient manner.",
    ],
  },
  {
    company: "IEEE Innovation Nation",
    title: "Scholarship recipient",
    website: "https://entrepreneurship.ieee.org/ieee-innovation-nation",
    startDate: "Oct 2016",
    endDate: "Dec 2016",
    description: [
      "Worked well independently and on a team to solve problems.",
      "Served as a friendly, hardworking, and punctual employee.",
      "Organized and prioritized work to complete assignments in a timely, efficient manner.",
    ],
  },
  {
    company: "Mistral",
    title: "Data Science Developer",
    website: "https://www.mistral.ba",
    startDate: "2020",
    endDate: "Present",
    description: [
      "Worked well independently and on a team to solve problems.",
      "Served as a friendly, hardworking, and punctual employee.",
      "Organized and prioritized work to complete assignments in a timely, efficient manner.",
    ],
  },
]);

function Experience() {
  const isLargerThan30Em = useMediaQuery("only screen and (min-width:30em)");
  return (
    <Center id="experience" as="section" paddingY={16}>
      <Container maxW={"container.md"}>
        <Heading mb={6}>Experience</Heading>
        <Divider marginY={6} />
        <Tabs orientation={isLargerThan30Em ? "vertical" : "horizontal"}>
          <TabList overflowY={["hidden", "initial"]}>
            {map(
              (item) => (
                <Tab key={item}>{item}</Tab>
              ),
              EXPERIENCE_TABS
            )}
          </TabList>
          <TabPanels>
            {map(
              (item) => (
                <TabPanel key={item.company}>
                  <Text mb={4}>
                    {item.title} @{" "}
                    <ChakraLink href={item.website} isExternal>
                      {item.company}
                    </ChakraLink>
                  </Text>
                  <Text mb={6}>
                    {item.startDate} - {item.endDate}
                  </Text>
                  <List spacing={4}>
                    {map(
                      (desc) => (
                        <ListItem key={desc}>
                          <ListIcon as={ChevronRight} color="#0c44fd" />
                          {desc}
                        </ListItem>
                      ),
                      item.description
                    )}
                  </List>
                </TabPanel>
              ),
              EXPERIENCE_PANELS
            )}
          </TabPanels>
        </Tabs>
      </Container>
    </Center>
  );
}

export default Experience;
