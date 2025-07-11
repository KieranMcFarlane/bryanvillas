import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smuggler's Nest Villa | Luxury Beachfront Villa | Piton View Estates",
  description: "Experience luxury at Smuggler's Nest, a spectacular beachfront villa with direct beach access, infinity pool, and magnificent Piton views in St. Lucia.",
  keywords: "Smugglers Nest villa, luxury beachfront villa St Lucia, Piton views villa, private beach villa, infinity pool villa",
  openGraph: {
    title: "Smuggler's Nest - Luxury Beachfront Villa in St. Lucia",
    description: "A private sanctuary with direct beach access and magnificent Piton views. Features 4 bedrooms, infinity pool, full staff, and private cook.",
    type: 'website',
    siteName: 'Piton View Estates',
    images: [
      {
        url: '/images/property-3/1-stay-header-1600x698-1.jpg',
        width: 1600,
        height: 698,
        alt: "Smuggler's Nest Villa - Beachfront Luxury"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Smuggler's Nest Villa | Luxury Beachfront St. Lucia",
    description: "Private sanctuary with beach access, Piton views, infinity pool, and full staff including private cook.",
    images: ['/images/property-3/1-stay-header-1600x698-1.jpg']
  }
};

export default function VillaLayout({ children }: { children: React.ReactNode }) {
  return children;
} 