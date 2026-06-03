import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Al Sarh Technical Services | Building Maintenance & MEP in the UAE",
  description:
    "Al Sarh Technical Services delivers reliable AC, electrical, plumbing, civil and fit-out maintenance across the UAE. Licensed technicians, 24/7 emergency support.",
  keywords: [
    "Al Sarh Technical Services",
    "technical services UAE",
    "AC maintenance",
    "electrical services",
    "plumbing",
    "building maintenance",
    "MEP",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
