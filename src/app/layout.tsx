import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Michelle Limanjae - Singer & Songwriter",
  description: "Jakarta-based singer-songwriter and music producer combining 90s to early 2000s alternative sound with soul, rock, and pop.",
  keywords: "Michelle Limanjae, singer, songwriter, Jakarta, Indonesia, music, alternative, soul, rock, pop",
  openGraph: {
    title: "Michelle Limanjae - Singer & Songwriter",
    description: "Jakarta-based singer-songwriter and music producer",
    images: ["/assets/michelle-1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
