import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences in St. Lucia | Adventure & Culture | Piton View Estates",
  description: "Discover unforgettable St. Lucia experiences from volcanic adventures to pristine coral reefs. Explore authentic Caribbean culture, adventure tours, and island activities.",
  keywords: "St Lucia experiences, Caribbean adventures, volcano tours, Piton hiking, catamaran cruise, diving, cultural tours, cooking classes",
  openGraph: {
    title: "Unforgettable St. Lucia Experiences | Piton View Estates",
    description: "From volcanic adventures to pristine coral reefs, discover the magic of St. Lucia through carefully curated experiences.",
    type: 'website',
  },
};

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
  return children;
} 