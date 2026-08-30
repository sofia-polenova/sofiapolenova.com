import type { Metadata } from "next";
export const metadata: Metadata = { title: "Готовая программа тренировок — Софья Поленова" };

const S = {
  page: { background: "#F0EDE6", minHeight: "100vh", fontFamily: "'Inter', sans-serif" } as React.CSSProperties,
  nav: { borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" } as React.CSSProperties,
  back: { fontFamily: "'Inter', sans-serif", fontSize: 13, textDecoration: "none", color: "#666", letterSpacing: 1 } as React.CSSProperties,
  logo: { fontFamily: "'Anton', sans-serif", fontSize: 16, letterSpacing: 1, color: "#0A0A0A", textDecoration: "none" } as React.CSSProperties,
  wrap: { maxWidth: 600, margin: "0 auto", padding: "40px 20px 80px" } as React.CSSProperties,
  h1: { fontFamily: "'Anton', sans-serif", fontSize: "clamp(40px, 11vw, 68px)", textTransform: "uppercase" as const, lineHeight: 1, margin: "0 0 20px" },
  h2: { fontFamily: "'Anton', sans-serif", fontSize: "clamp(22px, 6vw, 32px)", textTransform: "uppercase" as const, margin: "0 0 16px", letterSpacing: 0.5 },
  lead: { fontSize: "clamp(16px, 4vw, 18px)", lineHeight: 1.65, color: "#333", margin: 0 } as React.CSSProperties,
  divider: { borderTop: "1px solid rgba(0,0,0,0.12)", margin: "40px 0" } as React.CSSProperties,
  item: { fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#333", padding: "12px 0", borderTop: "1px solid rgba(0,0,0,0.1)", display: "flex", gap: 12, lineHeight: 1.55 } as React.CSSProperties,
  btn: { display: "block", textAlign: "center" as const, fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, padding: "18px 24px", color: "#F0EDE6", textDecoration: "none", background: "#0A0A0A" },
};

const INCLUDES = [
  "Индивидуальная программа тренировок под твою цель и уровень",
  "Программа на 4 недели, с прогрессией нагрузки",
  "Можно заниматься в зале или дома",
  "Проверяю технику по твоим видео",
  "Остаюсь на связи и отвечаю на вопросы по ходу",
  "Коррекция осанки и безопасная техника без травм",
];

export default function ProgramsPage() {
  return (
    <main style={S.page}>
      <nav style={S.nav}>
        <a href="/" style={S.back}>← Назад</a>
        <a href="/" style={S.logo}>SOFIA POLENOVA</a>
        <div style={{ width: 60 }} />
      </nav>
      <div style={S.wrap}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, color: "#666", marginBottom: 16 }}>
          4. По программе тренировок
        </div>
        <h1 style={S.h1}>Готовая программа тренировок</h1>
        <p style={S.lead}>
          Напишу индивидуальную программу тренировок и останусь на связи — проверяю технику по записи. Программа на 4 недели с прогрессией. Заниматься можно в зале или дома.
        </p>

        <div style={S.divider} />

        <h2 style={S.h2}>Что входит</h2>
        <div style={{ marginBottom: 8 }}>
          {INCLUDES.map((item) => (
            <div key={item} style={S.item}><span style={{ color: "#4a6b3a", flexShrink: 0 }}>✓</span>{item}</div>
          ))}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }} />
        </div>

        <div style={S.divider} />

        <h2 style={S.h2}>Стоимость</h2>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
          <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 40, lineHeight: 1 }}>15 000 ₽</span>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 15, color: "#666" }}>≈ $175</span>
        </div>
        <div style={{ fontSize: 12, color: "#666", letterSpacing: 1, textTransform: "uppercase" as const, marginBottom: 28 }}>
          программа на 4 недели
        </div>

        <a href="https://t.me/sofiapolenova" target="_blank" rel="noopener noreferrer" style={S.btn}>
          Написать Софье →
        </a>
      </div>
    </main>
  );
}
