"use client";
import { useState, useRef, useEffect } from "react";
import type { Metadata } from "next";

const S = {
  page: { background: "#F0EDE6", minHeight: "100vh", fontFamily: "var(--font-sans)" } as React.CSSProperties,
  nav: { borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" } as React.CSSProperties,
  back: { fontFamily: "var(--font-sans)", fontSize: 13, textDecoration: "none", color: "#666", letterSpacing: 1 } as React.CSSProperties,
  logo: { fontFamily: "'Anton', sans-serif", fontSize: 16, letterSpacing: 1, color: "#0A0A0A", textDecoration: "none" } as React.CSSProperties,
  wrap: { maxWidth: 600, margin: "0 auto", padding: "40px 20px 80px" } as React.CSSProperties,
  h1: { fontFamily: "'Anton', sans-serif", fontSize: "clamp(48px, 12vw, 80px)", textTransform: "uppercase" as const, lineHeight: 0.95, margin: "0 0 24px", letterSpacing: -1 },
  h2: { fontFamily: "'Anton', sans-serif", fontSize: "clamp(22px, 6vw, 32px)", textTransform: "uppercase" as const, margin: "0 0 20px", letterSpacing: 0.5 },
  lead: { fontSize: "clamp(16px, 4vw, 18px)", lineHeight: 1.7, color: "#333", marginBottom: 0 } as React.CSSProperties,
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
    <div ref={ref} style={{ opacity: 0, transform: "translateY(48px)", transition: `opacity 1.1s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 1.1s cubic-bezier(0.22,1,0.36,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

const STEPS = [
  {
    num: "01",
    title: "Анкета",
    text: "Ты заполняешь анкету — я собираю данные о твоём образе жизни, целях, ограничениях и опыте. Это основа для всей дальнейшей работы.",
  },
  {
    num: "02",
    title: "Установочная сессия",
    text: "Проводим созвон, где вместе определяемся с целями и задачами на период работы. Я задаю вопросы, ты рассказываешь — в результате у нас общее понимание куда идём.",
  },
  {
    num: "03",
    title: "План работы",
    text: "Составляю индивидуальный план: сколько раз в неделю занимаемся, пишу программу тренировок под твои цели и возможности.",
  },
  {
    num: "04",
    title: "Ежедневные отчёты",
    text: "Каждый день ты скидываешь мне отчёт в чат — что ела, сколько спала, сколько шагов. Это позволяет мне видеть полную картину и реагировать вовремя.",
  },
  {
    num: "05",
    title: "Сопровождение",
    text: "Облегчаю весь процесс: пишу продуктовую корзину, придумываем как внедрить пищевые привычки без стресса. Я рядом на каждом этапе.",
  },
];

const INCLUDES = [
  {
    icon: "🏋️",
    title: "Тренировки",
    items: [
      "Персональная программа под твои цели и уровень подготовки",
      "Каждая тренировка уникальна — могут сочетаться силовые, пилатес, растяжка",
      "Веду в реальном времени онлайн — ставлю технику, корректирую движения",
      "Подходит для новичков и тех, кто возвращается после перерыва",
    ],
  },
  {
    icon: "🍽",
    title: "Питание",
    items: [
      "Не готовое меню и не подсчёт КБЖУ",
      "Учу правильно выбирать продукты и распределять их в течение дня",
      "Пишу продуктовую корзину, помогаю выстроить привычки постепенно",
      "Учитываю любые ограничения: вегетарианство, непереносимости, аллергии",
    ],
  },
  {
    icon: "💬",
    title: "Поддержка",
    items: [
      "Безлимитная связь по вопросам тренировок и питания",
      "Разбор отчётов и корректировка плана по ходу",
      "При необходимости подключаю врача, нутрициолога или психолога",
      "Работа с анализами крови — подбор БАДов и препаратов",
    ],
  },
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
            4. Личная работа
          </div>
          <h1 style={S.h1}>Личная<br />работа</h1>
          <p style={{ ...S.lead, marginBottom: 0 }}>
            Персональное ведение онлайн или офлайн — для тех, кто хочет устойчивых изменений с индивидуальным подходом.
          </p>
        </FadeIn>

        <div style={S.divider} />

        {/* Почему ведение */}
        <FadeIn>
          <h2 style={S.h2}>Почему ведение,<br />а не просто тренировки?</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p style={{ ...S.lead, marginBottom: 16 }}>
            Персоналки часто ограничиваются только тренировкой 1 на 1 — она даже в большинстве случаев не отличается от групповой. Тебе просто уделяют чуть больше времени. И всё.
          </p>
          <p style={{ ...S.lead, marginBottom: 16 }}>
            Одна тренировка не работает — работает систематика. Результат будет только в системе.
          </p>
          <p style={{ ...S.lead }}>
            В формате ведения ты получаешь конкретные индивидуальные действия только для себя — с учётом особенностей твоего организма, ритма жизни и уровня подготовки.
          </p>
        </FadeIn>

        <div style={S.divider} />

        {/* Как мы работаем */}
        <FadeIn>
          <h2 style={S.h2}>Как мы работаем</h2>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column" as const }}>
          {STEPS.map((step, i) => (
            <FadeIn key={step.num} delay={i * 100}>
              <div style={{ display: "flex", gap: 20, padding: "20px 0", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
                <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 13, color: "#bbb", letterSpacing: 1, flexShrink: 0, paddingTop: 3 }}>{step.num}</div>
                <div>
                  <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15, margin: "0 0 6px", color: "#0A0A0A" }}>{step.title}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#555", margin: 0, lineHeight: 1.65 }}>{step.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div style={S.divider} />

        {/* Что входит */}
        <FadeIn>
          <h2 style={S.h2}>Что входит</h2>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
          {INCLUDES.map((block, i) => (
            <FadeIn key={block.title} delay={i * 120}>
              <div style={{ background: "#E3E0D8", padding: "24px", borderRadius: 4 }}>
                <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 18, textTransform: "uppercase" as const, margin: "0 0 16px" }}>
                  {block.icon} {block.title}
                </p>
                {block.items.map(item => (
                  <div key={item} style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: "1px solid rgba(0,0,0,0.08)", fontSize: 14, color: "#333", lineHeight: 1.5 }}>
                    <span style={{ color: "#888", flexShrink: 0 }}>✓</span>{item}
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

        <div style={S.divider} />

        {/* Результаты */}
        <FadeIn>
          <h2 style={S.h2}>Каких результатов ждать?</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p style={{ ...S.lead, marginBottom: 16 }}>
            В среднем за первый месяц потеря веса — до 4 кг, в зависимости от того, насколько серьёзно ты относишься к процессу. Норма — 2–4 кг в месяц.
          </p>
          <p style={{ ...S.lead, marginBottom: 16 }}>
            Помимо цифр на весах: ты научишься правильно выбирать продукты и самостоятельно выстраивать питание для себя. Почувствуешь тонус и укрепление мышц, прилив энергии и нормализацию обменных процессов.
          </p>
          <p style={{ ...S.lead }}>
            От первых результатов — зарядишься мотивацией двигаться дальше.
          </p>
        </FadeIn>

        <div style={S.divider} />

        {/* Цены */}
        <FadeIn>
          <h2 style={S.h2}>Стоимость</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "20px 0", borderTop: "1px solid rgba(0,0,0,0.1)", gap: 16 }}>
              <div>
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, margin: "0 0 6px" }}>Разовая тренировка</p>
                <p style={{ fontSize: 13, color: "#666", margin: 0, lineHeight: 1.5 }}>60 минут онлайн, постановка техники, разбор вопросов по питанию</p>
              </div>
              <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 26, flexShrink: 0 }}>5 000 ₽</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "20px 0", borderTop: "1px solid rgba(0,0,0,0.1)", gap: 16 }}>
              <div>
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, margin: "0 0 6px" }}>Месяц личного ведения</p>
                <p style={{ fontSize: 13, color: "#666", margin: 0, lineHeight: 1.5 }}>Программа тренировок + сопровождение по питанию + ежедневная связь + корректировка плана</p>
              </div>
              <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 26, flexShrink: 0 }}>30 000 ₽</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "20px 24px", gap: 16, background: "#1e2e1a", margin: "0 -24px", borderRadius: 4 }}>
              <div>
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, margin: "0 0 4px", color: "#fff" }}>Максимальный результат</p>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" as const, color: "rgba(255,255,255,0.45)", margin: "0 0 8px" }}>VIP-сопровождение с врачом</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.5 }}>Всё из базового ведения + онлайн-тренировки 1 на 1 + работа с врачом по анализам + подбор БАДов и препаратов + приоритетная поддержка</p>
              </div>
              <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 26, flexShrink: 0, color: "#fff" }}>от 24 990 ₽</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <a href="https://t.me/sofiapolenova" target="_blank" rel="noopener noreferrer" style={S.btn}>
            Записаться →
          </a>
          <a href="https://t.me/SofiaPolenova_bot?start=zhivot" target="_blank" rel="noopener noreferrer" style={S.btnOutline}>
            Сначала попробовать бесплатно
          </a>
        </FadeIn>

        {/* Документы */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", marginTop: 48, paddingTop: 28, display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 10, textAlign: "center" as const }}>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" as const, justifyContent: "center" }}>
            <a href="/oferta" style={{ fontSize: 12, color: "#aaa", textDecoration: "underline", textUnderlineOffset: 3 }}>Договор оферты</a>
            <a href="/privacy" style={{ fontSize: 12, color: "#aaa", textDecoration: "underline", textUnderlineOffset: 3 }}>Политика конфиденциальности</a>
            <a href="/consent" style={{ fontSize: 12, color: "#aaa", textDecoration: "underline", textUnderlineOffset: 3 }}>Согласие на обработку ПД</a>
          </div>
          <p style={{ fontSize: 11, color: "#ccc", margin: "4px 0 0" }}>ИП Поленова Софья Николаевна · ИНН 440117728694 · ОГРНИП 323440000001972</p>
          <p style={{ fontSize: 11, color: "#ccc", margin: 0 }}>© 2025 Поленова Софья Николаевна. Все права защищены.</p>
        </div>
      </div>
    </main>
  );
}
