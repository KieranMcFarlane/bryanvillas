import type { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

// Article data for metadata
const articles = {
  '1': {
    title: "Hidden Gems of St. Lucia: Beyond the Pitons",
    excerpt: "Discover the secret beaches, local restaurants, and cultural treasures that only locals know about in this Caribbean paradise.",
  },
  '2': {
    title: "The Ultimate Guide to Piton Climbing",
    excerpt: "Everything you need to know about conquering Gros Piton, from preparation and gear to the breathtaking views at the summit.",
  }
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { id } = await params;
  const article = articles[id as keyof typeof articles];

  if (!article) {
    return {
      title: "Article Not Found | Piton View Estates",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${article.title} | Piton View Estates Journal`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
    },
  };
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
} 