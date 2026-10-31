/**
 * Acesso ao Supabase — só roda no servidor (route handlers).
 *
 * URL e service role key vêm de variáveis SEM o prefixo NEXT_PUBLIC_, então o
 * Next nunca as inclui no bundle do navegador. O navegador fala apenas com a
 * rota same-origin /api/pre-registrations; o endereço do Supabase e a chave
 * não aparecem em código de cliente nem em requisição de rede.
 */

export type InsertResult = "created" | "duplicate" | "error";

export async function insertRow(table: string, row: Record<string, unknown>): Promise<InsertResult> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.error("[supabase] SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY não configuradas.");
    return "error";
  }

  let response: Response;
  try {
    response = await fetch(`${url}/rest/v1/${table}`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
      cache: "no-store",
    });
  } catch {
    console.error("[supabase] Falha de rede ao gravar em", table);
    return "error";
  }

  if (response.status === 201) return "created";
  if (response.status === 409) return "duplicate"; // violação de unique (23505)

  // Só o status vai para o log: o corpo pode ecoar dado pessoal.
  console.error("[supabase] Gravação recusada em", table, "status", response.status);
  return "error";
}
