import Image from "next/image";
import { PlayIcon } from "./icons";

export function MonoImage({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 337px, 100vw",
  play = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  play?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-thumb ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover opacity-50 grayscale"
      />
      <div className="absolute inset-0 bg-black mix-blend-saturation" />
      {play ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayIcon />
        </div>
      ) : null}
    </div>
  );
}

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-display text-center text-[40px] font-bold leading-[48px] text-ink">
      {children}
    </h1>
  );
}

export function SegmentedControl({
  options,
  value,
  onChange,
}: {
  options: { id: string; label: string; icon?: React.ReactNode }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex items-center">
      {options.map((option) => {
        const active = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={`flex items-center justify-center gap-2 px-[15px] py-2.5 text-base font-medium leading-6 ${
              active
                ? "bg-ink text-white"
                : "border border-stroke-input bg-white text-dark"
            }`}
          >
            {option.icon}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export function DarkButton({
  children,
  type = "button",
}: {
  children: React.ReactNode;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      className="bg-dark px-6 py-3 text-base font-medium leading-6 text-white transition-opacity hover:opacity-90"
    >
      {children}
    </button>
  );
}
