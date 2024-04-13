import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadeTop from "./components/HeadeTop";
import HeaderMain from "./components/HeaderMain";
import NavBar from "./components/NavBar";
import Footer from "./components/Fotter";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Purpose Black",
  description: "Generate a new Era",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <HeadeTop/>
        <HeaderMain/>
        <NavBar/>
        <main>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
