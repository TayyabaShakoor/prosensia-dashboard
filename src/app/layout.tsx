import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProSensia Dashboard | Full Stack Internship",
  description: "Complete dashboard with Atomic Design, TypeScript, Tailwind CSS, and performance optimization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}