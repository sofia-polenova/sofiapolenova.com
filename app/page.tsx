import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Клуб онлайн-тренировок Софьи — Move Club",
  description:
    "Ежемесячная подписка: тренировки в записи, живая суббота и чат с обратной связью. Без марафонов и стыда.",
};

export default function Page() {
  return <HomePage />;
}
