import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "./components/WhatsappButton";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SorteioBanner } from "./components/SorteioBanner";

export const metadata: Metadata = {
  title: "Marques Digital - Soluções tecnológicas",
  description:
    "Unimos desenvolvimento web de alta performance com gestão de tráfego estratégica para tirar sua empresa do amadorismo e escalar suas vendas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className={`antialiased`}>
        <header className="fixed top-0 w-full z-50">
          <SorteioBanner />
          <Navbar />
        </header>
        <main>
          {children}
        <WhatsAppButton />

        <Footer />
        </main>
      </body>
    </html>
  );
}
