import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FEVER - The Platform Energy Companies Trust.",
  description:
    "Energy companies use Fever's platform to aggregate and operate their customers' energy assets, so they can optimise them and turn flexibility into revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><meta name="apple-mobile-web-app-title" content="FEVER" /></head>
      <body>{children}</body>
    </html>
  );
}
