"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O Téo substitui minha equipe atual?",
      answer:
        "Não. Ele tira o trabalho repetitivo e o estresse da recepção do WhatsApp. Seus técnicos focam em executar serviços com qualidade e sua equipe interna para de apagar incêndio com dezenas de mensagens acumuladas.",
    },
    {
      question: "E se o cliente mandar áudio ou foto da etiqueta do equipamento?",
      answer:
        "O Téo processa áudios perfeitamente, transcreve e entende o vocabulário técnico de clientes leigos. Ele também analisa fotos de etiquetas e placas de identificação para extrair marca, modelo e capacidade (BTUs).",
    },
    {
      question: "Como o Téo sabe a tabela de preços e a agenda dos meus técnicos?",
      answer:
        "Na ativação, configuramos sua tabela de valores de visita, mão de obra padrão e as rotas de cada técnico. O Téo só oferece horários e orçamentos dentro das regras exatas que a sua empresa definiu.",
    },
    {
      question: "Ele funciona no número de WhatsApp que minha empresa já usa?",
      answer:
        "Sim. O Téo é integrado ao número oficial de WhatsApp da sua empresa, mantendo o histórico de conversas e permitindo que você ou seus atendentes intervenham na conversa sempre que quiserem.",
    },
    {
      question: "Quanto tempo leva para colocar o Téo para rodar na minha operação?",
      answer:
        "A implantação padrão leva menos de 48 horas. Nós configuramos suas tabelas, especialidades dos técnicos e integramos com seu fluxo de Ordens de Serviço.",
    },
    {
      question: "E se um cliente fizer uma pergunta muito fora do padrão?",
      answer:
        "O Téo informa educadamente que vai acionar o responsável técnico e notifica sua equipe com o resumo do chamado já pronto, sem deixar o cliente sem resposta.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-bancada border-b border-aco-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="max-w-3xl mb-12 text-center mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-aco-light text-xs font-mono font-semibold text-aco mb-3">
            DÚVIDAS FREQUENTES
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-grafite tracking-tight mb-4">
            Perguntas frequentes de quem gerencia operações
          </h2>
          <p className="text-base text-aco leading-relaxed">
            Respostas diretas e sem enrolação sobre a contratação e funcionamento do Téo.
          </p>
        </motion.div>

        {/* FAQ Accordion List with AnimatePresence */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.18, delay: index * 0.04 }}
                className="bg-white border border-aco-light rounded-[8px] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-aco-subtle/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-grafite font-archivo">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-aco shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-laranja" : ""
                    }`}
                    strokeWidth={1.5}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-aco leading-relaxed border-t border-aco-light/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
