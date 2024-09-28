import type { Metadata } from "next";
import "./globals.scss";
import Layout from "@Components/Organism/Layout/Layout";

export const metadata: Metadata = {
  title: "Miguel Delgado",
  description: "Mobile and Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
