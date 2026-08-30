import type { Metadata } from "next";
import GroupPage from "@/components/GroupPage";

export const metadata: Metadata = {
  title: "Групповые тренировки — Софья Поленова",
  description:
    "Живые онлайн-тренировки в небольшой группе: расписание, записи и обратная связь в чате. От 8 000 ₽ в месяц, первая тренировка бесплатно.",
};

export default function Page() {
  return <GroupPage />;
}
