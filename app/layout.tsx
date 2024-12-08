import { B612 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { METADATA } from "./lib/constants";
import "./globals.css";

export const metadata = {
  ...METADATA,
};

const b612 = B612({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={`bg-[#0a0a0a] text-[#F2F2F2] ${b612.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
