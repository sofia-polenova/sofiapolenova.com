"use client";
import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   ГРУППОВЫЕ ТРЕНИРОВКИ
   Оформление в стиле страницы клуба:
   parallax-hero, fade-in на скролле, медиа-карусель.
   Шрифты — только Anton / Inter / Instrument Serif
   через CSS-переменные, как на главной.
   ───────────────────────────────────────────── */

const BG = "#F0EDE6";
const CARD = "#E3E0D8";
const DARK = "#0A0A0A";
const GREEN = "#4a6b3a";
const GRAY = "#666";

const FONT_D = "var(--font-display)"; // Anton
const FONT_S = "var(--font-sans)";    // Inter
const FONT_SERIF = "var(--font-serif)"; // Instrument Serif

const TG_SOFIA = "https://t.me/sofiap_fitness";

/* ── Fade-in on scroll ── */
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: 0, transform: "translateY(48px)", transition: `opacity 0.35s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.35s cubic-bezier(0.22,1,0.36,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── Reveal (вылетает сбоку при скролле) ── */
function RevealRow({ children, index = 0, from = "left" }: { children: React.ReactNode; index?: number; from?: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const d = Math.min(index, 4) * 70;
  const start = from === "right" ? "translateX(44px)" : "translateX(-44px)";
  return (
    <div ref={ref} style={{ opacity: 0, transform: start, transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${d}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${d}ms` }}>
      {children}
    </div>
  );
}

/* ── Кому подходит ── */
const AUDIENCE: { title: string; text: string }[] = [
  {
    title: "Хочешь мягко вернуть движение в рутину",
    text: "Начинаем постепенно и безопасно — с дыхания и осанки, без резкой нагрузки и надрыва. Тело привыкает к регулярности само, а тренировка перестаёт быть насилием над собой.",
  },
  {
    title: "В декрете и не знаешь, с чего начать восстановление",
    text: "Если после родов всё болит и тело будто не слушается — аккуратно возвращаем тонус: работаем с животом, тазовым дном и спиной, шаг за шагом.",
  },
  {
    title: "Готовишься к беременности и родам",
    text: "Много внимания спине, мобильности и подготовке тазобедренных суставов — чтобы выносить и родить было легче, а восстановиться потом — быстрее.",
  },
  {
    title: "Много сидишь — устаёт спина и шея",
    text: "Укрепляем глубокие мышцы, разгружаем поясницу и выравниваем осанку. По чуть-чуть каждую неделю, без «убойных» тренировок.",
  },
  {
    title: "Пробовала заниматься сама, но бросала",
    text: "Стабильное расписание и группа держат в ритме, а разбор техники не даёт делать упражнения через боль и «на автомате».",
  },
];

const S = {
  page: { background: BG, minHeight: "100vh", fontFamily: FONT_S } as React.CSSProperties,
  nav: { background: BG, borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky" as const, top: 0, zIndex: 100 },
  back: { fontFamily: FONT_S, fontSize: 13, textDecoration: "none", color: GRAY, letterSpacing: 1 } as React.CSSProperties,
  logo: { fontFamily: FONT_D, fontSize: 16, letterSpacing: 1, color: DARK, textDecoration: "none" } as React.CSSProperties,
  wrap: { maxWidth: 600, margin: "0 auto", padding: "0 20px 80px" } as React.CSSProperties,
  eyebrow: { fontFamily: FONT_S, fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase" as const, color: "#999", margin: "0 0 16px" },
  h2: { fontFamily: FONT_D, fontSize: "clamp(28px, 7vw, 44px)", textTransform: "uppercase" as const, lineHeight: 1, margin: "0 0 24px" },
  lead: { fontFamily: FONT_S, fontSize: "clamp(15px, 4vw, 17px)", lineHeight: 1.75, color: "#444", margin: "0 0 20px" } as React.CSSProperties,
  divider: { borderTop: "1px solid rgba(0,0,0,0.12)", margin: "48px 0" } as React.CSSProperties,
  btn: { display: "block", textAlign: "center" as const, fontFamily: FONT_S, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, padding: "18px 24px", color: "#fff", textDecoration: "none", background: "#4a6b3a" },
};

/* ── Parallax hero ── */
function ParallaxHero() {
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!textRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const offset = Math.max(0, -rect.top * 0.4);
      textRef.current.style.transform = `translateY(-${offset}px)`;
      textRef.current.style.opacity = String(Math.max(0, 1 - (-rect.top / (window.innerHeight * 0.6))));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={sectionRef} style={{ position: "relative", height: "100vh", margin: "0 0 48px", overflow: "hidden", background: "#1a1a1a" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/training-1.jpg"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", opacity: 0.9 }}
      >
        <source src="/assets/trenirovka.mov" type="video/quicktime" />
        <source src="/assets/trenirovka.mov" />
      </video>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 32%, rgba(0,0,0,0) 42%, rgba(0,0,0,0.9) 100%)" }} />

      <div style={{ position: "absolute", top: "16vh", left: 0, right: 0, textAlign: "center", padding: "0 20px" }}>
        <p style={{ fontFamily: FONT_D, fontSize: "clamp(38px, 11vw, 76px)", textTransform: "uppercase", lineHeight: 0.98, color: "#fff", margin: 0, letterSpacing: 1, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
          Групповые<br />тренировки
        </p>
      </div>

      <div ref={textRef} style={{ position: "absolute", bottom: 40, left: 32, right: 32, transition: "transform 0.05s linear, opacity 0.05s linear" }}>
        <p style={{ fontFamily: FONT_D, fontSize: "clamp(20px, 5vw, 34px)", textTransform: "uppercase", lineHeight: 1.2, color: "#fff", margin: "0 0 14px" }}>
          Живые онлайн-занятия<br />в маленькой группе
        </p>
        <p style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: "clamp(16px, 3.5vw, 22px)", color: "#fff", margin: 0, lineHeight: 1.5 }}>
          со стабильным расписанием и вниманием к каждой
        </p>
      </div>
    </div>
  );
}

