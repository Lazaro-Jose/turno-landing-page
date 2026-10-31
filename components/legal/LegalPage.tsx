import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

export interface LegalSection {
  title: string;
  /** Um parágrafo por item. */
  paragraphs?: React.ReactNode[];
  /** Lista com marcadores, depois dos parágrafos. */
  items?: React.ReactNode[];
}

interface LegalPageProps {
  title: string;
  intro: string;
  lastUpdate: string;
  sections: LegalSection[];
}

export function LegalPage({ title, intro, lastUpdate, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bancada text-grafite font-sans">
      <header className="w-full bg-bancada border-b border-aco-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <Link href="/" className="transition-opacity hover:opacity-85">
            <div className="relative h-7 w-28">
              <Image
                src="/assets/images/turno_logo_transparente-black-letters.png"
                alt="Turno"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-aco hover:text-grafite transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            <span>Voltar ao site</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <p className="text-xs font-mono uppercase tracking-wider text-aco">
            Atualizado em {lastUpdate}
          </p>
          <h1 className="mt-3 font-archivo font-bold text-3xl sm:text-4xl tracking-tight text-grafite">
            {title}
          </h1>
          <p className="mt-4 text-base text-aco leading-relaxed">{intro}</p>

          <nav aria-label="Índice" className="mt-10 rounded-[8px] border border-aco-light bg-branco p-5">
            <p className="text-xs font-mono uppercase font-bold tracking-wider text-aco mb-3">
              Nesta página
            </p>
            <ol className="space-y-1.5 text-sm text-grafite list-decimal list-inside marker:text-aco marker:font-mono">
              {sections.map((section, index) => (
                <li key={section.title}>
                  <a href={`#secao-${index + 1}`} className="hover:text-laranja transition-colors">
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 space-y-10">
            {sections.map((section, index) => (
              <section key={section.title} id={`secao-${index + 1}`} className="scroll-mt-8">
                <h2 className="font-archivo font-semibold text-xl text-grafite tracking-tight">
                  <span className="font-mono text-aco text-base mr-2">{index + 1}.</span>
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-grafite/90">
                  {section.paragraphs?.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  {section.items && (
                    <ul className="list-disc pl-5 space-y-1.5 marker:text-aco">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
