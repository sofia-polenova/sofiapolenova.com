"use client";
import { useEffect, useState, useRef } from "react";

/* ── Fade-in on scroll hook ── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} style={{ opacity: 0, transform: "translateY(48px)", transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── Ticker / Marquee ── */
const TICKER_ITEMS = ["🟢 Живая суббота лично со мной", "📹 Тренировки в записи", "💬 Чат клуба", "✨ Новый фокус каждые 4 недели", "🟢 Живая суббота лично со мной", "📹 Тренировки в записи", "💬 Чат клуба", "✨ Новый фокус каждые 4 недели"];

function Ticker() {
  return (
    <div style={{ overflow: "hidden", background: "#4a6b3a", padding: "12px 0", margin: "0 -20px" }}>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .marquee-track { display: flex; width: max-content; animation: marquee 22s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>
      <div className="marquee-track">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#fff", whiteSpace: "nowrap", padding: "0 28px" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

const FULL_PRICE = 4990;

const S = {
  page: { background: "#F0EDE6", minHeight: "100vh", fontFamily: "'Inter', sans-serif" } as React.CSSProperties,
  nav: { borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" } as React.CSSProperties,
  back: { fontFamily: "'Inter', sans-serif", fontSize: 13, textDecoration: "none", color: "#666", letterSpacing: 1 } as React.CSSProperties,
  logo: { fontFamily: "'Anton', sans-serif", fontSize: 16, letterSpacing: 1, color: "#0A0A0A", textDecoration: "none" } as React.CSSProperties,
  wrap: { maxWidth: 600, margin: "0 auto", padding: "40px 20px 80px" } as React.CSSProperties,
  tag: { fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, color: "#666", marginBottom: 12 },
  h1: { fontFamily: "'Anton', sans-serif", fontSize: "clamp(40px, 10vw, 72px)", textTransform: "uppercase" as const, lineHeight: 1, margin: "0 0 24px" },
  lead: { fontSize: 17, lineHeight: 1.6, color: "#333", marginBottom: 40 },
  card: { background: "#E3E0D8", padding: "24px", marginBottom: 12 } as React.CSSProperties,
  cardTitle: { fontFamily: "'Anton', sans-serif", fontSize: 22, textTransform: "uppercase" as const, margin: "0 0 8px" },
  cardText: { fontSize: 15, lineHeight: 1.6, color: "#444", margin: 0 },
  divider: { borderTop: "1px solid rgba(0,0,0,0.12)", margin: "40px 0" } as React.CSSProperties,
  h2: { fontFamily: "'Anton', sans-serif", fontSize: "clamp(28px, 7vw, 44px)", textTransform: "uppercase" as const, lineHeight: 1, margin: "0 0 24px" },
  btn: { display: "block", textAlign: "center" as const, fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, padding: "18px 24px", border: "2px solid #0A0A0A", color: "#F0EDE6", textDecoration: "none", background: "#0A0A0A" },
};


// Telegram-style chat bubble
function TgBubble({ text, voice }: { text: string; voice?: boolean }) {
  return (
    <div style={{
      background: "#dcf8c6",
      borderRadius: "12px 12px 12px 2px",
      padding: voice ? "12px 16px" : "10px 14px",
      maxWidth: "88%",
      marginBottom: 8,
      position: "relative" as const,
    }}>
      {voice && (
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%", background: "#4a6b3a",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <span style={{ color: "#fff", fontSize: 14 }}>▶</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              height: 3, background: "rgba(0,0,0,0.15)", borderRadius: 2, marginBottom: 4,
              position: "relative" as const, overflow: "hidden",
            }}>
              <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: "35%", background: "#4a6b3a", borderRadius: 2 }} />
            </div>
            <div style={{ fontSize: 11, color: "#666" }}>19:34</div>
          </div>
        </div>
      )}
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.55, color: "#111" }}
        dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

