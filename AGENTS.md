# Agent Instructions: Turno Landing Page

## 1. Project Specs (Contexto de Negócio)
*NOTA PARA O AGENTE: Leia esta seção antes de gerar textos ou sugerir designs.*
- **Produto:** Téo, um funcionário digital de operações e atendimento para empresas de serviços[cite: 1, 2].
- **Marca:** Turno (Turno AI em contextos internacionais/técnicos)[cite: 1].
- **Público-Alvo:** Pequenas e médias empresas de serviços técnicos (5 a 50 funcionários), com foco inicial em manutenção e climatização[cite: 2].
- **Comprador (Persona):** Dono ou sócio da empresa que ainda participa da operação e quer resolver a bagunça operacional[cite: 2].
- **Proposta de Valor Central:** Transformar mensagens do WhatsApp em serviços realizados de forma automática[cite: 2].
- **Posicionamento:** Capacidade operacional, não inteligência artificial[cite: 1]. O cliente deve pensar "contratei mais uma pessoa" e não "comprei um software"[cite: 1].
- **Slogan Principal:** Do primeiro oi ao serviço concluído[cite: 1].

## 2. Copywriting e Persona da Marca
Ao gerar textos (copy) para a Landing Page, assuma a persona do "gerente de operações que você não conseguiu contratar": tem cerca de 40 anos, é prático, fala pouco e escreve claro[cite: 1].
- **Regras de Escrita:**
  - Seja prático, direto e concreto[cite: 1].
  - Use verbos antes de adjetivos[cite: 1].
  - Use números reais (ex: "300 solicitações por mês") em vez de superlativos (ex: "Aumente exponencialmente")[cite: 1].
  - Uma ideia por parágrafo[cite: 1].
- **O que NUNCA dizer (Restrições estritas):**
  - Nunca abra uma peça de comunicação com a palavra "inteligência artificial"[cite: 1].
  - É proibido usar a sigla "IA" em qualquer lugar do topo do site[cite: 1].
  - Proibido usar frases como "Automatize sua empresa com IA", "Chatbot inteligente" ou "A revolução da IA"[cite: 1].
  - Nunca chame de "assistente", "agente" ou "bot" (use sempre "funcionário digital")[cite: 1].
  - Ataque comercial base: "Chatbot conversa. O Téo trabalha."[cite: 1].

## 3. Identidade Visual e UI (Tailwind CSS)
A referência visual é uma "oficina bem organizada": prática, arrumada e confiável[cite: 1].

### 3.1. Cores Base (Obrigatório configurar no `tailwind.config.ts`)
- **Fundo Principal (Bancada):** `#F7F5F2` (Off-white quente, cor de papel)[cite: 1].
- **Texto Principal/Logotipo (Grafite):** `#101418`[cite: 1].
- **Primária/CTAs (Laranja Turno):** `#E8582C` (Usada com extrema disciplina, apenas para destaque de ação)[cite: 1].
- **Neutro/Bordas/Ícones Inativos (Aço):** `#6B7480`[cite: 1].
- **Divisores/Fundos de campo (Aço 10%):** `#E4E6E9`[cite: 1].

### 3.2. Tipografia (Google Fonts)
- **Títulos e Logotipo:** `Archivo` (SemiBold / Bold) - tracking levemente fechado (-2% no logo)[cite: 1].
- **Texto e Interface:** `Inter` (Regular / Medium / SemiBold)[cite: 1].
- **Números Operacionais/Valores:** `JetBrains Mono`[cite: 1].

### 3.3. Forma, UI e Animações
- **Raio de borda (Border Radius):** 8px em cards e campos, 12px em modais, 999px em pills de status (nunca quadrado)[cite: 1].
- **Ícones:** Lucide ou Phosphor. Traço de 1,5px, cantos arredondados, monocromáticos (nunca coloridos ou preenchidos)[cite: 1].
- **Sombras (Box Shadow):** Quase nenhuma. A hierarquia deve vir do fundo e borda, não de profundidade falsa[cite: 1].
- **Animações (Framer Motion):** 150–200ms de duração, saída suave[cite: 1]. Uma coisa se move por vez[cite: 1]. Evite que as animações disparem repetidamente (use `viewport={{ once: true }}`).
- **Imagens:** Use pessoas reais trabalhando (ex: técnico com o celular na frente de um condensador)[cite: 1].

### 3.4. O que a Identidade Visual PROÍBE
- É estritamente proibido o uso de gradientes (especialmente roxo/azul), brilhos, glows ou faíscas ✨[cite: 1].
- Sem imagens de cérebros, chips, redes neurais, robôs ou nós infinitos[cite: 1].
- Sem rostos humanos gerados por IA ou mascotes-robôs (O avatar do Téo é um crachá)[cite: 1].
- Modo escuro como padrão do site é proibido[cite: 1].
- Ilustrações 3D isométricas estão proibidas[cite: 1].

## 4. Tech Stack e Coding Guidelines
- **Core:** Next.js (App Router), React, TypeScript.
- **Estilização:** Tailwind CSS (sem arquivos `.css` ou `.module.css` isolados).
- **Formulários:** React Hook Form + Zod.
- **Server Components:** Mantenha Server Components como padrão. Use `"use client"` estritamente onde houver interatividade.
- **Imagens:** Use sempre `next/image` para assets referenciados da pasta `/public`.