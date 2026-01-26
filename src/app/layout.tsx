import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/sections";
import SectionWrapper from "@/components/SectionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoftahe Yoseph | Full Stack & Security",
  description:
    "Portfolio for Yoftahe Yoseph, a full stack developer and cybersecurity enthusiast building modern, secure web experiences.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Yoftahe Yoseph | Full Stack & Security",
    description:
      "Portfolio showcasing secure, scalable web applications and security work.",
    url: "https://example.com",
    siteName: "Yoftahe Yoseph Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yoftahe Yoseph Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoftahe Yoseph | Full Stack & Security",
    description:
      "Secure and scalable web applications, modern stack, and cybersecurity.",
    images: ["/og-image.png"],
    creator: "@YosephYoft34823",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>
          <SectionWrapper className="pt-8">{children}</SectionWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
