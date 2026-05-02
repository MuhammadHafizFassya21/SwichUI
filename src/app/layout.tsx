import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SwichUI | Jasa Desain UI/UX, Logo & Poster UMKM",
  description: "SwichUI membantu UMKM, brand, dan bisnis digital mendapatkan desain UI/UX, logo, poster, dan branding yang profesional, modern, dan siap pakai.",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
