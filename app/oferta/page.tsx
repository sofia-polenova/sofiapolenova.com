import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { OFERTA } from "@/content/oferta-content";

export const metadata: Metadata = {
  title: "Договор оферты — Софья Поленова",
};

export default function Page() {
  return <LegalPage blocks={OFERTA} />;
}
