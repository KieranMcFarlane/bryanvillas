import type { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

// Experience data for metadata
const experiences = {
  'gros-piton-sunrise-hike': {
    title: "Gros Piton Sunrise Hike",
    excerpt: "Experience the magical sunrise from the summit of Gros Piton, offering breathtaking 360-degree views of the island.",
    price: "From $95 per person",
    difficulty: "Challenging"
  },
  'volcano-waterfall-adventure': {
    title: "Volcano & Waterfall Adventure", 
    excerpt: "Explore the world's only drive-in volcano and discover the stunning Diamond Falls in a full day of natural wonders.",
    price: "From $125 per person",
    difficulty: "Moderate"
  },
  'sunset-catamaran-cruise': {
    title: "Sunset Catamaran Cruise",
    excerpt: "Sail along St. Lucia's stunning coastline with snorkeling, swimming, and unforgettable sunset views.",
    price: "From $85 per person", 
    difficulty: "Easy"
  },
  'caribbean-cooking-class': {
    title: "Caribbean Cooking Class",
    excerpt: "Learn to prepare authentic St. Lucian dishes using local ingredients and traditional techniques.",
    price: "From $75 per person",
    difficulty: "Easy"
  },
  'rainforest-canopy-adventure': {
    title: "Rainforest Canopy Adventure",
    excerpt: "Zip-line through the lush rainforest canopy and experience St. Lucia's biodiversity from above.",
    price: "From $110 per person",
    difficulty: "Moderate"
  },
  'coral-reef-diving': {
    title: "Coral Reef Diving",
    excerpt: "Explore vibrant coral reefs and diverse marine life in St. Lucia's pristine underwater world.",
    price: "From $95 per person",
    difficulty: "Intermediate"
  }
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { id } = await params;
  const experience = experiences[id as keyof typeof experiences];

  if (!experience) {
    return {
      title: "Experience Not Found | Piton View Estates",
      description: "The requested experience could not be found."
    };
  }

  return {
    title: `${experience.title} | St. Lucia Experiences | Piton View Estates`,
    description: `${experience.excerpt} ${experience.price}. Difficulty: ${experience.difficulty}. Book your St. Lucia adventure today.`,
    keywords: `St Lucia ${experience.title.toLowerCase()}, Caribbean adventure, ${experience.difficulty.toLowerCase()} difficulty, villa experiences, piton view estates`,
    openGraph: {
      title: `${experience.title} - Unforgettable St. Lucia Experience`,
      description: experience.excerpt,
      type: 'article',
      siteName: 'Piton View Estates',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${experience.title} | St. Lucia Adventures`,
      description: experience.excerpt,
    }
  };
}

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
} 