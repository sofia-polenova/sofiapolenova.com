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
      { title: "Клуб онлайн-тренировок Софьи — подтянутое тело без марафонов" },
      {
        name: "description",
        content:
          "Ежемесячная подписка на тренировки в записи + живые субботы + чат с обратной связью. Без жёстких правил и стыда.",
      },
    ],
  }),
});

const PAINS = [
  "Тренируюсь, а тело не меняется — будто стою на месте",
  "Живот всё равно выпадает, талия теряется",
  "Сутулюсь и не могу держать осанку — устаю за день",
  "Срываюсь после марафонов, потом стыдно начинать заново",
];

const GET = [
  { t: "Лёгкость в теле", d: "Уходит тяжесть, появляется энергия с первых недель" },
  { t: "Тонус живота и талия", d: "Силуэт выравнивается, живот подтягивается" },
  { t: "Ровная осанка", d: "Сама хочется держать спину — без напоминаний" },
  { t: "Спокойствие с едой", d: "Контроль без самопалача и срывов" },
];

const NOT_MARATHON = [
  "Без ежедневных отчётов и галочек",
  "Без жёстких диет и запретов",
  "Без стыда, если пропустила день",
  "Можно в своём темпе — записи всегда с тобой",
];

const REVIEWS = [
  {
    name: "Марина",
    text: "Каждый день тянет открыть видео и позаниматься для души. Быстро, чётко, понятно. Уже 3 неделя — а это успех, учитывая мой прошлый опыт с марафонами, где сдулась за 5 дней. После комплексов появляется лёгкость и энергия. Самой хочется держать осанку прямо и живот в тонусе.",
    img: reviewMarina,
  },
  {
    name: "Влада",
    text: "Силуэт выравнивается, живот подтянулся, вырисовывается талия. Тело легче проживает стресс, стала спокойнее. Налаживаю отношения с едой и почти каждый день тренируюсь — влюбляюсь в движение и коврик.",
    img: reviewVlada1,
  },
  {
    name: "Влада",
    text: "Короче кайф! Очень рада улучшать свой образ жизни. Если хотите к нам — присоединяйтесь, скоро новый месяц.",
    img: reviewVlada2,
  },
];