/* ── Media carousel (фото и видео с тренировок) ── */
const MEDIA: { type: "img" | "video"; src: string }[] = [
  { type: "video", src: "/assets/trenirovka.mov" },
  { type: "video", src: "/assets/trenirovka2.mov" },
  { type: "img", src: "/assets/training-4.jpg" },
];

function MediaCarousel() {
  return (
    <div style={{ margin: "0 -20px", overflowX: "auto", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" } as React.CSSProperties}>
      <div style={{ display: "flex", gap: 10, padding: "0 20px", width: "max-content" }}>
        {MEDIA.map((m, i) => (
          <div key={i} style={{ width: 220, height: 300, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "#111" }}>
            {m.type === "video" ? (
              <video src={m.src} style={{ width: "100%", height: "100%", objectFit: "cover" }} autoPlay muted loop playsInline />
            ) : (
              <img src={m.src} alt="Тренировка" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            )}
          </div>
        ))}
        <div style={{ flexShrink: 0, width: 8 }} />
      </div>
    </div>
  );
}

/* ── Numbered block ── */
function Block({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: "28px 0", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
      <div style={{ display: "flex", gap: 20 }}>
        <span style={{ fontFamily: FONT_D, fontSize: 13, color: GREEN, letterSpacing: 1, flexShrink: 0, marginTop: 3 }}>{num}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontFamily: FONT_D, fontSize: "clamp(20px, 5vw, 28px)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 12px", color: DARK }}>{title}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

const body: React.CSSProperties = { fontFamily: FONT_S, fontSize: 15, lineHeight: 1.65, color: "#555", margin: "0 0 12px" };

/* ── Pricing row ── */
function PriceRow({ label, rub, usd }: { label: string; rub: string; usd: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "18px 0", borderTop: "1px solid rgba(0,0,0,0.12)", gap: 16 }}>
      <span style={{ fontFamily: FONT_S, fontSize: 15, color: DARK, lineHeight: 1.4, paddingTop: 6 }}>{label}</span>
      <span style={{ textAlign: "right", flexShrink: 0 }}>
        <span style={{ display: "block", fontFamily: FONT_D, fontSize: 26, lineHeight: 1 }}>{usd}</span>
        <span style={{ display: "block", fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: 14, color: GRAY, marginTop: 2 }}>{rub}</span>
      </span>
    </div>
  );
}

/* ── Footer (документы, как на странице клуба) ── */
function Footer() {
  return (
    <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", marginTop: 48, padding: "32px 20px 48px", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 10, textAlign: "center" as const }}>
      <p style={{ fontFamily: FONT_S, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, color: "#bbb", margin: "0 0 4px" }}>Документы</p>
      <a href="/oferta" style={{ fontFamily: FONT_S, fontSize: 13, color: "#888", textDecoration: "underline", textUnderlineOffset: 3 }}>Договор оферты</a>
      <a href="/privacy" style={{ fontFamily: FONT_S, fontSize: 13, color: "#888", textDecoration: "underline", textUnderlineOffset: 3 }}>Политика конфиденциальности</a>
      <a href="/consent" style={{ fontFamily: FONT_S, fontSize: 13, color: "#888", textDecoration: "underline", textUnderlineOffset: 3 }}>Согласие на обработку персональных данных</a>
      <p style={{ fontFamily: FONT_S, fontSize: 11, color: "#ccc", margin: "12px 0 0" }}>© 2026 Поленова Софья Николаевна. Все права защищены.</p>
    </div>
  );
}

