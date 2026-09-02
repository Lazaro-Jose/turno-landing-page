import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Turno | Téo - Seu Funcionário Digital de Atendimento e Operações",
  description:
    "Transforme mensagens de WhatsApp em ordens de serviço executadas. O Téo atende seus clientes, qualifica chamados e agenda técnicos automaticamente.",
  keywords: [
    "Turno",
    "Téo",
    "atendimento técnico",
    "gestão de serviços",
    "ordem de serviço whatsapp",
    "climatização e manutenção",
    "funcionário digital",
  ],
  authors: [{ name: "Turno" }],
  icons: {
    icon: "/assets/images/turno_icon_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F5F2] text-[#101418] font-sans selection:bg-[#E8582C]/20 selection:text-[#101418]">
        {children}
      </body>
    </html>
  );
}
