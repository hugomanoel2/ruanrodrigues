import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cta, waLink } from "@/components/site/Cta";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import ruan1 from "@/assets/ruan-1.png";
import handshake from "@/assets/handshake.jpg";
import signingWide from "@/assets/signing-wide.jpg";
import heroLoop from "@/assets/hero-loop.mp4";
import signingForm from "@/assets/signing-form.jpg";

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
      <span className={`eyebrow ${tone === "dark" ? "text-gold" : "text-brand-soft"}`}>
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

/**
 * Seção com imagem: no mobile a ordem é headline → imagem → informações.
 * No desktop volta para duas colunas (imagem em uma, textos na outra).
 */
function Split({
  eyebrow,
  title,
  tone = "light",
  image,
  imageSide = "left",
  children,
}: {
  eyebrow: string;
  title: string;
  tone?: "light" | "dark";
  image: React.ReactNode;
  imageSide?: "left" | "right";
  children: React.ReactNode;
}) {
  const textCol = imageSide === "left" ? "md:col-start-2" : "md:col-start-1";
  const imgCol = imageSide === "left" ? "md:col-start-1" : "md:col-start-2";
  return (
    <div className="shell flex flex-col gap-8 md:grid md:grid-cols-2 md:grid-rows-[auto_auto] md:items-center md:gap-x-12 md:gap-y-3">
      <Reveal className={`${textCol} md:row-start-1`}>
        <Head eyebrow={eyebrow} title={title} tone={tone} />
      </Reveal>

      <Reveal delay={120} className={`${imgCol} md:row-span-2 md:row-start-1 md:self-center`}>
        {image}
      </Reveal>

      <Reveal delay={200} className={`${textCol} md:row-start-2`}>
        <div
          className={`section-head flex flex-col gap-4 text-base leading-relaxed md:text-lg ${
            tone === "dark" ? "text-on-dark-muted" : "text-muted-foreground"
          }`}
        >
          {children}
        </div>
      </Reveal>
    </div>
  );
}

