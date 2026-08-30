"use client";
import { useState } from "react";

/* ─────────────────────────────────────────────
   ГРУППОВЫЕ ТРЕНИРОВКИ — ШАБЛОН
   Черновая структура. Софья, заполни блоки,
   помеченные [ ... ] и комментариями TODO.
   ───────────────────────────────────────────── */

const BG = "#F0EDE6";
const CARD = "#E3E0D8";
const DARK = "#0A0A0A";
const GREEN = "#4a6b3a";
const GRAY = "#666";
const FONT_D = "'Anton', sans-serif";
const FONT_S = "'Inter', sans-serif";

const TG_SOFIA = "https://t.me/sofiapolenova";

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

const eyebrow: React.CSSProperties = { fontFamily: FONT_S, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: GRAY, marginBottom: 12 };
const h2: React.CSSProperties = { fontFamily: FONT_D, fontSize: "clamp(28px, 8vw, 48px)", textTransform: "uppercase", lineHeight: 1.05, margin: "0 0 24px" };
const lead: React.CSSProperties = { fontFamily: FONT_S, fontSize: 17, lineHeight: 1.65, color: "#333" };
const listItem: React.CSSProperties = { fontFamily: FONT_S, fontSize: 14, color: "#333", padding: "10px 0", borderBottom: "1px solid rgba(0,0,0,0.08)", display: "flex", gap: 10, lineHeight: 1.5 };
const btnDark: React.CSSProperties = { display: "block", textAlign: "center", fontFamily: FONT_S, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", padding: "18px 24px", color: "#F0EDE6", textDecoration: "none", background: DARK };

/* ── HERO ── */
function Hero() {
  return (
    <section style={{ background: BG, padding: "48px 20px 56px" }}>
      {wrap(<>
        <div style={eyebrow}>Групповые тренировки</div>
        <h1 style={{ fontFamily: FONT_D, fontSize: "clamp(44px, 12vw, 84px)", textTransform: "uppercase", lineHeight: 0.98, margin: "0 0 24px" }}>
          Групповые<br />тренировки
        </h1>
        {/* TODO Софья: 1–2 абзаца — что это за формат и для кого */}
        <p style={{ ...lead, maxWidth: 480, marginBottom: 28 }}>
          Живые онлайн-тренировки в небольшой группе. Занимаемся вместе по расписанию,
          я ставлю технику и держу нагрузку безопасной. Между занятиями — записи и чат
          с обратной связью. [дополнить]
        </p>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
          <span style={{ fontFamily: FONT_D, fontSize: 40, lineHeight: 1 }}>от 8 000 ₽</span>
          <span style={{ fontFamily: FONT_S, fontSize: 14, color: GRAY }}>в месяц · ≈ $90</span>
        </div>
        <p style={{ fontFamily: FONT_S, fontSize: 13, color: GRAY, margin: "0 0 28px" }}>
          Первая тренировка — бесплатно.
        </p>
        <a href={TG_SOFIA} target="_blank" rel="noopener noreferrer" style={btnDark}>
          Написать Софье →
        </a>
      </>)}
    </section>
  );
}

/* ── КАК ЭТО УСТРОЕНО ── */
function How() {
  // TODO Софья: подставь реальные цифры вместо [ ... ]
  const rows: [string, string][] = [
    ["Формат", "Живые тренировки в Zoom + записи в личном кабинете"],
    ["Расписание", "[дни недели] · [время] МСК"],
    ["Длительность", "[45–60] минут"],
    ["Размер группы", "до [8–10] человек"],
    ["Уровень", "Подходит новичкам — все упражнения адаптируются"],
    ["Оборудование", "[коврик; резинки — по желанию]"],
  ];
  return (
    <section style={{ background: CARD, padding: "56px 20px" }}>
      {wrap(<>
        <h2 style={h2}>Как это устроено</h2>
        <div>
          {rows.map(([k, v]) => (
            <div key={k} style={{ display: "flex", gap: 16, padding: "16px 0", borderTop: "1px solid rgba(0,0,0,0.12)" }}>
              <span style={{ fontFamily: FONT_S, fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: GREEN, minWidth: 110, flexShrink: 0, paddingTop: 2 }}>{k}</span>
              <span style={{ fontFamily: FONT_S, fontSize: 15, color: "#333", lineHeight: 1.5 }}>{v}</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }} />
        </div>
      </>)}
    </section>
  );
}

/* ── ЧТО ВХОДИТ ── */
function Includes() {
  // TODO Софья: финальный список того, что получает участница
  const items = [
    "Живые групповые тренировки по расписанию",
    "Записи всех тренировок — можно заниматься когда удобно",
    "Разбор техники и обратная связь в чате группы",
    "Новый фокус каждые [4] недели",
    "Ответы на вопросы по тренировкам и телу",
    "[подкасты / материалы по питанию — если входит]",
  ];
  return (
    <section style={{ background: BG, padding: "56px 20px" }}>
      {wrap(<>
        <h2 style={h2}>Что входит</h2>
        <div style={{ background: CARD, padding: "8px 24px 16px" }}>
          {items.map((it) => (
            <div key={it} style={listItem}><span style={{ color: GREEN, flexShrink: 0 }}>✓</span>{it}</div>
          ))}
        </div>
      </>)}
    </section>
  );
}

/* ── КОМУ ПОДХОДИТ ── */
function ForWho() {
  return (
    <section style={{ background: CARD, padding: "56px 20px" }}>
      {wrap(<>
        <h2 style={h2}>Кому подходит</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
          <div style={{ background: BG, padding: "20px 22px" }}>
            <div style={{ fontFamily: FONT_S, fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: GREEN, marginBottom: 12 }}>Подойдёт</div>
            {/* TODO Софья */}
            {["Хочешь регулярность и поддержку группы", "Занималась сама, но не хватает системы", "Нужна безопасная техника и внимание тренера", "Комфортно заниматься онлайн из дома"].map(t => (
              <div key={t} style={{ fontFamily: FONT_S, fontSize: 14, color: "#333", padding: "7px 0", lineHeight: 1.5 }}>· {t}</div>
            ))}
          </div>
          <div style={{ background: BG, padding: "20px 22px" }}>
            <div style={{ fontFamily: FONT_S, fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: "#c0603d", marginBottom: 12 }}>Лучше выбрать другой формат</div>
            {/* TODO Софья */}
            {["Нужна полностью индивидуальная программа → «Личная работа»", "Хочешь заниматься по своему графику без созвонов → «По моим программам»", "[…]"].map(t => (
              <div key={t} style={{ fontFamily: FONT_S, fontSize: 14, color: "#333", padding: "7px 0", lineHeight: 1.5 }}>· {t}</div>
            ))}
          </div>
        </div>
      </>)}
    </section>
  );
}

/* ── СТОИМОСТЬ ── */
function Price() {
  return (
    <section style={{ background: BG, padding: "56px 20px" }}>
      {wrap(<>
        <h2 style={h2}>Стоимость</h2>
        <div style={{ fontFamily: FONT_D, fontSize: 56, lineHeight: 1, marginBottom: 4 }}>от 8 000 ₽</div>
        <div style={{ fontFamily: FONT_S, fontSize: 13, color: GRAY, letterSpacing: 1, textTransform: "uppercase", marginBottom: 20 }}>
          в месяц · ≈ $90
        </div>
        {/* TODO Софья: условия оплаты */}
        <p style={{ fontFamily: FONT_S, fontSize: 13, color: GRAY, margin: "0 0 28px", lineHeight: 1.6 }}>
          [оплата помесячно; отменить можно в любой момент; что входит в «от» и от чего зависит цена]
        </p>
        <a href={TG_SOFIA} target="_blank" rel="noopener noreferrer" style={btnDark}>
          Написать Софье →
        </a>
      </>)}
    </section>
  );
}

/* ─────────────────────────────────────────────
   ТЕСТ НА ФОРМАТ ТРЕНИРОВОК
   ───────────────────────────────────────────── */

type Q = { key: string; q: string; options: { icon: string; label: string }[] };

const QUESTIONS: Q[] = [
  {
    key: "Цель",
    q: "Какая у тебя главная цель?",
    options: [
      { icon: "⚖️", label: "Похудеть и избавиться от лишнего веса" },
      { icon: "💪", label: "Набрать мышечную массу и улучшить рельеф" },
      { icon: "❤️", label: "Улучшить здоровье, убрать боли, больше энергии" },
      { icon: "🤰", label: "Подготовка к беременности или восстановление после родов" },
    ],
  },
  {
    key: "Формат",
    q: "Как тебе комфортнее заниматься?",
    options: [
      { icon: "🧑‍🏫", label: "1 на 1 с тренером" },
      { icon: "📝", label: "Самостоятельно, но с обратной связью" },
      { icon: "👯", label: "Онлайн в группе" },
      { icon: "🤔", label: "Пока не знаю" },
    ],
  },
  {
    key: "Опыт",
    q: "Какой у тебя опыт тренировок?",
    options: [
      { icon: "🌱", label: "Новичок — почти не занималась" },
      { icon: "🔁", label: "Занималась раньше, был перерыв" },
      { icon: "🏃‍♀️", label: "Занимаюсь регулярно" },
    ],
  },
  {
    key: "Питание",
    q: "Нужны консультации по питанию?",
    options: [
      { icon: "🥗", label: "Да, это важно" },
      { icon: "🙂", label: "Было бы плюсом" },
      { icon: "🙅‍♀️", label: "Нет, только тренировки" },
    ],
  },
  {
    key: "Частота",
    q: "Сколько раз в неделю готова заниматься?",
    options: [
      { icon: "1️⃣", label: "1–2 раза" },
      { icon: "3️⃣", label: "3–4 раза" },
      { icon: "🔥", label: "Почти каждый день" },
    ],
  },
];

function buildTelegramLink(answers: Record<string, string>) {
  const lines = QUESTIONS.map((q) => `• ${q.key}: ${answers[q.key] ?? "—"}`).join("\n");
  const msg = `Привет, Софья! Прошла тест на формат тренировок.\n${lines}`;
  return `${TG_SOFIA}?text=${encodeURIComponent(msg)}`;
}

function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [link, setLink] = useState("");

  const total = QUESTIONS.length;

  function choose(label: string) {
    const q = QUESTIONS[step];
    const next = { ...answers, [q.key]: label };
    setAnswers(next);
    if (step < total - 1) {
      setStep(step + 1);
    } else {
      const tg = buildTelegramLink(next);
      setLink(tg);
      setDone(true);
      // сразу открываем Telegram с подставленными ответами
      window.open(tg, "_blank", "noopener,noreferrer");
    }
  }

  const dotWrap: React.CSSProperties = { display: "flex", gap: 8, justifyContent: "center", margin: "0 0 36px" };

  if (done) {
    return (
      <div style={{ textAlign: "center", padding: "12px 0 8px" }}>
        <div style={{ fontSize: 34, marginBottom: 12 }}>✅</div>
        <p style={{ fontFamily: FONT_S, fontSize: 16, lineHeight: 1.6, color: "#333", margin: "0 0 20px" }}>
          Спасибо! Открываю Telegram с твоими ответами.<br />
          Если чат не открылся — нажми кнопку.
        </p>
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ ...btnDark, display: "inline-block", padding: "16px 32px" }}>
          Открыть чат с Софьей →
        </a>
      </div>
    );
  }

  const q = QUESTIONS[step];

  return (
    <div>
      <div style={dotWrap}>
        {QUESTIONS.map((_, i) => (
          <span
            key={i}
            style={{
              width: i === step ? 26 : 9,
              height: 9,
              borderRadius: 5,
              background: i === step ? "#c0603d" : i < step ? GREEN : "rgba(0,0,0,0.15)",
              transition: "all 0.2s",
            }}
          />
        ))}
      </div>

      <p style={{ fontFamily: FONT_S, fontSize: 12, color: GRAY, textAlign: "center", margin: "0 0 12px" }}>
        Вопрос {step + 1} из {total}
      </p>
      <h3 style={{ fontFamily: FONT_D, fontSize: "clamp(22px, 6vw, 32px)", textTransform: "uppercase", textAlign: "center", lineHeight: 1.15, margin: "0 0 28px" }}>
        {q.q}
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {q.options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => choose(opt.label)}
            style={{
              display: "flex", alignItems: "center", gap: 16, width: "100%", textAlign: "left",
              background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 14,
              padding: "18px 20px", cursor: "pointer", fontFamily: FONT_S,
            }}
          >
            <span style={{
              width: 44, height: 44, borderRadius: 10, background: "#EFEODF", flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
            }}>
              {opt.icon}
            </span>
            <span style={{ fontSize: 15, color: "#0A0A0A", lineHeight: 1.4 }}>{opt.label}</span>
          </button>
        ))}
      </div>

      {step > 0 && (
        <button
          onClick={() => setStep(step - 1)}
          style={{ background: "none", border: "none", cursor: "pointer", fontFamily: FONT_S, fontSize: 13, color: GRAY, marginTop: 20, padding: 4 }}
        >
          ‹ Назад
        </button>
      )}
    </div>
  );
}

