import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FireFlink website",
  description: "FireFlink is a testing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/fireflink-logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
