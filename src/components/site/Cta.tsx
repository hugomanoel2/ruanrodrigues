const PHONE = "5516997725490";

const MESSAGES = {
  analisar:
    "Olá, Dr. Ruan. Gostaria de verificar a possibilidade de registrar minha marca no INPI.",
  registrar: "Olá, Dr. Ruan. Gostaria de iniciar o registro da minha marca no INPI.",
} as const;

export type CtaIntent = keyof typeof MESSAGES;

export function waLink(intent: CtaIntent = "analisar") {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGES[intent])}`;
}

export function Cta({
  children,
  intent = "analisar",
  size = "lg",
  variant = "gold",
  className = "",
}: {
  children: React.ReactNode;
  intent?: CtaIntent;
  size?: "lg" | "md";
  variant?: "gold" | "outline";
  className?: string;
}) {
  const pad =
    size === "lg" ? "px-7 py-4 text-[0.95rem] md:text-base" : "px-6 py-3.5 text-sm";
  const look = variant === "gold" ? "btn-gold" : "btn-outline";
  return (
    <a
      href={waLink(intent)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-base ${look} max-w-full text-center ${pad} ${className}`}
    >
      <span>{children}</span>
      <svg
        className="btn-arrow h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 12h13" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </a>
  );
}
