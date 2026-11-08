import type { ReactNode } from "react";

const HAT: Record<string, Hat> = {
  "\u0302": "circumflex",
  "\u0306": "breve",
  "\u031b": "horn",
};

const TONE: Record<string, Tone> = {
  "\u0301": "acute",
  "\u0300": "grave",
  "\u0309": "hook",
  "\u0303": "tilde",
};

type Hat = "circumflex" | "breve" | "horn";
type Tone = "acute" | "grave" | "hook" | "tilde";
type Slot = "low" | "high" | "below";

type Parts = {
  base: string;
  hat?: Hat;
  tone?: Tone;
  dot: boolean;
  bar: boolean;
};

function partsOf(char: string): Parts | null {
  if (char === "đ" || char === "Đ") {
    return { base: char === "đ" ? "d" : "D", dot: false, bar: true };
  }
  const nfd = char.normalize("NFD");
  if (nfd.length === 1) return null;
  let hat: Hat | undefined;
  let tone: Tone | undefined;
  let dot = false;
  for (const mark of Array.from(nfd).slice(1)) {
    if (HAT[mark]) hat = HAT[mark];
    else if (TONE[mark]) tone = TONE[mark];
    else if (mark === "\u0323") dot = true;
  }
  if (!hat && !tone && !dot) return null;
  return { base: nfd[0], hat, tone, dot, bar: false };
}

const PATH: Record<Hat | Tone, string> = {
  circumflex: "M8 33 L50 7 L92 33",
  breve: "M10 12 C32 36 68 36 90 12",
  horn: "M24 34 C52 8 84 12 66 34",
  acute: "M34 35 L68 6",
  grave: "M66 35 L32 6",
  hook: "M66 8 C66 8 30 2 26 20 C22 36 52 36 54 18",
  tilde: "M8 26 C24 8 38 8 50 22 C62 36 76 36 92 16",
};

function markBox(name: Hat | Tone | "dot", slot: Slot, italic: boolean) {
  const width =
    name === "dot"
      ? "0.085em"
      : name === "horn"
        ? "0.22em"
        : name === "tilde"
          ? "0.38em"
          : name === "circumflex" || name === "breve"
            ? "0.42em"
            : "0.28em";
  const height =
    name === "dot" ? "0.08em" : name === "tilde" ? "0.14em" : name === "horn" ? "0.2em" : "0.16em";
  const bottom = slot === "high" ? "1.02em" : slot === "below" ? "0.2em" : "0.845em";
  const shift = italic ? (slot === "below" ? "-0.02em" : slot === "high" ? "0.16em" : "0.12em") : "0em";
  return {
    position: "absolute" as const,
    left: name === "horn" ? "72%" : "50%",
    bottom,
    width,
    height,
    translate: `calc(-50% + ${shift}) 0`,
    transform: italic && slot !== "below" ? "skewX(-14deg)" : undefined,
    transformOrigin: "center bottom",
    pointerEvents: "none" as const,
    overflow: "visible" as const,
  };
}

function Mark({
  name,
  slot,
  italic,
}: {
  name: Hat | Tone | "dot";
  slot: Slot;
  italic: boolean;
}) {
  const style = markBox(name, slot, italic);
  if (name === "dot") {
    return (
      <svg data-slot={slot} viewBox="0 0 10 10" style={style} aria-hidden>
        <circle cx="5" cy="5" r="4.2" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg data-slot={slot} data-mark={name} viewBox="0 0 100 40" style={style} aria-hidden>
      <path
        d={PATH[name]}
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VietGlyph({ char, parts, italic }: { char: string; parts: Parts; italic: boolean }) {
  const stacked = Boolean(parts.hat && parts.tone);
  return (
    <span className="viet-glyph" style={{ position: "relative", display: "inline-block" }}>
      <span className="sr-only">{char}</span>
      <span aria-hidden="true">{parts.base}</span>
      {parts.hat ? <Mark name={parts.hat} slot="low" italic={italic} /> : null}
      {parts.tone ? <Mark name={parts.tone} slot={stacked ? "high" : "low"} italic={italic} /> : null}
      {parts.dot ? <Mark name="dot" slot="below" italic={italic} /> : null}
      {parts.bar ? (
        <span
          aria-hidden
          style={{
            position: "absolute",
            left: "0.08em",
            bottom: "0.28em",
            width: "0.42em",
            height: "0.04em",
            borderRadius: "1px",
            background: "currentColor",
          }}
        />
      ) : null}
    </span>
  );
}

export function SwearVietText({ text, italic = false }: { text: string; italic?: boolean }) {
  const nodes: ReactNode[] = [];
  let plain = "";
  const flush = () => {
    if (!plain) return;
    nodes.push(plain);
    plain = "";
  };
  for (const char of Array.from(text)) {
    const parts = partsOf(char);
    if (!parts) {
      plain += char;
      continue;
    }
    flush();
    nodes.push(
      <VietGlyph key={`${nodes.length}-${char}`} char={char} parts={parts} italic={italic} />,
    );
  }
  flush();
  return <>{nodes}</>;
}
