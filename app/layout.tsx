import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sofiapolenova.com"),
  title: "Софья Полёнова — тренировки, осанка, восстановление после родов",
  description:
    "Силовые тренировки через работу с дыханием и осанкой, восстановление после родов. Программы под твою цель, личное ведение и бесплатная тренировка.",
  applicationName: "Софья Полёнова",
  openGraph: {
    title: "Софья Полёнова — тренировки, осанка, восстановление после родов",
    description:
      "Силовые тренировки через работу с дыханием и осанкой, восстановление после родов. Программы, личное ведение и бесплатная тренировка.",
    type: "website",
    siteName: "Софья Полёнова",
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
      name: "Софья Полёнова",
      inLanguage: "ru-RU",
    },
    {
      "@type": "Person",
      "@id": "https://www.sofiapolenova.com/#person",
      name: "Софья Полёнова",
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
      </body>
    </html>
  );
}
