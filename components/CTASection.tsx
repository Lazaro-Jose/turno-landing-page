"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, PhoneCall, Clock } from "lucide-react";

export function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    tecnicos: "1-5",
    segmento: "climatizacao",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Layout simulation / submission state
    setSubmitted(true);
  };

  return (
    <section id="demonstracao" className="py-16 md:py-24 bg-white border-b border-aco-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Direct Callout & Guarantees */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bancada border border-aco-light text-xs font-mono font-semibold text-aco">
              CONTRATAÇÃO DO TÉO
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-grafite tracking-tight leading-tight">
              Chega de perder serviços por demora no WhatsApp.
            </h2>

            <p className="text-base text-aco leading-relaxed">
              Agende uma demonstração prática de 15 minutos. Nós mostramos o Téo
              rodando no fluxo da sua empresa, com sua tabela de preços e a sua rotina técnica.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2} />
                </div>
                <div>
                  <span className="text-sm font-bold text-grafite block">
                    Implantação em até 48 horas
                  </span>
                  <span className="text-xs text-aco">
                    Configuramos suas regras, rotas e tabelas técnicas rapidamente.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2} />
                </div>
                <div>
                  <span className="text-sm font-bold text-grafite block">
                    Sem travas de fidelidade
                  </span>
                  <span className="text-xs text-aco">
                    Cancele a qualquer momento se sua operação não rodar mais rápida.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2} />
                </div>
                <div>
                  <span className="text-sm font-bold text-grafite block">
                    Treinamento e acompanhamento operacional
                  </span>
                  <span className="text-xs text-aco">
                    Suporte direto para o sócio e para o time técnico.
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-[8px] bg-bancada border border-aco-light flex items-center gap-3">
              <Clock className="w-5 h-5 text-laranja shrink-0" strokeWidth={1.5} />
              <span className="text-xs font-mono text-grafite">
                Tempo médio de resposta do nosso time: <strong>Menos de 10 minutos</strong> no horário comercial.
              </span>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-bancada border-2 border-grafite rounded-[12px] p-6 sm:p-8 shadow-sm">
              <div className="pb-4 mb-6 border-b border-aco-light">
                <h3 className="text-lg font-bold text-grafite font-archivo">
                  Colocar o Téo na sua Operação
                </h3>
                <p className="text-xs text-aco mt-1">
                  Preencha os dados abaixo para receber uma demonstração personalizada.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-[8px] bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900 font-archivo">
                    Solicitação Recebida com Sucesso!
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    O Téo já encaminhou seus dados para nosso especialista em operações.
                    Entraremos em contato pelo seu WhatsApp em poucos minutos.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-emerald-900 underline pt-2"
                  >
                    Enviar outro contato
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold font-archivo text-grafite mb-1 uppercase tracking-wide">
                        Seu Nome
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[8px] bg-white border border-aco-light text-xs text-grafite focus:outline-none focus:border-grafite transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold font-archivo text-grafite mb-1 uppercase tracking-wide">
                        Nome da Empresa
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: ClimaTech Serviços"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[8px] bg-white border border-aco-light text-xs text-grafite focus:outline-none focus:border-grafite transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-archivo text-grafite mb-1 uppercase tracking-wide">
                      WhatsApp com DDD
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (11) 98765-4321"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[8px] bg-white border border-aco-light text-xs text-grafite focus:outline-none focus:border-grafite transition-colors font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold font-archivo text-grafite mb-1 uppercase tracking-wide">
                        Técnicos em Campo
                      </label>
                      <select
                        value={formData.tecnicos}
                        onChange={(e) => setFormData({ ...formData, tecnicos: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[8px] bg-white border border-aco-light text-xs text-grafite focus:outline-none focus:border-grafite transition-colors"
                      >
                        <option value="1-5">1 a 5 técnicos</option>
                        <option value="6-15">6 a 15 técnicos</option>
                        <option value="16-30">16 a 30 técnicos</option>
                        <option value="30+">Mais de 30 técnicos</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold font-archivo text-grafite mb-1 uppercase tracking-wide">
                        Segmento
                      </label>
                      <select
                        value={formData.segmento}
                        onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[8px] bg-white border border-aco-light text-xs text-grafite focus:outline-none focus:border-grafite transition-colors"
                      >
                        <option value="climatizacao">Climatização e HVAC</option>
                        <option value="predial">Manutenção Predial / Hidráulica</option>
                        <option value="eletrica">Elétrica e Instalações</option>
                        <option value="equipamentos">Assistência de Equipamentos</option>
                        <option value="outros">Outros Serviços de Campo</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[8px] bg-laranja hover:bg-laranja-hover text-white text-sm font-semibold transition-colors shadow-none"
                  >
                    <span>Solicitar Demonstração do Téo</span>
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-aco font-mono pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" strokeWidth={1.5} />
                    <span>Seus dados são confidenciais e protegidos.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
