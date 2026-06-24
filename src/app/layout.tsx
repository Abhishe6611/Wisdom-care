import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wisdom Care Group of Institutions | Best PU College in Madapatna",
  description: "Enriching lives through Value Education. Wisdom Care e-Techno School & PU College offers world-class facilities and education in Madapatna, Karnataka.",
  keywords: ["Wisdom Care", "PU College", "Madapatna", "e-Techno School", "Education", "Karnataka"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
