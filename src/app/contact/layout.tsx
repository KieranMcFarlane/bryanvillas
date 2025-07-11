import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Bryan's Villas | Get in Touch",
  description: "Contact Bryan's Villas for personalized villa booking assistance. Our expert team is here to help you plan your perfect luxury villa getaway.",
  keywords: "contact Bryan's Villas, villa booking assistance, luxury villa enquiry, travel consultation, villa rental help",
  openGraph: {
    title: "Contact Bryan's Villas - Expert Villa Booking Assistance",
    description: "Get in touch with our villa experts for personalized assistance in finding and booking your perfect luxury villa escape.",
    type: 'website',
    siteName: 'Piton View Estates',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Bryan's Villas - Villa Booking Experts",
    description: "Contact our team for expert assistance with luxury villa bookings and travel planning.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 