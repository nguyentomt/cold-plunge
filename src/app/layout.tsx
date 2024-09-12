import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
// import Provider from "./providers";
import { Analytics } from "@vercel/analytics/react";
import NavWrapper from "@/components/nav-wrapper";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meta Labs Cold Plunge Sauna",
  description: "Get the Meta Labs Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* <Provider> */}
          <NavWrapper />
          {children}
          <Analytics />
        {/* </Provider> */}
        </body>
    </html>
  );
}
