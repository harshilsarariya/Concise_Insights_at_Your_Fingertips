import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Concise Insights at Your Fingertips",
  description:
    "This project aims to develop an innovative summarisation platform powered by LaMDA and NextJS. This platform will empower users to quickly gain comprehensive understanding of any topic by delivering concise and insightful summaries from diverse sources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