function QuizSection() {
  return (
    <section id="test" style={{ background: "#E8EDE4", padding: "60px 20px 72px" }}>
      {wrap(<>
        <div style={{ ...eyebrow, textAlign: "center", color: GREEN }}>Подберём формат</div>
        <h2 style={{ ...h2, textAlign: "center", margin: "0 0 12px" }}>
          Не уверена, что выбрать?
        </h2>
        <p style={{ fontFamily: FONT_S, fontSize: 15, color: GRAY, textAlign: "center", margin: "0 0 40px", lineHeight: 1.6 }}>
          Ответь на 5 вопросов — я пойму твой формат и напишу тебе в Telegram.
        </p>
        <Quiz />
      </>)}
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer style={{ background: DARK, color: "#F0EDE6", padding: "40px 20px", textAlign: "center" }}>
      <div style={{ fontFamily: FONT_D, fontSize: 32, marginBottom: 24 }}>SOFIA POLENOVA</div>
      <a href={TG_SOFIA} target="_blank" rel="noopener noreferrer"
        style={{ display: "block", maxWidth: 400, margin: "0 auto 12px", fontFamily: FONT_S, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", padding: "16px 24px", border: "2px solid rgba(255,255,255,0.3)", color: "#F0EDE6", textDecoration: "none" }}>
        Telegram
      </a>
      <div style={{ display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "center", marginTop: 20 }}>
        <a href="/oferta" style={{ fontFamily: FONT_S, fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "underline", textUnderlineOffset: 3 }}>Оферта</a>
        <a href="/privacy" style={{ fontFamily: FONT_S, fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "underline", textUnderlineOffset: 3 }}>Политика конфиденциальности</a>
        <a href="/consent" style={{ fontFamily: FONT_S, fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "underline", textUnderlineOffset: 3 }}>Согласие на обработку ПД</a>
      </div>
      <div style={{ fontFamily: FONT_S, fontSize: 12, color: GRAY, marginTop: 20 }}>© 2026 Поленова Софья Николаевна</div>
    </footer>
  );
}

export default function GroupPage() {
  return (
    <main style={{ background: BG, fontFamily: FONT_S }}>
      <Nav />
      <Hero />
      <How />
      <Includes />
      <ForWho />
      <Price />
      <QuizSection />
      <Footer />
    </main>
  );
}
