import type { Metadata } from "next";
export const metadata: Metadata = { title: "По моим программам — Софья Поленова" };

const S = {
  page: { background: "#F0EDE6", minHeight: "100vh", fontFamily: "'Inter', sans-serif" } as React.CSSProperties,
  nav: { borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" } as React.CSSProperties,
  back: { fontFamily: "'Inter', sans-serif", fontSize: 13, textDecoration: "none", color: "#666", letterSpacing: 1 } as React.CSSProperties,
  logo: { fontFamily: "'Anton', sans-serif", fontSize: 16, letterSpacing: 1, color: "#0A0A0A", textDecoration: "none" } as React.CSSProperties,
  wrap: { maxWidth: 600, margin: "0 auto", padding: "40px 20px 80px" } as React.CSSProperties,
  h1: { fontFamily: "'Anton', sans-serif", fontSize: "clamp(40px, 10vw, 72px)", textTransform: "uppercase" as const, lineHeight: 1, margin: "0 0 16px" },
  lead: { fontSize: 17, lineHeight: 1.6, color: "#333", marginBottom: 40 },
  divider: { borderTop: "1px solid rgba(0,0,0,0.12)", margin: "32px 0" } as React.CSSProperties,
  block: { background: "#E3E0D8", padding: "24px", marginBottom: 12 } as React.CSSProperties,
  blockTitle: { fontFamily: "'Anton', sans-serif", fontSize: 20, textTransform: "uppercase" as const, margin: "0 0 16px", display: "flex", alignItems: "center", gap: 10 },
  item: { fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#333", padding: "10px 0", borderBottom: "1px solid rgba(0,0,0,0.08)", display: "flex", gap: 10, lineHeight: 1.5 } as React.CSSProperties,
  btn: { display: "block", textAlign: "center" as const, fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, padding: "18px 24px", border: "2px solid #0A0A0A", color: "#F0EDE6", textDecoration: "none", background: "#0A0A0A" },
  price: { fontFamily: "'Anton', sans-serif", fontSize: 52, lineHeight: 1, margin: "0 0 4px" },
  period: { fontSize: 12, color: "#666", letterSpacing: 1, textTransform: "uppercase" as const },
};

export default function ProgramsPage() {
  return (
    <main style={S.page}>
      <nav style={S.nav}>
        <a href="/" style={S.back}>← Назад</a>
        <a href="/" style={S.logo}>SOFIA POLENOVA</a>
        <div style={{ width: 60 }} />
      </nav>
      <div style={S.wrap}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, color: "#666", marginBottom: 12 }}>
          3. По программам
        </div>
        <h1 style={S.h1}>Сопровождение по тренировкам и питанию</h1>
        <p style={{ ...S.lead, marginBottom: 16 }}>
          Готовая индивидуальная программа тренировок под твою цель, тело и образ жизни — для зала или для дома. Ты занимаешься сама, но не одна: остаёмся на связи, я отвечаю на вопросы и корректирую программу по ходу.
        </p>
        <p style={S.lead}>
          Можно работать только с питанием: начинаем с консультации, дальше ты присылаешь отчёты в чат, а я контролирую и мягко направляю — без жёстких меню и подсчёта калорий.
        </p>

        {/* Спорт */}
        <div style={S.block}>
          <div style={S.blockTitle}>🏋️ Тренировки</div>
          {[
            "Индивидуальная программа тренировок — зал или дом",
            "Разбор каждого видео с комментариями по технике",
            "Коррекция осанки и устранение дисбалансов",
            "Безопасная техника — никаких травм",
          ].map(item => (
            <div key={item} style={S.item}><span style={{ color: "#666", flexShrink: 0 }}>✓</span>{item}</div>
          ))}
        </div>

        {/* Питание */}
        <div style={S.block}>
          <div style={S.blockTitle}>🍽 Питание</div>
          {[
            "План питания под твои цели — без голодовок и подсчёта калорий",
            "Работаю с любыми ограничениями: вегетарианство, непереносимости",
            "Учу понимать своё тело, а не следовать шаблонам",
            "Простая система, которая становится образом жизни",
          ].map(item => (
            <div key={item} style={S.item}><span style={{ color: "#666", flexShrink: 0 }}>✓</span>{item}</div>
          ))}
        </div>

        {/* Восстановление */}
        <div style={S.block}>
          <div style={S.blockTitle}>💤 Восстановление</div>
          {[
            "Управление сном и энергией",
            "Работа со стрессом и перегрузками",
            "1–2 созвона в месяц для оценки прогресса",
            "Ежедневная поддержка в мессенджере",
          ].map(item => (
            <div key={item} style={S.item}><span style={{ color: "#666", flexShrink: 0 }}>✓</span>{item}</div>
          ))}
        </div>

        <div style={S.divider} />

        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, padding: "16px 0", borderTop: "1px solid rgba(0,0,0,0.12)" }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#0A0A0A", lineHeight: 1.4, paddingTop: 4 }}>Тренировки + питание</span>
            <span style={{ textAlign: "right" as const, flexShrink: 0 }}>
              <span style={{ display: "block", fontFamily: "'Anton', sans-serif", fontSize: 26, lineHeight: 1 }}>$230 / месяц</span>
              <span style={{ display: "block", fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 14, color: "#666", marginTop: 2 }}>20 000 ₽ / месяц</span>
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, padding: "16px 0", borderTop: "1px solid rgba(0,0,0,0.12)" }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#0A0A0A", lineHeight: 1.4, paddingTop: 4 }}>Только питание</span>
            <span style={{ textAlign: "right" as const, flexShrink: 0 }}>
              <span style={{ display: "block", fontFamily: "'Anton', sans-serif", fontSize: 26, lineHeight: 1 }}>$175 / месяц</span>
              <span style={{ display: "block", fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 14, color: "#666", marginTop: 2 }}>15 000 ₽ / месяц</span>
            </span>
          </div>
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }} />
        </div>

        <a href="https://t.me/sofiapolenova" target="_blank" rel="noopener noreferrer" style={S.btn}>
          Написать Софье →
        </a>
      </div>
    </main>
  );
}
