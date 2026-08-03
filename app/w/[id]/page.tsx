import type { Metadata } from "next";
import { Month3Program } from "@/components/Month3Program";

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

export default async function WorkoutPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (id !== ID) {
    return (
      <main style={{ background: "#F0EDE6", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "40px 20px" }}>
          <p>Страница не найдена</p>
        </div>
      </main>
    );
  }
  return <Month3Program />;
}
