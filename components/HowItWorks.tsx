"use client";

import { MessageSquare, Wrench, Calendar, FileCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Recepção no WhatsApp",
      tag: "TEMPO DE RESPOSTA: 18s",
      icon: MessageSquare,
      description:
        "O cliente manda mensagem ou áudio a qualquer hora do dia ou da noite. O Téo responde na hora, com cordialidade profissional e sem menus numéricos chatos.",
      details: [
        "Reconhece áudios e mensagens de texto",
        "Disponível 24 horas por dia, 7 dias por semana",
        "Zero tempo de espera na fila de atendimento",
      ],
    },
    {
      number: "02",
      title: "Triagem Técnica",
      tag: "QUALIFICAÇÃO COMPLETA",
      icon: Wrench,
      description:
        "O Téo faz as perguntas certas para entender o problema: marca do aparelho, capacidade (BTUs), sintomas e pede foto da etiqueta do equipamento.",
      details: [
        "Identifica modelo e capacidade do equipamento",
        "Coleta fotos e endereço completo do local",
        "Aplica sua tabela de preços ou valores de visita",
      ],
    },
    {
      number: "03",
      title: "Agendamento por Rota",
      tag: "LOGÍSTICA EFICIENTE",
      icon: Calendar,
      description:
        "Ele verifica a agenda dos seus técnicos, prioriza rotas para economizar combustível e oferece os horários disponíveis para o cliente confirmar.",
      details: [
        "Alocação por região e especialidade técnica",
        "Confirmação de data e período com o cliente",
        "Evita conflito de horários e furos na agenda",
      ],
    },
    {
      number: "04",
      title: "Emissão da O.S.",
      tag: "SERVIÇO PRONTO NA PRÁTICA",
      icon: FileCheck,
      description:
        "A Ordem de Serviço é criada com descrição detalhada, fotos e localização. O técnico recebe o aviso no celular e a equipe do escritório tem tudo registrado.",
      details: [
        "Envio automático para o técnico designado",
        "Integração com seu sistema de gestão ou ERP",
        "Histórico completo da solicitação arquivado",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" as const },
    },
  };

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white border-b border-aco-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bancada border border-aco-light text-xs font-mono font-semibold text-aco mb-3">
            FLUXO OPERACIONAL
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-grafite tracking-tight mb-4">
            Como o Téo opera na sua empresa, do início ao fim
          </h2>
          <p className="text-base text-aco leading-relaxed">
            Nada de configurações complexas. O Téo atua como um funcionário que
            conhece a rotina de serviços técnicos e cuida do atendimento sem você precisar intervir.
          </p>
        </motion.div>

        {/* 4 Steps Grid with Staggered Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                className="bg-bancada border border-aco-light rounded-[8px] p-6 flex flex-col justify-between hover:border-aco transition-all hover:shadow-[0_4px_12px_rgba(16,20,24,0.03)] relative group"
              >
                <div>
                  {/* Step Number & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-laranja">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-[8px] bg-white border border-aco-light flex items-center justify-center text-grafite group-hover:border-laranja/40 transition-colors">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-semibold text-aco uppercase tracking-wider block mb-1">
                    {step.tag}
                  </span>

                  <h3 className="text-lg font-bold text-grafite mb-3 font-archivo">
                    {step.title}
                  </h3>

                  <p className="text-xs text-aco leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Details list */}
                <div className="pt-4 border-t border-aco-light">
                  <ul className="space-y-2 text-[11px] text-grafite">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-laranja font-mono font-bold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.1, ease: "easeOut" }}
          className="mt-12 p-6 rounded-[8px] bg-[#101418] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-800"
        >
          <div>
            <p className="text-xs font-mono text-laranja uppercase tracking-wider font-semibold mb-1">
              Velocidade Operacional
            </p>
            <h4 className="text-lg sm:text-xl font-bold font-archivo">
              Do envio da mensagem pelo cliente à O.S. no celular do técnico em menos de 2 minutos.
            </h4>
          </div>
          <a
            href="#demonstracao"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-[8px] bg-laranja hover:bg-laranja-hover text-white text-sm font-semibold transition-all duration-150 active:scale-[0.98] shrink-0"
          >
            <span>Ver demonstração prática</span>
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
