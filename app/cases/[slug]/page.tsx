import type { Metadata } from "next";

const CASES: Record<string, { title: string; num: string }> = {
  "myshcy-yagodiczy": { num: "01", title: "Набор мышечной массы, построение ягодиц" },
  "beremennost":      { num: "02", title: "Ведение во время беременности и послеродовом периоде" },
  "zhivot-osanka":    { num: "03", title: "Живот и осанка" },
  "pitanie":          { num: "04", title: "Питание без срывов" },
};

export async function generateStaticParams() {
  return Object.keys(CASES).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES[slug];
  return { title: c ? `${c.title} — Кейс Софьи Поленовой` : "Кейс" };
}

const S = {
  page: { background: "#F0EDE6", minHeight: "100vh", fontFamily: "'Inter', sans-serif" } as React.CSSProperties,
  nav: { borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" } as React.CSSProperties,
  back: { fontFamily: "'Inter', sans-serif", fontSize: 13, textDecoration: "none", color: "#666", letterSpacing: 1 } as React.CSSProperties,
  logo: { fontFamily: "'Anton', sans-serif", fontSize: 16, letterSpacing: 1, color: "#0A0A0A", textDecoration: "none" } as React.CSSProperties,
  wrap: { maxWidth: 600, margin: "0 auto", padding: "48px 20px 80px" } as React.CSSProperties,
  num: { fontFamily: "'Anton', sans-serif", fontSize: 80, lineHeight: 1, color: "#E3E0D8", margin: "0 0 -16px" },
  h1: { fontFamily: "'Anton', sans-serif", fontSize: "clamp(32px, 8vw, 56px)", textTransform: "uppercase" as const, lineHeight: 1.05, margin: "0 0 40px" },
  card: { background: "#E3E0D8", padding: "28px 24px", marginBottom: 12 } as React.CSSProperties,
  cardDark: { background: "#0A0A0A", padding: "28px 24px", marginBottom: 12, color: "#F0EDE6" } as React.CSSProperties,
  tag: { fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, color: "#666", marginBottom: 8 },
  tagLight: { fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, color: "#555", marginBottom: 8 },
  name: { fontFamily: "'Anton', sans-serif", fontSize: 28, textTransform: "uppercase" as const, marginBottom: 20 },
  nameDark: { fontFamily: "'Anton', sans-serif", fontSize: 28, textTransform: "uppercase" as const, marginBottom: 6, color: "#F0EDE6" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 } as React.CSSProperties,
  before: { background: "#f5ede9", padding: 16 } as React.CSSProperties,
  after: { background: "#edf0e9", padding: 16 } as React.CSSProperties,
  colLabel: (color: string) => ({ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" as const, color, marginBottom: 10 }),
  colItem: { fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#444", marginBottom: 6 },
  quote: { fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 18, lineHeight: 1.6, margin: "0 0 20px" },
  chips: { display: "flex", flexWrap: "wrap" as const, gap: 8 },
  chip: { fontFamily: "'Inter', sans-serif", fontSize: 11, padding: "4px 12px", background: "#D8D5CE", color: "#555" },
  chipDark: { fontFamily: "'Inter', sans-serif", fontSize: 11, padding: "4px 12px", background: "rgba(255,255,255,0.08)", color: "#aaa" },
  divider: { borderTop: "1px solid rgba(0,0,0,0.12)", margin: "32px 0" } as React.CSSProperties,
  btn: { display: "block", textAlign: "center" as const, fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, padding: "18px 24px", color: "#F0EDE6", textDecoration: "none", background: "#0A0A0A" },
};

function NavBar() {
  return (
    <nav style={S.nav}>
      <a href="/" style={S.back}>← Назад</a>
      <a href="/" style={S.logo}>SOFIA POLENOVA</a>
      <div style={{ width: 60 }} />
    </nav>
  );
}

function CaseMushcy() {
  return (
    <main style={S.page}>
      <NavBar />
      <div style={S.wrap}>
        <div style={S.num}>01</div>
        <h1 style={S.h1}>Набор мышечной массы, построение ягодиц</h1>

        {/* Елена */}
        <div style={S.card}>
          <div style={S.tag}>Результат за 3 месяца</div>
          <div style={S.name}>Елена, 26 лет</div>
          <div style={S.grid}>
            <div style={S.before}>
              <div style={S.colLabel("#c0603d")}>Было</div>
              {["Сидячая работа, весь день за компьютером", "Нет времени на тренировки", "Боли в спине и шее", "Вегетарианка — нужен план без мяса"].map(p => (
                <div key={p} style={S.colItem}>· {p}</div>
              ))}
            </div>
            <div style={S.after}>
              <div style={S.colLabel("#4a5c3d")}>Стало</div>
              {["+5 кг мышечной массы", "Рельефное тело", "Боли в спине ушли полностью", "Подтянутые ягодицы", "Уверенность в себе"].map(r => (
                <div key={r} style={S.colItem}>✓ {r}</div>
              ))}
            </div>
          </div>
          <div style={S.chips}>
            {["Сидячая работа", "Мало времени", "Вегетарианка", "Рекомпозиция тела"].map(t => (
              <span key={t} style={S.chip}>{t}</span>
            ))}
          </div>
        </div>

        <div style={S.divider} />

        {/* CTA блок */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 22, textTransform: "uppercase" as const, marginBottom: 20 }}>
            Такой результат можно сделать:
          </div>
          <a href="/programs" style={{ display: "block", textAlign: "center" as const, fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, padding: "18px 24px", color: "#F0EDE6", textDecoration: "none", background: "#0A0A0A", marginBottom: 10 }}>
            На программе тренировок · от 11 990 ₽ →
          </a>
          <a href="/personal" style={{ display: "block", textAlign: "center" as const, fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, padding: "18px 24px", color: "#0A0A0A", textDecoration: "none", border: "2px solid #0A0A0A", background: "transparent" }}>
            На личном ведении · от 24 990 ₽ →
          </a>
        </div>
      </div>
    </main>
  );
}

function CaseBeremennost() {
  return (
    <main style={S.page}>
      <NavBar />
      <div style={S.wrap}>
        <div style={S.num}>02</div>
        <h1 style={S.h1}>Ведение во время беременности и послеродовом периоде</h1>

        {/* Женя */}
        <div style={S.cardDark}>
          <div style={S.tagLight}>Блогер · 100К+ подписчиков · беременность</div>
          <div style={S.nameDark}>Женя Долинина</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#666", marginBottom: 20 }}>@jenny.ration</div>
          <p style={{ ...S.quote, color: "rgba(240,237,230,0.85)" }}>
            «Тренируется со мной через всю беременность. Безопасный подход, контроль нагрузки, подготовка тела к родам. Если она доверяет мне в такой важный период — ты тоже можешь»
          </p>
          <div style={S.chips}>
            {["Беременность", "Безопасный подход", "Подготовка к родам"].map(t => (
              <span key={t} style={S.chipDark}>{t}</span>
            ))}
          </div>
        </div>

        {/* Что включает ведение */}
        <div style={{ ...S.card, marginTop: 12 }}>
          <div style={S.tag}>Что включает ведение</div>
          {[
            "Безопасные нагрузки с учётом триместра и самочувствия",
            "Работа с диастазом и укрепление тазового дна",
            "Подготовка тела к родам",
            "Мягкое восстановление после родов",
            "Всё в соответствии с медицинскими рекомендациями",
          ].map(item => (
            <div key={item} style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#333", padding: "10px 0", borderBottom: "1px solid rgba(0,0,0,0.08)", display: "flex", gap: 10 }}>
              <span style={{ color: "#666", flexShrink: 0 }}>✓</span>{item}
            </div>
          ))}
        </div>

        <div style={S.divider} />
        <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 22, textTransform: "uppercase" as const, marginBottom: 20 }}>
          Такой результат можно сделать:
        </div>
        <a href="/personal" style={{ display: "block", textAlign: "center" as const, fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, padding: "18px 24px", color: "#F0EDE6", textDecoration: "none", background: "#0A0A0A", marginBottom: 10 }}>
          На личном ведении · от 24 990 ₽ →
        </a>
      </div>
    </main>
  );
}

const BTN_DARK = { display: "block", textAlign: "center" as const, fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, padding: "18px 24px", color: "#F0EDE6", textDecoration: "none", background: "#0A0A0A", marginBottom: 10 };
const BTN_OUT  = { display: "block", textAlign: "center" as const, fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, padding: "18px 24px", color: "#0A0A0A", textDecoration: "none", border: "2px solid #0A0A0A", background: "transparent", marginBottom: 10 };

function CasePlaceholder({ num, title, buttons }: { num: string; title: string; buttons?: React.ReactNode }) {
  return (
    <main style={S.page}>
      <NavBar />
      <div style={S.wrap}>
        <div style={S.num}>{num}</div>
        <h1 style={S.h1}>{title}</h1>
        <div style={{ background: "#E3E0D8", padding: "48px 24px", textAlign: "center" as const, marginBottom: 32 }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#999", letterSpacing: 1, textTransform: "uppercase" as const }}>
            Кейс скоро появится
          </div>
        </div>
        {buttons && (
          <>
            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 22, textTransform: "uppercase" as const, marginBottom: 20 }}>
              Такой результат можно сделать:
            </div>
            {buttons}
          </>
        )}
      </div>
    </main>
  );
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "myshcy-yagodiczy") return <CaseMushcy />;
  if (slug === "beremennost") return <CaseBeremennost />;
  if (slug === "zhivot-osanka") return (
    <CasePlaceholder num="03" title="Живот и осанка" buttons={<>
      <a href="/club"     style={BTN_DARK}>В клубе · 4 990 ₽/мес →</a>
      <a href="/programs" style={BTN_OUT}>На программе тренировок · от 11 990 ₽ →</a>
      <a href="/personal" style={BTN_OUT}>На личном ведении · от 24 990 ₽ →</a>
    </>} />
  );
  if (slug === "pitanie") return (
    <CasePlaceholder num="04" title="Питание без срывов" buttons={<>
      <a href="/club"     style={BTN_DARK}>В клубе · 4 990 ₽/мес →</a>
      <a href="/personal" style={BTN_OUT}>На личном ведении · от 24 990 ₽ →</a>
    </>} />
  );
  const c = CASES[slug];
  if (c) return <CasePlaceholder num={c.num} title={c.title} />;
  return (
    <main style={S.page}>
      <NavBar />
      <div style={S.wrap}><p>Кейс не найден</p></div>
    </main>
  );
}
