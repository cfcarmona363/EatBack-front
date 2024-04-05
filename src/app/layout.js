"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/HeaderMenu/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" min-h-screen bg-gray-200">
          <>
            <Header />
            {children}
          </>
        </div>
      </body>
    </html>
  );
}
