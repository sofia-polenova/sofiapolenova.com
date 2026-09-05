import type { Metadata } from "next";
import GroupPage from "@/components/GroupPage";

export const metadata: Metadata = {
  title: "Групповые тренировки — Софья Поленова",
  description:
    "Живые онлайн-тренировки в небольшой группе: стабильное расписание, короткие комплексы и разбор техники. От 8 500 ₽ в месяц.",
};

export default function Page() {
  return <GroupPage />;
}
