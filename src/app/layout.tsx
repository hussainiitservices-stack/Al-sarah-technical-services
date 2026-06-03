import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "Al Sarh Technical Services | Concrete Scan, Cutting & Core Drilling UAE",
  description:
    "Al Sarh Technical Services LLC provides concrete scanning, cutting and core drilling across the UAE. ISO certified teams, advanced equipment, health and safety first.",
  keywords: [
    "Al Sarh Technical Services",
    "concrete scanning UAE",
    "concrete cutting Dubai",
    "core drilling UAE",
    "demolition contractor UAE",
    "GPR concrete scan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full overflow-x-clip flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
