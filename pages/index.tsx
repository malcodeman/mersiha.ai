import Head from "next/head";
import styled from "styled-components";

import { BREAKPOINTS, CONTACT_EMAIL } from "../lib/constants";

const Content = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("main.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 1rem;
`;

const Card = styled.div`
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: rgba(40, 39, 38, 0.8);
  border-radius: 10px;
  padding: 1rem;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin: -60px 0 20px;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 120px;
    height: 120px;
  }
`;

const Name = styled.span`
  font-size: 1rem;
  color: #d6cab0;
  margin-bottom: 0.5rem;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    font-size: 2rem;
  }
`;

const Location = styled.span`
  font-size: 0.6rem;
  color: #d6cab0;
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    font-size: 0.8rem;
  }
`;

const CtaButton = styled.button`
  border: 0;
  outline: 0;
  border-radius: 16px;
  font-size: 0.6rem;
  text-transform: uppercase;
  background-color: #d6cab0;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  color: #282726;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    font-size: 0.8rem;
  }
`;

function Home() {
  return (
    <>
      <Head>
        <title>Mersiha Ćeranić</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        <Card>
          <ProfileImage src="profile.jpg" alt="" />
          <Name>Mersiha Ćeranić</Name>
          <Location>Sarajevo</Location>
          <a href={`mailto:${CONTACT_EMAIL}`}>
            <CtaButton>Get in touch</CtaButton>
          </a>
        </Card>
      </Content>
    </>
  );
}

export default Home;
