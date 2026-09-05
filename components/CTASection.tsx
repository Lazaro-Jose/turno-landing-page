"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Airplay,
  Building2,
  Zap,
  Wrench,
  Layers,
  Users,
  AlertCircle,
  Mail,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "./animations/MotionWrapper";
import { CustomSelect, SelectOption } from "./ui/CustomSelect";

// Phone mask helper for Brazilian numbers: (XX) XXXXX-XXXX or (XX) XXXX-XXXX
function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) {
    return digits.length > 0 ? `(${digits}` : "";
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

// Zod validation schema
const formSchema = z
  .object({
    nome: z
      .string()
      .min(2, "Por favor, informe seu nome completo.")
      .max(80, "Nome muito longo."),
    empresa: z
      .string()
      .min(2, "Informe o nome da sua empresa.")
      .max(80, "Nome da empresa muito longo."),
    email: z
      .string()
      .min(1, "Informe seu e-mail profissional.")
      .email("Insira um endereço de e-mail válido."),
    whatsapp: z
      .string()
      .min(1, "Informe o WhatsApp com DDD.")
      .refine(
        (val) => {
          const raw = val.replace(/\D/g, "");
          return raw.length >= 10 && raw.length <= 11;
        },
        { message: "Número incompleto. Digite o DDD + número (10 ou 11 dígitos)." }
      ),
    tecnicos: z.string().min(1, "Selecione o número de técnicos."),
    segmento: z.string().min(1, "Selecione o segmento principal."),
    outroSegmento: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.segmento === "outros") {
        return !!data.outroSegmento && data.outroSegmento.trim().length >= 2;
      }
      return true;
    },
    {
      message: "Especifique o segmento técnico da sua empresa.",
      path: ["outroSegmento"],
    }
  );

type FormData = z.infer<typeof formSchema>;