const CONTENT_SLIDES = [
  {
    icon: "▶",
    label: "Короткие комплексы",
    bg: "#edf2e9",
    accent: "#4a6b3a",
    img: null as string | null,
    preview: ["Дыхание для плоского живота", "Рельеф и тонус кор", "Зарядка от отёков"],
  },
  {
    icon: "🎙",
    label: "Подкасты про питание",
    bg: "#f5f0e8",
    accent: "#7a5c3a",
    img: null as string | null,
    preview: [
      "Как выстраивать здоровые отношения с собой и едой",
      "Я срываюсь — что делать?",
      "Что не так с протеиновыми батончиками",
      "Почему тебе нельзя взвешиваться каждый день",
    ],
  },
  {
    icon: "💬",
    label: "Ответы на вопросы",
    bg: "#edf2e9",
    accent: "#3a5a4a",
    img: null as string | null,
    preview: ["Втянутый живот и давящие штаны — разбираем", "Тревога вокруг еды и как она влияет на тело", "Зависимость от лайков и весов — что с этим делать"],
  },
  {
    icon: "🌿",
    label: "Комьюнити",
    bg: "#ede8df",
    accent: "#6b5a3a",
    img: null as string | null,
    preview: ["Отчёты участниц — делимся прогрессом", "Место для общения и поддержки", "«Субботы — моё любимое время недели»"],
  },
  {
    icon: "✨",
    label: "Находки и лайфхаки",
    bg: "#edf2e9",
    accent: "#3d5c35",
    img: null as string | null,
    preview: ["💡 Движение без насилия над собой", "💡 Что реально помогает со сном", "💡 Как перестать считать калории"],
  },
];

function ContentCarousel() {
  return (
    <div style={{ position: "relative" as const, margin: "0 -20px" }}>
      <div style={{
        display: "flex",
        overflowX: "auto",
        gap: 12,
        padding: "0 20px 12px",
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
      } as React.CSSProperties}>
        {CONTENT_SLIDES.map((slide, i) => (
          <div key={i} style={{
            flexShrink: 0,
            width: "72vw",
            maxWidth: 260,
            scrollSnapAlign: "start",
            background: slide.bg,
            borderRadius: 20,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column" as const,
          }}>
            {/* Phone-screen header */}
            {slide.img ? (
              <div style={{ position: "relative" as const, height: 160, overflow: "hidden" }}>
                <img src={slide.img} alt={slide.label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
                <div style={{ position: "absolute" as const, inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 60%)" }} />
                <div style={{ position: "absolute" as const, bottom: 12, left: 14 }}>
                  <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 15, textTransform: "uppercase" as const, color: "#fff", letterSpacing: 0.5 }}>{slide.label}</div>
                </div>
              </div>
            ) : (
              <div style={{ padding: "18px 16px 12px", background: slide.accent }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{slide.icon}</div>
                <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 15, textTransform: "uppercase" as const, color: "#fff", lineHeight: 1.2, letterSpacing: 0.5 }}>
                  {slide.label}
                </div>
              </div>
            )}
            {/* Content preview */}
            <div style={{ padding: "14px 16px 20px", flex: 1 }}>
              {slide.preview.map((line, j) => (
                <div key={j} style={{
                  fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#444",
                  padding: "8px 0", lineHeight: 1.4,
                  borderBottom: j < slide.preview.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
                }}>
                  {line}
                </div>
              ))}
              <div style={{ marginTop: 14, fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" as const, color: slide.accent }}>
                Загрузи скрин →
              </div>
            </div>
          </div>
        ))}
        <div style={{ flexShrink: 0, width: 8 }} />
      </div>
      <div style={{ textAlign: "center" as const, fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#999", letterSpacing: 1, marginTop: 4 }}>
        листай →
      </div>
    </div>
  );
}

const CHAT_SLIDES = [
  {
    bubbles: [
      { voice: true, text: "🎙 зачем себя взвешивать каждый день, зависимость от лайков и что с этим делать" },
      { text: "🎧 <b>выжимка:</b><br/><br/>1️⃣ взвешиваться каждый день — это не контроль, это тревога" },
    ],
  },
  {
    bubbles: [
      { text: "🎧 про еду, голову, сочетания, протеиновые батончики" },
      { text: "<b>Главное что хочу чтобы вы забрали:</b><br/><br/>— тревога вокруг еды влияет на то как она усваивается физически. Та же тарелка в стрессе и в спокойствии — это буквально разный процесс в твоём теле" },
    ],
  },
  {
    bubbles: [
      { text: "Втянутый живот и давящие штаны — разбираем 🙈<br/><br/>Пришёл вопрос, который я подозреваю волнует всех:" },
      { text: "Чем чаще проверяешь, тем меньше доверяешь себе и своему телу 🌿" },
    ],
  },
];

const CHAT_HEADER = (
  <div style={{
    display: "flex", alignItems: "center", gap: 10, paddingBottom: 12,
    borderBottom: "1px solid rgba(0,0,0,0.08)", marginBottom: 12,
  }}>
    <div style={{
      width: 34, height: 34, borderRadius: "50%", background: "#4a6b3a",
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
    }}>
      <span style={{ color: "#fff", fontFamily: "'Anton', sans-serif", fontSize: 12 }}>SP</span>
    </div>
    <div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, color: "#111" }}>Move Club · Софья</div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "#666" }}>чат участниц</div>
    </div>
  </div>
);

