import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter,Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

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
    <html lang="es" className={cn("scroll-smooth", inter.variable, poppins.variable) }>
      <body
        className={` ${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
