"use client";

/* ─── SHARED NAV ─── */
function Nav() {
  return (
    <nav style={{ background: "#F0EDE6", borderBottom: "1px solid rgba(0,0,0,0.08)", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontFamily: "var(--font-display)", fontSize: 18, letterSpacing: 1, textDecoration: "none", color: "#0A0A0A" }}>SOFIA POLENOVA</a>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="/coaching" style={{ fontFamily: "var(--font-sans)", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, textDecoration: "none", color: "#666" }}>Личная работа</a>
        </div>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section style={{ position: "relative", background: "#1a1a1a", overflow: "hidden", minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", opacity: 0.85 }}
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
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
            style={{
              display: "block", textAlign: "center",
              fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase",
              padding: "18px 24px", border: "2px solid #fff", color: "#fff", textDecoration: "none",
              background: "transparent", transition: "all 0.2s"
            }}
          >
            Попробовать бесплатную тренировку
          </a>
          <a
            href="#services"
            style={{
              display: "block", textAlign: "center",
              fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase",
              padding: "18px 24px", border: "2px solid rgba(255,255,255,0.5)", color: "rgba(255,255,255,0.85)", textDecoration: "none",
              background: "transparent"
            }}
          >
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
const SERVICES = [
  {
    num: "1",
    title: "Бесплатная тренировка на дыхание",
    desc: "Делаем плоский живот через работу с дыханием и глубокими мышцами. Формат «повторяй за мной» — без оборудования, дома.",
    price: null,
    btnText: "Попробовать бесплатно",
    href: "https://t.me/SofiaPolenova_bot?start=zhivot",
    external: true,
  },
  {
    num: "2",
    title: "В клубе — тренировка со мной раз в неделю",
    desc: "Короткие комплексы на каждый день, суббота в Zoom со мной, подкасты про питание и тело, чат с обратной связью. Идеально для тех, кто хочет войти в мягкую дисциплину без надрыва.",
    price: "4 990 ₽ / мес",
    btnText: "Узнать подробнее →",
    href: "/club",
    external: false,
    badge: "",
  },
  {
    num: "3",
    title: "По моим программам",
    desc: "Индивидуальная программа тренировок под твою цель и образ жизни.",
    price: "от 11 990 ₽",
    btnText: "Узнать подробнее →",
    href: "/programs",
    external: false,
  },
  {
    num: "4",
    title: "Личная работа",
    desc: "Индивидуальные тренировки, работа с питанием, консультации дополнительных специалистов.",
    price: "от 24 990 ₽",
    btnText: "Узнать подробнее →",
    href: "/personal",
    external: false,
  },
];

function Services() {
  return (
    <section id="services" style={{ background: "#F0EDE6", paddingBottom: 60 }}>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 20px" }}>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(28px, 7vw, 44px)",
          textTransform: "uppercase", lineHeight: 1.05, textAlign: "center",
          margin: "0 0 48px", paddingTop: 60
        }}>
          Как можно тренироваться со мной?
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {SERVICES.map((s) => (
            <div key={s.num} style={{ background: "#E3E0D8", padding: "28px 24px" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 4.5vw, 26px)", textTransform: "uppercase", margin: 0, lineHeight: 1.1 }}>
                  <span style={{ color: "#4a6b3a" }}>{s.num}.</span> {s.title}
                </h3>
                {s.price && (
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 18, whiteSpace: "nowrap", flexShrink: 0 }}>
                    {s.price}
                  </span>
                )}
              </div>
              {s.badge && (
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: "#4a5c3d", marginBottom: 10 }}>
                  {s.badge}
                </div>
              )}
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6, color: "#333", margin: "0 0 16px" }}>
                {s.desc}
              </p>
              {"prices" in s && (s as {prices?: [string,string][]}).prices && (
                <div style={{ marginBottom: 20, borderTop: "1px solid rgba(0,0,0,0.12)", paddingTop: 16 }}>
                  {((s as {prices?: [string,string][]}).prices ?? []).map(([label, price]: [string, string]) => (
                    <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 15 }}>· {label}</span>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: 16 }}>{price}</span>
                    </div>
                  ))}
                </div>
              )}
              <a
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                style={{
                  display: "block", textAlign: "center",
                  fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600,
                  letterSpacing: 2, textTransform: "uppercase",
                  padding: "16px 24px", border: "2px solid #0A0A0A",
                  color: "#0A0A0A", textDecoration: "none", background: "transparent"
                }}
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
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 10vw, 60px)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 40px" }}>
          Отзывы участниц
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {REVIEWS.map((r, i) => (
            <div key={i} style={{ background: "#E3E0D8" }}>
              <img src={r.img} alt={r.name} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
              <div style={{ padding: "20px 20px 24px" }}>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#666", marginBottom: 8 }}>
                  {r.name} · {r.tag}
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
    <section style={{ background: "#E3E0D8", padding: "60px 20px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 10vw, 60px)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 40px" }}>
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
      </div>
    </section>
  );
}

/* ─── CASES INDEX ─── */
const CASES = [
  { slug: "myshcy-yagodiczy", label: "Набор мышечной массы, построение ягодиц" },
  { slug: "beremennost", label: "Ведение во время беременности и послеродовом периоде" },
  { slug: "zhivot-osanka", label: "Живот и осанка" },
  { slug: "pitanie", label: "Питание без срывов" },
];

function CasesIndex() {
  return (
    <section style={{ background: "#F0EDE6", padding: "60px 20px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 12vw, 72px)", textTransform: "uppercase", lineHeight: 1, margin: "0 0 32px" }}>
          Кейсы клиентов
        </h2>
        <div>
          {CASES.map((c, i) => (
            <a
              key={c.slug}
              href={`/cases/${c.slug}`}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "20px 0", borderTop: "1px solid rgba(0,0,0,0.15)",
                textDecoration: "none", color: "#0A0A0A",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "#4a6b3a", minWidth: 24 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 500 }}>{c.label}</span>
              </div>
              <span style={{ fontSize: 18 }}>→</span>
            </a>
          ))}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.15)" }} />
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
            © 2025 Поленова Софья Николаевна. Все права защищены.
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
      <CasesIndex />
      <Footer />
    </main>
  );
}
