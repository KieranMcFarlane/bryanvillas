import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bryan's Villas | Luxury Villa Specialists",
  description: "Learn about Bryan's Villas - luxury villa specialists since 1996. Meet our team and discover our commitment to exceptional villa experiences worldwide.",
  keywords: "about Bryan's Villas, luxury villa specialists, villa rental company, travel experts, villa selection team",
  openGraph: {
    title: "About Bryan's Villas - Luxury Villa Specialists Since 1996",
    description: "Founded in 1996, Bryan's Villas has grown into one of the world's leading luxury villa specialists, curating over 8,000 exceptional properties.",
    type: 'website',
    siteName: 'Piton View Estates',
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Bryan's Villas | Luxury Villa Experts",
    description: "Learn about our passionate team dedicated to creating exceptional villa experiences worldwide.",
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
} 