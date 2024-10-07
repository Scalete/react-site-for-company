import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "@/styles/globals.scss";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
