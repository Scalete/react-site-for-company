import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/layout/header";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home",
  description: "Site for company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
