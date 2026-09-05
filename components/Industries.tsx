"use client";

import { Airplay, Wrench, Zap, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "./animations/MotionWrapper";

export function Industries() {
  const industries = [
    {
      title: "Climatização e HVAC",
      badge: "FOCO PRINCIPAL",
      icon: Airplay,
      description:
        "Instalação, manutenção preventiva (PMOC), higienização e conserto corretivo de Splits, Multi-Splits, VRF e Chillers.",
      commonRequests: [
        "Ar parou de gelar / vazamento de gás",
        "Orçamento de PMOC para empresas",
        "Troca de compressor e placa eletrônica",
      ],
    },
    {
      title: "Manutenção Predial e Hidráulica",
      badge: "CONTRATOS & AVULSOS",
      icon: Building2,
      description:
        "Atendimento a condomínios e empresas para sistemas de bombeamento, vazamentos, redes hidráulicas e reparos civis.",
      commonRequests: [
        "Vazamento em barrilete e colunas",
        "Manutenção de bombas de recalque",
        "Revisão preventiva predial mensal",
      ],
    },
    {
      title: "Instalações e Elétrica Comercial",
      badge: "ALTA DEMANDA",
      icon: Zap,
      description:
        "Adequação de quadros de distribuição, balanceamento de fases, sistemas de emergência e laudos técnicos.",
      commonRequests: [
        "Disjuntor desarmando em horário de pico",
        "Instalação de circuito para novos aparelhos",
        "Manutenção em geradores e no-breaks",
      ],
    },
    {
      title: "Assistência de Equipamentos de Campo",
      badge: "SERVIÇOS TÉCNICOS",
      icon: Wrench,
      description:
        "Manutenção e suporte para cozinhas industriais, compressores de ar, câmaras frias e maquinários específicos.",
      commonRequests: [
        "Câmara fria com temperatura oscilando",
        "Revisão preventiva de compressores",
        "Troca de vedação e termostatos",
      ],
    },
  ];

  return (
    <section id="setores" className="py-16 md:py-24 bg-white border-b border-aco-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bancada border border-aco-light text-xs font-mono font-semibold text-aco mb-3">
            SETORES ATENDIDOS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-grafite tracking-tight mb-4">
            Especializado na rotina de quem presta serviços técnicos
          </h2>
          <p className="text-base text-aco leading-relaxed">
            O Téo foi desenvolvido para o vocabulário, as dúvidas e a dinâmica real
            de empresas que dependem de técnicos na rua e clientes exigindo rapidez.
          </p>
        </FadeIn>

        {/* Industries Grid with Stagger */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.08}>
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeInStaggerItem key={idx} className="h-full">
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="bg-bancada border border-aco-light rounded-[8px] p-6 flex flex-col justify-between h-full hover:border-aco transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-[8px] bg-white border border-aco-light flex items-center justify-center text-grafite">
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white border border-aco-light text-aco uppercase">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-grafite mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-aco leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-aco-light bg-white/60 -mx-6 -mb-6 p-6 rounded-b-[8px]">
                    <span className="text-[10px] font-mono font-semibold text-aco uppercase tracking-wider block mb-2">
                      Chamados típicos que o Téo resolve:
                    </span>
                    <ul className="space-y-1.5 text-xs text-grafite font-medium">
                      {item.commonRequests.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-laranja shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>

      </div>
    </section>
  );
}
