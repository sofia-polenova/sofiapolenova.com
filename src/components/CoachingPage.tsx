"use client";
import { useState } from "react";

const BG = "#F0EDE6";
const CARD = "#E3E0D8";
const DARK = "#0A0A0A";
const GRAY = "#666";
const FONT_D = "'Anton', sans-serif";
const FONT_S = "'Inter', sans-serif";

function Nav() {
  return (
    <nav style={{ background: BG, borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100 }}>
      <a href="/" style={{ fontFamily: FONT_S, fontSize: 13, textDecoration: "none", color: GRAY, letterSpacing: 1 }}>← Назад</a>
      <a href="/" style={{ fontFamily: FONT_D, fontSize: 16, letterSpacing: 1, color: DARK, textDecoration: "none" }}>SOFIA POLENOVA</a>
      <div style={{ width: 60 }} />
    </nav>
  );
}

function wrap(children: React.ReactNode) {
  return <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 20px" }}>{children}</div>;
}

/* ── HERO ── */
function Hero() {
  return (
    <section style={{ background: BG, padding: "48px 20px 60px" }}>
      {wrap(<>
        <div style={{ fontFamily: FONT_S, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: GRAY, marginBottom: 12 }}>
          Персональная работа
        </div>
        <h1 style={{ fontFamily: FONT_D, fontSize: "clamp(48px, 12vw, 88px)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 24px" }}>
          Здоровое тело раз и навсегда
        </h1>
        <p style={{ fontFamily: FONT_S, fontSize: 17, lineHeight: 1.6, color: "#333", maxWidth: 480, marginBottom: 40 }}>
          Тело, полное энергии, без болей и зажимов. Персональный план через питание, сон, восстановление и грамотные тренировки — под твою жизнь, не под шаблон.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, paddingTop: 32, borderTop: "1px solid rgba(0,0,0,0.12)" }}>
          {[["6+", "лет опыта"], ["50+", "результатов"], ["100%", "онлайн"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: FONT_D, fontSize: 36, lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: FONT_S, fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: GRAY, marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </>)}
    </section>
  );
}

/* ── FOR WHO ── */
function ForWho() {
  const items = [
    { n: "01", t: "Устали от тяжести в теле", d: "Низкая энергия, постоянная усталость. Хочется просыпаться с лёгкостью." },
    { n: "02", t: "Пробовали всё — безрезультатно", d: "Диеты, марафоны, зал без тренера. Нужна система, которая станет образом жизни." },
    { n: "03", t: "Не знаете, с чего начать", d: "Слишком много противоречивой информации. Нужен чёткий план." },
  ];
  return (
    <section style={{ background: CARD, padding: "60px 20px" }}>
      {wrap(<>
        <h2 style={{ fontFamily: FONT_D, fontSize: "clamp(36px, 9vw, 64px)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 40px" }}>
          Это для тебя, если…
        </h2>
        {items.map(item => (
          <div key={item.n} style={{ display: "flex", gap: 20, padding: "20px 0", borderTop: "1px solid rgba(0,0,0,0.15)" }}>
            <span style={{ fontFamily: FONT_S, fontSize: 12, color: GRAY, minWidth: 30, paddingTop: 3 }}>{item.n}</span>
            <div>
              <div style={{ fontFamily: FONT_D, fontSize: 20, textTransform: "uppercase", marginBottom: 6 }}>{item.t}</div>
              <div style={{ fontFamily: FONT_S, fontSize: 14, lineHeight: 1.6, color: "#444" }}>{item.d}</div>
            </div>
          </div>
        ))}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.15)" }} />
      </>)}
    </section>
  );
}

/* ── RESULTS ── */
function Results() {
  const items = [
    "Лёгкое, энергичное тело",
    "Ровная осанка без боли",
    "Зал или дом — безопасно",
    "Глубокий сон и восстановление",
    "Питание без диет",
    "Форма после родов",
  ];
  return (
    <section style={{ background: BG, padding: "60px 20px" }}>
      {wrap(<>
        <h2 style={{ fontFamily: FONT_D, fontSize: "clamp(36px, 9vw, 64px)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 40px" }}>
          Что ты почувствуешь
        </h2>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderTop: "1px solid rgba(0,0,0,0.12)" }}>
            <span style={{ fontFamily: FONT_S, fontSize: 16, fontWeight: 500 }}>{item}</span>
            <span style={{ color: GRAY }}>✓</span>
          </div>
        ))}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }} />
      </>)}
    </section>
  );
}

