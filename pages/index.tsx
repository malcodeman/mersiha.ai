import Head from "next/head";
import styled from "styled-components";

import { CONTACT_EMAIL } from "../lib/constants";

import Linkedin from "../components/Linkedin";
import Instagram from "../components/Instagram";
import ArrowRight from "../components/ArrowRight";

const Content = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 1rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("main.jpg");
`;

const Card = styled.div`
  max-width: 420px;
  width: 100%;
  background-color: ${(props) => `${props.theme.background}f2`};
  border-radius: 10px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: -60px 0 20px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.primary};
`;

const Name = styled.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Tagline = styled.span`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: ${(props) => `${props.theme.primary}f2`};
`;

const Location = styled.span`
  font-size: 0.8rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
`;

const CtaButton = styled.button`
  border: 0;
  outline: 0;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};
  padding: 0.5rem 1rem;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid ${(props) => `${props.theme.primary}0c`};
  color: ${(props) => props.theme.primary};
`;

const IconWrapper = styled.div`
  margin-right: 0.5rem;
`;

const ArrowRightWrapper = styled.div`
  margin-left: auto;
`;

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mersiha-ceranic/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mceranic1/",
    icon: Instagram,
  },
];

function Home() {
  return (
    <>
      <Head>
        <title>Mersiha Ćeranić</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        <Card>
          <Header>
            <ProfileImage src="profile.jpg" alt="" />
          </Header>
          <Body>
            <Name>Mersiha Ćeranić</Name>
            <Tagline>Data Science Developer</Tagline>
            <Location>Sarajevo</Location>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <CtaButton>Get in touch</CtaButton>
            </a>
          </Body>
          <Links>
            {LINKS.map((item) => {
              return (
                <Link key={item.href} href={item.href} target="_blank">
                  <IconWrapper>
                    <item.icon />
                  </IconWrapper>
                  {item.label}
                  <ArrowRightWrapper>
                    <ArrowRight size={16} />
                  </ArrowRightWrapper>
                </Link>
              );
            })}
          </Links>
        </Card>
      </Content>
    </>
  );
}

export default Home;
