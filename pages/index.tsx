import Head from "next/head";
import { Center, Box, Text, Link, Wrap, WrapItem } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { siLinkedin, siInstagram } from "simple-icons/icons";
import { Mail } from "react-feather";

import { PROFILE } from "../lib/constants";

import SimpleIcon from "../comonents/misc/SimpleIcon";

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mersiha-ceranic/",
    icon: <SimpleIcon size={16} path={siLinkedin.path} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mceranic1/",
    icon: <SimpleIcon size={16} path={siInstagram.path} />,
  },
];

function Home() {
  return (
    <>
      <Head>
        <title>{PROFILE.NAME}</title>
      </Head>
      <Center minHeight="100vh">
        <Box maxWidth="420px">
          <Center>
            <Image
              height="120px"
              width="120px"
              borderRadius="full"
              src="profile.jpg"
              alt=""
              mb="2"
            />
          </Center>
          <Box textAlign="center" mb="4">
            <Text mb="1">{PROFILE.NAME}</Text>
            <Text mb="1">{PROFILE.TAGLINE}</Text>
            <Text>{PROFILE.LOCATION}</Text>
          </Box>
          <Wrap>
            <WrapItem>
              <Link href={PROFILE.CTA_BUTTON_LINK}>
                <Button leftIcon={<Mail size={16} />}>Mail</Button>
              </Link>
            </WrapItem>
            {LINKS.map((item) => {
              return (
                <WrapItem key={item.href}>
                  <Link href={item.href} isExternal>
                    <Button leftIcon={item.icon}>{item.label}</Button>
                  </Link>
                </WrapItem>
              );
            })}
          </Wrap>
        </Box>
      </Center>
    </>
  );
}

export default Home;