function ChatCarousel() {
  return (
    <div style={{ position: "relative" as const, margin: "0 -20px" }}>
      <div style={{
        display: "flex",
        overflowX: "auto",
        gap: 12,
        padding: "0 20px 12px",
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      } as React.CSSProperties}>
        {CHAT_SLIDES.map((slide, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "80vw",
              maxWidth: 300,
              scrollSnapAlign: "start",
              background: "#e5ddd5",
              borderRadius: 16,
              padding: "16px 14px",
            }}
          >
            {CHAT_HEADER}
            {slide.bubbles.map((b, j) => (
              <TgBubble key={j} voice={b.voice} text={b.text} />
            ))}
          </div>
        ))}
        {/* trailing spacer */}
        <div style={{ flexShrink: 0, width: 8 }} />
      </div>
      {/* hint */}
      <div style={{ textAlign: "center" as const, fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#999", letterSpacing: 1, marginTop: 4 }}>
        листай →
      </div>
    </div>
  );
}

// YouTube video card
function YoutubeCard() {
  return (
    <a
      href="https://youtu.be/CPszw4KHN5g?si=kDAsIYDiXDD7KNgx"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "block", textDecoration: "none", background: "#E3E0D8", borderRadius: 0, overflow: "hidden", marginBottom: 0 }}
    >
      {/* thumbnail mockup */}
      <div style={{ position: "relative" as const, aspectRatio: "16/9", overflow: "hidden" }}>
        <img
          src="https://img.youtube.com/vi/CPszw4KHN5g/maxresdefault.jpg"
          alt="ПЛОСКИЙ ЖИВОТ через дыхание"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{
          position: "absolute" as const, inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(0,0,0,0.15)",
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%", background: "rgba(0,0,0,0.65)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#fff", fontSize: 20, marginLeft: 4 }}>▶</span>
          </div>
        </div>
        <div style={{
          position: "absolute" as const, bottom: 8, right: 10,
          background: "rgba(0,0,0,0.8)", borderRadius: 3, padding: "2px 6px",
          fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#fff", fontWeight: 600,
        }}>11:47</div>
      </div>
      <div style={{ padding: "16px 20px 20px" }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 15, color: "#0A0A0A", marginBottom: 4, lineHeight: 1.4 }}>
          Зарядка для тех, кто много сидит | 10 минут
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#666" }}>Смотреть на YouTube →</div>
      </div>
    </a>
  );
}