function useCountdown(seconds: number) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    if (left <= 0) return;
    const id = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [left]);
  const m = String(Math.floor(left / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  const h = String(Math.floor(left / 3600)).padStart(2, "0");
  return { h, m: String(Math.floor((left % 3600) / 60)).padStart(2, "0"), s, done: left <= 0 };
}

function Timer({ compact = false }: { compact?: boolean }) {
  const { h, m, s, done } = useCountdown(60 * 60);
  if (done) return null;
  return (
    <div className={`inline-flex items-center gap-2 rounded-full bg-foreground/90 px-4 py-2 font-mono text-primary-foreground ${compact ? "text-sm" : "text-base"}`}>
      <span className="opacity-70">скидка сгорит через</span>
      <span className="tabular-nums font-semibold">{h}:{m}:{s}</span>
    </div>
  );
}

function PriceBlock() {
  const { done } = useCountdown(60 * 60);
  return (
    <div className="rounded-3xl bg-card p-8 md:p-12 shadow-[var(--shadow-soft)] text-center border border-border">
      <p className="text-sm uppercase tracking-widest text-muted-foreground">Месячная подписка</p>
      <div className="mt-6 flex items-end justify-center gap-4">
        {!done && (
          <span className="text-2xl md:text-3xl text-muted-foreground line-through decoration-destructive decoration-2">
            4990 ₽
          </span>
        )}
        <span className="text-5xl md:text-7xl font-bold text-foreground">
          {done ? "4990" : "3990"} ₽
        </span>
      </div>
      {!done && (
        <div className="mt-6 flex justify-center">
          <Timer />
        </div>
      )}
      <a
        href="#join"
        className="mt-8 inline-flex items-center justify-center rounded-full px-10 py-5 text-lg font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
        style={{ background: "var(--gradient-cta)" }}
      >
        Забронировать место
      </a>
      <p className="mt-4 text-sm text-muted-foreground">
        Доступ открывается сразу после оплаты
      </p>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-warm)" }} />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pt-16 pb-20 md:grid-cols-2 md:gap-12 md:pt-24 md:pb-28 items-center">
          <div>
            <span className="inline-block rounded-full bg-card/70 px-4 py-1.5 text-sm font-medium backdrop-blur">
              Клуб онлайн-тренировок Софьи
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Подтянутое тело и ровная осанка — без марафонов и срывов
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Тренируешься, а живот всё равно выпадает и спина устаёт? Месяц в клубе — и тело меняется. Спокойно, в комфорте, по 20 минут в день.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#price"
                className="inline-flex rounded-full px-7 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
                style={{ background: "var(--gradient-cta)" }}
              >
                Забрать за 3990 ₽
              </a>
              <Timer compact />
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Софья — тренер клуба онлайн-тренировок"
              className="rounded-3xl shadow-[var(--shadow-soft)] w-full object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* УЗНАЁШЬ СЕБЯ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Узнаёшь себя?</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {PAINS.map((p) => (
            <div key={p} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <p className="text-lg">— {p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ПОЧЕМУ ТАК */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Почему так происходит</h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Дело не в лени и не в нехватке силы воли. Тело копит стресс и зажимы,
            мышцы работают неправильно, дыхание поверхностное — и любые тренировки
            идут «мимо». Нужна системная работа в комфорте, а не очередной рывок.
          </p>
        </div>
      </section>

      {/* ЧТО ТАКОЕ КЛУБ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Что такое клуб</h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Ежемесячная подписка. Каждые 4 недели — новый фокус на конкретную проблему.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { t: "Новый фокус каждый месяц", d: "Живот, осанка, отёчность, тонус — каждые 4 недели новая программа" },
            { t: "Тренировки в записи", d: "Открываешь когда удобно. 20–30 минут, чётко и по делу" },
            { t: "Живая суббота + чат", d: "Тренировка онлайн в субботу и чат с обратной связью от Софьи" },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl bg-card p-7 border border-border shadow-[var(--shadow-card)]">
              <h3 className="text-xl font-semibold">{c.t}</h3>
              <p className="mt-3 text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ЧТО ПОЛУЧИШЬ */}
      <section className="bg-accent/30 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Что ты почувствуешь</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {GET.map((g) => (
              <div key={g.t} className="rounded-2xl bg-card p-6 border border-border">
                <h3 className="text-lg font-semibold">{g.t}</h3>
                <p className="mt-2 text-muted-foreground">{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЭТО НЕ МАРАФОН */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Это не марафон</h2>
        <p className="mt-4 text-center text-muted-foreground">
          Здесь по-другому. Никакого давления.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {NOT_MARATHON.map((n) => (
            <div key={n} className="flex items-start gap-3 rounded-xl bg-card border border-border px-5 py-4">
              <span className="text-primary text-xl leading-none mt-0.5">✕</span>
              <span>{n}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Отзывы участниц</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <div key={i} className="rounded-3xl bg-card p-6 border border-border shadow-[var(--shadow-card)] flex flex-col">
                <img src={r.img} alt={`Отзыв ${r.name}`} className="rounded-xl w-full object-cover aspect-[4/3]" />
                <p className="mt-5 text-foreground/90 leading-relaxed flex-1">«{r.text}»</p>
                <p className="mt-4 font-semibold">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРО СОФЬЮ */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Про Софью</h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Я тренер, и я не верю в надрыв. Мой подход — про дыхание, бережную работу с телом
          и осознанные пищевые привычки. За месяцы в клубе участницы выравнивают силуэт,
          подтягивают живот и впервые перестают срываться. Работаем мягко — результат глубокий.
        </p>
      </section>

      {/* ЦЕНА */}
      <section id="price" className="py-20" style={{ background: "var(--gradient-warm)" }}>
        <div className="mx-auto max-w-2xl px-6" id="join">
          <PriceBlock />
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-muted-foreground">
        © Клуб онлайн-тренировок Софьи
      </footer>
    </main>
  );
}
