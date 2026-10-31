import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-[#101418] text-white border-t border-zinc-800 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-7 w-28">
              <Image
                src="/assets/images/turno_logo_transparente_white-letters.png"
                alt="Turno"
                fill
                className="object-contain object-left"
              />
            </div>
            
            <p className="text-xs text-zinc-400 font-archivo tracking-wide">
              Do primeiro oi ao serviço concluído.
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              O funcionário digital que transforma mensagens no WhatsApp em ordens
              de serviço executadas para empresas técnicas em todo o Brasil.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Sistemas 100% Operacionais</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase font-bold text-zinc-300 tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="/#diferenciais" className="hover:text-white transition-colors">
                  Chatbot vs Téo
                </Link>
              </li>
              <li>
                <Link href="/#cracha" className="hover:text-white transition-colors">
                  O Crachá do Téo
                </Link>
              </li>
              <li>
                <Link href="/#setores" className="hover:text-white transition-colors">
                  Setores Atendidos
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-xs font-mono uppercase font-bold text-zinc-300 tracking-wider mb-4">
              Setores
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <span className="hover:text-white transition-colors">
                  Climatização & HVAC
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">
                  Contratos PMOC
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">
                  Manutenção Predial
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">
                  Instalações Elétricas
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">
                  Equipamentos Comerciais
                </span>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Support */}
          <div>
            <h4 className="text-xs font-mono uppercase font-bold text-zinc-300 tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-laranja shrink-0" strokeWidth={1.5} />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-laranja shrink-0" strokeWidth={1.5} />
                <a href={CONTACT_PHONE_HREF} className="hover:text-white transition-colors">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li className="pt-2 text-[11px] font-mono text-zinc-500">
                Turno Tecnologia e Operações LTDA
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-400">
          <p>© {new Date().getFullYear()} Turno. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="hover:text-zinc-300 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-zinc-300 transition-colors">
              Termos de Uso
            </Link>
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">
              Segurança
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