export function CTASection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      empresa: "",
      email: "",
      whatsapp: "",
      tecnicos: "1-5",
      segmento: "climatizacao",
      outroSegmento: "",
    },
    mode: "onBlur",
  });

  const selectedSegmento = useWatch({ control, name: "segmento" });
  const currentPhone = useWatch({ control, name: "whatsapp" });

  const onSubmit = (data: FormData) => {
    // Lead capture simulation
    console.log("Lead captured:", data);
    setSubmitted(true);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setValue("whatsapp", formatted, { shouldValidate: true });
  };

  const handleReset = () => {
    reset();
    setSubmitted(false);
  };

  const tecnicosOptions: SelectOption[] = [
    {
      value: "1-5",
      label: "1 a 5 técnicos",
      badge: "Enxuta",
      description: "1 a 2 rotas ativas na rua",
      icon: Users,
    },
    {
      value: "6-15",
      label: "6 a 15 técnicos",
      badge: "Média",
      description: "Equipes com rotas simultâneas",
      icon: Users,
    },
    {
      value: "16-30",
      label: "16 a 30 técnicos",
      badge: "Expansão",
      description: "Operação com supervisão técnica",
      icon: Users,
    },
    {
      value: "30+",
      label: "Mais de 30 técnicos",
      badge: "Escala",
      description: "Grande volume de chamados diários",
      icon: Users,
    },
  ];

  const segmentoOptions: SelectOption[] = [
    {
      value: "climatizacao",
      label: "Climatização e HVAC",
      badge: "Principal",
      description: "Splits, PMOC, VRF e Chillers",
      icon: Airplay,
    },
    {
      value: "predial",
      label: "Manutenção Predial / Hidráulica",
      badge: "Predial",
      description: "Bombas, barriletes e condomínios",
      icon: Building2,
    },
    {
      value: "eletrica",
      label: "Elétrica e Instalações",
      badge: "Elétrica",
      description: "Quadros de força, laudos e sistemas",
      icon: Zap,
    },
    {
      value: "equipamentos",
      label: "Assistência de Equipamentos",
      badge: "Técnico",
      description: "Câmaras frigoríficas e maquinário",
      icon: Wrench,
    },
    {
      value: "outros",
      label: "Outros Serviços de Campo",
      badge: "Personalizado",
      description: "Especificar segmento de atuação técnica",
      icon: Layers,
    },
  ];

  return (
    <section id="demonstracao" className="py-16 md:py-24 bg-white border-b border-aco-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Direct Callout & Guarantees */}
          <FadeIn direction="left" className="lg:col-span-6 space-y-6">
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

            <FadeInStagger className="space-y-3.5 pt-2" staggerDelay={0.08}>
              <FadeInStaggerItem>
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
              </FadeInStaggerItem>

              <FadeInStaggerItem>
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
              </FadeInStaggerItem>

              <FadeInStaggerItem>
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
              </FadeInStaggerItem>
            </FadeInStagger>

            <div className="p-4 rounded-[8px] bg-bancada border border-aco-light flex items-center gap-3">
              <Clock className="w-5 h-5 text-laranja shrink-0" strokeWidth={1.5} />
              <span className="text-xs font-mono text-grafite">
                Tempo médio de resposta do nosso time: <strong>Menos de 10 minutos</strong> no horário comercial.
              </span>
            </div>
          </FadeIn>

          {/* Right Column: Lead Form */}
          <FadeIn direction="right" className="lg:col-span-6 w-full">
            <div className="bg-bancada border-2 border-grafite rounded-[12px] p-6 sm:p-8 shadow-xs">
              <div className="pb-4 mb-6 border-b border-aco-light">
                <h3 className="text-lg font-bold text-grafite font-archivo">
                  Colocar o Téo na sua Operação
                </h3>
                <p className="text-xs text-aco mt-1">
                  Preencha os dados abaixo para receber uma demonstração personalizada.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 rounded-[8px] bg-emerald-50 border border-emerald-200 text-center space-y-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center shadow-xs">
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
                      onClick={handleReset}
                      className="text-xs font-mono text-emerald-900 underline pt-2 cursor-pointer"
                    >
                      Enviar outro contato
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                    noValidate
                  >
                    {/* Row 1: Nome & Empresa */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold font-archivo text-grafite mb-1 uppercase tracking-wide">
                          Seu Nome *
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: Carlos Eduardo"
                          {...register("nome")}
                          className={`w-full px-3.5 py-2.5 rounded-[8px] bg-white border text-xs text-grafite focus:outline-none transition-colors ${
                            errors.nome
                              ? "border-red-500 focus:border-red-600"
                              : "border-aco-light focus:border-grafite"
                          }`}
                        />
                        {errors.nome && (
                          <p className="text-[11px] text-red-500 font-mono flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.nome.message}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold font-archivo text-grafite mb-1 uppercase tracking-wide">
                          Nome da Empresa *
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: ClimaTech Serviços"
                          {...register("empresa")}
                          className={`w-full px-3.5 py-2.5 rounded-[8px] bg-white border text-xs text-grafite focus:outline-none transition-colors ${
                            errors.empresa
                              ? "border-red-500 focus:border-red-600"
                              : "border-aco-light focus:border-grafite"
                          }`}
                        />
                        {errors.empresa && (
                          <p className="text-[11px] text-red-500 font-mono flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.empresa.message}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: WhatsApp (com máscara) & E-mail Profissional */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold font-archivo text-grafite mb-1 uppercase tracking-wide">
                          WhatsApp com DDD *
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            placeholder="(11) 98765-4321"
                            value={currentPhone || ""}
                            onChange={handlePhoneChange}
                            maxLength={15}
                            className={`w-full px-3.5 py-2.5 pl-9 rounded-[8px] bg-white border text-xs text-grafite focus:outline-none transition-colors font-mono ${
                              errors.whatsapp
                                ? "border-red-500 focus:border-red-600"
                                : "border-aco-light focus:border-grafite"
                            }`}
                          />
                          <Phone className="w-4 h-4 text-aco absolute left-3 top-3" strokeWidth={1.5} />
                        </div>
                        {errors.whatsapp && (
                          <p className="text-[11px] text-red-500 font-mono flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.whatsapp.message}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold font-archivo text-grafite mb-1 uppercase tracking-wide">
                          E-mail Profissional *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            placeholder="carlos@climatech.com.br"
                            {...register("email")}
                            className={`w-full px-3.5 py-2.5 pl-9 rounded-[8px] bg-white border text-xs text-grafite focus:outline-none transition-colors ${
                              errors.email
                                ? "border-red-500 focus:border-red-600"
                                : "border-aco-light focus:border-grafite"
                            }`}
                          />
                          <Mail className="w-4 h-4 text-aco absolute left-3 top-3" strokeWidth={1.5} />
                        </div>
                        {errors.email && (
                          <p className="text-[11px] text-red-500 font-mono flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.email.message}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Single-row Dropdown 1: Técnicos em Campo */}
                    <div>
                      <Controller
                        name="tecnicos"
                        control={control}
                        render={({ field }) => (
                          <CustomSelect
                            label="Técnicos em Campo"
                            options={tecnicosOptions}
                            value={field.value}
                            onChange={field.onChange}
                          />
                        )}
                      />
                    </div>

                    {/* Single-row Dropdown 2: Segmento da Empresa */}
                    <div>
                      <Controller
                        name="segmento"
                        control={control}
                        render={({ field }) => (
                          <CustomSelect
                            label="Segmento da Empresa"
                            options={segmentoOptions}
                            value={field.value}
                            onChange={field.onChange}
                          />
                        )}
                      />
                    </div>

                    {/* Conditional Input when 'Outros' is selected */}
                    <AnimatePresence>
                      {selectedSegmento === "outros" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -6 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -6 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="overflow-hidden space-y-1"
                        >
                          <label className="block text-xs font-bold font-archivo text-grafite mb-1 uppercase tracking-wide">
                            Qual é o segmento técnico da sua empresa? *
                          </label>
                          <input
                            type="text"
                            placeholder="Ex: Automação Predial, Energia Solar, Manutenção Mecânica..."
                            {...register("outroSegmento")}
                            className={`w-full px-3.5 py-2.5 rounded-[8px] bg-white border text-xs text-grafite focus:outline-none transition-colors ${
                              errors.outroSegmento
                                ? "border-red-500 focus:border-red-600"
                                : "border-laranja/50 focus:border-laranja"
                            }`}
                            autoFocus
                          />
                          {errors.outroSegmento && (
                            <p className="text-[11px] text-red-500 font-mono flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3 h-3 shrink-0" />
                              <span>{errors.outroSegmento.message}</span>
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[8px] bg-laranja hover:bg-laranja-hover text-white text-sm font-semibold transition-colors shadow-none cursor-pointer disabled:opacity-60"
                    >
                      <span>Solicitar Demonstração do Téo</span>
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </motion.button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-aco font-mono pt-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" strokeWidth={1.5} />
                      <span>Seus dados são confidenciais e protegidos.</span>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
