import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora AI | تولید محتوای هوشمند",
  description: "ابزارهای هوشمند تولید محتوا با Nexora AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