const FAQ_ITEMS = [
  { q: "Нужно ли оборудование?", a: "Можно заниматься и без него — многие участницы заменяют гантели бутылками воды. Иногда используем МФР-мячи, ролл и фитнес-резинки, но это опционально." },
  { q: "Как проходит тренировка по субботам?", a: "Каждую субботу я выхожу в прямой эфир. Тренируемся вместе в реальном времени — я вижу чат, отвечаю на вопросы, корректирую. Это не запись, это живая тренировка." },
  { q: "Подойдёт ли если я новичок?", a: "Идеально. Тренировки построены так, чтобы их мог повторить человек без подготовки. Техника и дыхание — основа, не скорость и вес." },
  { q: "Когда спишется следующий месяц?", a: "Подписка продлевается автоматически раз в месяц. Отменить можно в любой момент — без звонков и объяснений." },
  { q: "Обязательно ли приходить на субботнюю тренировку?", a: "Нет. Можно заниматься только по коротким комплексам — необязательно приходить на всю тренировку. Все эфиры сохраняются в записи." },
  { q: "Есть ли работа с питанием?", a: "В чате клуба я регулярно разбираю вопросы про еду, сочетания продуктов, отношения с едой. Это не план питания, но живая обратная связь." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {FAQ_ITEMS.map((item, i) => (
        <FadeIn key={i} delay={i * 50}>
          <div
            style={{ borderTop: "1px solid rgba(0,0,0,0.12)", cursor: "pointer" }}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", gap: 16 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 500, color: "#0A0A0A", lineHeight: 1.4 }}>{item.q}</span>
              <span style={{ fontSize: 18, color: "#4a6b3a", flexShrink: 0, transition: "transform 0.25s", transform: open === i ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}>+</span>
            </div>
            {open === i && (
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#555", lineHeight: 1.7, paddingBottom: 18 }}>
                {item.a}
              </div>
            )}
          </div>
        </FadeIn>
      ))}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }} />
    </div>
  );
}

// Review card — redesigned
function ReviewCard({ name, tag, text, img }: { name: string; tag: string; text: string; img: string }) {
  return (
    <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)", paddingTop: 24, marginBottom: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <img
          src={img}
          alt={name}
          style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", background: "#E3E0D8", flexShrink: 0 }}
          onError={(e) => { (e.target as HTMLImageElement).style.background = "#C8C5BE"; }}
        />
        <div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 15, color: "#0A0A0A" }}>{name}</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" as const, color: "#4a6b3a", marginTop: 2 }}>{tag}</div>
        </div>
      </div>
      <p style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 18, lineHeight: 1.6, margin: 0, color: "#222" }}>
        «{text}»
      </p>
    </div>
  );
}

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
    <div ref={sectionRef} style={{ position: "relative", height: "100vh", margin: "0 -20px 48px", overflow: "hidden" }}>
      {/* Фото на весь блок */}
      <img
        src="/assets/club-photo.jpg"
        alt="Клуб"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }}
      />
      {/* Затемнение сверху и снизу */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.9) 100%)" }} />
      {/* MOVE CLUB по центру сверху */}
      <div style={{ position: "absolute", top: "18vh", left: 0, right: 0, textAlign: "center" }}>
        <p style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(40px, 10vw, 72px)", textTransform: "uppercase", lineHeight: 1, color: "#fff", margin: 0, letterSpacing: 2, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
          Move Club
        </p>
      </div>
      {/* Цитата снизу — уезжает при скролле */}
      <div ref={textRef} style={{ position: "absolute", bottom: 40, left: 40, right: 40, transition: "transform 0.05s linear, opacity 0.05s linear" }}>
        <p style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(22px, 5.5vw, 38px)", textTransform: "uppercase", lineHeight: 1.2, color: "#fff", margin: "0 0 14px" }}>
          Клуб — моё небольшое<br />сообщество для тех,<br />кто хочет втянуться<br />в мягкую дисциплину
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(16px, 3.5vw, 22px)", color: "#fff", margin: 0, lineHeight: 1.5 }}>
          и при этом не быть брошенным — как после покупки очередного курса
        </p>
      </div>
    </div>
  );
}

