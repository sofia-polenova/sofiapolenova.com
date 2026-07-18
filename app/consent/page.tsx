import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { CONSENT } from "@/content/consent-content";

export const metadata: Metadata = {
  title: "Согласие на обработку ПД — Софья Поленова",
};

export default function Page() {
  return <LegalPage blocks={CONSENT} />;
}
