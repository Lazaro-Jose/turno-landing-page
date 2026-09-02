import { MessageSquare, Wrench, Calendar, FileCheck, ArrowRight } from "lucide-react";

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

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white border-b border-aco-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
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
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-bancada border border-aco-light rounded-[8px] p-6 flex flex-col justify-between hover:border-aco transition-colors relative"
              >
                <div>
                  {/* Step Number & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-laranja">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-[8px] bg-white border border-aco-light flex items-center justify-center text-grafite">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-semibold text-aco uppercase tracking-wider block mb-1">
                    {step.tag}
                  </span>

                  <h3 className="text-lg font-bold text-grafite mb-3">
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
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-[8px] bg-[#101418] text-white flex flex-col md:flex-row items-center justify-between gap-6">
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
            className="inline-flex items-center gap-2 px-5 py-3 rounded-[8px] bg-laranja hover:bg-laranja-hover text-white text-sm font-semibold transition-colors shrink-0"
          >
            <span>Ver demonstração prática</span>
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>

      </div>
    </section>
  );
}
