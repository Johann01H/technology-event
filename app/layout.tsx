import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    icons: {
      icon: "/icon.webp",

    },
    title: "Conectando Ciencia | Tecnología | Eventos Tech",
    description: "Plataforma dedicada a eventos de tecnología, innovación y ciencia. Descubre conferencias, talleres y encuentros donde se conecta el conocimiento con el futuro digital.",
    keywords: [
      "eventos de tegnología",
      "inovacción",
      "conferencias tech",
      "ciencia y tegnología",
      "eventos tecnológicos",
      "eventos tecnológicos",
    ],
    creator: "Datasys",
    authors: [{"name": "JoaDev",url: "johanndev.online"}],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("font-sans scroll-smooth", inter.variable) }>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
