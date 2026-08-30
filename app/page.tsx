import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Софья Полёнова — тренировки, осанка, восстановление после родов",
  description:
    "Силовые тренировки через работу с дыханием и осанкой, восстановление после родов. Программы под твою цель, личное ведение и бесплатная тренировка.",
};

export default function Page() {
  return <HomePage />;
}
