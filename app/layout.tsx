import type { Metadata } from "next";
import { Noto_Sans_KR, Raleway } from "next/font/google";
import "./globals.css";

const heading = Raleway({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const body = Noto_Sans_KR({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "진양에프엔에스 | JINYANG F&S",
  description: "소방시설 및 안전·정보관리 솔루션 전문 기업",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
