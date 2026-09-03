"use client";

import { useState, useEffect } from "react";
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
  const [chatStep, setChatStep] = useState(0);

  // Chat simulation sequence (runs once or can be replayed)
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    // Step 0: Initial message visible immediately
    // Step 1: Téo typing after 800ms
    timers.push(setTimeout(() => setChatStep(1), 800));
    // Step 2: Téo response arrives after 1800ms
    timers.push(setTimeout(() => setChatStep(2), 2000));
    // Step 3: Client confirmation after 3000ms
    timers.push(setTimeout(() => setChatStep(3), 3200));
    // Step 4: O.S. generated after 4000ms
    timers.push(setTimeout(() => setChatStep(4), 4200));

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleRestartChat = () => {
    setChatStep(0);
    setTimeout(() => setChatStep(1), 600);
    setTimeout(() => setChatStep(2), 1600);
    setTimeout(() => setChatStep(3), 2600);
    setTimeout(() => setChatStep(4), 3600);
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-aco-light bg-bancada">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Direct Copy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Operational Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-aco-light text-xs font-semibold text-grafite mb-6 shadow-none"
            >
              <span className="w-2 h-2 rounded-full bg-laranja animate-pulse" />
              <span className="tracking-wide uppercase font-mono">
                Funcionário Digital de Operações
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-grafite leading-[1.15] mb-6">
              Do primeiro oi no WhatsApp ao{" "}
              <span className="text-laranja underline decoration-laranja/30 underline-offset-4">
                serviço concluído
              </span>
              .
            </h1>

            {/* Clear, Practical Subtitle */}
            <p className="text-base sm:text-lg text-aco leading-relaxed mb-8 max-w-2xl">
              O Téo atende seus clientes, qualifica o chamado técnico, agenda a
              visita e emite a Ordem de Serviço no seu sistema. Sem você passar o
              dia inteiro preso respondendo mensagem.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                href="#demonstracao"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[8px] bg-laranja hover:bg-laranja-hover text-white text-base font-semibold transition-all duration-150 active:scale-[0.98] shadow-none"
              >
                <span>Colocar o Téo para trabalhar</span>
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-[8px] bg-white border border-aco-light hover:bg-aco-subtle text-grafite text-base font-semibold transition-colors"
              >
                <span>Ver como ele opera</span>
              </Link>
            </div>

            {/* Direct Operational Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 border-t border-aco-light">
              <div className="flex items-center gap-2.5 p-2 rounded-[6px] hover:bg-white/60 transition-colors">
                <Clock className="w-4 h-4 text-laranja shrink-0" strokeWidth={1.5} />
                <span className="text-xs font-medium text-grafite">
                  Resposta em 18 segundos
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-[6px] hover:bg-white/60 transition-colors">
                <Wrench className="w-4 h-4 text-laranja shrink-0" strokeWidth={1.5} />
                <span className="text-xs font-medium text-grafite">
                  Triagem de HVAC e manutenção
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-[6px] hover:bg-white/60 transition-colors">
                <FileSpreadsheet className="w-4 h-4 text-laranja shrink-0" strokeWidth={1.5} />
                <span className="text-xs font-medium text-grafite">
                  Integração direta com sua O.S.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High Fidelity Operational Mockup with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 w-full"
          >
            <div className="bg-white border border-aco-light rounded-[12px] p-4 sm:p-5 shadow-none space-y-4">
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
                    onClick={handleRestartChat}
                    title="Reiniciar simulação"
                    className="p-1 rounded text-aco hover:text-grafite transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-medium text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    EM EXECUÇÃO
                  </span>
                </div>
              </div>

              {/* Chat Flow Simulation */}
              <div className="space-y-3 text-xs bg-bancada/60 p-3.5 rounded-[8px] border border-aco-light min-h-[200px] flex flex-col justify-end">
                {/* Mensagem do Cliente (Sempre visível) */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
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

                {/* Téo Typing Indicator */}
                <AnimatePresence>
                  {chatStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                      className="bg-[#101418] text-white px-3 py-2 rounded-[8px] ml-auto max-w-fit flex items-center gap-1.5 text-[11px] font-mono text-zinc-300"
                    >
                      <span className="text-laranja font-bold">Téo</span> está analisando o chamado
                      <span className="flex gap-0.5 ml-1">
                        <span className="w-1 h-1 bg-laranja rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-1 h-1 bg-laranja rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1 h-1 bg-laranja rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Resposta do Téo */}
                <AnimatePresence>
                  {chatStep >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="bg-[#101418] text-white p-3 rounded-[8px] ml-auto max-w-[92%] space-y-1.5 border border-zinc-800"
                    >
                      <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                        <span className="flex items-center gap-1 text-laranja font-semibold">
                          <ShieldCheck className="w-3 h-3" strokeWidth={1.5} /> Téo (Turno)
                        </span>
                        <span>14:02:18 (18s)</span>
                      </div>
                      <p className="text-zinc-200 text-xs leading-relaxed">
                        Olá! Atendemos sim. Identifiquei vazamento com perda de rendimento térmico. Temos vaga com o técnico Rodrigo hoje às 16h30 ou amanhã às 09h. Qual horário prefere?
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Cliente Confirma */}
                <AnimatePresence>
                  {chatStep >= 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
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
                {chatStep >= 4 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="p-3.5 rounded-[8px] bg-white border-2 border-emerald-600/30 space-y-2.5 shadow-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" strokeWidth={1.5} />
                        <span className="text-xs font-bold font-archivo text-grafite uppercase tracking-wide">
                          Ordem de Serviço Gerada
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold text-laranja">O.S. #3841</span>
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
                ) : (
                  <div className="p-3 rounded-[8px] bg-bancada/40 border border-dashed border-aco-light text-center text-[11px] font-mono text-aco">
                    Aguardando confirmação do cliente para gerar O.S...
                  </div>
                )}
              </AnimatePresence>

              <div className="flex items-center justify-between text-[11px] text-aco font-mono px-1">
                <span>Tempo total: 1 min 14 seg</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  Sem intervenção manual
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
