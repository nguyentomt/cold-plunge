import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
// import Provider from "./providers";
import { Analytics } from "@vercel/analytics/react";
// import NavWrapper from "@/components/nav-wrapper";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { WalletProvider } from "@/lib/WalletContext";
// import BubblesContainer from "@/components/bubbleContainer";

const mulish = Mulish({ weight: ["600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meta Labs Cold Plunge",
  description:
    "Get the Meta Labs Experience. Cold Plunge, Sauna, Contrast Bath, Muscle Recovery in Huntington Beach, Orange County, California",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <AppRouterCacheProvider>
          <WalletProvider>
          {/* <BubblesContainer /> */}
          {/* <Provider> */}
          {/* <NavWrapper /> */}
          <Nav />
          {children}
          <Footer />
          <Analytics />
          {/* </Provider> */}
          </WalletProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
