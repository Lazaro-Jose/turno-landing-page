"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Wrench,
  FileSpreadsheet,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  const [step, setStep] = useState<number>(3);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const startSimulation = () => {
    setIsSimulating(true);
    setStep(0);
    setTimeout(() => setStep(1), 600);
    setTimeout(() => setStep(2), 1600);
    setTimeout(() => {
      setStep(3);
      setIsSimulating(false);
    }, 2600);
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-aco-light bg-bancada">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Direct Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Brand Tag: Turno | Téo (Fora do card, alinhado ao texto do hero) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.2 }}
              className="flex items-center gap-4 sm:gap-6 md:gap-7 mb-7 sm:mb-10"
            >
              <div className="relative h-10 sm:h-14 md:h-16 w-44 sm:w-60 md:w-72">
                <Image
                  src="/assets/images/turno_logo_transparente-black-letters.png"
                  alt="Turno"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <span className="text-aco/30 font-extralight text-3xl sm:text-4xl md:text-5xl select-none leading-none">|</span>
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-laranja animate-pulse" />
                <span className="font-archivo text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-grafite">
                  TÉO
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.25 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-grafite leading-[1.15] mb-6"
            >
              Do primeiro oi no WhatsApp ao{" "}
              <span className="text-laranja underline decoration-laranja/30 underline-offset-4">
                serviço concluído
              </span>
              .
            </motion.h1>

            {/* Clear, Practical Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.25 }}
              className="text-base sm:text-lg text-aco leading-relaxed mb-8 max-w-2xl"
            >
              O Téo atende seus clientes, qualifica o chamado técnico, agenda a
              visita e emite a Ordem de Serviço no seu sistema. Sem você passar o
              dia inteiro preso respondendo mensagem.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#demonstracao"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[8px] bg-laranja hover:bg-laranja-hover text-white text-base font-semibold transition-colors shadow-none w-full sm:w-auto"
                >
                  <span>Colocar o Téo para trabalhar</span>
                  <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-[8px] bg-white border border-aco-light hover:bg-aco-subtle text-grafite text-base font-semibold transition-colors w-full sm:w-auto"
                >
                  <span>Ver como ele opera</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Direct Operational Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 border-t border-aco-light"
            >
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-laranja shrink-0" strokeWidth={1.5} />
                <span className="text-xs font-medium text-grafite">
                  Resposta em 18 segundos
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Wrench className="w-4 h-4 text-laranja shrink-0" strokeWidth={1.5} />
                <span className="text-xs font-medium text-grafite">
                  Triagem de HVAC e manutenção
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <FileSpreadsheet className="w-4 h-4 text-laranja shrink-0" strokeWidth={1.5} />
                <span className="text-xs font-medium text-grafite">
                  Integração direta com sua O.S.
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: High Fidelity Operational Mockup with Live Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 w-full"
          >
            <div className="bg-white border border-aco-light rounded-[12px] p-4 sm:p-5 shadow-xs space-y-4 relative">
              
              {/* Header do Card / Status */}
              <div className="flex items-center justify-between pb-3 border-b border-aco-light">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[8px] bg-[#101418] text-white flex items-center justify-center text-xs font-bold font-mono">
                    TÉO
                  </div>
                  <div>
                    <p className="text-xs font-bold text-grafite">Téo · Operação Turno</p>
                    <p className="text-[11px] text-aco font-mono">Matrícula #0042 · Ativo 24/7</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={startSimulation}
                    disabled={isSimulating}
                    title="Simular fluxo novamente"
                    className="p-1.5 rounded-[6px] text-aco hover:text-grafite hover:bg-aco-subtle transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    <RotateCcw className={`w-3.5 h-3.5 ${isSimulating ? "animate-spin" : ""}`} strokeWidth={1.5} />
                  </button>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-medium text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    EM EXECUÇÃO
                  </span>
                </div>
              </div>

              {/* Chat Flow Simulation */}
              <div className="space-y-3 text-xs bg-bancada/60 p-3.5 rounded-[8px] border border-aco-light min-h-[200px] flex flex-col justify-end">
                {/* Mensagem do Cliente */}
                <AnimatePresence>
                  {step >= 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white p-3 rounded-[8px] border border-aco-light/80 max-w-[90%] space-y-1"
                    >
                      <div className="flex items-center justify-between text-[10px] text-aco font-mono">
                        <span>Cliente (WhatsApp)</span>
                        <span>14:02</span>
                      </div>
                      <p className="text-grafite text-xs leading-relaxed">
                        Boa tarde, o ar condicionado da recepção parou de gelar e começou a pingar água no piso. Vocês atendem hoje?
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Resposta e Triagem do Téo */}
                <AnimatePresence>
                  {step >= 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="bg-[#101418] text-white p-3 rounded-[8px] ml-auto max-w-[92%] space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                        <span className="flex items-center gap-1 text-laranja font-semibold">
                          <ShieldCheck className="w-3 h-3" strokeWidth={1.5} /> Téo (Turno)
                        </span>
                        <span className="text-laranja font-bold">14:02:18 (18s)</span>
                      </div>
                      <p className="text-zinc-200 text-xs leading-relaxed">
                        Olá! Atendemos sim. Identifiquei vazamento com perda de rendimento térmico. Temos vaga com o técnico Rodrigo hoje às 16h30 ou amanhã às 09h. Qual horário prefere?
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Cliente Confirma */}
                <AnimatePresence>
                  {step >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white p-2.5 rounded-[8px] border border-aco-light/80 max-w-[75%] space-y-0.5"
                    >
                      <div className="flex items-center justify-between text-[10px] text-aco font-mono">
                        <span>Cliente</span>
                        <span>14:03</span>
                      </div>
                      <p className="text-grafite text-xs font-medium">Hoje às 16h30, por favor!</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resultado Automático: Ordem de Serviço Gerada */}
              <AnimatePresence>
                {step >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="p-3.5 rounded-[8px] bg-white border-2 border-laranja/30 space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" strokeWidth={1.5} />
                        <span className="text-xs font-bold font-archivo text-grafite uppercase tracking-wide">
                          Ordem de Serviço Gerada
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold text-laranja bg-laranja/10 px-2 py-0.5 rounded">O.S. #3841</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-aco-light/70 font-mono">
                      <div>
                        <span className="text-aco block text-[10px]">TÉCNICO / ROTA</span>
                        <span className="text-grafite font-semibold">Rodrigo (Zona Sul)</span>
                      </div>
                      <div>
                        <span className="text-aco block text-[10px]">AGENDAMENTO</span>
                        <span className="text-grafite font-semibold">Hoje · 16:30</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-aco block text-[10px]">SERVIÇO / EQUIPAMENTO</span>
                        <span className="text-grafite font-medium">Desobstrução de dreno + Revisão Split 18k BTU</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center justify-between text-[11px] text-aco font-mono px-1">
                <span>Tempo total: 1 min 14 seg</span>
                <span className="text-emerald-700 font-semibold">Sem intervenção manual</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
