"use client";

type Block = [string, string];

function Nav() {
  return (
    <nav style={{ background: "#F0EDE6", borderBottom: "1px solid rgba(0,0,0,0.08)", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontFamily: "var(--font-display)", fontSize: 18, letterSpacing: 1, textDecoration: "none", color: "#0A0A0A" }}>SOFIA POLENOVA</a>
      </div>
    </nav>
  );
}

export default function LegalPage({ blocks }: { blocks: Block[] }) {
  return (
    <main style={{ background: "#F0EDE6", fontFamily: "var(--font-sans)", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "48px 20px 80px" }}>
        {blocks.map(([type, text], i) => {
          if (type === "title") {
            return (
              <h1 key={i} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 6vw, 40px)", textTransform: "uppercase", lineHeight: 1.1, margin: "0 0 8px" }}>
                {text}
              </h1>
            );
          }
          if (type === "subtitle") {
            return (
              <p key={i} style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 17, color: "#555", margin: "0 0 20px" }}>
                {text}
              </p>
            );
          }
          if (type === "meta") {
            return (
              <p key={i} style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#888", margin: "0 0 4px" }}>
                {text}
              </p>
            );
          }
          if (type === "heading") {
            return (
              <h2 key={i} style={{ fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 700, margin: "36px 0 14px", paddingTop: 20, borderTop: "1px solid rgba(0,0,0,0.12)" }}>
                {text}
              </h2>
            );
          }
          return (
            <p key={i} style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65, color: "#333", margin: "0 0 12px" }}>
              {text}
            </p>
          );
        })}
      </div>
    </main>
  );
}
