import { waLink } from "./Cta";

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
    <footer className="section-dark relative overflow-hidden pt-16 pb-10">
      <div className="shell relative">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="text-center md:text-left">
            <span className="font-display block text-base font-black tracking-[0.14em] text-on-dark uppercase">
              Ruan Rodrigues
            </span>
            <span className="mt-1 block text-[0.62rem] font-semibold tracking-[0.26em] text-gold uppercase">
              Advocacia · Marcas
            </span>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-on-dark-muted md:mx-0">
              Registro e proteção de marcas no INPI, com análise de viabilidade e acompanhamento do
              processo. Atendimento online em todo o Brasil.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title} className="text-center md:text-left">
              <h3 className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-on-dark-muted transition-colors hover:text-on-dark"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Contato</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={waLink("analisar")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-on-dark-muted transition-colors hover:text-on-dark"
                >
                  WhatsApp: (16) 99772-5490
                </a>
              </li>
              <li className="text-sm text-on-dark-muted">Atendimento online — Brasil</li>
              <li>
                <a
                  href={waLink("registrar")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
                >
                  Iniciar meu registro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-gold/15 pt-6 text-center text-xs text-on-dark-muted md:flex-row md:justify-between md:text-left">
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
