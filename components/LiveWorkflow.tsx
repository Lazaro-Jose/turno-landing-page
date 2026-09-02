"use client";

import { useState } from "react";
import {
  MessageSquare,
  FileText,
  Clock,
  MapPin,
  User,
  Wrench,
  CheckCircle,
  FileSpreadsheet,
  PhoneCall,
  Volume2,
} from "lucide-react";

export function LiveWorkflow() {
  const [activeScenario, setActiveScenario] = useState<number>(0);

  const scenarios = [
    {
      id: "corretiva",
      tabTitle: "01. Manutenção Corretiva (HVAC)",
      subtitle: "Vazamento de dreno em escritório comercial",
      whatsapp: [
        {
          sender: "cliente",
          time: "09:14",
          text: "Bom dia! Nosso ar condicionado do salão de atendimento tá desligando sozinho e vazando água no carpete. Dá pra vir alguém hoje?",
        },
        {
          sender: "teo",
          time: "09:14:19",
          text: "Bom dia! Aqui é o Téo da equipe de operações. Entendido: desarme de proteção térmica e transbordamento de bandeja. Pode me enviar uma foto da etiqueta do aparelho para eu conferir o modelo exato?",
        },
        {
          sender: "cliente",
          time: "09:15",
          hasImage: true,
          imageLabel: "📷 foto_etiqueta_inverter_24000.jpg",
          text: "Segue a foto da etiqueta na condensadora.",
        },
        {
          sender: "teo",
          time: "09:15:35",
          text: "Perfeito: Fujitsu Inverter 24.000 BTU, gás R-410A. Temos o técnico Lucas na rota do seu bairro hoje às 14h ou amanhã às 08h30. Qual janela é melhor para receber a equipe?",
        },
        {
          sender: "cliente",
          time: "09:16",
          text: "Hoje às 14h tá ótimo!",
        },
        {
          sender: "teo",
          time: "09:16:12",
          text: "Agendado! Ordem de Serviço #4092 criada. O técnico Lucas chegará entre 14h e 14h30 com bomba de vácuo, dreno e gás compatível. Enviando confirmação por e-mail e O.S. no sistema.",
        },
      ],
      os: {
        number: "#4092",
        status: "AGENDADA",
        client: "Carvalho & Advogados Associados",
        document: "CNPJ: 18.239.012/0001-44",
        address: "Av. Paulista, 1200 - Cj. 84 - Bela Vista",
        equipment: "Fujitsu Split Inverter 24.000 BTU (R-410A)",
        symptom: "Desarme térmico e vazamento de condensado",
        serviceType: "Visita Técnica Corretiva + Desobstrução",
        technician: "Lucas Andrade (Rota Centro-Sul)",
        scheduleTime: "Hoje · 14:00 - 14:30",
        estimatedValue: "R$ 280,00 (Taxa de visita + mão de obra padrão)",
      },
    },
    {
      id: "pmoc",
      tabTitle: "02. Contrato Preventivo (PMOC)",
      subtitle: "Solicitação de proposta periódica para clínica",
      whatsapp: [
        {
          sender: "cliente",
          time: "11:20",
          text: "Olá, precisamos de uma cotação de PMOC para nossa clínica odontológica. São 6 aparelhos split de marcas diferentes.",
        },
        {
          sender: "teo",
          time: "11:20:18",
          text: "Olá! Perfeito. Cuidamos de todo o plano de manutenção com laudo de engenharia e ART conforme a legislação. Vou coletar a lista de capacidades dos 6 aparelhos.",
        },
        {
          sender: "cliente",
          time: "11:21",
          isAudio: true,
          audioDuration: "0:32 (Áudio transcrito)",
          text: "São quatro de 9 mil BTU nos consultórios, um de 18 mil na recepção e um de 12 mil na sala de esterilização.",
        },
        {
          sender: "teo",
          time: "11:21:40",
          text: "Excelente. Total de 6 evaporadoras (4x 9k, 1x 12k, 1x 18k). Montei a proposta de PMOC Mensal com troca de filtros, higienização bactericida e laudo técnico. Deseja agendar a vistoria inicial gratuita amanhã às 10h?",
        },
        {
          sender: "cliente",
          time: "11:22",
          text: "Pode agendar para amanhã às 10h sim.",
        },
        {
          sender: "teo",
          time: "11:22:25",
          text: "Vistoria agendada! O.S. Prévia #4093 registrada para o coordenador técnico Marcos.",
        },
      ],
      os: {
        number: "#4093",
        status: "VISTORIA AGENDADA",
        client: "OdontoClean Serviços Médicos",
        document: "CNPJ: 32.884.190/0001-09",
        address: "Rua Domingos de Morais, 850 - Vila Mariana",
        equipment: "6x Splits (4x 9k, 1x 12k, 1x 18k BTU)",
        symptom: "Implantação de PMOC e laudo de conformidade",
        serviceType: "Vistoria Técnica de Contrato Preventivo",
        technician: "Marcos Vinicius (Supervisor Técnico)",
        scheduleTime: "Amanhã · 10:00",
        estimatedValue: "Vistoria Gratuita · Contrato estimado R$ 780,00/mês",
      },
    },
    {
      id: "urgencia",
      tabTitle: "03. Urgência no Sábado",
      subtitle: "Câmara frigorífica de restaurante com alarme de temperatura",
      whatsapp: [
        {
          sender: "cliente",
          time: "19:40 (Sábado)",
          text: "URGENTE! A câmara fria de carnes do restaurante começou a apitar alarme de 8ºC e não tá baixando. Tem técnico de plantão?",
        },
        {
          sender: "teo",
          time: "19:40:15",
          text: "Boa noite! Compreendido a criticidade alimentar. O Téo acionou a escala de plantão de refrigeração. O técnico Marcelo está a 15 minutos do seu endereço com peças para evaporador e compressor. Posso autorizar o deslocamento imediato de plantão?",
        },
        {
          sender: "cliente",
          time: "19:41",
          text: "SIM, manda com urgência por favor!",
        },
        {
          sender: "teo",
          time: "19:41:20",
          text: "O.S. de Emergência #4094 disparada! Técnico Marcelo já está a caminho. Previsão de chegada: 19:58. Ele já tem acesso aos dados da câmara fria.",
        },
      ],
      os: {
        number: "#4094",
        status: "EM DESLOCAMENTO (PLANTÃO)",
        client: "Parrilla & Fogo Restaurante",
        document: "CNPJ: 24.112.503/0001-88",
        address: "Rua dos Pinheiros, 410 - Pinheiros",
        equipment: "Câmara Fria Resfriados (Comp. Elgin 2HP)",
        symptom: "Alarme de alta temperatura (+8ºC) em horário de pico",
        serviceType: "Atendimento de Emergência / Plantão Noturno",
        technician: "Marcelo Plantonista (Deslocamento imediato)",
        scheduleTime: "Hoje · Chegada em 18 minutos",
        estimatedValue: "Taxa de plantão R$ 350,00 + Mão de obra",
      },
    },
  ];

  const current = scenarios[activeScenario];

  return (
    <section className="py-16 md:py-24 bg-bancada border-b border-aco-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-aco-light text-xs font-mono font-semibold text-aco mb-3">
            DEMONSTRAÇÃO PRÁTICA
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-grafite tracking-tight mb-4">
            Veja o Téo em ação em 3 situações reais da rotina técnica
          </h2>
          <p className="text-base text-aco leading-relaxed">
            Clique nos cenários abaixo e veja como uma conversa informal no WhatsApp
            se transforma em uma Ordem de Serviço estruturada sem intervenção manual.
          </p>
        </div>

        {/* Scenario Selector Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {scenarios.map((sc, index) => (
            <button
              key={sc.id}
              onClick={() => setActiveScenario(index)}
              className={`px-4 py-2.5 rounded-[8px] text-xs sm:text-sm font-semibold transition-all ${
                activeScenario === index
                  ? "bg-grafite text-white shadow-none"
                  : "bg-white border border-aco-light text-aco hover:text-grafite hover:bg-aco-subtle"
              }`}
            >
              {sc.tabTitle}
            </button>
          ))}
        </div>

        {/* Workflow Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: WhatsApp Interaction Flow */}
          <div className="lg:col-span-6 bg-white border border-aco-light rounded-[12px] p-5">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-aco-light">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <MessageSquare className="w-3.5 h-3.5" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs font-bold text-grafite block">
                    WhatsApp Comercial
                  </span>
                  <span className="text-[10px] text-aco font-mono">
                    Canal oficial da empresa
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-mono text-aco">
                {current.subtitle}
              </span>
            </div>

            <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
              {current.whatsapp.map((msg, mIdx) => {
                const isTeo = msg.sender === "teo";
                return (
                  <div
                    key={mIdx}
                    className={`p-3 rounded-[8px] text-xs ${
                      isTeo
                        ? "bg-[#101418] text-white ml-auto max-w-[90%] border border-zinc-800"
                        : "bg-bancada text-grafite max-w-[90%] border border-aco-light"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] mb-1 font-mono">
                      <span className={isTeo ? "text-laranja font-semibold" : "text-aco"}>
                        {isTeo ? "Téo (Turno)" : "Cliente"}
                      </span>
                      <span className={isTeo ? "text-zinc-400" : "text-aco"}>
                        {msg.time}
                      </span>
                    </div>

                    {msg.isAudio && (
                      <div className="flex items-center gap-2 p-1.5 mb-1.5 rounded bg-white/10 text-zinc-200 text-[11px] font-mono">
                        <Volume2 className="w-3.5 h-3.5 text-laranja shrink-0" strokeWidth={1.5} />
                        <span>{msg.audioDuration}</span>
                      </div>
                    )}

                    {msg.hasImage && (
                      <div className="p-1.5 mb-1.5 rounded bg-white border border-aco-light text-grafite text-[11px] font-mono">
                        {msg.imageLabel}
                      </div>
                    )}

                    <p className="leading-relaxed">{msg.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Resulting Structured Ordem de Serviço */}
          <div className="lg:col-span-6 bg-white border-2 border-grafite rounded-[12px] p-5 shadow-sm">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-aco-light">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-[6px] bg-laranja text-white flex items-center justify-center font-mono text-xs font-bold">
                  OS
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase font-archivo text-grafite">
                    Ordem de Serviço Gerada
                  </h4>
                  <p className="text-[10px] font-mono text-aco">
                    Alimentada no sistema automaticamente
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-mono text-sm font-bold text-laranja block">
                  {current.os.number}
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {current.os.status}
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-2.5 rounded-[8px] bg-bancada border border-aco-light">
                <span className="text-[10px] text-aco block uppercase">CLIENTE & DOCUMENTO</span>
                <p className="font-bold text-grafite text-xs mt-0.5">{current.os.client}</p>
                <p className="text-[11px] text-aco">{current.os.document}</p>
              </div>

              <div className="p-2.5 rounded-[8px] bg-bancada border border-aco-light">
                <span className="text-[10px] text-aco block uppercase">ENDEREÇO DE EXECUÇÃO</span>
                <p className="text-xs text-grafite font-semibold mt-0.5">{current.os.address}</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-[8px] bg-bancada border border-aco-light">
                  <span className="text-[10px] text-aco block uppercase">EQUIPAMENTO</span>
                  <p className="text-[11px] font-bold text-grafite mt-0.5">{current.os.equipment}</p>
                </div>
                <div className="p-2.5 rounded-[8px] bg-bancada border border-aco-light">
                  <span className="text-[10px] text-aco block uppercase">TIPO DE SERVIÇO</span>
                  <p className="text-[11px] font-bold text-grafite mt-0.5">{current.os.serviceType}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-[8px] bg-bancada border border-aco-light">
                  <span className="text-[10px] text-aco block uppercase">TÉCNICO RESPONSÁVEL</span>
                  <p className="text-[11px] font-bold text-laranja mt-0.5">{current.os.technician}</p>
                </div>
                <div className="p-2.5 rounded-[8px] bg-bancada border border-aco-light">
                  <span className="text-[10px] text-aco block uppercase">HORÁRIO CONFIRMADO</span>
                  <p className="text-[11px] font-bold text-grafite mt-0.5">{current.os.scheduleTime}</p>
                </div>
              </div>

              <div className="p-3 rounded-[8px] bg-emerald-50 border border-emerald-200 text-emerald-900">
                <span className="text-[10px] text-emerald-700 block uppercase font-bold">
                  VALOR ESTIMADO / TABELA
                </span>
                <p className="text-xs font-bold mt-0.5">{current.os.estimatedValue}</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-aco-light flex items-center justify-between text-[11px] text-aco font-mono">
              <span>Notificação enviada ao técnico via WhatsApp</span>
              <span className="text-emerald-700 font-bold">100% Completa</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
