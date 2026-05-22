import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import reviewMarina from "@/assets/review-marina.jpg";
import reviewVlada1 from "@/assets/review-vlada1.jpg";
import reviewVlada2 from "@/assets/review-vlada2.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Клуб онлайн-тренировок Софьи — Move Club" },
      { name: "description", content: "Ежемесячная подписка: тренировки в записи, живая суббота и чат с обратной связью. Без марафонов и стыда." },
    ],
  }),
});

/* ──────────────────────────────── ATOMS ─────────────────────────────── */

function Sticker({ children, className = "", rotate = 0 }: { children: React.ReactNode; className?: string; rotate?: number }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 label-tiny ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}

function Seal({ text }: { text: string }) {
  // circular text seal
  const chars = text.split("");
  const radius = 52;
  return (
    <div className="relative w-32 h-32 select-none">
      <svg viewBox="0 0 140 140" className="w-full h-full animate-[spin_18s_linear_infinite]">
        <defs>
          <path id="circ" d={`M 70,70 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`} />
        </defs>
        <text fill="var(--lime)" style={{ fontFamily: "var(--font-sans)", fontSize: "11px", letterSpacing: "0.22em", fontWeight: 600 }}>
          <textPath href="#circ">{chars.join("")} · {chars.join("")} ·</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="w-12 h-12 rounded-full grid place-items-center" style={{ background: "var(--lime)" }}>
          <span className="text-2xl">✦</span>
        </div>
      </div>
    </div>
  );
}