function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.volume = 0;
    const tryPlay = () => {
      v.play().catch(() => {});
    };
    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);
    document.addEventListener("touchstart", tryPlay, { once: true });
    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  return (
    <main id="top">
      <Header />
      {/* 1 — HERO */}
      <section className="section-base section-dark flex min-h-[82svh] items-center !pt-32 !pb-20 md:!pt-36 md:!pb-28">
        <video
          ref={videoRef}
          className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover object-center brightness-[1.9] contrast-[0.98] saturate-[0.8]"
          src={heroLoop}
          poster={signingWide}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          disablePictureInPicture
          aria-hidden
        />

        <div
          className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,color-mix(in_oklab,var(--brand-deep)_40%,transparent)_0%,color-mix(in_oklab,var(--brand-deep)_66%,transparent)_58%,color-mix(in_oklab,var(--brand-deep)_92%,transparent)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--brand-deep)_60%,transparent)_0%,transparent_30%,transparent_62%,var(--brand-deep)_100%)]"
          aria-hidden
        />

        <div className="shell relative">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-2 text-center md:px-6">
            <Reveal>
              <h1 className="text-[2.1rem] leading-[1.03] font-black text-on-dark drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl">
                Proteja a marca que você está construindo.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <span className="rule-gold block" aria-hidden />
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-xl text-base leading-relaxed text-on-dark md:text-lg">
                Registro de marca no INPI com análise de viabilidade e acompanhamento jurídico
                durante todo o processo, direto com um advogado.
              </p>
            </Reveal>
            <Reveal delay={300} className="pt-2">
              <Cta intent="analisar">Quero analisar minha marca</Cta>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 — PROBLEMA */}
      <section id="problema" className="section-base section-light">
        <div className="shell grid items-center gap-12 md:grid-cols-[1fr_1fr]">
          <Reveal>
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
          </Reveal>

          <div className="grid gap-4">
            {[
              ["Abertura da empresa", "Registra o CNPJ na Junta Comercial e na Receita Federal."],
              ["Domínio e redes sociais", "Reservam apenas o endereço, não a marca."],
              ["Registro no INPI", "É o procedimento que trata da proteção da marca."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={120 + i * 110}>
                <article className="card-light flex items-start gap-4 p-5 text-left md:p-6">
                  <span className="font-display mt-0.5 text-sm font-black text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-brand md:text-lg">{t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — RISCO */}
      <section id="risco" className="section-base section-dark edge-gold">
        <div className="shell">
          <Reveal>
            <Head
              tone="dark"
              eyebrow="Risco"
              title="O que está em jogo quando sua marca não está registrada?"
              center
            />
          </Reveal>
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
              <Reveal key={t} delay={i * 110} className="h-full">
                <article className="card-dark h-full p-7 text-center md:text-left">
                  <span className="font-display text-sm font-black text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-extrabold text-on-dark md:text-2xl">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">{d}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={480} className="mt-10 flex justify-center">
            <Cta intent="registrar">Quero proteger minha marca</Cta>
          </Reveal>
        </div>
      </section>

      {/* 4 — SOLUÇÃO */}
      <section className="section-base section-tint">
        <Split
          eyebrow="Solução"
          title="O primeiro passo não é registrar. É saber se a marca é viável."
          imageSide="left"
          image={
            <div className="framed mx-auto w-full max-w-md">
              <img
                src={signingForm}
                alt="Análise documental de viabilidade de registro de marca"
                className="h-full w-full object-cover"
                width={1200}
                height={1200}
              />
            </div>
          }
        >
          <p>
            Antes do protocolo, é importante pesquisar marcas anteriores, analisar possíveis
            impedimentos e definir corretamente a classificação do pedido.
          </p>
          <p>Essa análise ajuda a tomar uma decisão mais segura antes de iniciar o processo.</p>
          <div className="flex justify-center pt-2 md:justify-start">
            <Cta intent="analisar">Solicitar análise da marca</Cta>
          </div>
        </Split>
      </section>

      {/* 5 — COMO FUNCIONA */}
      <section id="processo" className="section-base section-light">
        <div className="shell">
          <Reveal>
            <Head
              eyebrow="Como funciona"
              title="Do primeiro contato ao acompanhamento no INPI."
              center
            />
          </Reveal>
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
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 100} className="h-full">
                <li className="card-light relative h-full list-none p-6 text-center md:text-left">
                  <span className="font-display block text-4xl leading-none font-black text-brand/25 md:text-5xl">
                    {n}
                  </span>
                  <span className="mt-3 block h-px w-full bg-gradient-to-r from-gold to-transparent" />
                  <h3 className="mt-3 text-lg font-extrabold text-brand">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={560} className="mt-10 flex justify-center">
            <Cta intent="registrar">Quero iniciar meu registro</Cta>
          </Reveal>
        </div>
      </section>

      {/* 6 — BENEFÍCIOS */}
      <section id="beneficios" className="section-base section-tint">
        <div className="shell">
          <Reveal>
            <Head
              eyebrow="Benefícios"
              title="Uma marca registrada é um ativo do seu negócio."
              center
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Proteção", "Fortalece juridicamente a proteção do nome e da identidade da marca."],
              ["Exclusividade", "Garante direitos de uso nos limites da proteção concedida."],
              ["Crescimento", "Traz mais segurança para expansão, licenciamento e novos projetos."],
              [
                "Patrimônio",
                "A marca passa a integrar os ativos de propriedade intelectual do negócio.",
              ],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 110} className="h-full">
                <article className="card-light h-full p-7 text-center md:text-left">
                  <span className="rule-gold mx-auto block md:mx-0" aria-hidden />
                  <h3 className="mt-4 text-xl font-extrabold text-brand">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — DIFERENCIAL */}
      <section id="diferencial" className="section-base section-dark edge-gold glow-ambient">
        <Split
          tone="dark"
          eyebrow="Diferencial"
          title="Seu pedido acompanhado por um advogado."
          imageSide="left"
          image={
            <div className="framed mx-auto w-full max-w-md">
              <img
                src={handshake}
                alt="Aperto de mãos após acordo jurídico"
                className="h-full w-full object-cover"
                width={1200}
                height={1200}
              />
            </div>
          }
        >
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
        </Split>
      </section>

      {/* 8 — AUTORIDADE */}
      <section id="sobre" className="section-base section-light">
        <div className="shell grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <Reveal delay={120} className="order-2 md:order-1">
            <div className="framed mx-auto w-full max-w-sm">
              <img
                src={ruan1}
                alt="Retrato profissional do Dr. Ruan Rodrigues"
                className="h-full w-full object-cover"
                width={1080}
                height={1350}
              />
            </div>
          </Reveal>

          <div className="contents md:order-2 md:block">
            <Reveal className="order-1">
              <Head eyebrow="Autoridade" title="Dr. Ruan Rodrigues" />
            </Reveal>
            <Reveal delay={200} className="order-3 md:mt-5">
              <div className="section-head flex flex-col gap-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Advocacia direcionada a empresários e empreendedores que buscam orientação jurídica
                  para proteger suas marcas.
                </p>
                <p>
                  Atendimento individual desde a análise inicial até o acompanhamento do processo
                  perante o INPI.
                </p>
                <div className="flex justify-center pt-2 md:justify-start">
                  <Cta intent="analisar">Quero falar com o Dr. Ruan</Cta>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9 — IDENTIFICAÇÃO */}
      <section id="para-quem" className="section-base section-dark edge-gold">
        <div className="shell">
          <Reveal>
            <Head
              tone="dark"
              eyebrow="Para quem é"
              title="Se existe uma marca por trás do seu negócio, vale verificar a proteção."
              center
            />
          </Reveal>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {[
              "Empresas",
              "Empreendedores",
              "Profissionais liberais",
              "E-commerces",
              "Infoprodutos",
              "Aplicativos e negócios digitais",
            ].map((i, idx) => (
              <Reveal key={i} delay={idx * 90}>
                <span className="block rounded-full border border-gold/30 bg-[color-mix(in_oklab,white_8%,transparent)] px-5 py-2.5 text-sm font-semibold text-on-dark backdrop-blur-sm transition-colors hover:border-gold/60 hover:bg-[color-mix(in_oklab,white_14%,transparent)]">
                  {i}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={620} className="mt-10 flex justify-center">
            <Cta intent="analisar">Analisar minha marca</Cta>
          </Reveal>
        </div>
      </section>

      {/* 10 — FAQ */}
      <section id="faq" className="section-base section-tint">
        <div className="shell max-w-3xl">
          <Reveal>
            <Head eyebrow="FAQ" title="Dúvidas antes de registrar sua marca?" center />
          </Reveal>
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
              <Reveal key={q} delay={i * 90}>
                <AccordionItem value={`item-${i}`} className="border-brand/15">
                  <AccordionTrigger className="text-left text-base font-bold text-brand md:text-lg">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 11 — CTA FINAL */}
      <section className="section-base section-dark edge-gold glow-ambient">
        <img
          src={signingWide}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
        />
        <div className="shell relative flex flex-col items-center gap-6 text-center">
          <Reveal>
            <span className="eyebrow text-gold">
              <span className="rule-gold" aria-hidden />
              Próximo passo
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="max-w-xl text-3xl leading-[1.05] font-black text-on-dark sm:text-4xl md:text-[2.9rem]">
              Dê o primeiro passo hoje.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-2xl text-base leading-relaxed text-on-dark-muted md:text-lg">
              Em uma conversa rápida pelo WhatsApp você entende se a sua marca pode ser registrada,
              quais são os cuidados no pedido e como funciona o acompanhamento junto ao INPI — sem
              compromisso e falando diretamente com um advogado.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <Cta intent="analisar">Quero analisar minha marca</Cta>
          </Reveal>
        </div>
      </section>

      <Footer />

      <WhatsAppFab />

    </main>
  );
}
