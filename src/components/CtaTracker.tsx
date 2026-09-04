"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Считает клики по ключевым кнопкам/ссылкам сайта — куда именно уходят
 * посетители (бот бесплатной тренировки, каналы в Telegram, YouTube).
 * Один делегированный обработчик на весь документ — новые ссылки той же
 * природы подхватываются автоматически, точечно менять компоненты не нужно.
 *
 * Смотреть: Vercel → проект → Analytics → Events (событие "cta_click",
 * свойство target). В Clarity — как Smart Event с тем же именем, если
 * посетитель принял cookie (Clarity подключается только после согласия).
 */
function classify(href: string): string | null {
  if (href.includes("SofiaPolenova_bot")) return "bot_free_training";
  if (href.includes("sofiap_fitness")) return "tg_channel_fitness";
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

      try {
        track("cta_click", { target: label, path: window.location.pathname });
      } catch {
        /* аналитика не должна ломать клик */
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
