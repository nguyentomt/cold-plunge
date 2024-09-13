import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
// import Provider from "./providers";
import { Analytics } from "@vercel/analytics/react";
import NavWrapper from "@/components/nav-wrapper";

const mulish = Mulish({ weight: "600", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meta Labs Cold Plunge",
  description: "Get the Meta Labs Experience. Cold Plunge, Sauna, Contrast Bath, Muscle Recovery in Huntington Beach, Orange County, California",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        {/* <Provider> */}
          <NavWrapper />
          {children}
          <Analytics />
        {/* </Provider> */}
        </body>
    </html>
  );
}
