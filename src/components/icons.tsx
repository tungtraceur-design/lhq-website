export function MenuIcon({ className = "h-8 w-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 32" fill="none" aria-hidden>
      <path d="M0 2H40" stroke="currentColor" strokeWidth="2" />
      <path d="M0 16H40" stroke="currentColor" strokeWidth="2" />
      <path d="M0 30H40" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 24" fill="none" aria-hidden>
      <path d="M2 2L38 22" stroke="currentColor" strokeWidth="2" />
      <path d="M38 2L2 22" stroke="currentColor" strokeWidth="2" />
    </svg>
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
      <circle cx="20" cy="20" r="19" fill="#4A5568" fillOpacity="0.85" />
      <path d="M16.5 12.5v15l12-7.5-12-7.5Z" fill="white" />
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
