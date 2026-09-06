"use client";

import { useEffect, useState } from "react";

/* Ключ в localStorage: "accepted" | "declined" */
const STORAGE_KEY = "cookie-consent";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const FONT_D = "var(--font-display)";
const FONT_S = "var(--font-sans)";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/* ─── Microsoft Clarity: грузится только после явного согласия ─── */
let clarityLoaded = false;

function loadClarity() {
  if (clarityLoaded || !CLARITY_ID || typeof window === "undefined") return;
  clarityLoaded = true;
  (function (c: any, l: Document, a: string, r: string, i: string) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i;
    const y = l.getElementsByTagName(r)[0];
    y.parentNode!.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_ID);
}

/* ─── Google Analytics 4 + Consent Mode ───
   Грузится для всех сразу, но до согласия работает без cookie
   (analytics_storage: 'denied' — обезличенные пинги). После «Принять»
   переключаем на 'granted'. */
let gaLoaded = false;

function loadGA() {
  if (gaLoaded || !GA_ID || typeof window === "undefined") return;
  gaLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);

  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
}

function grantGA() {
  if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", { analytics_storage: "granted" });
}

export default function ConsentAnalytics() {
  const [choice, setChoice] = useState<"accepted" | "declined" | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadGA(); // GA — для всех, но без cookie до согласия

    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* приватный режим — просто покажем баннер */
    }
    if (saved === "accepted" || saved === "declined") {
      setChoice(saved);
      if (saved === "accepted") {
        grantGA();
        loadClarity();
      }
    }
    setReady(true);
  }, []);

  function decide(value: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* не смогли сохранить — не критично */
    }
    setChoice(value);
    if (value === "accepted") {
      grantGA();
      loadClarity();
    }
  }

  if (!ready || choice !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Согласие на использование cookie"
      style={{
        position: "fixed",
        left: 12,
        right: 12,
        bottom: 12,
        zIndex: 2000,
        maxWidth: 520,
        margin: "0 auto",
        background: "#0A0A0A",
        color: "#F0EDE6",
        borderRadius: 14,
        padding: "16px 18px",
        boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
        fontFamily: FONT_S,
      }}
    >
      <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55 }}>
        Сайт использует cookie и сервисы аналитики для статистики посещений и
        улучшения работы. Подробнее — в{" "}
        <a
          href="/privacy"
          style={{ color: "#F0EDE6", textDecoration: "underline" }}
        >
          политике конфиденциальности
        </a>
        .
      </p>
      <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
        <button
          onClick={() => decide("accepted")}
          style={{
            flex: 1,
            fontFamily: FONT_D,
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            padding: "10px 14px",
            border: "none",
            borderRadius: 8,
            background: "#F0EDE6",
            color: "#0A0A0A",
            cursor: "pointer",
          }}
        >
          Принять
        </button>
        <button
          onClick={() => decide("declined")}
          style={{
            flex: 1,
            fontFamily: FONT_D,
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid rgba(240,237,230,0.4)",
            background: "transparent",
            color: "#F0EDE6",
            cursor: "pointer",
          }}
        >
          Отклонить
        </button>
      </div>
    </div>
  );
}
