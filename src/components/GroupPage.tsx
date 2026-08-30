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
const MSG_GROUP =
  "Привет, Софья! Хочу тренироваться в групповом формате.\n\nЦели:\nМои ограничения:\nСколько раз в неделю:\nВопросы:";
const TG_GROUP = `${TG_SOFIA}?text=${encodeURIComponent(MSG_GROUP)}`;

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

/* just the numbered heading, same look as Block */
function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div style={{ display: "flex", gap: 20, padding: "28px 0 16px", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
      <span style={{ fontFamily: FONT_D, fontSize: 13, color: GREEN, letterSpacing: 1, flexShrink: 0, marginTop: 3 }}>{num}</span>
      <p style={{ fontFamily: FONT_D, fontSize: "clamp(20px, 5vw, 28px)", textTransform: "uppercase", lineHeight: 1, margin: 0, color: DARK }}>{title}</p>
    </div>
  );
}

const HL: React.CSSProperties = { color: "#a8d18a", fontWeight: 700 };
const bodyLight: React.CSSProperties = { fontFamily: FONT_S, fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", margin: "0 0 12px" };

/* текстовый блок поверх фото/видео */
function PhotoBlock({ src, video, num, title, children }: { src: string; video?: boolean; num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ position: "relative", overflow: "hidden", background: "#161616" }}>
      {video ? (
        <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }}>
          <source src={src} />
        </video>
      ) : (
        <img src={src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }} />
      )}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.8))" }} />
      <FadeIn>
        <div style={{ position: "relative", padding: "56px 24px", color: "#fff", maxWidth: 560, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 18, marginBottom: 20 }}>
            <span style={{ fontFamily: FONT_D, fontSize: 13, color: "#a8d18a", letterSpacing: 1, marginTop: 4, flexShrink: 0 }}>{num}</span>
            <p style={{ fontFamily: FONT_D, fontSize: "clamp(22px, 6.5vw, 34px)", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>{title}</p>
          </div>
          {children}
        </div>
      </FadeIn>
    </div>
  );
}

const body: React.CSSProperties = { fontFamily: FONT_S, fontSize: 15, lineHeight: 1.65, color: "#555", margin: "0 0 12px" };

/* ── Pricing row ── */
function PriceRow({ label, rub, usd }: { label: string; rub: string; usd: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "16px 0", borderTop: "1px solid rgba(0,0,0,0.12)", gap: 12 }}>
      <span style={{ fontFamily: FONT_S, fontSize: 14, color: DARK, lineHeight: 1.4, paddingTop: 4 }}>{label}</span>
      <span style={{ textAlign: "right", flexShrink: 0 }}>
        <span style={{ display: "block", fontFamily: FONT_D, fontSize: 21, lineHeight: 1, whiteSpace: "nowrap" }}>{usd}</span>
        <span style={{ display: "block", fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: 12, color: GRAY, marginTop: 2, whiteSpace: "nowrap" }}>{rub}</span>
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
        <div style={{ height: 40 }} />

        {/* 01 — кому подходит */}
        <FadeIn>
          <SectionHead num="01" title="Кому подходит?" />
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
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

      </div>

      {/* 02 — как проходит (текст поверх видео) */}
      <PhotoBlock src="/assets/trenirovka.mov" video num="02" title="Как проходит">
        <div>
          {([
            ["📅", "Дни", <><span style={HL}>Вт · Чт · Сб</span></>],
            ["⏰", "Время", <><span style={HL}>10:00</span> по МСК</>],
            ["⏱️", "Длительность", <><span style={HL}>55–75</span> минут</>],
            ["👥", "В группе", <><span style={HL}>2–8</span> человек одновременно</>],
            ["🎥", "Где", <>онлайн в Zoom, <span style={HL}>из дома</span></>],
            ["🎒", "Оборудование", <>коврик, <span style={HL}>МФР-мяч</span>, резинки, гантели</>],
          ] as [string, string, React.ReactNode][]).map(([emoji, label, value], i) => (
            <RevealRow key={label} index={i} from="left">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                  <span style={{ fontSize: 18, lineHeight: 1 }}>{emoji}</span>
                  <span style={{ fontFamily: FONT_S, fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: "#a8d18a" }}>{label}</span>
                </span>
                <span style={{ fontFamily: FONT_S, fontSize: 15, color: "rgba(255,255,255,0.92)", lineHeight: 1.4, textAlign: "right" }}>{value}</span>
              </div>
            </RevealRow>
          ))}
        </div>
        <p style={{ fontFamily: FONT_S, fontSize: 13, color: "rgba(255,255,255,0.55)", margin: "16px 0 0" }}>
          Полное описание оборудования — в чате группы.
        </p>
      </PhotoBlock>

      {/* короткие комплексы */}
      <div style={{ padding: "56px 0" }}>
        <FadeIn>
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
            <p style={{ fontFamily: FONT_SERIF, fontStyle: "italic", fontSize: "clamp(19px, 4.6vw, 30px)", lineHeight: 1.4, color: DARK, margin: 0 }}>
              Между занятиями остаются короткие комплексы — их можно делать как{" "}
              <span style={{ color: GREEN }}>домашнее задание</span> или как{" "}
              <span style={{ color: GREEN }}>утреннюю зарядку</span>.
            </p>
          </div>

          <div style={{ overflow: "hidden", marginTop: 24 }}>
            <style>{`
              @keyframes komplexy-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
              .komplexy-track { display: flex; gap: 12px; width: max-content; animation: komplexy-marquee 26s linear infinite; }
              .komplexy-track:hover { animation-play-state: paused; }
            `}</style>
            <div className="komplexy-track">
              {[
                ["Комплекс на дыхание", "10 минут"],
                ["Упражнения на раскрытие грудного отдела", "8 минут"],
                ["Мобильность ТБС", "12 минут"],
                ["Лимфодренажная зарядка", "10 минут"],
              ].concat([
                ["Комплекс на дыхание", "10 минут"],
                ["Упражнения на раскрытие грудного отдела", "8 минут"],
                ["Мобильность ТБС", "12 минут"],
                ["Лимфодренажная зарядка", "10 минут"],
              ]).map(([name, dur], i) => (
                <span key={i} style={{ display: "inline-block", flexShrink: 0, whiteSpace: "nowrap", background: "#E8EDE4", border: `1px solid ${GREEN}`, borderRadius: 100, padding: "9px 18px", fontFamily: FONT_S, fontSize: 13, color: "#333", lineHeight: 1.4 }}>
                  {name} <span style={{ color: GREEN, fontWeight: 600 }}>· {dur}</span>
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <div style={S.wrap}>
        <div style={{ height: 16 }} />

        {/* Стоимость — отдельной светлой рамкой */}
        <FadeIn>
          <div style={{ background: "#FAFAF7", border: "1px solid rgba(0,0,0,0.12)", padding: "26px 20px 22px" }}>
            <h2 style={{ ...S.h2, margin: "0 0 12px" }}>Стоимость</h2>
            <div style={{ marginBottom: 24 }}>
              <PriceRow label="1 раз в неделю" rub="8 000 ₽ / месяц" usd="$100 / месяц" />
              <PriceRow label="2 раза в неделю" rub="16 000 ₽ / месяц" usd="$200 / месяц" />
              <PriceRow label="3 раза в неделю" rub="24 000 ₽ / месяц" usd="$300 / месяц" />
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }} />
            </div>
            <a href={TG_GROUP} target="_blank" rel="noopener noreferrer" style={S.btn}>
              Написать Софье →
            </a>
          </div>
        </FadeIn>
      </div>

      <Footer />
    </main>
  );
}
