import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Move Club — Клуб онлайн-тренировок Софьи",
  description:
    "Ежемесячная подписка: тренировки в записи, живая суббота и чат с обратной связью. Без марафонов и стыда.",
  openGraph: {
    title: "Move Club — Клуб онлайн-тренировок Софьи",
    description:
      "Ежемесячная подписка: тренировки в записи, живая суббота и чат с обратной связью.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
