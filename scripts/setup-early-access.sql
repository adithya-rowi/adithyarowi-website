create extension if not exists "uuid-ossp";

create table if not exists early_access_emails (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  user_agent text,
  referer text,
  created_at timestamptz default now()
);

alter table early_access_emails enable row level security;

create policy "service-role-only" on early_access_emails for
  all to public using (false) with check (false);
