import type {Metadata} from "next";
import {Montserrat_Alternates} from "next/font/google";
import {Analytics} from "@vercel/analytics/react";
import ConvexClientProvider from "@/app/ConvexClientProvider";
import {ThemeProvider} from "@/contexts/ThemeProvider";

import Progress from "@/components/Progress";
import {Toaster} from "@/components/ui/toaster";

import "./globals.css";

const inter = Montserrat_Alternates({weight: "500", subsets: ["cyrillic"]});

export const metadata: Metadata = {
  metadataBase: new URL("#"),
  title: {
    default: "WanderWise - Your Smart Travel Planner",
    template: "%s | WanderWise- Your Smart Travel Planner",
  },
  description:
    "WanderWise provides intelligent travel suggestions, personalized itineraries, and seamless trip planning. Plan your perfect trip with ease.",
  keywords:
    "travel planner, AI travel planner, smart travel, travel suggestions, destination insights, personalized itineraries, trip planning, travel tips, vacation planning",
  openGraph: {
    title: "WanderWise - Your Smart Travel Planner",
    description:
      "WanderWise provides intelligent travel suggestions, personalized itineraries, and seamless trip planning. Plan your perfect trip with ease.",
    url: "#",
    type: "website",
    siteName: "WanderWise",
    images: [
      {
        url: "opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "WanderWise",
      },
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ConvexClientProvider>{children}</ConvexClientProvider>
          <Progress />
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
