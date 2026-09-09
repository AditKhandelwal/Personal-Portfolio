import type { Metadata } from "next";
import { display, sans, mono } from "./fonts";
import { profile } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aditk.com"),
  title: `${profile.name} — ${profile.role}`,
  description:
    "Adit Khandelwal builds AI agents and computer-vision systems and takes them the whole way to the people who use them.",
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description:
      "AI agents, computer vision, and the full stack around them.",
    url: "https://aditk.com",
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description:
      "AI agents, computer vision, and the full stack around them.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="min-h-dvh bg-bg font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
