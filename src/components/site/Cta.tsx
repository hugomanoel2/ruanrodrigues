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
  className = "",
}: {
  children: React.ReactNode;
  intent?: CtaIntent;
  size?: "lg" | "md";
  className?: string;
}) {
  const pad = size === "lg" ? "px-8 py-4 text-sm md:text-base" : "px-6 py-3 text-xs md:text-sm";
  return (
    <a
      href={waLink(intent)}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-glow inline-flex max-w-full items-center justify-center text-center ${pad} ${className}`}
    >
      {children}
    </a>
  );
}
