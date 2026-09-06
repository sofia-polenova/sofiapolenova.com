"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Считает клики по ключевым кнопкам/ссылкам сайта — куда именно уходят
 * посетители (бот бесплатной тренировки, каналы в Telegram, YouTube).
 * Один делегированный обработчик на весь документ — новые ссылки той же
 * природы подхватываются автоматически, точечно менять компоненты не нужно.
 *
 * Событие "cta_click" (свойство target) уходит в:
 *  - Google Analytics 4 — виден в Reports → Engagement → Events (free-тариф);
 *  - Vercel Analytics — раздел Events (только на тарифе Pro);
 *  - Microsoft Clarity — как Smart Event, только у принявших cookie.
 */
function classify(href: string): string | null {
  if (href.includes("SofiaPolenova_bot")) return "bot_free_training";
  if (href.includes("some_sofiasupport")) return "tg_channel_fitness";
  if (href.includes("heath_is_wealth")) return "tg_channel_club";
  if (href.includes("t.me/")) return "tg_other";
  if (href.includes("youtube.com/@some_sofia")) return "youtube_channel";
  return null;
}

export default function CtaTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      const label = classify(link.href);
      if (!label) return;

      const path = window.location.pathname;

      try {
        track("cta_click", { target: label, path });
      } catch {
        /* аналитика не должна ломать клик */
      }
      try {
        (window as { gtag?: (...a: unknown[]) => void }).gtag?.(
          "event",
          "cta_click",
          { target: label, page_path: path }
        );
      } catch {
        /* GA мог не подгрузиться */
      }
      try {
        (window as { clarity?: (...a: unknown[]) => void }).clarity?.(
          "event",
          "cta_" + label
        );
      } catch {
        /* Clarity мог быть не подключён (нет согласия на cookie) */
      }
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
