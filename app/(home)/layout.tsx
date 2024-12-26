import type {Metadata} from "next";
import Header from "@/components/home/Header";
export const metadata: Metadata = {
  metadataBase: new URL("#"),
  title: {
    default: "WanderWise - Your Smart Travel Planner",
    template: "%s | Travel Planner AI - Your Smart Travel Planner",
  },
  description:
    "WanderWise provides intelligent travel suggestions, personalized itineraries, and seamless trip planning. Plan your perfect trip with ease.",
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
        alt: "Travel Planner AI",
      },
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100svh-4rem)] flex-col items-center bg-blue-50/40">
        {children}
      </main>
    </>
  );
}
