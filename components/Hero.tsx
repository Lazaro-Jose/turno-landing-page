import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Wrench,
  FileSpreadsheet,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-aco-light bg-bancada">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Direct Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Operational Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-aco-light text-xs font-semibold text-grafite mb-6">
              <span className="w-2 h-2 rounded-full bg-laranja" />
              <span className="tracking-wide uppercase font-mono">
                Funcionário Digital de Operações
              </span>
            </div>

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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[8px] bg-laranja hover:bg-laranja-hover text-white text-base font-semibold transition-colors shadow-none"
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
            </div>
          </div>

          {/* Right Column: High Fidelity Operational Mockup */}
          <div className="lg:col-span-5 w-full">
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
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-medium text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  EM EXECUÇÃO
                </span>
              </div>

              {/* Chat Flow Simulation */}
              <div className="space-y-3 text-xs bg-bancada/60 p-3.5 rounded-[8px] border border-aco-light">
                {/* Mensagem do Cliente */}
                <div className="bg-white p-3 rounded-[8px] border border-aco-light/80 max-w-[90%] space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-aco font-mono">
                    <span>Cliente (WhatsApp)</span>
                    <span>14:02</span>
                  </div>
                  <p className="text-grafite text-xs leading-relaxed">
                    Boa tarde, o ar condicionado da recepção parou de gelar e começou a pingar água no piso. Vocês atendem hoje?
                  </p>
                </div>

                {/* Resposta e Triagem do Téo */}
                <div className="bg-[#101418] text-white p-3 rounded-[8px] ml-auto max-w-[92%] space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                    <span className="flex items-center gap-1 text-laranja font-semibold">
                      <ShieldCheck className="w-3 h-3" strokeWidth={1.5} /> Téo (Turno)
                    </span>
                    <span>14:02:18 (18s)</span>
                  </div>
                  <p className="text-zinc-200 text-xs leading-relaxed">
                    Olá! Atendemos sim. Identifiquei vazamento com perda de rendimento térmico. Temos vaga com o técnico Rodrigo hoje às 16h30 ou amanhã às 09h. Qual horário prefere?
                  </p>
                </div>

                {/* Cliente Confirma */}
                <div className="bg-white p-2.5 rounded-[8px] border border-aco-light/80 max-w-[75%] space-y-0.5">
                  <div className="flex items-center justify-between text-[10px] text-aco font-mono">
                    <span>Cliente</span>
                    <span>14:03</span>
                  </div>
                  <p className="text-grafite text-xs font-medium">Hoje às 16h30, por favor!</p>
                </div>
              </div>

              {/* Resultado Automático: Ordem de Serviço Gerada */}
              <div className="p-3.5 rounded-[8px] bg-white border border-aco-light space-y-2.5">
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
              </div>

              <div className="flex items-center justify-between text-[11px] text-aco font-mono px-1">
                <span>Tempo total: 1 min 14 seg</span>
                <span className="text-emerald-700 font-semibold">Sem intervenção manual</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
