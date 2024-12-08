import { SiInstagram, SiLinkedin } from "react-icons/si";
import { INSTAGRAM_URL, LINKEDIN_URL } from "./lib/constants";
import { SocialMediaLinkCard } from "./components/social-media-link-card";
import { HiCard } from "./components/hi-card";
import { ContactMeCard } from "./components/contact-me-card";
import { LocationCard } from "./components/location-card";
import { SkillsCard } from "./components/skills-card";
import { ProfileCard } from "./components/profile-card";

export default function RootPage() {
  return (
    <div>
      <div className="container mx-auto my-5 grid gap-5 px-5 sm:my-16 sm:grid-cols-[2fr_1fr] md:grid-cols-[2fr_1fr_1fr]">
        <HiCard />
        <SocialMediaLinkCard
          url={INSTAGRAM_URL}
          index={2}
          icon={SiInstagram}
          iconColor="#FF0069"
        />
        <SocialMediaLinkCard
          url={LINKEDIN_URL}
          index={3}
          icon={SiLinkedin}
          iconColor="#0A66C2"
        />
        <LocationCard />
        <ContactMeCard />
        <SkillsCard />
        <ProfileCard />
      </div>
    </div>
  );
}