/* ── CASES ── */
function Cases() {
  return (
    <section style={{ background: CARD, padding: "60px 20px" }}>
      {wrap(<>
        <h2 style={{ fontFamily: FONT_D, fontSize: "clamp(40px, 10vw, 72px)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 40px" }}>
          Кейсы клиентов
        </h2>

        {/* Case 1 */}
        <div style={{ background: BG, padding: "28px 24px", marginBottom: 12 }}>
          <div style={{ fontFamily: FONT_S, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: GRAY, marginBottom: 8 }}>
            Результат за 3 месяца
          </div>
          <div style={{ fontFamily: FONT_D, fontSize: 28, textTransform: "uppercase", marginBottom: 20 }}>Елена, 26 лет</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
            <div style={{ background: "#f5ede9", padding: 16 }}>
              <div style={{ fontFamily: FONT_S, fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: "#c0603d", marginBottom: 10 }}>Было</div>
              {["Боли в спине и шее", "Нет времени", "Вегетарианка"].map(p => (
                <div key={p} style={{ fontFamily: FONT_S, fontSize: 13, color: "#444", marginBottom: 6 }}>· {p}</div>
              ))}
            </div>
            <div style={{ background: "#edf0e9", padding: 16 }}>
              <div style={{ fontFamily: FONT_S, fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: "#4a5c3d", marginBottom: 10 }}>Стало</div>
              {["Боли ушли", "+5 кг мышц", "Уверенность"].map(r => (
                <div key={r} style={{ fontFamily: FONT_S, fontSize: 13, color: "#444", marginBottom: 6 }}>✓ {r}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Case 2 */}
        <div style={{ background: DARK, padding: "28px 24px", color: "#F0EDE6" }}>
          <div style={{ fontFamily: FONT_S, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: GRAY, marginBottom: 8 }}>
            Блогер · 100К+ подписчиков
          </div>
          <div style={{ fontFamily: FONT_D, fontSize: 28, textTransform: "uppercase", marginBottom: 8 }}>Женя Долинина</div>
          <div style={{ fontFamily: FONT_S, fontSize: 13, color: GRAY, marginBottom: 16 }}>@jenny.ration · беременность</div>
          <p style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 17, lineHeight: 1.6, color: "rgba(240,237,230,0.85)", margin: 0 }}>
            «Тренируется со мной через всю беременность. Безопасный подход, контроль нагрузки, подготовка тела к родам»
          </p>
        </div>
      </>)}
    </section>
  );
}

/* ── PREGNANCY ── */
function Pregnancy() {
  return (
    <section style={{ background: BG, padding: "60px 20px" }}>
      {wrap(<>
        <h2 style={{ fontFamily: FONT_D, fontSize: "clamp(36px, 9vw, 60px)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 16px" }}>
          Беременность и восстановление после родов
        </h2>
        <p style={{ fontFamily: FONT_S, fontSize: 15, color: GRAY, marginBottom: 32, lineHeight: 1.6 }}>
          Одно из моих сильнейших направлений.
        </p>
        {[
          { q: "«Боюсь навредить ребёнку»", a: "Безопасные нагрузки с учётом триместра. Работаем только с проверенными упражнениями." },
          { q: "«Нет сил, слишком устаю»", a: "Лёгкие тренировки дают энергию, а не забирают." },
          { q: "«Не знаю, что можно, а что нельзя»", a: "Я знаю. Составлю план под срок и особенности. Работа с диастазом, тазовое дно." },
        ].map((item, i) => (
          <div key={i} style={{ padding: "20px 0", borderTop: "1px solid rgba(0,0,0,0.12)" }}>
            <div style={{ fontFamily: FONT_S, fontSize: 14, color: GRAY, textDecoration: "line-through", marginBottom: 8 }}>{item.q}</div>
            <div style={{ fontFamily: FONT_S, fontSize: 15, lineHeight: 1.6, color: "#333" }}>✓ {item.a}</div>
          </div>
        ))}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }} />
      </>)}
    </section>
  );
}

