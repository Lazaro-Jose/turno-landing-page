/**
 * A chamada para pré-registrar uma empresa vinda da landing page.
 *
 * O navegador fala só com a rota same-origin do próprio Next. É ela, no
 * servidor, que grava no Supabase: endereço e chave do banco nunca chegam
 * aqui nem aparecem nas requisições do navegador.
 */

const PRE_REGISTRATION_PATH = "/api/pre-registrations";

export interface PreRegistrationPayload {
  companyName: string;
  cnpj: string;
  registerName: string;
  registerCpf: string;
  phone: string;
  email: string;
  numberOfTechnicians: string;
  segment: string;
}

export type PreRegistrationResult =
  | { outcome: "registered"; companyName: string }
  | { outcome: "already-registered" }
  | { outcome: "invalid"; message: string }
  | { outcome: "unavailable" };

/**
 * Nunca lança. Todo caminho vira um resultado nomeado, porque a tela precisa
 * dizer coisas diferentes para "esse CNPJ já está com a gente" e para "não
 * conseguimos falar com o servidor" — e um try/catch no componente acabaria
 * tratando os dois como a mesma falha.
 */
export async function preRegisterTenant(
  payload: PreRegistrationPayload,
): Promise<PreRegistrationResult> {
  let response: Response;

  try {
    response = await fetch(PRE_REGISTRATION_PATH, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // Rede fora ou servidor parado: nada chegou ao servidor.
    return { outcome: "unavailable" };
  }

  if (response.status === 201) {
    const body = (await response.json().catch(() => null)) as { companyName?: string } | null;
    return { outcome: "registered", companyName: body?.companyName ?? payload.companyName };
  }

  if (response.status === 409) {
    return { outcome: "already-registered" };
  }

  if (response.status === 400) {
    // A mensagem do servidor nomeia o campo recusado. É o único caso em que
    // vale repassar o texto dele: o visitante consegue agir sobre isso.
    const body = (await response.json().catch(() => null)) as { message?: string } | null;
    return {
      outcome: "invalid",
      message: body?.message ?? "Confira os dados informados e tente novamente.",
    };
  }

  return { outcome: "unavailable" };
}
