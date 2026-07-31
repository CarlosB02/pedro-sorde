import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pedrom Media | Fotógrafo Profissional",
  description: "Fotografia de alta qualidade para todos os seus momentos. ",
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
