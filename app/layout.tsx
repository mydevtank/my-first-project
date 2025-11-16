import type { Metadata } from "next";
import "./globals.css";
import Calculator from "./calculator";

export const metadata: Metadata = {
  title: "計算機 | Calculator",
  description: "一個簡潔美觀的網頁計算機應用",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body>
        {children}
        <Calculator />
      </body>
    </html>
  );
}
