"use client";
import { useRef, useEffect } from "react";

const S = {
  page: { background: "#F0EDE6", minHeight: "100vh", fontFamily: "var(--font-sans)" } as React.CSSProperties,
  nav: { borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" } as React.CSSProperties,
  back: { fontFamily: "var(--font-sans)", fontSize: 13, textDecoration: "none", color: "#666", letterSpacing: 1 } as React.CSSProperties,
  logo: { fontFamily: "'Anton', sans-serif", fontSize: 16, letterSpacing: 1, color: "#0A0A0A", textDecoration: "none" } as React.CSSProperties,
  wrap: { maxWidth: 600, margin: "0 auto", padding: "40px 20px 80px" } as React.CSSProperties,
  h1: { fontFamily: "'Anton', sans-serif", fontSize: "clamp(40px, 11vw, 68px)", textTransform: "uppercase" as const, lineHeight: 1, margin: "0 0 20px" },
  h2: { fontFamily: "'Anton', sans-serif", fontSize: "clamp(22px, 6vw, 32px)", textTransform: "uppercase" as const, margin: "0 0 20px", letterSpacing: 0.5 },
  lead: { fontSize: "clamp(16px, 4vw, 18px)", lineHeight: 1.65, color: "#333", margin: 0 } as React.CSSProperties,
  divider: { borderTop: "1px solid rgba(0,0,0,0.12)", margin: "40px 0" } as React.CSSProperties,
  btn: { display: "block", textAlign: "center" as const, fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, padding: "18px 24px", color: "#F0EDE6", textDecoration: "none", background: "#0A0A0A", marginBottom: 12 },
  btnOutline: { display: "block", textAlign: "center" as const, fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, padding: "18px 24px", border: "2px solid #0A0A0A", color: "#0A0A0A", textDecoration: "none", background: "transparent" },
};

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: 0, transform: "translateY(32px)", transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

const PLANS = [
  {
    title: "Разовое занятие",
    tag: "",
    note: "60 минут онлайн: постановка техники и разбор вопросов",
    usd: "~$55",
    rub: "4 500 ₽",
  },
  {
    title: "Абонемент на 8 тренировок",
    tag: "",
    note: "Персональные занятия один на один — программа под твою цель и корректировки по ходу",
    usd: "~$400",
    rub: "32 000 ₽",
  },
  {
    title: "Другие форматы и график",
    tag: "",
    note: "3+ раза в неделю, короткие частые занятия, сопровождение по питанию — обсуждаем индивидуально",
    usd: "По запросу",
    rub: "",
  },
];

const INCLUDES = [
  "Индивидуальная программа под твою цель, тело и уровень — зал или дом",
  "Тренируемся онлайн в реальном времени: ставлю технику, поправляю движения",
  "Работа с осанкой и дисбалансами, безопасная нагрузка без травм",
  "Разбор твоих видео между тренировками",
  "Сопровождение по питанию — без жёстких меню и подсчёта калорий",
  "Связь в мессенджере и регулярные созвоны",
];

export default function PersonalPage() {
  return (
    <main style={S.page}>
      <nav style={S.nav}>
        <a href="/" style={S.back}>← Назад</a>
        <a href="/" style={S.logo}>SOFIA POLENOVA</a>
        <div style={{ width: 60 }} />
      </nav>

      <div style={S.wrap}>
        {/* Hero */}
        <FadeIn>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, color: "#666", marginBottom: 16 }}>
            3. Личное ведение
          </div>
          <h1 style={S.h1}>Личное ведение и персональные тренировки</h1>
          <p style={S.lead}>
            Тренировки один на один — веду вживую онлайн, ставлю технику и выстраиваю осанку. Питание и связь между занятиями тоже входят.
          </p>
        </FadeIn>

        <div style={S.divider} />

        {/* Стоимость — сразу */}
        <FadeIn>
          <h2 style={S.h2}>Стоимость</h2>
        </FadeIn>
        <FadeIn delay={80}>
          <div style={{ marginBottom: 24 }}>
            {PLANS.map((p) => (
              <div key={p.title} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "18px 0", borderTop: "1px solid rgba(0,0,0,0.12)", gap: 16 }}>
                <div>
                  <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, margin: "0 0 4px" }}>{p.title}</p>
                  {p.tag && (
                    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" as const, color: "#4a6b3a", margin: "0 0 6px" }}>{p.tag}</p>
                  )}
                  <p style={{ fontSize: 13, color: "#666", margin: 0, lineHeight: 1.5 }}>{p.note}</p>
                </div>
                <span style={{ textAlign: "right" as const, flexShrink: 0 }}>
                  <span style={{ display: "block", fontFamily: "'Anton', sans-serif", fontSize: p.rub ? 22 : 14, color: p.rub ? "#0A0A0A" : "#666", lineHeight: 1 }}>{p.usd}</span>
                  {p.rub && (
                    <span style={{ display: "block", fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 13, color: "#666", marginTop: 2 }}>{p.rub}</span>
                  )}
                </span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }} />
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <a href="https://t.me/sofiapolenova" target="_blank" rel="noopener noreferrer" style={S.btn}>
            Записаться →
          </a>
          <a href="https://t.me/SofiaPolenova_bot?start=zhivot" target="_blank" rel="noopener noreferrer" style={S.btnOutline}>
            Сначала попробовать бесплатно
          </a>
        </FadeIn>

        <div style={S.divider} />

        {/* Что входит — компактно */}
        <FadeIn>
          <h2 style={S.h2}>Что входит</h2>
        </FadeIn>
        <FadeIn delay={80}>
          <div>
            {INCLUDES.map((item) => (
              <div key={item} style={{ display: "flex", gap: 12, padding: "12px 0", borderTop: "1px solid rgba(0,0,0,0.1)", fontSize: 14, color: "#333", lineHeight: 1.55 }}>
                <span style={{ color: "#4a6b3a", flexShrink: 0 }}>✓</span>{item}
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }} />
          </div>
        </FadeIn>

        {/* Документы */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", marginTop: 48, paddingTop: 28, display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 10, textAlign: "center" as const }}>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" as const, justifyContent: "center" }}>
            <a href="/oferta" style={{ fontSize: 12, color: "#aaa", textDecoration: "underline", textUnderlineOffset: 3 }}>Договор оферты</a>
            <a href="/privacy" style={{ fontSize: 12, color: "#aaa", textDecoration: "underline", textUnderlineOffset: 3 }}>Политика конфиденциальности</a>
            <a href="/consent" style={{ fontSize: 12, color: "#aaa", textDecoration: "underline", textUnderlineOffset: 3 }}>Согласие на обработку ПД</a>
          </div>
          <p style={{ fontSize: 11, color: "#ccc", margin: "4px 0 0" }}>ИП Поленова Софья Николаевна · ИНН 440117728694 · ОГРНИП 323440000001972</p>
          <p style={{ fontSize: 11, color: "#ccc", margin: 0 }}>© 2026 Поленова Софья Николаевна. Все права защищены.</p>
        </div>
      </div>
    </main>
  );
}
