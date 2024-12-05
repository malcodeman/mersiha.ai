import { SiInstagram, SiLinkedin } from "react-icons/si";
import { INSTAGRAM_URL, LINKEDIN_URL } from "./lib/constants";
import { SocialMediaLinkCard } from "./components/social-media-link-card";
import { HiCard } from "./components/hi-card";
import { ContactMeCard } from "./components/contact-me-card";

export default function RootPage() {
  return (
    <div>
      <div className="container mx-auto mt-5 grid gap-5 px-5 sm:mt-16 sm:grid-cols-[2fr_1fr] md:grid-cols-[2fr_1fr_1fr]">
        <HiCard />
        <SocialMediaLinkCard
          url={INSTAGRAM_URL}
          counter={2}
          icon={SiInstagram}
          iconColor="#FF0069"
        />
        <SocialMediaLinkCard
          url={LINKEDIN_URL}
          counter={3}
          icon={SiLinkedin}
          iconColor="#0A66C2"
        />
        <ContactMeCard />
      </div>
    </div>
  );
}
