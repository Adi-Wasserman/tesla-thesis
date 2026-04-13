import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Tesla Robotaxi Thesis",
  description: "From Car Company to Mobility Platform — Interactive investment thesis dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
