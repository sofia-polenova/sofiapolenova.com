import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Софья Полёнова — тренировки, осанка, восстановление после родов",
  description:
    "Силовые тренировки через работу с дыханием и осанкой, восстановление после родов. Программы под твою цель, личное ведение и бесплатная тренировка.",
  openGraph: {
    title: "Софья Полёнова — тренировки, осанка, восстановление после родов",
    description:
      "Силовые тренировки через работу с дыханием и осанкой, восстановление после родов. Программы, личное ведение и бесплатная тренировка.",
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
