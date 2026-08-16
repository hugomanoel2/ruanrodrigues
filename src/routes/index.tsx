import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cta, waLink } from "@/components/site/Cta";
import ruan1 from "@/assets/ruan-1.png.asset.json";
import handshake from "@/assets/handshake.jpg.asset.json";
import signingWide from "@/assets/signing-wide.jpg.asset.json";
import signingForm from "@/assets/signing-form.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Registro de Marca no INPI | Dr. Ruan Rodrigues" },
      {
        name: "description",
        content:
          "Registro de marca no INPI com análise prévia de viabilidade e acompanhamento jurídico. Atendimento online em todo o Brasil com o Dr. Ruan Rodrigues.",
      },
      { property: "og:title", content: "Registro de Marca no INPI | Dr. Ruan Rodrigues" },
      {
        property: "og:description",
        content:
          "Análise de viabilidade da marca e acompanhamento jurídico do pedido no INPI. Fale diretamente com um advogado.",
      },
    ],
  }),
  component: Index,
});

function Head({
  eyebrow,
  title,
  children,
  tone = "light",
  center = false,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  tone?: "light" | "dark";
  center?: boolean;
}) {
  return (
    <div
      className={
        center
          ? "flex flex-col items-center gap-4 text-center"
          : "section-head flex flex-col gap-4"
      }
    >
      <span
        className={`eyebrow ${tone === "dark" ? "text-gold" : "text-brand-soft"}`}
      >
        <span className="rule-gold" aria-hidden />
        {eyebrow}
      </span>
      <h2
        className={`max-w-3xl text-3xl leading-[1.08] font-extrabold sm:text-4xl md:text-5xl ${
          tone === "dark" ? "text-on-dark" : "text-brand"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <div
          className={`max-w-2xl space-y-4 text-base leading-relaxed md:text-lg ${
            tone === "dark" ? "text-on-dark-muted" : "text-muted-foreground"
          }`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

function Index() {
  return (
    <main className="pb-24 md:pb-0">
      {/* 1 — HERO */}
      <section className="section-base section-dark !pt-16 md:!pt-28 md:!pb-28">
        <img
          src={signingWide.url}
          alt="Assinatura de documentos em ambiente corporativo"
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,var(--brand-deep)_0%,color-mix(in_oklab,var(--brand-deep)_92%,transparent)_38%,color-mix(in_oklab,var(--brand)_55%,transparent)_72%,transparent_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,var(--brand-deep)_0%,transparent_55%)]"
          aria-hidden
        />
        <div className="shell relative">
          <div className="section-head flex max-w-2xl flex-col gap-6">
            <span className="eyebrow text-gold">
              <span className="rule-gold" aria-hidden />
              Registro de marca · INPI
            </span>
            <h1 className="text-4xl leading-[1.02] font-black text-on-dark sm:text-5xl md:text-6xl">
              Proteja a marca que você está construindo.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-on-dark-muted md:text-lg">
              Registro de marca no INPI com análise de viabilidade e acompanhamento jurídico
              durante o processo.
            </p>
            <div className="pt-2">
              <Cta intent="analisar">Quero analisar minha marca</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — PROBLEMA */}
      <section className="section-base section-light">
        <div className="shell grid items-center gap-12 md:grid-cols-[1fr_1fr]">
          <Head eyebrow="O ponto cego" title="Ter um CNPJ não significa ter sua marca registrada.">
            <p>
              Você pode ter empresa aberta, domínio, Instagram, identidade visual e usar o mesmo
              nome há anos.
            </p>
            <p className="font-semibold text-brand">
              Isso não substitui o registro da marca no INPI.
            </p>
            <p>
              Antes de continuar investindo no nome do seu negócio, vale verificar se ele pode ser
              registrado.
            </p>
            <div className="flex justify-center pt-2 md:justify-start">
              <Cta intent="analisar" size="md" variant="outline">
                Verificar minha marca
              </Cta>
            </div>
          </Head>

          <div className="grid gap-4">
            {[
              ["Abertura da empresa", "Registra o CNPJ na Junta Comercial e na Receita Federal."],
              ["Domínio e redes sociais", "Reservam apenas o endereço, não a marca."],
              ["Registro no INPI", "É o procedimento que trata da proteção da marca."],
            ].map(([t, d], i) => (
              <article
                key={t}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 text-left shadow-[var(--shadow-soft)] md:p-6"
              >
                <span className="font-display mt-0.5 text-sm font-black text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-brand md:text-lg">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* 3 — RISCO */}
      <section className="section-base section-dark">
        <div className="shell">
          <Head
            tone="dark"
            eyebrow="Risco"
            title="O que está em jogo quando sua marca não está registrada?"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {[
              [
                "Conflitos com outras marcas",
                "Podem surgir marcas iguais ou semelhantes à sua.",
              ],
              [
                "Mudança de nome e identidade",
                "Direitos anteriores podem exigir uma revisão da marca utilizada.",
              ],
              [
                "Investimento vulnerável",
                "Site, fachada, embalagens e divulgação podem estar ligados a uma marca ainda não protegida.",
              ],
              [
                "Limites para crescer",
                "Uma disputa envolvendo a marca pode gerar obstáculos justamente durante a expansão.",
              ],
            ].map(([t, d], i) => (
              <article
                key={t}
                className="rounded-2xl border border-gold/25 bg-brand-deep/60 p-7 text-center md:text-left"
              >
                <span className="font-display text-sm font-black text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-extrabold text-on-dark md:text-2xl">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">{d}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center md:justify-start">
            <Cta intent="registrar">Quero proteger minha marca</Cta>
          </div>
        </div>
      </section>

      {/* 4 — SOLUÇÃO */}
      <section className="section-base section-tint">
        <div className="shell grid items-center gap-12 md:grid-cols-2">
          <div className="framed order-2 md:order-1">
            <img
              src={signingForm.url}
              alt="Análise documental de viabilidade de registro de marca"
              className="h-full w-full object-cover"
              width={1200}
              height={1200}
            />
          </div>
          <div className="order-1 md:order-2">
            <Head
              eyebrow="Solução"
              title="O primeiro passo não é registrar. É saber se a marca é viável."
            >
              <p>
                Antes do protocolo, é importante pesquisar marcas anteriores, analisar possíveis
                impedimentos e definir corretamente a classificação do pedido.
              </p>
              <p>
                Essa análise ajuda a tomar uma decisão mais segura antes de iniciar o processo.
              </p>
              <div className="flex justify-center pt-2 md:justify-start">
                <Cta intent="analisar">Solicitar análise da marca</Cta>
              </div>
            </Head>
          </div>
        </div>
      </section>

      {/* 5 — COMO FUNCIONA */}
      <section className="section-base section-light">
        <div className="shell">
          <Head eyebrow="Como funciona" title="Do primeiro contato ao acompanhamento no INPI." />
          <ol className="mt-12 grid gap-6 md:grid-cols-5">
            {[
              ["01", "Envie sua marca", "Informe o nome e a atividade do negócio."],
              [
                "02",
                "Análise de viabilidade",
                "São avaliados registros anteriores e possíveis impedimentos.",
              ],
              ["03", "Protocolo no INPI", "O pedido é preparado e protocolado."],
              ["04", "Acompanhamento", "As movimentações do processo são monitoradas."],
              ["05", "Decisão do INPI", "O pedido segue para análise e decisão do Instituto."],
            ].map(([n, t, d]) => (
              <li
                key={n}
                className="relative rounded-2xl border border-border bg-card p-6 text-center md:text-left"
              >
                <span className="font-display block text-4xl leading-none font-black text-brand/25 md:text-5xl">
                  {n}
                </span>
                <span className="mt-3 block h-px w-full bg-gradient-to-r from-gold to-transparent" />
                <h3 className="mt-3 text-lg font-extrabold text-brand">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex justify-center">
            <Cta intent="registrar">Quero iniciar meu registro</Cta>
          </div>
        </div>
      </section>

      {/* 6 — BENEFÍCIOS */}
      <section className="section-base section-tint">
        <div className="shell">
          <Head eyebrow="Benefícios" title="Uma marca registrada é um ativo do seu negócio." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Proteção", "Fortalece juridicamente a proteção do nome e da identidade da marca."],
              ["Exclusividade", "Garante direitos de uso nos limites da proteção concedida."],
              ["Crescimento", "Traz mais segurança para expansão, licenciamento e novos projetos."],
              [
                "Patrimônio",
                "A marca passa a integrar os ativos de propriedade intelectual do negócio.",
              ],
            ].map(([t, d]) => (
              <article
                key={t}
                className="rounded-2xl border border-brand/10 bg-card p-7 text-center md:text-left"
              >
                <span className="rule-gold mx-auto block md:mx-0" aria-hidden />
                <h3 className="mt-4 text-xl font-extrabold text-brand">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — DIFERENCIAL */}
      <section className="section-base section-dark glow-ambient">
        <div className="shell grid items-center gap-12 md:grid-cols-2">
          <div className="framed mx-auto w-full max-w-md">
            <img
              src={handshake.url}
              alt="Aperto de mãos após acordo jurídico"
              className="h-full w-full object-cover"
              width={1200}
              height={1200}
            />
          </div>

          <div>
            <Head tone="dark" eyebrow="Diferencial" title="Seu pedido acompanhado por um advogado.">
              <p>Registrar uma marca envolve mais do que preencher um formulário.</p>
              <p>
                Cada pedido exige análise da marca, enquadramento correto e acompanhamento das
                movimentações no INPI.
              </p>
              <ul className="mx-auto grid max-w-md gap-2 text-left text-sm font-medium text-on-dark md:mx-0">
                {[
                  "Análise individual da marca",
                  "Atendimento personalizado",
                  "Acompanhamento do processo",
                  "Comunicação clara",
                  "Atendimento online em todo o Brasil",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                    {i}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center pt-2 md:justify-start">
                <Cta intent="analisar">Falar com um advogado</Cta>
              </div>
            </Head>
          </div>
        </div>
      </section>

      {/* 8 — AUTORIDADE */}
      <section className="section-base section-light">
        <div className="shell grid items-center gap-12 md:grid-cols-[1fr_1.1fr]">
          <div className="framed order-2 mx-auto w-full max-w-sm md:order-1">
            <img
              src={ruan1.url}
              alt="Retrato profissional do Dr. Ruan Rodrigues"
              className="h-full w-full object-cover"
              width={1080}
              height={1350}
            />
          </div>
          <div className="order-1 md:order-2">
            <Head eyebrow="Autoridade" title="Dr. Ruan Rodrigues">
              <p>
                Advocacia direcionada a empresários e empreendedores que buscam orientação jurídica
                para proteger suas marcas.
              </p>
              <p>
                Atendimento individual desde a análise inicial até o acompanhamento do processo
                perante o INPI.
              </p>
              <p className="text-sm font-bold tracking-[0.18em] text-brand uppercase">
                OAB [NÚMERO]
              </p>
              <div className="flex justify-center pt-2 md:justify-start">
                <Cta intent="analisar">Quero falar com o Dr. Ruan</Cta>
              </div>
            </Head>
          </div>
        </div>
      </section>

      {/* 9 — IDENTIFICAÇÃO */}
      <section className="section-base section-dark">
        <div className="shell">
          <Head
            tone="dark"
            eyebrow="Para quem é"
            title="Se existe uma marca por trás do seu negócio, vale verificar a proteção."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start">
            {[
              "Empresas",
              "Empreendedores",
              "Profissionais liberais",
              "E-commerces",
              "Infoprodutos",
              "Aplicativos e negócios digitais",
            ].map((i) => (
              <span
                key={i}
                className="rounded-full border border-gold/30 bg-brand-deep/60 px-5 py-2.5 text-sm font-semibold text-on-dark"
              >
                {i}
              </span>
            ))}
          </div>
          <div className="mt-10 flex justify-center md:justify-start">
            <Cta intent="analisar">Analisar minha marca</Cta>
          </div>
        </div>
      </section>

      {/* 10 — FAQ */}
      <section className="section-base section-tint">
        <div className="shell max-w-3xl">
          <Head eyebrow="FAQ" title="Dúvidas antes de registrar sua marca?" center />
          <Accordion type="single" collapsible className="mt-10 w-full">
            {[
              [
                "Ter CNPJ já protege minha marca?",
                "Não. A abertura da empresa e o registro da marca são procedimentos diferentes.",
              ],
              [
                "Como saber se minha marca pode ser registrada?",
                "O primeiro passo é realizar uma análise prévia para identificar marcas semelhantes e possíveis impedimentos.",
              ],
              [
                "Quanto tempo demora?",
                "O prazo pode variar de acordo com a análise do INPI e eventuais ocorrências durante o processo.",
              ],
              [
                "Já uso minha marca há anos. Ainda preciso registrar?",
                "O tempo de uso não substitui automaticamente o registro perante o INPI. É necessário analisar cada situação.",
              ],
              [
                "Posso fazer tudo online?",
                "Sim. O atendimento e acompanhamento podem ser realizados online em todo o Brasil.",
              ],
            ].map(([q, a], i) => (
              <AccordionItem key={q} value={`item-${i}`} className="border-brand/15">
                <AccordionTrigger className="text-left text-base font-bold text-brand md:text-lg">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 11 — CTA FINAL */}
      <section className="section-base section-dark glow-ambient">
        <img
          src={signingWide.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="shell relative flex flex-col items-center gap-6 text-center">
          <span className="eyebrow text-gold">
            <span className="rule-gold" aria-hidden />
            Próximo passo
          </span>
          <h2 className="max-w-3xl text-3xl leading-[1.06] font-black text-on-dark sm:text-4xl md:text-5xl">
            Você já investiu na sua marca. Agora proteja o que está construindo.
          </h2>
          <p className="max-w-2xl text-base text-on-dark-muted md:text-lg">
            Solicite uma análise e descubra os próximos passos para registrar sua marca no INPI.
          </p>
          <Cta intent="analisar">Quero analisar minha marca</Cta>
          <div className="flex flex-col items-center gap-1 text-sm text-on-dark-muted">
            <span>Atendimento online em todo o Brasil</span>
            <span>Fale diretamente com um advogado</span>
          </div>
        </div>
      </section>

      <footer className="section-light border-t border-border py-8">
        <div className="shell flex flex-col items-center gap-2 text-center text-xs text-muted-foreground">
          <span className="font-bold tracking-[0.18em] text-brand uppercase">
            Dr. Ruan Rodrigues
          </span>
          <span>Advocacia — Registro de marcas no INPI · Atendimento online em todo o Brasil</span>
        </div>
      </footer>

      {/* CTA fixo mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/25 bg-brand-deep/95 px-4 py-3 backdrop-blur md:hidden">
        <a
          href={waLink("analisar")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-base btn-gold flex w-full px-6 py-3.5 text-sm"
        >
          Analisar minha marca
        </a>
      </div>
    </main>
  );
}
