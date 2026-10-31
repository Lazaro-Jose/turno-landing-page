import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import {
  COMPANY_LEGAL_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  LEGAL_LAST_UPDATE,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Política de Privacidade | Turno",
  description:
    "Quais dados a Turno coleta pelo formulário do site, para que usa, por quanto tempo guarda e como você exerce seus direitos pela LGPD.",
};

const email = (
  <a href={`mailto:${CONTACT_EMAIL}`} className="text-laranja hover:underline font-medium">
    {CONTACT_EMAIL}
  </a>
);

const sections: LegalSection[] = [
  {
    title: "Quem somos",
    paragraphs: [
      `${COMPANY_LEGAL_NAME} (“Turno”) é a controladora dos dados pessoais tratados neste site, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018, a LGPD).`,
      <>Para qualquer assunto sobre privacidade, fale com a gente por {email} ou pelo telefone {CONTACT_PHONE_DISPLAY}.</>,
    ],
  },
  {
    title: "Quais dados coletamos",
    paragraphs: ["Coletamos apenas o que você digita no formulário de demonstração:"],
    items: [
      "Nome completo e CPF de quem faz o cadastro;",
      "Nome da empresa e CNPJ;",
      "E-mail profissional e WhatsApp com DDD;",
      "Número de técnicos e segmento de atuação da empresa.",
    ],
  },
  {
    title: "Para que usamos esses dados",
    items: [
      "Entrar em contato para agendar e fazer a demonstração do Téo;",
      "Identificar a empresa e evitar cadastros duplicados (por isso pedimos o CNPJ);",
      "Confirmar que o cadastro foi feito por uma pessoa responsável pela empresa (por isso pedimos o CPF);",
      "Entender o porte e o segmento de quem nos procura, para preparar a conversa.",
    ],
  },
  {
    title: "Base legal",
    paragraphs: [
      "Tratamos seus dados para executar procedimentos preliminares a um possível contrato, a pedido seu (art. 7º, V, da LGPD), e para atender ao nosso legítimo interesse de responder a quem nos procura e de prevenir duplicidade e fraude (art. 7º, IX).",
      "Não usamos seus dados para fins diferentes dos descritos aqui. Se isso mudar, avisamos antes.",
    ],
  },
  {
    title: "Com quem compartilhamos",
    paragraphs: [
      "Não vendemos nem alugamos dados pessoais. Os dados ficam em infraestrutura de nuvem contratada pela Turno (banco de dados e hospedagem do site), com acesso restrito a quem precisa deles para atender o seu pedido.",
      "Esses provedores tratam os dados somente para nos prestar o serviço. Também podemos compartilhar dados quando uma lei ou ordem de autoridade competente exigir.",
    ],
  },
  {
    title: "Cookies e rastreamento",
    paragraphs: [
      "Este site não usa cookies de publicidade nem ferramentas de análise que identifiquem você. Se isso mudar, atualizamos esta política e pedimos o seu consentimento quando a lei exigir.",
    ],
  },
  {
    title: "Por quanto tempo guardamos",
    paragraphs: [
      "Guardamos o cadastro enquanto houver conversa comercial em andamento. Se a empresa não contratar o Téo, apagamos ou anonimizamos os dados em até 24 meses após o último contato.",
      "Você pode pedir a exclusão antes disso, a qualquer momento. Dados que a lei nos obrigue a manter ficam guardados pelo prazo legal.",
    ],
  },
  {
    title: "Seus direitos",
    paragraphs: ["Pela LGPD, você pode pedir à Turno, a qualquer momento:"],
    items: [
      "Confirmar se tratamos seus dados e acessar uma cópia deles;",
      "Corrigir dados incompletos, inexatos ou desatualizados;",
      "Pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários;",
      "Pedir a portabilidade dos dados;",
      "Saber com quem compartilhamos seus dados;",
      "Revogar o consentimento, quando o tratamento depender dele, e se opor a tratamentos que você considere indevidos.",
    ],
  },
  {
    title: "Como exercer seus direitos",
    paragraphs: [
      <>Envie o pedido para {email}, informando o nome e o CNPJ usados no cadastro. Respondemos em até 15 dias. Podemos pedir uma confirmação de identidade antes de entregar ou apagar dados, para que ninguém acesse o cadastro de outra pessoa.</>,
      "Se achar que seus dados foram tratados de forma irregular, você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).",
    ],
  },
  {
    title: "Segurança",
    paragraphs: [
      "Os dados trafegam por conexão criptografada. O banco de dados não é acessível direto pelo navegador: só o servidor do site grava nele, com credenciais guardadas fora do código público.",
      "Nenhum sistema é totalmente imune a falhas. Em caso de incidente que possa causar risco ou dano relevante a você, avisamos você e a ANPD, como a LGPD determina.",
    ],
  },
  {
    title: "Mudanças nesta política",
    paragraphs: [
      "Quando alterarmos esta política, publicamos a nova versão nesta página com a data de atualização no topo.",
    ],
  },
];

export default function PrivacidadePage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      intro="Esta página explica quais dados pessoais pedimos no formulário do site, por que pedimos, por quanto tempo guardamos e como você controla o que fazemos com eles."
      lastUpdate={LEGAL_LAST_UPDATE}
      sections={sections}
    />
  );
}