export default function GroupPage() {
  return (
    <main style={S.page}>
      <nav style={S.nav}>
        <a href="/" style={S.back}>← Назад</a>
        <a href="/" style={S.logo}>SOFIA POLENOVA</a>
        <div style={{ width: 60 }} />
      </nav>

      <ParallaxHero />

      <div style={S.wrap}>
        <div style={{ height: 48 }} />

        {/* Кому подходит */}
        <FadeIn>
          <p style={S.eyebrow}>Кому подходит?</p>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 8 }}>
          {AUDIENCE.map((a, i) => {
            const dark = i % 2 === 0;
            return (
              <RevealRow key={i} index={i} from={dark ? "left" : "right"}>
                <div style={{ display: "flex", gap: 14, padding: "22px 22px", background: dark ? "#1e2e1a" : "#E8EDE4" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, background: dark ? "rgba(255,255,255,0.14)" : "#fff", border: dark ? "none" : `1.5px solid ${GREEN}` }}>
                    <span style={{ color: dark ? "#fff" : GREEN, fontSize: 12 }}>✓</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: FONT_S, fontWeight: 600, fontSize: 16, color: dark ? "#fff" : DARK, margin: "1px 0 6px", lineHeight: 1.35 }}>{a.title}</p>
                    <p style={{ ...body, margin: 0, color: dark ? "rgba(255,255,255,0.75)" : "#555" }}>{a.text}</p>
                  </div>
                </div>
              </RevealRow>
            );
          })}
        </div>

        <div style={S.divider} />

        {/* 01 — как проходит */}
        <FadeIn>
          <Block num="01" title="Как проходит">
            <div style={{ marginBottom: 16 }}>
              {[
                ["Дни", "Вторник · Четверг · Суббота"],
                ["Время", "10:00 по МСК"],
                ["Длительность", "55–75 минут"],
                ["В группе", "одновременно от 2 до 8 человек"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "132px 1fr", gap: 12, padding: "9px 0", borderBottom: "1px solid rgba(0,0,0,0.08)", alignItems: "start" }}>
                  <span style={{ fontFamily: FONT_S, fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: GREEN, paddingTop: 2 }}>{k}</span>
                  <span style={{ fontFamily: FONT_S, fontSize: 14, color: "#333", lineHeight: 1.5 }}>{v}</span>
                </div>
              ))}
            </div>
            <MediaCarousel />
          </Block>
        </FadeIn>

        {/* 02 — короткие комплексы */}
        <FadeIn>
          <Block num="02" title="Короткие комплексы">
            <p style={{ ...body, margin: 0 }}>
              Дополнительно есть короткие комплексы упражнений — их можно использовать
              как домашнее задание между занятиями или как утреннюю зарядку.
            </p>
          </Block>
        </FadeIn>

        {/* 03 — оборудование */}
        <FadeIn>
          <Block num="03" title="Оборудование">
            <p style={{ ...body, margin: "0 0 8px" }}>
              Понадобится МФР-мяч, коврик и фитнес-резинки.
            </p>
            <p style={{ ...body, margin: 0 }}>
              Полное описание оборудования — в чате группы.
            </p>
          </Block>
        </FadeIn>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }} />

        <div style={S.divider} />

        {/* Стоимость */}
        <FadeIn>
          <h2 style={S.h2}>Стоимость</h2>
          <div style={{ marginBottom: 28 }}>
            <PriceRow label="1 раз в неделю" rub="8 000 ₽ / месяц" usd="$100 / месяц" />
            <PriceRow label="2 раза в неделю" rub="16 000 ₽ / месяц" usd="$200 / месяц" />
            <PriceRow label="3 раза в неделю" rub="24 000 ₽ / месяц" usd="$300 / месяц" />
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }} />
          </div>
          <a href={TG_SOFIA} target="_blank" rel="noopener noreferrer" style={S.btn}>
            Написать Софье →
          </a>
        </FadeIn>
      </div>

      <Footer />
    </main>
  );
}
