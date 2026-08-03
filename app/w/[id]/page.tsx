import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ID = "5c07bb3e-9a51-4634-8742-de67bfec36a4";

export async function generateStaticParams() {
  return [{ id: ID }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: id === ID ? "Месяц 3 — программа тренировок" : "Программа",
    robots: { index: false, follow: false },
  };
}

const S = {
  page: { background: "#F0EDE6", minHeight: "100vh", fontFamily: "'Inter', sans-serif" } as React.CSSProperties,
  nav: { borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" } as React.CSSProperties,
  back: { fontFamily: "'Inter', sans-serif", fontSize: 13, textDecoration: "none", color: "#666", letterSpacing: 1 } as React.CSSProperties,
  logo: { fontFamily: "'Anton', sans-serif", fontSize: 16, letterSpacing: 1, color: "#0A0A0A", textDecoration: "none" } as React.CSSProperties,
  wrap: { maxWidth: 600, margin: "0 auto", padding: "40px 20px 80px" } as React.CSSProperties,
  label: { fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, color: "#666", marginBottom: 12 },
  h1: { fontFamily: "'Anton', sans-serif", fontSize: "clamp(40px, 10vw, 72px)", textTransform: "uppercase" as const, lineHeight: 1, margin: "0 0 16px" },
  lead: { fontSize: 17, lineHeight: 1.6, color: "#333", marginBottom: 32 },
  divider: { borderTop: "1px solid rgba(0,0,0,0.12)", margin: "32px 0" } as React.CSSProperties,

  block: { background: "#E3E0D8", padding: "24px", marginBottom: 12 } as React.CSSProperties,
  blockTitle: { fontFamily: "'Anton', sans-serif", fontSize: 18, textTransform: "uppercase" as const, margin: "0 0 14px" },
  item: { fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#333", padding: "10px 0", borderBottom: "1px solid rgba(0,0,0,0.08)", display: "flex", gap: 10, lineHeight: 1.5 } as React.CSSProperties,
  itemLast: { fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#333", padding: "10px 0", display: "flex", gap: 10, lineHeight: 1.5 } as React.CSSProperties,

  tag: { fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" as const, color: "#666", marginBottom: 6 },
  warmup: { fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 20 },

  card: { background: "#E3E0D8", padding: "18px", marginBottom: 10 } as React.CSSProperties,
  cardSuper: { background: "#E3E0D8", padding: "18px", marginBottom: 10, border: "2px solid #0A0A0A" } as React.CSSProperties,
  exName: { fontFamily: "'Anton', sans-serif", fontSize: 15, textTransform: "uppercase" as const, marginBottom: 8, lineHeight: 1.2 },
  exRow: { display: "flex", gap: 14, fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#444", marginBottom: 6, flexWrap: "wrap" as const },
  exStat: { fontWeight: 600, color: "#0A0A0A" },
  exNote: { fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#666", lineHeight: 1.5, marginTop: 4 },
  exVideo: { display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" as const, color: "#0A0A0A", textDecoration: "none", marginTop: 8 },
  superLabel: { fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" as const, color: "#0A0A0A", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 },
  superDivider: { borderTop: "1px dashed rgba(0,0,0,0.25)", margin: "14px 0" } as React.CSSProperties,

  stretch: { background: "transparent", border: "1px solid rgba(0,0,0,0.15)", padding: "16px 18px", marginTop: 4 } as React.CSSProperties,
};

type Ex = {
  name: string;
  sets: string;
  weight?: string;
  note?: string;
  video?: string;
};

type Super = { superset: [Ex, Ex] };

function isSuper(x: Ex | Super): x is Super {
  return (x as Super).superset !== undefined;
}

function ExerciseCard({ ex }: { ex: Ex }) {
  return (
    <div style={S.card}>
      <div style={S.exName}>{ex.name}</div>
      <div style={S.exRow}>
        <span><span style={S.exStat}>{ex.sets}</span></span>
        {ex.weight && <span>{ex.weight}</span>}
      </div>
      {ex.note && <div style={S.exNote}>{ex.note}</div>}
      {ex.video && (
        <a href={ex.video} target="_blank" rel="noopener noreferrer" style={S.exVideo}>
          ▶ Видео
        </a>
      )}
    </div>
  );
}

function Block({ items }: { items: (Ex | Super)[] }) {
  return (
    <>
      {items.map((it, i) =>
        isSuper(it) ? (
          <div key={i} style={S.cardSuper}>
            <div style={S.superLabel}>⇄ Суперсет — без отдыха между упражнениями</div>
            <div style={S.exName}>{it.superset[0].name}</div>
            <div style={S.exRow}>
              <span style={S.exStat}>{it.superset[0].sets}</span>
              {it.superset[0].weight && <span>{it.superset[0].weight}</span>}
            </div>
            {it.superset[0].note && <div style={S.exNote}>{it.superset[0].note}</div>}
            {it.superset[0].video && (
              <a href={it.superset[0].video} target="_blank" rel="noopener noreferrer" style={S.exVideo}>▶ Видео</a>
            )}
            <div style={S.superDivider} />
            <div style={S.exName}>{it.superset[1].name}</div>
            <div style={S.exRow}>
              <span style={S.exStat}>{it.superset[1].sets}</span>
              {it.superset[1].weight && <span>{it.superset[1].weight}</span>}
            </div>
            {it.superset[1].note && <div style={S.exNote}>{it.superset[1].note}</div>}
            {it.superset[1].video && (
              <a href={it.superset[1].video} target="_blank" rel="noopener noreferrer" style={S.exVideo}>▶ Видео</a>
            )}
          </div>
        ) : (
          <ExerciseCard key={i} ex={it} />
        )
      )}
    </>
  );
}

const COMPLEXES: Ex[] = [
  { name: "Раскрытие грудного отдела", sets: "10 минут", video: "https://youtu.be/CPszw4KHN5g" },
  { name: "Работа с дыханием", sets: "10 минут", video: "https://youtu.be/36bvK3Ze7nY" },
  { name: "Работа с тазобедренными суставами", sets: "12 минут", video: "https://youtu.be/JgpoY8j_fac" },
  { name: "Работа с грудным отделом", sets: "16 минут", video: "https://youtu.be/qGVTZGkba5g" },
];

const NIZ: (Ex | Super)[] = [
  { name: "Ягодичный мост + пауза 3 сек вверху", sets: "4×15", weight: "20-25 кг", video: "https://youtube.com/shorts/qGcRJbu6mKc" },
  { name: "Мост на 1 ноге", sets: "3×12 на каждую ногу", weight: "без веса или гантель 3-5 кг", note: "Таз держим ровно, не заваливаем в сторону" },
  { superset: [
    { name: "Жим платформы", sets: "3×15", weight: "40-45 кг", note: "Широкая постановка ног", video: "https://youtube.com/shorts/qa12hp6sm7A" },
    { name: "Журавлик на 1 ноге", sets: "3×12 на каждую ногу", weight: "гантель 5-6 кг", note: "Пауза 1-2 сек в наклоне", video: "https://youtube.com/shorts/IcfICy6-ZGA" },
  ]},
  { name: "Разведения ног", sets: "3×15", weight: "50-60 кг", note: "Поясницу не отрывать от спинки тренажёра", video: "https://youtube.com/shorts/nXoOUbZ-jpM" },
  { name: "Боковое отведение бедра с резинкой", sets: "3×15 на каждую ногу", weight: "резинка выше колен, коврик, лёжа на боку" },
  { name: "Сгибание голени с резинкой стоя", sets: "3×15", weight: "резинка на щиколотке, у опоры" },
];

const VERH: (Ex | Super)[] = [
  { name: "Горизонтальная тяга (хаммер)", sets: "4×12-15", note: "Грудь толкаешь вперёд, локти назад", video: "https://youtube.com/shorts/Ye5EErGKzi4" },
  { name: "Тяга к лицу на канате (face pull)", sets: "3×12-15", note: "Локти выше кистей, разводим руки в конце амплитуды" },
  { name: "Сведение рук в кроссовере стоя", sets: "3×12-15", note: "Руки идут параллельно полу, вес минимальный" },
  { superset: [
    { name: "Жим на плечи с гантелями", sets: "3×12", note: "Локти чуть вниз, не параллельно полу", video: "https://youtu.be/X-ND_3CahGQ" },
    { name: "Разведения в стороны с гантелями", sets: "3×15", weight: "5 кг", video: "https://youtube.com/shorts/S4k6zTtQjR0" },
  ]},
  { name: "Отжимания с колен", sets: "3×15-18", note: "Пробуем 1 подход из полной планки", video: "https://youtu.be/0hT3yMpvh3g" },
];

const FULLBODY: (Ex | Super)[] = [
  { name: "Гоблет-присед с гантелью", sets: "4×12-15", note: "Гантель у груди, приседаем между стоп" },
  { name: "Тяга гантели в наклоне одной рукой", sets: "3×12 на каждую руку", note: "Спина прямая, тянем локтем вверх-назад" },
  { name: "Боковые наклоны", sets: "3×15 на сторону", video: "https://youtu.be/i5x6ZVpnY68" },
  { name: "КОР-финишер", sets: "прямая / косые / поперечная", note: "Полный комплекс на пресс в конце тренировки", video: "https://youtu.be/N66_ksOm4a0" },
];

function DayTab({
  warmup,
  items,
  stretch,
}: {
  warmup: string;
  items: (Ex | Super)[];
  stretch: string;
}) {
  return (
    <div>
      <div style={S.tag}>Разминка</div>
      <div style={S.warmup}>{warmup}</div>
      <Block items={items} />
      <div style={S.stretch}>
        <div style={S.tag}>Растяжка</div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#555", lineHeight: 1.5 }}>{stretch}</div>
      </div>
    </div>
  );
}

function Month3Page() {
  return (
    <main style={S.page}>
      <nav style={S.nav}>
        <a href="/" style={S.back}>← Назад</a>
        <a href="/" style={S.logo}>SOFIA POLENOVA</a>
        <div style={{ width: 60 }} />
      </nav>

      <div style={S.wrap}>
        <div style={S.label}>Программа тренировок</div>
        <h1 style={S.h1}>Месяц 3</h1>
        <p style={S.lead}>
          Твоя программа на этот месяц. Приоритет — осанка и раскрытие грудного отдела, плюс дальнейшая прогрессия в ягодицах.
        </p>

        <div style={S.block}>
          <div style={S.blockTitle}>Комплексы — каждый день</div>
          {COMPLEXES.map((c, i) => (
            <div key={c.name} style={i === COMPLEXES.length - 1 ? S.itemLast : S.item}>
              <span style={{ color: "#666", flexShrink: 0 }}>{i + 1}.</span>
              <span style={{ flex: 1 }}>{c.name} · {c.sets}</span>
              {c.video && (
                <a href={c.video} target="_blank" rel="noopener noreferrer" style={{ color: "#0A0A0A", fontSize: 12, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>
                  ▶
                </a>
              )}
            </div>
          ))}
        </div>

        <div style={S.divider} />

        <Tabs defaultValue="niz">
          <TabsList style={{ width: "100%", height: "auto", background: "#D8D5CE", padding: 4, marginBottom: 20 }}>
            <TabsTrigger value="niz" className="font-hand uppercase" style={{ flex: 1, fontSize: 12, letterSpacing: 1 }}>Низ</TabsTrigger>
            <TabsTrigger value="verh" className="font-hand uppercase" style={{ flex: 1, fontSize: 12, letterSpacing: 1 }}>Верх</TabsTrigger>
            <TabsTrigger value="full" className="font-hand uppercase" style={{ flex: 1, fontSize: 12, letterSpacing: 1 }}>Full Body</TabsTrigger>
          </TabsList>

          <TabsContent value="niz">
            <DayTab
              warmup="Глазодвигательный рефлекс → раскрытие книги → боковые наклоны → прокатать зпб на ролле → мёртвый жук 2×8-10 на сторону"
              items={NIZ}
              stretch="Прокат ягодицы на ролле, снять зажимы с крестца — 1-2 мин"
            />
          </TabsContent>

          <TabsContent value="verh">
            <DayTab
              warmup="8 минут разминки + раскрытие книги → планка на предплечьях 3×20-30 сек"
              items={VERH}
              stretch="Растяжка грудных в дверном проёме 2×30-40 сек на сторону + 7-10 минут дорожка"
            />
          </TabsContent>

          <TabsContent value="full">
            <DayTab
              warmup="Разогрев на дорожке 3-5 мин, открытие книги, ротация грудного с колен, перекаты ТБС"
              items={FULLBODY}
              stretch="Мобилизация грудного отдела на ролле 2×10 + общая растяжка"
            />
          </TabsContent>
        </Tabs>

        <div style={S.divider} />
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#999", lineHeight: 1.6 }}>
          Вопросы по технике — пиши в Telegram: <a href="https://t.me/sofiapolenova" target="_blank" rel="noopener noreferrer" style={{ color: "#666" }}>@sofiapolenova</a>
        </p>
      </div>
    </main>
  );
}

export default async function WorkoutPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (id !== ID) {
    return (
      <main style={S.page}>
        <div style={S.wrap}><p>Страница не найдена</p></div>
      </main>
    );
  }
  return <Month3Page />;
}
