import { Metadata } from "next";
import { equals } from "ramda";

export const IS_PROD = equals(process.env.NEXT_PUBLIC_VERCEL_ENV, "production");

const TITLE = "Mersiha Karamustafić | Data scientist";
const DESCRIPTION = "Data scientist turning data into impact with AI.";

export const METADATA: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.mersiha.ai",
    siteName: "mersiha",
    images: [
      {
        url: "https://www.mersiha.ai/opengraph.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export const INSTAGRAM_URL = "https://www.instagram.com/mceranic1";
export const LINKEDIN_URL = "https://www.linkedin.com/in/mersiha-karamustafic";
export const EMAIL = "karamustafic.mersiha@gmail.com";
export const CONFERENCE_IMAGES = [
  {
    src: "/conferences/conference-1-lg.webp",
  },
  {
    src: "/conferences/conference-2-lg.webp",
  },
  {
    src: "/conferences/conference-3-lg.webp",
  },
  {
    src: "/conferences/conference-4-lg.webp",
  },
];
