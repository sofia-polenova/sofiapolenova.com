import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Софья Поленова — тренер по осанке и силовым",
  description:
    "Силовые тренировки, которые не навредят: дыхание, осанка, восстановление после родов. Знаю, с чего начать — подходит новичкам. Программы, личное ведение, бесплатная тренировка.",
};

export default function Page() {
  return <HomePage />;
}
