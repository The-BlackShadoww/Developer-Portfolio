import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minimal Single Page Portfolio",
  description: "Created with Frontend Tribe",
};

const archivo = Archivo({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: "variable",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-stone-200 text-stone-900 ${archivo.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
