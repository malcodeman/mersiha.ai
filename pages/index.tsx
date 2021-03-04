import Head from "next/head";
import styled from "styled-components";

import { PROFILE } from "../lib/constants";

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
  padding: 1rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("main.jpg");
`;

const Card = styled.div`
  max-width: 420px;
  width: 100%;
  background-color: ${(props) => `${props.theme.background}f2`};
  border-radius: 10px;
  transition: background-color 0.5s ease-in-out;
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
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArrowRightWrapper = styled.div`
  margin-left: auto;
  transition-duration: 0.5s;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid ${(props) => `${props.theme.primary}0c`};
  color: ${(props) => props.theme.primary};
  &:hover ${ArrowRightWrapper} {
    transform: translateX(0.5rem);
  }
`;

const IconWrapper = styled.div`
  margin-right: 0.5rem;
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
        <title>{PROFILE.NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        <Card>
          <Header>
            <ProfileImage src="profile.jpg" alt="" />
          </Header>
          <Body>
            <Name>{PROFILE.NAME}</Name>
            <Tagline>{PROFILE.TAGLINE}</Tagline>
            <Location>{PROFILE.LOCATION}</Location>
            <a href={PROFILE.CTA_BUTTON_LINK}>
              <CtaButton>{PROFILE.CTA_BUTTON_TITLE}</CtaButton>
            </a>
          </Body>
          <Links>
            {LINKS.map((item) => {
              return (
                <Link key={item.href} href={item.href} target="_blank">
                  <IconWrapper>
                    <item.icon size={24} />
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
