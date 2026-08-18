import { waLink } from "./Cta";
import logoAsset from "@/assets/logo-rr.png.asset.json";

const COLS = [
  {
    title: "Navegação",
    links: [
      { href: "#top", label: "Início" },
      { href: "#problema", label: "Por que registrar" },
      { href: "#processo", label: "Como funciona" },
      { href: "#beneficios", label: "Benefícios" },
    ],
  },
  {
    title: "Sobre",
    links: [
      { href: "#sobre", label: "Dr. Ruan Rodrigues" },
      { href: "#diferencial", label: "Diferencial" },
      { href: "#para-quem", label: "Para quem é" },
      { href: "#faq", label: "Dúvidas frequentes" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand/10 bg-card pt-16 pb-10 text-ink">
      <div className="shell relative">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <img
              src={logoAsset.url}
              alt="Ruan Rodrigues Advocacia"
              className="h-12 w-auto brightness-0"
            />
            <span className="font-display mt-4 block text-base font-black tracking-[0.14em] text-brand uppercase">
              Ruan Rodrigues
            </span>

            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground md:mx-0">
              Registro e proteção de marcas no INPI, com análise de viabilidade e acompanhamento do
              processo. Atendimento online em todo o Brasil.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title} className="text-center md:text-left">
              <h3 className="text-xs font-bold tracking-[0.2em] text-brand-soft uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-brand"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold tracking-[0.2em] text-brand-soft uppercase">Contato</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={waLink("analisar")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-brand"
                >
                  WhatsApp: (16) 99772-5490
                </a>
              </li>
              <li className="text-sm text-muted-foreground">Atendimento online — Brasil</li>
              <li>
                <a
                  href={waLink("registrar")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-soft transition-colors hover:text-brand"
                >
                  Iniciar meu registro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-brand/12 pt-6 text-center text-xs text-muted-foreground md:flex-row md:justify-between md:text-left">
          <span>
            © {new Date().getFullYear()} Dr. Ruan Rodrigues — Advocacia. Todos os direitos
            reservados.
          </span>
          <span>Conteúdo informativo. Não constitui oferta de resultado.</span>
        </div>
      </div>
    </footer>
  );
}
