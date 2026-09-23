import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HIWAY - Ciberseguridad, Infraestructura & Soluciones Digitales",
  description: "HIWAY provee soluciones digitales y tecnológicas de alta disponibilidad, ciberseguridad industrial OT/IT, Site Connectivity, Hi-Office y servicios gestionados en Chile y México.",
  keywords: ["HIWAY", "Ciberseguridad OT", "Ciberseguridad Industrial", "Hi-Office", "Site Connectivity", "IoT Minería", "Servicios Gestionados NOC", "Las Condes Chile", "CDMX México"],
  authors: [{ name: "HIWAY Networks S.A." }],
  openGraph: {
    title: "HIWAY - Soluciones Digitales & Ciberseguridad Industrial",
    description: "Infraestructura digital, ciberseguridad y servicios gestionados 24/7 para minería, telecom, gobierno y banca en América Latina.",
    url: "https://cxhiway.com",
    siteName: "HIWAY",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="antialiased bg-white text-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
