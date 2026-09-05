"use client";

import FormatQuiz from "@/components/FormatQuiz";

/* ─── SHARED NAV ─── */
function Nav() {
  return (
    <nav style={{ background: "#F0EDE6", borderBottom: "1px solid rgba(0,0,0,0.08)", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <a href="/" style={{ fontFamily: "var(--font-display)", fontSize: 16, letterSpacing: 1, textDecoration: "none", color: "#0A0A0A", whiteSpace: "nowrap" }}>SOFIA POLENOVA</a>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {[["Образование", "#education"], ["Цены", "#services"], ["Кейсы", "#cases"]].map(([label, href]) => (
            <a key={href} href={href} style={{ fontFamily: "var(--font-display)", fontSize: 12, textTransform: "uppercase", letterSpacing: 0.5, textDecoration: "none", color: "#666", whiteSpace: "nowrap" }}>{label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section style={{ position: "relative", background: "#1a1a1a", overflow: "hidden", minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
      {/* Mobile: вертикальный формат */}
      <video
        className="hero-video hero-video--mobile"
        autoPlay
        muted
        loop
        playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", opacity: 0.85 }}
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
      </video>
      {/* Desktop: горизонтальный промо-ролик */}
      <video
        className="hero-video hero-video--desktop"
        autoPlay
        muted
        loop
        playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.85 }}
      >
        <source src="/assets/hero-desktop.mp4" type="video/mp4" />
      </video>
      {/* gradient overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.6) 100%)" }} />

      <div style={{ position: "relative", maxWidth: 600, margin: "0 auto", padding: "0 20px 40px", width: "100%" }}>
        {/* Big name */}
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 14vw, 120px)", lineHeight: 0.95, color: "#fff", margin: 0, letterSpacing: 1 }}>
          СОФЬЯ<br />ПОЛЕНОВА
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#fff", opacity: 0.9, margin: "16px 0 12px" }}>
          Тренер и нутрициолог
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, color: "#fff", opacity: 0.85, margin: "0 0 32px", maxWidth: 340, lineHeight: 1.5 }}>
          Тренирую через работу с дыханием и выстроенную осанку. Силовые тренировки, которые тебе не навредят
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <a
            href="https://t.me/SofiaPolenova_bot?start=zhivot"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn"
          >
            Попробовать бесплатную тренировку
          </a>
          <a href="#services" className="pill-btn pill-btn--light">
            Тренироваться со мной
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── PERSONAL STORY ─── */
function Story() {
  return (
    <section style={{ background: "#edf2e9", padding: "60px 20px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(32px, 8vw, 52px)",
          lineHeight: 1.0, textAlign: "center", margin: "0 0 28px", textTransform: "uppercase"
        }}>
          «Результат живёт не в силе воли, а в системе привычек, которые встроены в твою жизнь»
        </h2>
        <p style={{
          fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18,
          textAlign: "center", lineHeight: 1.6, color: "#444", margin: "0 0 40px"
        }}>
          «Я смотрю на тело целиком, силовые в связке с осанкой и дыханием, а вместо запретов мягкая дисциплина из маленьких привычек, которые не выжигают, а меняют тело спокойно и надолго»
        </p>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, textAlign: "center", borderTop: "1px solid rgba(0,0,0,0.12)", paddingTop: 32 }}>
          {[["8+", "лет опыта"], ["50+", "результатов"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 40, lineHeight: 1, color: "#4a6b3a" }}>{n}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: "#666", marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
type PriceTier = { label: string; usd: string; rub: string };
type Service = {
  num: string;
  icon: string;
  title: string;
  desc: string;
  price: string | null;
  priceUsd: string | null;
  perMonth: boolean;
  prices: PriceTier[] | null;
  image: string | null;
  btnText: string;
  href: string;
  external: boolean;
  tgText: string | null;
};

const TG = "https://t.me/sofiap_fitness";
const tgLink = (text: string) => `${TG}?text=${encodeURIComponent(text)}`;

const MSG_PERSONAL =
  "Привет, Софья! Меня интересуют индивидуальные тренировки.\n\nЦели:\nМои ограничения:\nУдобное расписание:\nВопросы:";
const MSG_PROGRAM =
  "Привет, Софья! Хочу тренироваться по готовой программе.\n\nЦели:\nМои ограничения:\nЗал или дом:\nВопросы:";
const MSG_NUTRITION =
  "Привет, Софья! Хочу поработать с питанием.\n\nЦели:\nМои ограничения (аллергии, непереносимости):\nВопросы:";

const SERVICES: Service[] = [
  {
    num: "1",
    icon: "🫁",
    title: "Бесплатная тренировка на дыхание",
    desc: "Делаем плоский живот через работу с дыханием и глубокими мышцами. Формат «повторяй за мной» — без оборудования, дома.",
    price: null,
    priceUsd: null,
    perMonth: false,
    prices: null,
    image: "/assets/oblozhka-ploskiy-zhivot.webp",
    btnText: "Попробовать бесплатно",
    href: "https://t.me/SofiaPolenova_bot?start=zhivot",
    external: true,
    tgText: null,
  },
  {
    num: "2",
    icon: "👯",
    title: "Групповые тренировки",
    desc: "Онлайн-занятия в небольшой группе со стабильным расписанием. Заниматься можно от 1 до 3 раз в неделю. Подходит новичкам, тем, кто готовится к беременности и родам, и тем, кто восстанавливается после родов.",
    price: null,
    priceUsd: null,
    perMonth: true,
    prices: [
      { label: "1 раз в неделю", usd: "$100 / месяц", rub: "8 000 ₽ / месяц" },
      { label: "2 раза в неделю", usd: "$200 / месяц", rub: "16 000 ₽ / месяц" },
      { label: "3 раза в неделю", usd: "$300 / месяц", rub: "24 000 ₽ / месяц" },
    ],
    image: "/assets/gruppovye.jpg",
    btnText: "Узнать подробнее →",
    href: "/group",
    external: false,
    tgText: null,
  },
  {
    num: "3",
    icon: "🎯",
    title: "Личное ведение и персональные тренировки",
    desc: "Для тех, кому нужен свой график и полностью индивидуальный подход. Занятия один на один — 2–3 раза в неделю или чаще и короче, под твоё тело и цель. Пакет можно расширить консультациями и сопровождением по питанию.",
    price: null,
    priceUsd: null,
    perMonth: true,
    prices: [
      { label: "Разовое занятие", usd: "$65", rub: "≈ 5 000 ₽" },
      { label: "Абонемент на 8 тренировок", usd: "$450", rub: "≈ 36 000 ₽" },
      { label: "Другие форматы и график", usd: "По запросу", rub: "" },
    ],
    image: null,
    btnText: "Хочу тренироваться с Софьей",
    href: "https://t.me/sofiap_fitness",
    external: true,
    tgText: MSG_PERSONAL,
  },
  {
    num: "4",
    icon: "📋",
    title: "По готовой программе тренировок",
    desc: "Напишу индивидуальную программу тренировок и останусь на связи — проверяю технику по записи. Программа на 4 недели с прогрессией. Заниматься можно в зале или дома.",
    price: null,
    priceUsd: null,
    perMonth: false,
    prices: [{ label: "Программа на 4 недели", usd: "≈ $250", rub: "20 000 ₽" }],
    image: null,
    btnText: "Записаться →",
    href: "https://t.me/sofiap_fitness",
    external: true,
    tgText: MSG_PROGRAM,
  },
];

const SECTION_H2: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(32px, 9vw, 56px)",
  textTransform: "uppercase",
  lineHeight: 1,
  textAlign: "left",
  margin: "0 0 40px",
};

function Services() {
  return (
    <section id="services" style={{ background: "#F0EDE6", padding: "60px 20px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2 style={SECTION_H2}>
          Как можно тренироваться со мной?
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {SERVICES.map((s) => (
            <div key={s.num} className="svc-card" style={{ padding: "24px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
                <span className="icon-chip">{s.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(17px, 4.3vw, 24px)", textTransform: "uppercase", margin: 0, lineHeight: 1.15 }}>
                    <span style={{ color: "#4a6b3a" }}>{s.num}.</span> {s.title}
                  </h3>
                  {s.href.includes("start=zhivot") && (
                    <span className="pill-tag" style={{ display: "inline-block", marginTop: 10 }}>Бесплатно</span>
                  )}
                  {(s.priceUsd || s.price) && !s.prices && (
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 10 }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 1 }}>
                        {s.priceUsd ?? s.price}{s.perMonth ? " / месяц" : ""}
                      </span>
                      {s.priceUsd && s.price && (
                        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 14, color: "#666" }}>
                          {s.price}{s.perMonth ? " / месяц" : ""}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6, color: "#333", margin: "0 0 16px" }}>
                {s.desc}
              </p>

              {s.image && (
                <a
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  style={{ display: "block", marginBottom: 16 }}
                >
                  <img src={s.image} alt={s.title} style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", objectPosition: "center", display: "block" }} />
                </a>
              )}

              {s.prices && (
                <div style={{ margin: "0 0 18px" }}>
                  {s.prices.map((t) => (
                    <div key={t.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, padding: "12px 0", borderTop: "1px solid rgba(0,0,0,0.14)" }}>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#333", paddingTop: 4 }}>{t.label}</span>
                      <span style={{ textAlign: "right", flexShrink: 0 }}>
                        <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: t.rub ? 18 : 13, color: t.rub ? "#0A0A0A" : "#666", lineHeight: 1, whiteSpace: "nowrap" }}>{t.usd}</span>
                        {t.rub && (
                          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 12, color: "#666", whiteSpace: "nowrap", marginTop: 2 }}>{t.rub}</span>
                        )}
                      </span>
                    </div>
                  ))}
                  <div style={{ borderTop: "1px solid rgba(0,0,0,0.14)" }} />
                </div>
              )}

              <a
                href={s.tgText ? tgLink(s.tgText) : s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                className="pill-btn"
              >
                {s.btnText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── NUTRITION ─── */
const NUTRITION_PRICES = [
  { label: "Разовая консультация · 55 минут", usd: "≈ $55", rub: "4 500 ₽" },
  { label: "Ведение по питанию", usd: "≈ $250 / месяц", rub: "20 000 ₽ / месяц" },
];

function Nutrition() {
  return (
    <section style={{ background: "#F0EDE6", padding: "20px 20px 60px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2 style={SECTION_H2}>
          А если хочу поработать с питанием?
        </h2>
        <div className="svc-card" style={{ padding: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
            <span className="icon-chip">🥗</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(17px, 4.3vw, 24px)", textTransform: "uppercase", margin: 0, lineHeight: 1.15 }}>
              <span style={{ color: "#4a6b3a" }}>1.</span> Сопровождение по питанию
            </h3>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6, color: "#333", margin: "0 0 16px" }}>
            Не составляю меню — проверяю отчёты и работаю через изменение привычек.
          </p>
          <div style={{ margin: "0 0 18px" }}>
            {NUTRITION_PRICES.map((t) => (
              <div key={t.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, padding: "12px 0", borderTop: "1px solid rgba(0,0,0,0.14)" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#333", paddingTop: 4 }}>{t.label}</span>
                <span style={{ textAlign: "right", flexShrink: 0 }}>
                  <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 18, lineHeight: 1, whiteSpace: "nowrap" }}>{t.usd}</span>
                  <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 12, color: "#666", whiteSpace: "nowrap", marginTop: 2 }}>{t.rub}</span>
                </span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.14)" }} />
          </div>
          <a href={tgLink(MSG_NUTRITION)} target="_blank" rel="noopener noreferrer" className="pill-btn">
            Написать Софье →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── REVIEWS ─── */
const REVIEWS = [
  { name: "Марина", tag: "3 недели в клубе", text: "Каждый день тянет открыть видео и позаниматься для души. Быстро, чётко, понятно. После комплексов — лёгкость и энергия.", img: "/assets/review-marina.jpg" },
  { name: "Влада", tag: "2 месяца в клубе", text: "Силуэт выравнивается, живот подтянулся, вырисовывается талия. Тело легче проживает стресс. Почти каждый день тренируюсь.", img: "/assets/review-vlada1.jpg" },
  { name: "Влада", tag: "результаты", text: "Кайф! Очень рада улучшать свой образ жизни. Скоро новый месяц — присоединяйтесь.", img: "/assets/review-vlada2.jpg" },
];

function Reviews() {
  return (
    <section style={{ background: "#F0EDE6", padding: "60px 20px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2 style={SECTION_H2}>
          Отзывы участниц
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {REVIEWS.map((r, i) => (
            <div key={i} className="svc-card" style={{ overflow: "hidden" }}>
              <img src={r.img} alt={r.name} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
              <div style={{ padding: "20px 20px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "#0A0A0A" }}>{r.name}</span>
                  <span className="pill-tag">{r.tag}</span>
                </div>
                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 17, lineHeight: 1.55, margin: 0 }}>«{r.text}»</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── EDUCATION ─── */
const EDUCATION = [
  { year: "2019", title: "Высшее тренерское образование", place: "СПбГУФК им. П. Ф. Лесгафта — Санкт-Петербургский государственный университет физической культуры имени П. Ф. Лесгафта · Диплом с отличием" },
  { year: "2023", title: "Позвоночник. Стабильность", place: "Обучающий центр «Анатомия», Санкт-Петербург · 8 часов, очно" },
  { year: "2023", title: "Health Coaching и комплексное ведение подопечных в онлайн-формате", place: "Health Coach academy · 120 часов" },
  { year: "2024", title: "ТБС и ягодицы — практика тренировки в 3D", place: "Обучающий центр «Анатомия», Санкт-Петербург · 16 часов, очно" },
  { year: "2026", title: "Диагностика и составление программ функциональной реабилитации", place: "Академия спортивной подготовки и функционального восстановления (AST) · в процессе обучения" },
];

const CERTS = [
  "/assets/edu/diploma.jpg",
  "/assets/edu/cert3.jpg",
  "/assets/edu/cert1.jpg",
  "/assets/edu/cert4.jpg",
  "/assets/edu/cert2.jpg",
  "/assets/edu/cert5.jpg",
  "/assets/edu/cert6.jpg",
];

function Education() {
  return (
    <section id="education" style={{ background: "#E3E0D8", padding: "60px 20px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2 style={SECTION_H2}>
          Образование
        </h2>

        {/* Timeline */}
        <div style={{ marginBottom: 16 }}>
          {EDUCATION.map((e, i) => (
            <div key={i} style={{ display: "flex", gap: 20, padding: "20px 0", borderTop: "1px solid rgba(0,0,0,0.15)" }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "#4a6b3a", minWidth: 36, paddingTop: 2, fontWeight: 600 }}>{e.year}</span>
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 600 }}>{e.title}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#666", marginTop: 4 }}>{e.place}</div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.15)" }} />
        </div>

        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 14, color: "#666", margin: "0 0 24px" }}>
          и другие ↓
        </p>

        {/* Certificate images */}
        <div style={{ display: "flex", overflowX: "auto", gap: 10, scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", paddingBottom: 4 }}>
          {CERTS.map((src, i) => (
            <a key={i} href={src} target="_blank" rel="noopener noreferrer" style={{ flex: "0 0 auto", width: "31%", minWidth: 140, scrollSnapAlign: "start" }}>
              <img
                src={src}
                alt={`Диплом ${i + 1}`}
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block", background: "#ccc" }}
                onError={(e) => { (e.target as HTMLImageElement).style.background = "#C8C5BE"; (e.target as HTMLImageElement).style.minHeight = "120px"; }}
              />
            </a>
          ))}
        </div>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 14, color: "#666", margin: "12px 0 0", textAlign: "center" }}>
          листай в сторону →
        </p>
      </div>
    </section>
  );
}

/* ─── CASES INDEX ─── */
function CasesIndex() {
  return (
    <section id="cases" style={{ background: "#F0EDE6", padding: "60px 20px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2 style={SECTION_H2}>
          Кейсы клиентов
        </h2>
        <div style={{ background: "#E3E0D8", padding: "48px 24px", textAlign: "center" }}>
          <span className="pill-tag" style={{ marginBottom: 12 }}>Скоро</span>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "#666", margin: 0 }}>
            Кейс скоро загрузим
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── PAST / PAUSED FORMATS ─── */
const PAST_FORMATS = [
  {
    title: "Move Club — клуб онлайн-тренировок",
    desc: "Короткие комплексы на каждый день, живая суббота в Zoom, подкасты про питание и тело, чат с обратной связью.",
    status: "Набор закрыт",
    href: "/club",
    linkText: "Посмотреть формат →",
  },
];

function PastFormats() {
  return (
    <section style={{ background: "#E3E0D8", padding: "60px 20px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2 style={{ ...SECTION_H2, margin: "0 0 8px" }}>
          Прошлые продукты
        </h2>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 16, color: "#666", margin: "0 0 32px" }}>
          Сейчас нет в продаже — возможно, вернутся
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {PAST_FORMATS.map((f) => (
            <div key={f.title} className="svc-card" style={{ background: "#F0EDE6", padding: "24px", opacity: 0.94 }}>
              <span className="pill-tag pill-tag--muted" style={{ marginBottom: 12 }}>{f.status}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 4.5vw, 26px)", textTransform: "uppercase", margin: "0 0 10px", lineHeight: 1.1 }}>
                {f.title}
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6, color: "#555", margin: "0 0 16px" }}>
                {f.desc}
              </p>
              <a
                href={f.href}
                style={{
                  fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600,
                  letterSpacing: 2, textTransform: "uppercase",
                  color: "#666", textDecoration: "underline", textUnderlineOffset: 4,
                }}
              >
                {f.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer style={{ background: "#1e3319", color: "#fff", position: "relative", overflow: "hidden", padding: "60px 20px 40px" }}>
      {/* watermark */}
      <div style={{
        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-display)", fontSize: "clamp(40px, 15vw, 100px)", textTransform: "uppercase",
        color: "rgba(255,255,255,0.04)", lineHeight: 1, textAlign: "center", pointerEvents: "none", userSelect: "none",
        letterSpacing: 2
      }}>
        SOFIA<br />POLENOVA
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
        {/* buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
          <a
            href="https://t.me/SofiaPolenova_bot?start=zhivot"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block", textAlign: "center",
              fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase",
              padding: "18px 24px", border: "2px solid rgba(255,255,255,0.4)", color: "#fff", textDecoration: "none", background: "transparent"
            }}
          >
            Бесплатная тренировка
          </a>
          <a
            href="https://t.me/heath_is_wealth"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block", textAlign: "center",
              fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase",
              padding: "18px 24px", border: "2px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", textDecoration: "none", background: "transparent"
            }}
          >
            Telegram-канал
          </a>
          <a
            href="https://www.youtube.com/@some_sofia"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block", textAlign: "center",
              fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase",
              padding: "18px 24px", border: "2px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", textDecoration: "none", background: "transparent"
            }}
          >
            YouTube-канал
          </a>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 32, paddingTop: 28, display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 10, textAlign: "center" as const }}>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" as const, justifyContent: "center" }}>
            <a href="/oferta" style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "underline", textUnderlineOffset: 3 }}>Договор оферты</a>
            <a href="/privacy" style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "underline", textUnderlineOffset: 3 }}>Политика конфиденциальности</a>
            <a href="/consent" style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "underline", textUnderlineOffset: 3 }}>Согласие на обработку ПД</a>
          </div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "rgba(255,255,255,0.2)", lineHeight: 1.8, marginTop: 4 }}>
            ИП Поленова Софья Николаевна · ИНН 440117728694 · ОГРНИП 323440000001972
          </div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
            © 2026 Поленова Софья Николаевна. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function HomePage() {
  return (
    <main style={{ background: "#F0EDE6", fontFamily: "var(--font-sans)" }}>
      <Nav />
      <Hero />
      <Story />
      <Education />
      <Services />
      <Nutrition />
      <FormatQuiz />
      <CasesIndex />
      <PastFormats />
      <Footer />
    </main>
  );
}
