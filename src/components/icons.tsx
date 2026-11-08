// Staff lines sit inside the menu icon's three strokes when both are centred in the 88px header.
export function LogoMark({ className = "size-[70px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 70 70" fill="currentColor" aria-hidden>
      <g fillOpacity="0.5">
        <rect y="18" width="69.5" height="1" />
        <rect y="34" width="69.5" height="1" />
        <rect y="50" width="69.5" height="1" />
      </g>
      <path d="M34.7765 54.0709H33.4139V18.2921H34.7765V54.0709Z" />
      <path d="M48.9331 67.4363C48.9331 68.3595 48.185 69.1076 47.2617 69.1076C46.3385 69.1076 45.5904 68.3595 45.5904 67.4363C45.5904 66.5131 46.3385 65.7649 47.2617 65.7649C48.185 65.7649 48.9331 66.5131 48.9331 67.4363Z" />
      <path d="M27.11 45.1966H22.2584V0.892365H27.11V45.1966Z" />
      <path d="M27.1098 40.5455L27.11 45.1966L26.5898 45.1965L25.0659 44.9132C25.0922 44.7782 25.4376 43.034 27.1098 40.5455Z" />
      <path d="M38.9495 64.5507C35.2269 66.7033 31.4581 67.1479 30.5332 65.5511C29.6112 63.9518 31.8824 60.9104 35.6085 58.7608C39.3311 56.6117 43.1004 56.1637 44.0249 57.7635C44.9468 59.3598 42.6756 62.4011 38.9495 64.5507ZM43.6795 18.3604V21.7652C43.6795 22.901 43.4376 24.026 42.9421 25.048C41.9827 27.0277 39.9197 29.8413 35.4899 32.7015C35.4804 32.7084 35.4705 32.7149 35.4606 32.7214C34.9867 33.0275 34.5322 33.3371 34.098 33.6463C30.5987 36.1249 28.4397 38.5705 27.1098 40.5455L27.11 45.1966L26.5898 45.1965L27.3008 45.3282C27.3107 45.2821 28.1995 41.1283 34.098 36.4837C34.5257 36.1448 34.9798 35.8058 35.4606 35.4665C35.8621 35.1801 36.2834 34.8973 36.7245 34.6109C40.1444 32.4053 42.3104 30.1872 43.6795 28.2515V55.1861C43.1034 54.7946 42.4156 54.4919 41.6191 54.3008C36.7508 53.1387 30.1873 57.2072 28.9334 62.1644C27.8933 66.2721 30.2037 69.1392 34.5257 69.106C37.1721 69.0866 39.8283 67.9573 41.8921 66.2061C42.4057 65.7883 42.8567 65.3441 43.2483 64.8931C45.0223 62.8522 45.9308 60.1994 45.9308 57.497V18.3604H43.6795Z" />
    </svg>
  );
}

// Needs a `group` ancestor for the hover state.
export function MenuToggleIcon({ open }: { open: boolean }) {
  const bar = "absolute left-0 h-0.5 w-10 bg-current transition-[translate,rotate,opacity]";
  const motion = open
    ? "duration-300 ease-out"
    : "duration-300 ease-out group-hover:duration-200 group-hover:ease-in-out";
  return (
    <span className="relative block h-[34px] w-10" aria-hidden>
      <span
        className={`${bar} ${motion} top-0 ${
          open ? "translate-y-4 -rotate-45" : "group-hover:translate-y-1"
        }`}
      />
      <span className={`${bar} ${motion} top-4 ${open ? "opacity-0" : ""}`} />
      <span
        className={`${bar} ${motion} top-8 ${
          open ? "-translate-y-4 rotate-45" : "group-hover:-translate-y-1"
        }`}
      />
    </span>
  );
}

export function ChevronLeft({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M12.5 4.5L7 10l5.5 5.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ChevronRight({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ChevronDown({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function CalendarIcon({ className = "size-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="2" y="3.5" width="14" height="12.5" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 7.5h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 2v3M12 2v3" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function MapPinIcon({ className = "size-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M9 16s5-4.4 5-8.2A5 5 0 0 0 4 7.8C4 11.6 9 16 9 16Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="9" cy="7.8" r="1.6" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function BookIcon({ className = "size-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M3.5 3.2h5.2v11.2H4.2A.7.7 0 0 1 3.5 13.7V3.2Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M14.5 3.2H9.3v11.2h4.5a.7.7 0 0 0 .7-.7V3.2Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function PlayIcon({ className = "size-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="20" cy="20" r="19" fill="#4B5563" fillOpacity="0.9" />
      <path d="M16.5 12.5v15l12-7.5-12-7.5Z" fill="white" />
    </svg>
  );
}

export function TitlePlayIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M4 2.4v11.2L14.4 8 4 2.4Z" />
    </svg>
  );
}

export function MinusIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M3 10h14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ListIcon({ className = "size-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M5 4.5h11M5 9h11M5 13.5h11" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="2.4" cy="4.5" r="0.9" fill="currentColor" />
      <circle cx="2.4" cy="9" r="0.9" fill="currentColor" />
      <circle cx="2.4" cy="13.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function GridIcon({ className = "size-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="2" y="2" width="5.5" height="5.5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10.5" y="2" width="5.5" height="5.5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="2" y="10.5" width="5.5" height="5.5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10.5" y="10.5" width="5.5" height="5.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