export default function ClubPage() {

  return (
    <main style={S.page}>
      <nav style={S.nav}>
        <a href="/" style={S.back}>← Назад</a>
        <a href="/" style={S.logo}>SOFIA POLENOVA</a>
        <div style={{ width: 60 }} />
      </nav>
      <ParallaxHero />
      <div style={S.wrap}>
        {/* ── Что внутри ── */}
        <div style={{ padding: "56px 0 8px" }}>
          <FadeIn>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#999", margin: "0 0 16px" }}>
              Что внутри?
            </p>
          </FadeIn>

          {/* 01 */}
          <FadeIn delay={0}>
            <div style={{ padding: "28px 0", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
                <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 13, color: "#4a6b3a", letterSpacing: 1, flexShrink: 0, marginTop: 3 }}>01</span>
                <div>
                  <p style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(20px, 5vw, 28px)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 10px", color: "#0A0A0A" }}>Дорожная карта</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65, color: "#555", margin: 0 }}>С чего начать заниматься — пошаговый маршрут. Комплексы на 10–15 минут по возрастающей сложности: от дыхания и осанки до работы с отёками и сутулыми плечами.</p>
                </div>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#999", margin: "0 0 12px" }}>
                Пример зарядки из клуба:
              </p>
              <YoutubeCard />
            </div>
          </FadeIn>

          {/* 02 */}
          <FadeIn delay={700}>
            <div style={{ padding: "28px 0", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
                <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 13, color: "#4a6b3a", letterSpacing: 1, flexShrink: 0, marginTop: 3 }}>02</span>
                <div>
                  <p style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(20px, 5vw, 28px)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 10px", color: "#0A0A0A" }}>Чат с тарелочками</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65, color: "#555", margin: 0 }}>Делимся своими тарелочками, ставим цели, набираем ежедневную активность шагов. Живой чат, где участницы поддерживают друг друга и дают мотивацию не сливаться.</p>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ position: "relative", width: 320, height: 320 }}>
                  <div style={{ position: "absolute", inset: 36, borderRadius: "50%", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.15)", zIndex: 1 }}>
                    <img src="/assets/tarelki.jpg" alt="Тарелки" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "65% 55%" }} />
                  </div>
                  <svg viewBox="0 0 300 300" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2, animation: "spin 18s linear infinite" }}>
                    <defs>
                      <path id="circle-text" d="M 150,150 m -130,0 a 130,130 0 1,1 260,0 a 130,130 0 1,1 -260,0" />
                    </defs>
                    <text style={{ fontSize: 11.5, fill: "#4a6b3a", fontFamily: "Inter, sans-serif", fontWeight: 700, letterSpacing: 4 }}>
                      <textPath href="#circle-text" startOffset="0%">· ДЕЛИМСЯ СВОИМИ ТАРЕЛОЧКАМИ · ДЕЛИМСЯ СВОИМИ ТАРЕЛОЧКАМИ ·</textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 03 */}
          <FadeIn delay={1400}>
            <div style={{ padding: "28px 0", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
                <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 13, color: "#4a6b3a", letterSpacing: 1, flexShrink: 0, marginTop: 3 }}>03</span>
                <div>
                  <p style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(20px, 5vw, 28px)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 10px", color: "#0A0A0A" }}>Подкасты</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65, color: "#555", margin: 0 }}>Небольшие подкасты с ответами на вопросы — про питание, тело, отношения с едой и собой. Короткие выжимки, которые можно слушать на ходу.</p>
                </div>
              </div>
              {/* Примеры подкастов */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingLeft: 33 }}>
                {[
                  { title: "Как и с чем сочетать конкретные продукты?", duration: "18:20" },
                  { title: "Что не так с протеиновыми батончиками?", duration: "14:05" },
                  { title: "Эмоциональные переедания, сила воли и что с этим делать?", duration: "23:10" },
                  { title: "Как справиться с перееданием в ПМС?", duration: "16:48" },
                  { title: "Как зависимость от лайков связана с желанием взвешиваться каждый день?", duration: "19:34" },
                ].map((p, i) => (
                  <div key={i} style={{ background: "#1a1a1a", borderRadius: 10, padding: "14px 16px", display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#4a6b3a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#fff", fontSize: 12 }}>▶</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, color: "#fff", margin: "0 0 2px", lineHeight: 1.3 }}>{p.title}</p>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "rgba(255,255,255,0.45)", margin: 0, letterSpacing: 1, textTransform: "uppercase" as const }}>подкаст</p>
                    </div>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "rgba(255,255,255,0.45)", flexShrink: 0, letterSpacing: 0.5 }}>{p.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 04 */}
          <FadeIn delay={2100}>
            <div style={{ padding: "28px 0", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
                <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 13, color: "#4a6b3a", letterSpacing: 1, flexShrink: 0, marginTop: 3 }}>04</span>
                <div>
                  <p style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(20px, 5vw, 28px)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 10px", color: "#0A0A0A" }}>Онлайн-тренировка со мной</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65, color: "#555", margin: "0 0 12px" }}>Раз в неделю мы встречаемся в Zoom, чтобы вместе потренироваться. Суббота, 10:00 по МСК.</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65, color: "#555", margin: "0 0 12px" }}>Сейчас в клуб на занятия приходит 3–5 участниц — это очень комфортно, и у меня есть время уделить внимание каждой. Я показываю новые движения и проверяю технику.</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65, color: "#555", margin: 0 }}>Есть возможность задать вопросы прямо в эфире. Мы остаёмся на связи, видим друг друга — и это помогает держаться в дисциплине и идти к результату в комьюнити.</p>
                </div>
              </div>
              {/* Горизонтальная карусель */}
              <div style={{ margin: "0 -20px", overflowX: "auto", WebkitOverflowScrolling: "touch" as any, scrollbarWidth: "none" as any, msOverflowStyle: "none" as any }}>
                <div style={{ display: "flex", gap: 10, padding: "0 20px", width: "max-content" }}>
                  {/* Видео 1 */}
                  <div style={{ width: 220, height: 300, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "#111" }}>
                    <video src="/assets/trenirovka.mov" style={{ width: "100%", height: "100%", objectFit: "cover" }} autoPlay muted loop playsInline />
                  </div>
                  {/* Фото клуба */}
                  <div style={{ width: 220, height: 300, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "#1a1a1a" }}>
                    <img src="/assets/club-photo.jpg" alt="Тренировка" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
                  </div>
                  {/* Видео 2 */}
                  <div style={{ width: 220, height: 300, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "#111" }}>
                    <video src="/assets/trenirovka2.mov" style={{ width: "100%", height: "100%", objectFit: "cover" }} autoPlay muted loop playsInline />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div style={S.divider} />

        {/* Результаты */}
        <FadeIn>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#999", margin: "0 0 20px" }}>
            Результаты
          </p>
          <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(22px, 6vw, 36px)", textTransform: "uppercase", lineHeight: 1.1, margin: "0 0 8px", color: "#0A0A0A" }}>
            Какой результат можно получить всего за 1 месяц в клубе?
          </h2>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 16, color: "#666", margin: "0 0 24px" }}>
            подсмотрим за одной из участниц
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <img src="/assets/marina-review.jpg" alt="Результат за месяц" style={{ width: "100%", borderRadius: 8, display: "block", marginBottom: 24 }} />
        </FadeIn>
        <FadeIn delay={200}>
          <div style={{ marginBottom: 32 }}>
            {[
              "Заметно подтянулся живот",
              "Раскрылся грудной отдел",
              "Больше энергии и лёгкости по утрам",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 0", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", border: "1.5px solid #4a6b3a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#4a6b3a", fontSize: 12 }}>✓</span>
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "#0A0A0A", margin: 0, lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Цитата Марины */}
        <FadeIn delay={100}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#999", margin: "0 0 16px" }}>
            Что говорит сама Марина:
          </p>
          <blockquote style={{ borderLeft: "3px solid #4a6b3a", margin: "0 0 8px", paddingLeft: 20 }}>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(18px, 5vw, 24px)", lineHeight: 1.5, color: "#0A0A0A", margin: 0 }}>
              «Каждый день тянет открыть видео и позаниматься для души. Быстро, чётко, понятно. После комплексов — лёгкость и энергия. Самой хочется держать осанку прямо и живот в тонусе»
            </p>
          </blockquote>
        </FadeIn>

        <div style={S.divider} />

        {/* Текст от Софьи */}
        <FadeIn>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(15px, 4vw, 17px)", lineHeight: 1.75, color: "#444", margin: "0 0 20px" }}>
            Для устойчивых изменений часто нужно просто начать делать по чуть-чуть, поэтому клуб — это идеальное место.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(15px, 4vw, 17px)", lineHeight: 1.75, color: "#444", margin: "0 0 20px" }}>
            Здесь я собрала базу знаний, которые помогут тебе внедрить новые привычки, найти единомышленников и начать свой путь.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(15px, 4vw, 17px)", lineHeight: 1.75, color: "#444", margin: "0 0 0" }}>
            Буду рада тебя видеть и...
          </p>
        </FadeIn>

        <div style={{ height: 32 }} />

        {/* CTA — следующий кейс */}
        <FadeIn>
          <div style={{ background: "#1e2e1a", borderRadius: 16, padding: "36px 28px", marginBottom: 0 }}>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(22px, 5.5vw, 30px)", lineHeight: 1.3, color: "#fff", margin: "0 0 24px" }}>
              Может быть следующим кейсом будешь ты?
            </p>
            <a href="https://t.me/sofiap_fitness?text=%D0%A1%D0%BE%D1%84%D1%8C%D1%8F%2C%20%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D1%80%D0%B8%D1%81%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D0%BA%20%D0%BA%D0%BB%D1%83%D0%B1%D1%83." target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", border: "1.5px solid rgba(255,255,255,0.35)", borderRadius: 30, padding: "10px 24px", color: "#fff", fontSize: 13, letterSpacing: 1, textDecoration: "none" }}>
              Вступить в клуб →
            </a>
          </div>
        </FadeIn>

        <div style={S.divider} />

        {/* FAQ */}
        <FadeIn>
          <h2 style={S.h2}>Частые вопросы</h2>
        </FadeIn>
        <FAQ />

        <div style={S.divider} />

        {/* Price block */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 56, lineHeight: 1, marginBottom: 4 }}>
            {FULL_PRICE.toLocaleString("ru")} ₽
          </div>
          <div style={{ fontSize: 12, color: "#666", letterSpacing: 1, textTransform: "uppercase" as const, marginBottom: 0 }}>
            в месяц
          </div>
        </div>

        <a
          href="https://t.me/sofiap_fitness?text=%D0%A1%D0%BE%D1%84%D1%8C%D1%8F%2C%20%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D1%80%D0%B8%D1%81%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D0%BA%20%D0%BA%D0%BB%D1%83%D0%B1%D1%83."
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...S.btn, marginTop: 16 }}
        >
          Вступить в клуб →
        </a>
        <div style={{ fontSize: 12, color: "#999", textAlign: "center", marginTop: 12 }}>
          отменить можно в любой момент
        </div>
      </div>

      {/* Документы */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", marginTop: 48, padding: "32px 20px 48px", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 10, textAlign: "center" as const }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, color: "#bbb", margin: "0 0 4px" }}>Документы</p>
        <a href="/oferta" style={{ fontSize: 13, color: "#888", textDecoration: "underline", textUnderlineOffset: 3 }}>Договор оферты</a>
        <a href="/privacy" style={{ fontSize: 13, color: "#888", textDecoration: "underline", textUnderlineOffset: 3 }}>Политика конфиденциальности</a>
        <a href="/consent" style={{ fontSize: 13, color: "#888", textDecoration: "underline", textUnderlineOffset: 3 }}>Согласие на обработку персональных данных</a>

        <div style={{ marginTop: 16, borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 20, width: "100%", display: "flex", flexDirection: "column" as const, gap: 4 }}>
          <p style={{ fontSize: 12, color: "#bbb", margin: 0 }}>ИП Поленова Софья Николаевна</p>
          <p style={{ fontSize: 12, color: "#bbb", margin: 0 }}>ИНН: 440117728694 · ОГРНИП: 323440000001972</p>
        </div>

        <p style={{ fontSize: 11, color: "#ccc", margin: "12px 0 0" }}>© 2025 Поленова Софья Николаевна. Все права защищены.</p>
      </div>
    </main>
  );
}
