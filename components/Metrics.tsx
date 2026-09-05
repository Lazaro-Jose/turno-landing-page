"use client";

import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInStaggerItem, AnimatedNumber } from "./animations/MotionWrapper";

export function Metrics() {
  const stats = [
    {
      value: "18s",
      label: "Tempo médio de resposta",
      subtext: "Atendimento imediato 24h por dia, 7 dias por semana",
    },
    {
      value: "300+",
      label: "Chamados triados por mês",
      subtext: "Capacidade operacional escalável sem contratação extra",
    },
    {
      value: "100%",
      label: "Dados coletados na O.S.",
      subtext: "Foto de etiqueta, modelo e endereço antes do técnico sair",
    },
    {
      value: "Zero",
      label: "Orçamentos esquecidos",
      subtext: "Retorno imediato mesmo após as 18h e fins de semana",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-aco-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bancada border border-aco-light text-xs font-mono font-semibold text-aco mb-3">
            RESULTADOS OPERACIONAIS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-grafite tracking-tight mb-4">
            Números concretos na rotina de quem opera serviços
          </h2>
          <p className="text-base text-aco leading-relaxed">
            Sem promessas vazias. O impacto de colocar um funcionário digital focado
            em agilidade e organização técnica.
          </p>
        </FadeIn>

        {/* 4 Stats Grid with Count-up and Stagger */}
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" staggerDelay={0.08}>
          {stats.map((item, index) => (
            <FadeInStaggerItem key={index} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-bancada border border-aco-light rounded-[8px] p-6 hover:border-aco transition-colors h-full flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-laranja block mb-2">
                    <AnimatedNumber value={item.value} />
                  </span>
                  <h3 className="text-sm font-bold text-grafite font-archivo mb-1">
                    {item.label}
                  </h3>
                </div>
                <p className="text-xs text-aco leading-relaxed mt-2 pt-2 border-t border-aco-light/60">
                  {item.subtext}
                </p>
              </motion.div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        {/* Real Operational Testimonial Quote */}
        <FadeIn delay={0.15}>
          <div className="bg-[#101418] text-white rounded-[8px] p-6 sm:p-8 border border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
            <div className="space-y-3 max-w-3xl">
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed italic">
                &quot;Antes do Téo, eu ficava até 22h respondendo cliente no WhatsApp e no outro dia o técnico chegava no cliente sem saber qual era o modelo do ar condicionado. Hoje o chamado entra, o Téo coleta os dados da etiqueta e a O.S. já cai no celular da equipe pronta para execução.&quot;
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-laranja text-white flex items-center justify-center font-bold text-xs">
                  M
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Marcos Silveira
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    Sócio-diretor · ArTech Climatização e Manutenção (14 técnicos em campo)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
