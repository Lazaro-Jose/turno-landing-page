"use client";

import { XCircle, AlertCircle, CheckCircle2, MessageSquareOff, UserX, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export function ProblemComparison() {
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
    <section id="diferenciais" className="py-16 md:py-24 bg-bancada border-b border-aco-light">
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
            COMPARAÇÃO OPERACIONAL
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-grafite tracking-tight mb-4">
            Chatbot conversa. <span className="text-laranja">O Téo trabalha.</span>
          </h2>
          <p className="text-base text-aco leading-relaxed">
            A maioria dos atendimentos automáticos do mercado só serve para irritar
            o cliente com menus numéricos. Veja a diferença prática no dia a dia da sua empresa.
          </p>
        </motion.div>

        {/* 3 Column Comparison Grid with Staggered Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          
          {/* Col 1: Chatbot Comum */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.15 } }}
            className="bg-white border border-aco-light rounded-[8px] p-6 flex flex-col justify-between transition-shadow hover:shadow-[0_4px_12px_rgba(16,20,24,0.04)]"
          >
            <div>
              <div className="w-10 h-10 rounded-[8px] bg-red-50 border border-red-200 flex items-center justify-center text-red-600 mb-4">
                <MessageSquareOff className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-mono text-aco uppercase tracking-wider block mb-1">
                Opção 01
              </span>
              <h3 className="text-lg font-bold text-grafite mb-2">
                Chatbot Tradicional
              </h3>
              <p className="text-xs text-aco mb-6 leading-relaxed">
                Aqueles menus automáticos engessados que ninguém tem paciência de responder.
              </p>

              <ul className="space-y-3 text-xs text-grafite border-t border-aco-light pt-4">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Obriga o cliente a digitar &quot;1 para Comercial, 2 para Suporte&quot;.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Trava completamente quando o cliente manda áudio ou foto de placa.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Não tem noção da rota dos técnicos nem da tabela de preços.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Resultado: cliente desiste e liga bravo para a recepção.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-aco-light text-[11px] font-mono text-red-600 bg-red-50/50 p-2.5 rounded-[8px]">
              Veredito: Queima a imagem da empresa.
            </div>
          </motion.div>

          {/* Col 2: Atendimento Manual no Caos */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.15 } }}
            className="bg-white border border-aco-light rounded-[8px] p-6 flex flex-col justify-between transition-shadow hover:shadow-[0_4px_12px_rgba(16,20,24,0.04)]"
          >
            <div>
              <div className="w-10 h-10 rounded-[8px] bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-4">
                <UserX className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-mono text-aco uppercase tracking-wider block mb-1">
                Opção 02
              </span>
              <h3 className="text-lg font-bold text-grafite mb-2">
                Atendimento Manual
              </h3>
              <p className="text-xs text-aco mb-6 leading-relaxed">
                Você ou uma atendente tentando dar conta de 40 conversas ao mesmo tempo.
              </p>

              <ul className="space-y-3 text-xs text-grafite border-t border-aco-light pt-4">
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Demora de 2 a 4 horas para responder orçamentos em horários de pico.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Mensagens que chegam após as 18h ou fim de semana ficam sem retorno.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>O dono da empresa vira escravo do WhatsApp e não consegue gerenciar.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Falta de dados técnicos faz o técnico chegar sem a peça certa.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-aco-light text-[11px] font-mono text-amber-800 bg-amber-50/60 p-2.5 rounded-[8px]">
              Veredito: Serviços perdidos por demora.
            </div>
          </motion.div>

          {/* Col 3: O Téo (Turno) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.15 } }}
            className="bg-[#101418] text-white border-2 border-laranja rounded-[8px] p-6 flex flex-col justify-between relative shadow-md"
          >
            <div className="absolute -top-3 right-4 bg-laranja text-white text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full shadow-sm">
              Padrão Operacional
            </div>

            <div>
              <div className="w-10 h-10 rounded-[8px] bg-white/10 border border-white/20 flex items-center justify-center text-laranja mb-4">
                <UserCheck className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-mono text-laranja uppercase tracking-wider block mb-1 font-bold">
                Opção 03
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Téo · Funcionário Digital
              </h3>
              <p className="text-xs text-zinc-300 mb-6 leading-relaxed">
                Atendimento técnico objetivo que resolve o chamado e agenda o serviço.
              </p>

              <ul className="space-y-3 text-xs text-zinc-200 border-t border-zinc-800 pt-4">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Resposta imediata (média de 18 segundos), 24 horas por dia.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Ouve áudios, lê fotos de etiquetas e faz as perguntas técnicas certas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Consulta a agenda e aloca o técnico mais próximo por rota.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Gera a Ordem de Serviço completa e notifica a equipe técnica.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] font-mono text-emerald-400 bg-white/5 p-2.5 rounded-[8px]">
              Veredito: Sua empresa rodando sem gargalo.
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
