import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { PRIVACY } from "@/content/privacy-content";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Софья Поленова",
};

export default function Page() {
  return <LegalPage blocks={PRIVACY} />;
}
