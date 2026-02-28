import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

// Setup Font agar mirip desain
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700"], // Bold untuk nama
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kevina Maydiva - Portfolio",
  description: "Portfolio of Kevina Maydiva Heriansaputri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${poppins.variable} font-sans bg-brand-bg`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}