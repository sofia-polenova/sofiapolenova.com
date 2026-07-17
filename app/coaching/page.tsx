import type { Metadata } from "next";
import CoachingPage from "@/components/CoachingPage";

export const metadata: Metadata = {
  title: "Персональная работа — Софья Поленова",
  description:
    "Индивидуальное сопровождение: тренировки, питание, восстановление и работа с врачом. Онлайн, системно, без надрыва.",
};

export default function Page() {
  return <CoachingPage />;
}
