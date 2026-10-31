import { z } from "zod";
import { insertRow } from "@/lib/server/supabase";
import { isValidCnpj, isValidCpf, onlyDigits } from "@/lib/documents";

// A validação que vale é esta: a do formulário roda no navegador e pode ser ignorada.
const bodySchema = z.object({
  companyName: z.string().trim().min(2).max(80),
  cnpj: z.string().refine(isValidCnpj),
  registerName: z.string().trim().min(2).max(80),
  registerCpf: z.string().refine(isValidCpf),
  phone: z.string().refine((v) => {
    const d = onlyDigits(v);
    return d.length >= 10 && d.length <= 11;
  }),
  email: z.string().trim().toLowerCase().email().max(254),
  numberOfTechnicians: z.string().trim().min(1).max(20),
  segment: z.string().trim().min(2).max(80),
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = bodySchema.safeParse(json);

  if (!parsed.success) {
    return Response.json(
      { message: "Confira os dados informados e tente novamente." },
      { status: 400 },
    );
  }

  const d = parsed.data;
  const result = await insertRow("pre_registrations", {
    company_name: d.companyName,
    cnpj: onlyDigits(d.cnpj),
    register_name: d.registerName,
    register_cpf: onlyDigits(d.registerCpf),
    phone: onlyDigits(d.phone),
    email: d.email,
    number_of_technicians: d.numberOfTechnicians,
    segment: d.segment,
  });

  if (result === "created") {
    return Response.json({ companyName: d.companyName }, { status: 201 });
  }
  if (result === "duplicate") {
    return Response.json({ message: "already-registered" }, { status: 409 });
  }
  return Response.json({ message: "unavailable" }, { status: 503 });
}