function useCountdown(seconds: number) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    if (left <= 0) return;
    const id = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [left]);
  const h = String(Math.floor(left / 3600)).padStart(2, "0");
  const m = String(Math.floor((left % 3600) / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  return { h, m, s, done: left <= 0 };
}

function Timer({ tone = "lime" }: { tone?: "lime" | "cream" }) {
  const { h, m, s, done } = useCountdown(60 * 60);
  if (done) return null;
  const bg = tone === "lime" ? "var(--lime)" : "var(--cream)";
  return (
    <div
      className="inline-flex items-center gap-3 rounded-full px-5 py-2.5"
      style={{ background: bg, color: "var(--forest-deep)" }}
    >
      <span className="label-tiny">скидка сгорит через</span>
      <span className="font-serif-italic text-2xl tabular-nums leading-none">{h}:{m}:{s}</span>
    </div>
  );
}

/* ──────────────────────────────── DATA ──────────────────────────────── */

const PAINS = [
  { n: "01", t: "Живот всё равно выпадает", d: "качаешь пресс, а в зеркале — ничего" },
  { n: "02", t: "Сутулость и зажатая спина", d: "к вечеру шея ноет, осанка плывёт" },
  { n: "03", t: "Тренируюсь — а тело не меняется", d: "ходишь в зал, силы уходят, силуэт стоит" },
  { n: "04", t: "Срываюсь после марафонов", d: "5 дней дисциплины и потом стыд" },
];

const FEELS = [
  "лёгкость в теле",
  "энергия с утра",
  "ровная осанка",
  "тонкая талия",
  "спокойствие с едой",
  "влюбляешься в коврик",
];

const NOT = ["без ежедневных отчётов", "без жёстких диет", "без стыда за пропуск", "в своём темпе"];

const REVIEWS = [
  {
    name: "Марина",
    tag: "3 недели в клубе",
    text: "Каждый день тянет открыть видео и позаниматься для души. Быстро, чётко, понятно. После комплексов — лёгкость и энергия. Самой хочется держать осанку прямо и живот в тонусе.",
    img: reviewMarina,
  },
  {
    name: "Влада",
    tag: "2 месяца в клубе",
    text: "Силуэт выравнивается, живот подтянулся, вырисовывается талия. Тело легче проживает стресс. Налаживаю отношения с едой и почти каждый день тренируюсь.",
    img: reviewVlada1,
  },
  {
    name: "Влада",
    tag: "результаты",
    text: "Короче кайф! Очень рада улучшать свой образ жизни. Скоро новый месяц — присоединяйтесь.",
    img: reviewVlada2,
  },
];

/* ─────────────────────────────── SECTIONS ───────────────────────────── */

function Nav() {
  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-6 max-w-[1400px] mx-auto">
      <div className="label-tiny" style={{ color: "var(--lime)" }}>Sofia · fit01</div>
      <div className="label-tiny opacity-70">Move Club / 2026</div>
      <a href="#price" className="hidden md:inline-flex label-tiny rounded-full px-4 py-2" style={{ background: "var(--lime)", color: "var(--forest-deep)" }}>
        вступить →
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-6 pb-20 md:pt-10 md:pb-32">
        {/* top strip */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <Sticker className="border" style={{ borderColor: "var(--lime)", color: "var(--lime)" } as React.CSSProperties}>● клуб онлайн-тренировок</Sticker>
          <Sticker rotate={-3} style={{ background: "var(--cream)", color: "var(--forest-deep)" } as React.CSSProperties}>20 минут в день</Sticker>
          <Sticker rotate={2} style={{ background: "var(--lime)", color: "var(--forest-deep)" } as React.CSSProperties}>новый поток — скоро</Sticker>
        </div>

        {/* title */}
        <h1 className="font-serif-italic leading-[0.92] tracking-tight" style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", color: "var(--lime)" }}>
          Welcome to <br />
          <span style={{ color: "var(--cream)" }}>The Move Club</span>
        </h1>

        {/* meta row */}
        <div className="mt-8 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-end">
          <p className="max-w-md text-lg opacity-85">
            Тренируешься, а живот выпадает и спина устаёт? Месяц со мной — и тело отвечает. Спокойно, в комфорте, в своём ритме.
          </p>
          <div className="hidden md:block label-tiny opacity-60">issue / 01</div>
          <div className="flex md:justify-end">
            <Timer />
          </div>
        </div>

        {/* collage */}
        <div className="mt-14 grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-7 md:col-span-5 relative">
            <div className="rounded-[2rem] overflow-hidden aspect-[3/4] relative">
              <img src={heroImg} alt="Софья" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4">
                <Sticker style={{ background: "var(--cream)", color: "var(--forest-deep)" } as React.CSSProperties}>фисио · движение</Sticker>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <Seal text="MOVE · CLUB · SOFIA ·" />
            </div>
          </div>

          <div className="col-span-5 md:col-span-3 flex flex-col gap-4 md:gap-6">
            <div className="rounded-[2rem] p-6 aspect-square grid place-items-center text-center" style={{ background: "var(--lime)", color: "var(--forest-deep)" }}>
              <div>
                <div className="label-tiny">3990 ₽ / мес</div>
                <div className="font-serif-italic text-4xl md:text-5xl leading-none mt-2">вместо <span className="line-through opacity-60">4990</span></div>
              </div>
            </div>
            <div className="rounded-[2rem] p-6 flex-1 min-h-[140px]" style={{ background: "var(--cream)", color: "var(--forest-deep)" }}>
              <div className="label-tiny opacity-60">что внутри</div>
              <div className="font-serif-italic text-2xl md:text-3xl leading-tight mt-2">записи + живая суббота + чат</div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 flex flex-col gap-4 md:gap-6">
            <div className="rounded-[2rem] p-7 flex-1" style={{ border: "1px solid var(--lime)" }}>
              <div className="label-tiny" style={{ color: "var(--lime)" }}>каждые 4 недели</div>
              <p className="font-serif-italic text-3xl md:text-4xl leading-[1.05] mt-3">новый фокус — живот, осанка, отёчность, тонус</p>
            </div>
            <a href="#price" className="rounded-[2rem] p-7 grid place-items-center text-center transition hover:scale-[1.02]" style={{ background: "var(--cream)", color: "var(--forest-deep)" }}>
              <div>
                <div className="font-serif-italic text-3xl">забронировать место</div>
                <div className="label-tiny mt-2 opacity-70">→ оплатить за минуту</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pains() {
  return (
    <section className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-center justify-between mb-12">
          <div className="label-tiny opacity-60">/01 — узнаёшь себя?</div>
          <div className="font-hand text-3xl md:text-4xl" style={{ color: "var(--lime)" }}>да, это про меня…</div>
        </div>
        <h2 className="font-serif-italic leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
          боли, которые ты <span style={{ color: "var(--lime)" }}>уже устала</span> объяснять
        </h2>
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {PAINS.map((p, i) => (
            <div
              key={p.n}
              className="rounded-[2rem] p-8 md:p-10 transition hover:-translate-y-1"
              style={{
                background: i % 2 === 0 ? "var(--cream)" : "transparent",
                border: i % 2 === 0 ? "none" : "1px solid var(--border)",
                color: i % 2 === 0 ? "var(--forest-deep)" : "var(--foreground)",
              }}
            >
              <div className="flex items-baseline justify-between">
                <span className="label-tiny opacity-50">{p.n}</span>
                <span className="font-serif-italic text-2xl opacity-40">/04</span>
              </div>
              <p className="font-serif-italic text-3xl md:text-4xl leading-tight mt-4">{p.t}</p>
              <p className="mt-3 opacity-70">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section style={{ background: "var(--cream)", color: "var(--forest-deep)" }}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center relative">
        <Sticker className="mb-6" style={{ background: "var(--forest-deep)", color: "var(--lime)" } as React.CSSProperties}>/02 — почему так</Sticker>
        <h2 className="font-serif-italic leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
          дело не в лени. <br /> дело в <span style={{ background: "var(--lime)" }}>&nbsp;дыхании&nbsp;</span> и зажимах
        </h2>
        <p className="mt-8 text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Тело копит стресс. Мышцы работают неправильно, дыхание поверхностное — и любая тренировка идёт «мимо». Нужна системная мягкая работа, а не очередной рывок.
        </p>
        <div className="font-hand text-4xl mt-10" style={{ color: "var(--forest-deep)" }}>
          ↓ поэтому и собрался клуб
        </div>
      </div>
    </section>
  );
}

function Club() {
  const items = [
    { tag: "новый фокус", t: "Каждые 4 недели", d: "Новая программа на конкретную зону: живот, осанка, отёчность, тонус." },
    { tag: "записи", t: "20–30 минут", d: "Открываешь когда удобно. Чётко, по делу, без воды." },
    { tag: "live", t: "Живая суббота", d: "Онлайн-тренировка вместе со всем клубом." },
    { tag: "чат", t: "Обратная связь", d: "Личный чат клуба — поддержка, ответы, отчёты по желанию." },
  ];
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-center justify-between mb-12">
          <div className="label-tiny opacity-60">/03 — что такое клуб</div>
          <Sticker style={{ background: "var(--lime)", color: "var(--forest-deep)" } as React.CSSProperties}>подписка · ежемесячно</Sticker>
        </div>
        <h2 className="font-serif-italic leading-[0.95] max-w-4xl" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
          не курс. не марафон. <br /><span style={{ color: "var(--lime)" }}>живой клуб</span> движения.
        </h2>
        <div className="mt-14 grid md:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <div key={it.t} className="rounded-[2rem] p-7 min-h-[280px] flex flex-col justify-between" style={{ background: i === 1 ? "var(--lime)" : "transparent", color: i === 1 ? "var(--forest-deep)" : "var(--foreground)", border: i === 1 ? "none" : "1px solid var(--border)" }}>
              <div className="label-tiny opacity-70">{it.tag}</div>
              <div>
                <div className="font-serif-italic text-3xl leading-tight">{it.t}</div>
                <p className="mt-3 opacity-80 text-sm">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Feels() {
  return (
    <section className="overflow-hidden border-y" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
        <div className="label-tiny opacity-60 mb-6">/04 — что ты почувствуешь</div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          {FEELS.map((f, i) => (
            <span key={f} className="font-serif-italic leading-none" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", color: i % 2 === 0 ? "var(--lime)" : "var(--cream)" }}>
              {f}{i < FEELS.length - 1 && <span className="opacity-40 mx-2">✦</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function NotMarathon() {
  return (
    <section style={{ background: "var(--cream)", color: "var(--forest-deep)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="label-tiny opacity-60 mb-4">/05 — это не марафон</div>
          <h2 className="font-serif-italic leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
            здесь по-другому. <br /><span className="italic">никакого давления</span>.
          </h2>
        </div>
        <div className="grid gap-3">
          {NOT.map((n) => (
            <div key={n} className="flex items-center gap-4 rounded-full px-6 py-4" style={{ background: "var(--forest-deep)", color: "var(--cream)" }}>
              <span className="grid place-items-center w-8 h-8 rounded-full text-lg" style={{ background: "var(--lime)", color: "var(--forest-deep)" }}>✕</span>
              <span className="font-serif-italic text-2xl">{n}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="label-tiny opacity-60">/06 — отзывы</div>
            <h2 className="font-serif-italic leading-[0.95] mt-2" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              слова <span style={{ color: "var(--lime)" }}>участниц</span>
            </h2>
          </div>
          <div className="font-hand text-3xl hidden md:block" style={{ color: "var(--lime)" }}>живые, неотредактированные →</div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-[2rem] overflow-hidden flex flex-col" style={{ background: i === 1 ? "var(--lime)" : "var(--cream)", color: "var(--forest-deep)" }}>
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3">
                  <Sticker style={{ background: "var(--forest-deep)", color: "var(--lime)" } as React.CSSProperties}>{r.tag}</Sticker>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="font-serif-italic text-xl leading-snug flex-1">«{r.text}»</p>
                <div className="flex items-center justify-between mt-5 pt-5 border-t" style={{ borderColor: "rgba(0,0,0,0.15)" }}>
                  <span className="label-tiny">— {r.name}</span>
                  <span className="font-serif-italic text-2xl">0{i + 1}/03</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="border-y" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
        <div className="label-tiny opacity-60 mb-6">/07 — про Софью</div>
        <p className="font-serif-italic leading-[1.05]" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          я тренер. я не верю в надрыв. <br />
          <span style={{ color: "var(--lime)" }}>мой подход</span> — дыхание, бережная работа с телом и осознанные пищевые привычки.
        </p>
        <p className="mt-8 max-w-2xl mx-auto opacity-75">
          За месяцы в клубе участницы выравнивают силуэт, подтягивают живот и впервые перестают срываться. Работаем мягко — результат глубокий.
        </p>
      </div>
    </section>
  );
}

function Price() {
  const { done } = useCountdown(60 * 60);
  return (
    <section id="price" className="relative">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-center" style={{ background: "var(--cream)", color: "var(--forest-deep)" }}>
          <div className="absolute top-6 left-6"><Sticker style={{ background: "var(--forest-deep)", color: "var(--lime)" } as React.CSSProperties}>/08 — цена</Sticker></div>
          <div className="absolute top-6 right-6"><Sticker style={{ background: "var(--lime)", color: "var(--forest-deep)" } as React.CSSProperties}>1 месяц доступа</Sticker></div>

          <div className="font-hand text-3xl md:text-4xl mt-12 mb-2">только следующий час →</div>

          <div className="flex items-end justify-center gap-6 mt-4">
            {!done && (
              <span className="font-serif-italic text-4xl md:text-6xl line-through opacity-50">4990 ₽</span>
            )}
            <span className="font-serif-italic leading-none" style={{ fontSize: "clamp(5rem, 16vw, 11rem)" }}>
              {done ? "4990" : "3990"} <span className="text-5xl md:text-7xl">₽</span>
            </span>
          </div>

          {!done && (
            <div className="mt-6 flex justify-center">
              <Timer tone="cream" />
            </div>
          )}

          <a
            href="#"
            className="mt-10 inline-flex items-center gap-3 rounded-full px-10 py-5 label-tiny transition hover:scale-[1.02]"
            style={{ background: "var(--forest-deep)", color: "var(--lime)" }}
          >
            забронировать место →
          </a>

          <p className="mt-4 text-sm opacity-60">доступ открывается сразу после оплаты</p>

          <div className="absolute -bottom-10 -right-10 hidden md:block opacity-90">
            <Seal text="SOFIA · MOVE · CLUB ·" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 flex flex-wrap items-center justify-between gap-4">
        <div className="font-serif-italic text-3xl" style={{ color: "var(--lime)" }}>Move Club</div>
        <div className="label-tiny opacity-60">© Sofia · fit01 · 2026</div>
        <div className="label-tiny opacity-60">made with care</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen" style={{ background: "var(--forest)", color: "var(--cream)" }}>
      <Nav />
      <Hero />
      <Pains />
      <Why />
      <Club />
      <Feels />
      <NotMarathon />
      <Reviews />
      <About />
      <Price />
      <Footer />
    </main>
  );
}
