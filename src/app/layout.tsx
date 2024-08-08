import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pseudo Code",
  description: "Pseudo Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` "font-poppins ${inter.className}`}>
        <div className="max-w-screen-2xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
