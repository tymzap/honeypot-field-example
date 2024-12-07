import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Honeypot field example",
};

type RootLayoutProps = PropsWithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
