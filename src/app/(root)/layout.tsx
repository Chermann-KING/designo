import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Designo",
  description: "Application web porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