/* ── FAQ ── */
const FAQS = [
  { q: "У меня нет времени на тренировки", a: "Программа адаптируется под ваш график. Кому-то хватает 3 тренировок по 40 минут в неделю, кому-то — короткие домашние сессии." },
  { q: "Онлайн-тренер — это несерьёзно", a: "Я разбираю каждое ваше видео, отмечаю ошибки. При необходимости подключаемся через Zoom. Многие получают больше внимания, чем с тренером в зале." },
  { q: "Есть проблемы со здоровьем — мне можно?", a: "В большинстве случаев — да. Работаю с учётом ограничений: суставы, спина, травмы, беременность." },
  { q: "Как быстро будет результат?", a: "Самочувствие меняется через 2–3 недели. Визуальные изменения — через 2–3 месяца. Устойчивый результат, который останется с вами." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ background: CARD, padding: "60px 20px" }}>
      {wrap(<>
        <h2 style={{ fontFamily: FONT_D, fontSize: "clamp(36px, 9vw, 60px)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 40px" }}>
          Частые вопросы
        </h2>
        {FAQS.map((f, i) => (
          <div key={i} style={{ borderTop: "1px solid rgba(0,0,0,0.15)" }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "20px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}
            >
              <span style={{ fontFamily: FONT_D, fontSize: 18, textTransform: "uppercase" }}>{f.q}</span>
              <span style={{ fontSize: 24, flexShrink: 0, color: GRAY, transition: "transform 0.2s", transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
            </button>
            {open === i && (
              <div style={{ fontFamily: FONT_S, fontSize: 15, lineHeight: 1.6, color: "#444", paddingBottom: 20 }}>{f.a}</div>
            )}
          </div>
        ))}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.15)" }} />
      </>)}
    </section>
  );
}

/* ── PRICING ── */
function Pricing() {
  return (
    <section id="pricing" style={{ background: BG, padding: "60px 20px" }}>
      {wrap(<>
        <h2 style={{ fontFamily: FONT_D, fontSize: "clamp(36px, 9vw, 60px)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 40px" }}>
          Форматы работы
        </h2>
        {[
          { n: "1", t: "Консультация", sub: "Первый шаг", price: "4 990 ₽", period: "разово", items: ["Анализ образа жизни и целей", "Тесты осанки", "Комплекс упражнений 10–15 мин/день", "Рекомендации по питанию"] },
          { n: "2", t: "Выстрой базу", sub: "Системная работа", price: "14 990 ₽", period: "/ месяц", items: ["Индивидуальная программа тренировок", "Разбор техники по видео", "План питания и восстановления", "1–2 созвона в месяц", "Ежедневная поддержка"] },
          { n: "3", t: "VIP с врачом", sub: "Максимальный результат", price: "от 24 990 ₽", period: "/ месяц", items: ["Всё из «Выстрой базу»", "Тренировки 1 на 1", "Работа с врачом по анализам", "Подбор БАДов"] },
        ].map(plan => (
          <div key={plan.n} style={{ background: CARD, padding: "28px 24px", marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: FONT_S, fontSize: 11, color: GRAY, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{plan.sub}</div>
                <div style={{ fontFamily: FONT_D, fontSize: 24, textTransform: "uppercase" }}>{plan.n}. {plan.t}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: FONT_D, fontSize: 28 }}>{plan.price}</div>
                <div style={{ fontFamily: FONT_S, fontSize: 11, color: GRAY }}>{plan.period}</div>
              </div>
            </div>
            {plan.items.map(item => (
              <div key={item} style={{ fontFamily: FONT_S, fontSize: 14, color: "#444", padding: "8px 0", borderTop: "1px solid rgba(0,0,0,0.08)", display: "flex", gap: 10 }}>
                <span style={{ color: GRAY }}>·</span>{item}
              </div>
            ))}
            <a href="https://t.me/sofiapolenova" target="_blank" rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", fontFamily: FONT_S, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", padding: "16px 24px", border: `2px solid ${DARK}`, color: DARK, textDecoration: "none", background: "transparent", marginTop: 20 }}>
              Записаться →
            </a>
          </div>
        ))}
      </>)}
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer style={{ background: DARK, color: "#F0EDE6", padding: "40px 20px", textAlign: "center" }}>
      <div style={{ fontFamily: FONT_D, fontSize: 32, marginBottom: 24 }}>SOFIA POLENOVA</div>
      <a href="https://t.me/sofiapolenova" target="_blank" rel="noopener noreferrer"
        style={{ display: "block", maxWidth: 400, margin: "0 auto 12px", fontFamily: FONT_S, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", padding: "16px 24px", border: "2px solid rgba(255,255,255,0.3)", color: "#F0EDE6", textDecoration: "none" }}>
        Telegram
      </a>
      <div style={{ fontFamily: FONT_S, fontSize: 12, color: GRAY, marginTop: 24 }}>© 2026 Тренер и нутрициолог</div>
    </footer>
  );
}

export default function CoachingPage() {
  return (
    <main style={{ background: BG, fontFamily: FONT_S }}>
      <Nav />
      <Hero />
      <ForWho />
      <Results />
      <Cases />
      <Pregnancy />
      <FAQ />
      <Pricing />
      <Footer />
    </main>
  );
}
