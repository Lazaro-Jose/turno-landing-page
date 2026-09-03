"use client";

import {
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

export function TeoBadge() {
  const skills = [
    "Triagem técnica de sistemas de climatização (HVAC) e manutenção",
    "Compreensão de áudios, mensagens informais e fotos de etiquetas técnicas",
    "Agendamento inteligente por região e especialidade dos técnicos",
    "Aplicação rigorosa da tabela de preços e políticas da empresa",
    "Emissão e notificação instantânea de Ordens de Serviço (O.S.)",
    "Follow-up de orçamentos e confirmação de presença do cliente",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.18, ease: "easeOut" as const },
    },
  };

  return (
    <section id="cracha" className="py-16 md:py-24 bg-bancada border-b border-aco-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-aco-light text-xs font-mono font-semibold text-aco mb-3">
            PERFIL DO FUNCIONÁRIO DIGITAL
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-grafite tracking-tight mb-4">
            Não é mais um software para aprender. <br />
            <span className="text-laranja">É um funcionário pronto para trabalhar.</span>
          </h2>
          <p className="text-base text-aco leading-relaxed">
            Você não precisa de mais um sistema cheio de botões para preencher manualmente.
            O Téo entra na sua operação, assume a recepção do WhatsApp e faz o trabalho chato.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Badge / Crachá with Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.15 } }}
              className="w-full max-w-sm bg-white border-2 border-grafite rounded-[12px] p-6 shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Lanyard Clip / Furo do Crachá */}
              <div className="w-16 h-3 bg-aco-light border border-aco mx-auto rounded-full mb-6 -mt-2" />

              {/* Badge Header */}
              <div className="flex items-center justify-between pb-4 border-b border-aco-light">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-[6px] bg-grafite text-white flex items-center justify-center text-xs font-mono font-bold">
                    T
                  </div>
                  <div>
                    <span className="text-xs font-extrabold font-archivo uppercase text-grafite tracking-wider block">
                      TURNO
                    </span>
                    <span className="text-[9px] font-mono text-aco uppercase">
                      CRACHÁ OPERACIONAL
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs font-semibold text-laranja">
                  #0042
                </span>
              </div>

              {/* Avatar do Crachá */}
              <div className="my-6 text-center">
                <div className="w-24 h-24 mx-auto rounded-[12px] bg-grafite text-white flex flex-col items-center justify-center border-2 border-laranja relative">
                  <span className="text-2xl font-bold font-archivo tracking-tight">TÉO</span>
                  <span className="text-[9px] font-mono text-laranja uppercase tracking-widest mt-1">
                    DIGITAL
                  </span>
                  <div className="absolute -bottom-2.5 px-2 py-0.5 rounded-full bg-emerald-600 text-[9px] font-mono text-white font-bold tracking-wider uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>ATIVO</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-archivo text-grafite mt-5">
                  Téo da Operação
                </h3>
                <p className="text-xs text-aco font-medium">
                  Analista de Atendimento e Serviços
                </p>
              </div>

              {/* Ficha Técnica do Crachá */}
              <div className="space-y-2.5 text-xs font-mono border-t border-b border-aco-light py-4 bg-bancada/50 px-3 rounded-[8px]">
                <div className="flex justify-between">
                  <span className="text-aco">DISPONIBILIDADE:</span>
                  <span className="text-grafite font-bold">24h / 7 dias por semana</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-aco">CAPACIDADE:</span>
                  <span className="text-grafite font-bold">Simultânea (sem fila)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-aco">ESPECIALIDADE:</span>
                  <span className="text-grafite font-bold">Climatização & Manutenção</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-aco">ENCARGOS / FÉRIAS:</span>
                  <span className="text-emerald-700 font-bold">Zero (Custo Fixo)</span>
                </div>
              </div>

              {/* Footer do Crachá */}
              <div className="mt-4 flex items-center justify-between text-[11px] text-aco font-mono">
                <span>Turno Serviços LTDA</span>
                <span className="text-grafite font-semibold">Emitido em 2026</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Practical Benefits & Operational Reality */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.08, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-white border border-aco-light rounded-[8px] p-6">
              <h3 className="text-lg font-bold text-grafite font-archivo mb-3">
                O que o Téo entrega no primeiro dia de trabalho:
              </h3>
              <p className="text-sm text-aco leading-relaxed mb-6">
                Contratar e treinar um atendente comum leva em média 45 dias, além de custos
                com encargos, férias e risco de turnover. O Téo entra rodando no mesmo dia,
                padronizando seu atendimento com o rigor que a sua empresa precisa.
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-2.5 p-3 rounded-[8px] bg-bancada border border-aco-light/80 text-xs text-grafite hover:border-aco transition-colors"
                  >
                    <Check className="w-4 h-4 text-laranja shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Quick Contrast Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-aco-light rounded-[8px] p-4">
                <span className="text-[11px] font-mono text-aco block uppercase">
                  Atendente Humano Sobrecarregado
                </span>
                <p className="text-xs text-grafite font-semibold mt-1">
                  Atende 1 por vez, esquece recados após as 18h e depende de conferência constante.
                </p>
              </div>
              <div className="bg-white border border-laranja/40 rounded-[8px] p-4 bg-laranja-light/20">
                <span className="text-[11px] font-mono text-laranja font-bold block uppercase">
                  Téo no WhatsApp da Empresa
                </span>
                <p className="text-xs text-grafite font-semibold mt-1">
                  Atende 50 clientes ao mesmo tempo, segue o checklist técnico e nunca esquece um chamado.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
