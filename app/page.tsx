import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from "./lib/constants";
import { SocialMediaLinkCard } from "./components/social-media-link-card";
import { HiCard } from "./components/hi-card";
import { ContactMeCard } from "./components/contact-me-card";
import { LocationCard } from "./components/location-card";
import { SkillsCard } from "./components/skills-card";
import { ProfileCard } from "./components/profile-card";
import { ConferenceImagesCard } from "./components/conference-images-card";

export default function RootPage() {
  return (
    <div>
      <div className="container mx-auto my-5 grid gap-5 px-5 sm:my-16 sm:grid-cols-[2fr_1fr] md:grid-cols-[2fr_1fr_1fr]">
        <HiCard />
        <div className="flex gap-5 sm:flex-col md:col-span-2 md:flex-row">
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
          <SocialMediaLinkCard
            url={GITHUB_URL}
            index={4}
            icon={SiGithub}
            iconColor="#FFF"
          />
        </div>
        <LocationCard />
        <ContactMeCard />
        <SkillsCard />
        <ProfileCard />
        <ConferenceImagesCard />
      </div>
    </div>
  );
}
