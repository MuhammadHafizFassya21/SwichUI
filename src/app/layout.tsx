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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const originalError = console.error;
                console.error = function(...args) {
                  if (args[0] && typeof args[0] === 'string' && args[0].includes('Cannot redefine property: ethereum')) return;
                  originalError.apply(console, args);
                };
                window.addEventListener('error', function(event) {
                  if (event.message && event.message.includes('Cannot redefine property: ethereum')) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                  }
                }, true);
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
