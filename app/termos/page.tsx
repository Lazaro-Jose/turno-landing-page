import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import {
  COMPANY_LEGAL_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  LEGAL_LAST_UPDATE,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Termos de Uso | Turno",
  description:
    "Regras de uso do site da Turno e do formulário de demonstração do Téo, o funcionário digital de operações e atendimento.",
};

const email = (
  <a href={`mailto:${CONTACT_EMAIL}`} className="text-laranja hover:underline font-medium">
    {CONTACT_EMAIL}
  </a>
);

const sections: LegalSection[] = [
  {
    title: "Aceite",
    paragraphs: [
      `Estes Termos regulam o uso do site da ${COMPANY_LEGAL_NAME} (“Turno”). Ao navegar ou enviar o formulário, você declara que leu e concorda com eles. Se não concordar, não use o formulário.`,
    ],
  },
  {
    title: "O que é este site",
    paragraphs: [
      "O site apresenta o Téo, o funcionário digital de operações e atendimento da Turno, e recebe pedidos de demonstração de empresas de serviços técnicos.",
      "Enviar o formulário não cria contrato. A contratação do Téo é feita em proposta e contrato próprios, que prevalecem sobre estes Termos no que tratarem do serviço.",
    ],
  },
  {
    title: "Quem pode usar",
    paragraphs: [
      "O formulário é para pessoas maiores de 18 anos que atuam em nome de uma empresa e têm poder para pedir a demonstração. Ao enviá-lo, você declara que é essa pessoa.",
    ],
  },
  {
    title: "Seus compromissos",
    items: [
      "Informar dados verdadeiros, completos e atualizados, incluindo o seu CPF e o CNPJ da empresa;",
      "Não usar dados de terceiros sem autorização deles;",
      "Não tentar acessar áreas restritas, derrubar, sobrecarregar ou testar a segurança do site;",
      "Não usar o formulário para enviar spam, conteúdo ilegal ou código malicioso.",
    ],
  },
  {
    title: "O que fazemos com o seu pedido",
    paragraphs: [
      <>
        Usamos os dados enviados para entrar em contato sobre a demonstração, conforme a{" "}
        <Link href="/privacidade" className="text-laranja hover:underline font-medium">
          Política de Privacidade
        </Link>
        . Podemos recusar ou cancelar um pedido que pareça duplicado, falso ou fora do perfil de empresas que atendemos, sem obrigação de justificar.
      </>,
      "Não garantimos um prazo para o contato. Procuramos responder em dias úteis.",
    ],
  },
  {
    title: "Propriedade intelectual",
    paragraphs: [
      "A marca Turno, o nome Téo, o logotipo, os textos, as imagens e o código deste site pertencem à Turno ou a quem nos licenciou o uso. Você não pode copiar, modificar ou distribuir esse conteúdo sem autorização por escrito.",
    ],
  },
  {
    title: "Informações do site",
    paragraphs: [
      "Os textos do site descrevem o produto de forma geral. Números e exemplos mostrados são ilustrativos, e não prometem resultado igual para todas as empresas. Condições, prazos e valores valem só quando constarem da proposta ou do contrato.",
      "Podemos mudar o site, tirá-lo do ar para manutenção ou deixar de oferecer qualquer parte dele, sem aviso prévio.",
    ],
  },
  {
    title: "Limite de responsabilidade",
    paragraphs: [
      "Fazemos o possível para manter o site disponível e correto, mas ele é oferecido como está. A Turno não responde por indisponibilidade causada por terceiros (provedores de internet, hospedagem) ou por quem usa o site de forma contrária a estes Termos.",
      "Nada aqui limita direitos que a lei, em especial o Código de Defesa do Consumidor, garanta a quem for consumidor.",
    ],
  },
  {
    title: "Mudanças nos Termos",
    paragraphs: [
      "Podemos atualizar estes Termos. A versão vigente é a publicada nesta página, com a data de atualização no topo. Continuar usando o site depois da mudança significa concordar com ela.",
    ],
  },
  {
    title: "Lei aplicável e contato",
    paragraphs: [
      "Estes Termos seguem as leis do Brasil. Para resolver qualquer conflito, tentamos primeiro um acordo direto. Se não houver acordo, vale o foro da comarca indicada em contrato ou, na falta dele, o foro do domicílio da Turno, ressalvado o foro do consumidor quando a lei o assegurar.",
      <>Dúvidas sobre estes Termos: {email} ou {CONTACT_PHONE_DISPLAY}.</>,
    ],
  },
];

export default function TermosPage() {
  return (
    <LegalPage
      title="Termos de Uso"
      intro="Regras simples para usar o site da Turno e pedir uma demonstração do Téo."
      lastUpdate={LEGAL_LAST_UPDATE}
      sections={sections}
    />
  );
}
