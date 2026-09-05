"use client";
import { useState } from "react";

const GREEN = "#4a6b3a";
const DARK = "#0A0A0A";
const GRAY = "#666";
const FONT_D = "var(--font-display)";
const FONT_S = "var(--font-sans)";

const TG = "https://t.me/some_sofiasupport";

type Q = { key: string; q: string; options: { icon: string; label: string }[] };

const QUESTIONS: Q[] = [
  {
    key: "Цель",
    q: "Какая у тебя главная цель?",
    options: [
      { icon: "🤰", label: "Подготовка к беременности или восстановление после родов" },
      { icon: "🌱", label: "Ввести движение в привычку" },
      { icon: "🧘", label: "Избавиться от сутулости, гиперлордоза и сделать плоский живот" },
      { icon: "💪", label: "Прогрессировать в зале, добиваться рельефа" },
    ],
  },
  {
    key: "Формат",
    q: "Как тебе комфортнее заниматься?",
    options: [
      { icon: "🎯", label: "Хочу работать 1 на 1 онлайн" },
      { icon: "👯", label: "В небольшой группе" },
      { icon: "📋", label: "Самостоятельно по готовой программе, но с обратной связью" },
      { icon: "🤔", label: "Пока не знаю, нужна консультация" },
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
      { icon: "🙅‍♀️", label: "Нет, только тренировки" },
    ],
  },
];

function buildTelegramLink(answers: Record<string, string>) {
  const lines = QUESTIONS.map((q) => `• ${q.key}: ${answers[q.key] ?? "—"}`).join("\n");
  const msg = `Привет, Софья! Прошла тест на формат тренировок.\n${lines}`;
  return `${TG}?text=${encodeURIComponent(msg)}`;
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
      window.open(tg, "_blank", "noopener,noreferrer");
    }
  }

  if (done) {
    return (
      <div style={{ textAlign: "center", padding: "12px 0 8px" }}>
        <div style={{ fontSize: 34, marginBottom: 12 }}>✅</div>
        <p style={{ fontFamily: FONT_S, fontSize: 16, lineHeight: 1.6, color: "#333", margin: "0 0 20px" }}>
          Спасибо! Открываю Telegram с твоими ответами.<br />
          Если чат не открылся — нажми кнопку.
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", fontFamily: FONT_S, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", padding: "16px 32px", background: GREEN, color: "#fff", textDecoration: "none" }}
        >
          Открыть чат с Софьей →
        </a>
      </div>
    );
  }

  const q = QUESTIONS[step];

  return (
    <div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", margin: "0 0 32px" }}>
        {QUESTIONS.map((_, i) => (
          <span
            key={i}
            style={{
              width: i === step ? 26 : 9,
              height: 9,
              background: i === step ? GREEN : i < step ? "rgba(74,107,58,0.5)" : "rgba(0,0,0,0.15)",
              transition: "all 0.2s",
            }}
          />
        ))}
      </div>

      <p style={{ fontFamily: FONT_S, fontSize: 12, color: GRAY, textAlign: "center", margin: "0 0 12px" }}>
        Вопрос {step + 1} из {total}
      </p>
      <p style={{ fontFamily: FONT_D, fontSize: "clamp(22px, 6vw, 32px)", textTransform: "uppercase", textAlign: "center", lineHeight: 1.15, margin: "0 0 28px" }}>
        {q.q}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {q.options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => choose(opt.label)}
            style={{ display: "flex", alignItems: "center", gap: 16, width: "100%", textAlign: "left", background: "#fff", border: "1px solid rgba(0,0,0,0.1)", padding: "16px 18px", cursor: "pointer", fontFamily: FONT_S }}
          >
            <span style={{ width: 44, height: 44, minWidth: 44, background: "#E8EDE4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
              {opt.icon}
            </span>
            <span style={{ fontSize: 15, color: DARK, lineHeight: 1.4 }}>{opt.label}</span>
          </button>
        ))}
      </div>

      {step > 0 && (
        <button onClick={() => setStep(step - 1)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: FONT_S, fontSize: 13, color: GRAY, marginTop: 20, padding: 4 }}>
          ‹ Назад
        </button>
      )}
    </div>
  );
}

export default function FormatQuiz() {
  return (
    <section id="test" style={{ background: "#E8EDE4", padding: "60px 20px 72px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <p style={{ fontFamily: FONT_S, fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: GREEN, textAlign: "center", margin: "0 0 12px" }}>
          Подберём формат
        </p>
        <h2 style={{ fontFamily: FONT_D, fontSize: "clamp(28px, 8vw, 48px)", textTransform: "uppercase", lineHeight: 1.05, textAlign: "center", margin: "0 0 12px" }}>
          Не уверена, что выбрать?
        </h2>
        <p style={{ fontFamily: FONT_S, fontSize: 15, color: GRAY, textAlign: "center", margin: "0 0 40px", lineHeight: 1.6 }}>
          Ответь на 4 вопроса — я пойму твой формат и напишу тебе в Telegram.
        </p>
        <Quiz />
      </div>
    </section>
  );
}
