import { useEffect, useState } from "react";
import { waLink } from "./Cta";
import logoAsset from "@/assets/logo-rr.png.asset.json";

const LINKS = [
  { href: "#problema", label: "Por que registrar" },
  { href: "#processo", label: "Como funciona" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#sobre", label: "Dr. Ruan" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-gold/20 bg-brand-deep/92 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6 md:h-20">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Ruan Rodrigues Advocacia"
            className="h-8 w-auto md:h-10"
          />
          <span className="font-display text-sm font-black tracking-[0.14em] text-on-dark uppercase md:text-base">
            Ruan Rodrigues
          </span>
        </a>


        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={waLink("analisar")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-gold px-5 py-3 text-[0.8rem]"
          >
            Analisar minha marca
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-gold/30 lg:hidden"
        >
          <span
            className={`h-[1.5px] w-4 bg-gold transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-[1.5px] w-4 bg-gold transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-gold/15 bg-brand-deep/97 backdrop-blur-md lg:hidden">
          <nav className="shell flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-center text-sm font-semibold text-on-dark-muted transition-colors hover:bg-brand/60 hover:text-on-dark"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink("analisar")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-gold mt-2 w-full px-5 py-3.5 text-sm"
            >
              Analisar minha marca
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
