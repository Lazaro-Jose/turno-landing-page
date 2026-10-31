-- Pré-cadastros enviados pelo formulário da landing page.
-- Contém CPF, CNPJ, e-mail e telefone (dado pessoal, LGPD): só o servidor da
-- landing page grava, usando a service role. O navegador nunca fala com esta tabela.

create table public.pre_registrations (
  id                    uuid primary key default gen_random_uuid(),
  created_at            timestamptz not null default now(),
  company_name          text not null check (char_length(company_name) between 2 and 80),
  cnpj                  text not null check (cnpj ~ '^\d{14}$'),
  register_name         text not null check (char_length(register_name) between 2 and 80),
  register_cpf          text not null check (register_cpf ~ '^\d{11}$'),
  phone                 text not null check (phone ~ '^\d{10,11}$'),
  email                 text not null check (char_length(email) between 3 and 254),
  number_of_technicians text not null check (char_length(number_of_technicians) between 1 and 20),
  segment               text not null check (char_length(segment) between 2 and 80),
  status                text not null default 'pending' check (status in ('pending', 'contacted', 'converted', 'discarded'))
);

-- Um CNPJ, um pré-cadastro: reenvio vira 409 "já está com a gente".
create unique index pre_registrations_cnpj_key on public.pre_registrations (cnpj);
create index pre_registrations_created_at_idx on public.pre_registrations (created_at desc);

-- RLS ligado e forçado, sem nenhuma policy: anon e authenticated não leem nem gravam.
-- A service role ignora RLS e é usada só no servidor.
alter table public.pre_registrations enable row level security;
alter table public.pre_registrations force row level security;

revoke all on table public.pre_registrations from anon, authenticated;
