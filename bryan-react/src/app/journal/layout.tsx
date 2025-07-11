import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Villa Journal - Stories from St. Lucia | Piton View Estates",
  description: "Discover the beauty, culture, and adventures of St. Lucia through our curated collection of travel stories, guides, and inspiration from the Caribbean's most exclusive destinations.",
};

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 