/**
 * A chamada ao gateway para pré-registrar uma empresa vinda da landing page.
 *
 * Todo tráfego passa pelo gateway; a landing page não conhece o endereço do
 * turno-users nem de nenhum outro microservice. Trocar de porta, de host ou
 * quebrar o serviço em dois não muda nada aqui.
 */

const GATEWAY_URL = process.env.NEXT_PUBLIC_TURNO_GATEWAY_URL ?? "http://localhost:8090";
const PRE_REGISTRATION_PATH = "/api/users/tenants/pre-registrations";

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
    response = await fetch(`${GATEWAY_URL}${PRE_REGISTRATION_PATH}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // Rede fora, gateway parado ou CORS recusado: nada chegou ao servidor.
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
