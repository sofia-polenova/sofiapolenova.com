import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import ConsentAnalytics from "@/components/ConsentAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sofiapolenova.com"),
  title: "Софья Поленова — тренер по осанке и силовым",
  description:
    "Силовые тренировки, которые не навредят: дыхание, осанка, восстановление после родов. Знаю, с чего начать — подходит новичкам. Программы, личное ведение, бесплатная тренировка.",
  applicationName: "Софья Поленова",
  openGraph: {
    title: "Софья Поленова — тренер по осанке и силовым",
    description:
      "Силовые тренировки, которые не навредят: дыхание, осанка, восстановление после родов. Знаю, с чего начать — подходит новичкам. Программы, личное ведение, бесплатная тренировка.",
    type: "website",
    siteName: "Софья Поленова",
    locale: "ru_RU",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.sofiapolenova.com/#website",
      url: "https://www.sofiapolenova.com/",
      name: "Софья Поленова",
      inLanguage: "ru-RU",
    },
    {
      "@type": "Person",
      "@id": "https://www.sofiapolenova.com/#person",
      name: "Софья Поленова",
      jobTitle: "Тренер и нутрициолог",
      url: "https://www.sofiapolenova.com/",
      image: "https://www.sofiapolenova.com/icon.png",
      sameAs: [
        "https://t.me/heath_is_wealth",
        "https://www.youtube.com/@some_sofia",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ConsentAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
