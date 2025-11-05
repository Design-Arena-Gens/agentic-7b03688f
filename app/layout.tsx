import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rakib – Design Journey",
  description:
    "Rakib's story from curious design student to confident product designer.",
  openGraph: {
    title: "Rakib – Design Journey",
    description:
      "Rakib's story from curious design student to confident product designer.",
    url: "https://agentic-7b03688f.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakib – Design Journey",
    description:
      "Rakib's story from curious design student to confident product designer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
