-- Ngữ pháp: tiến độ luyện tập theo tài khoản (chạy một lần trên Supabase SQL Editor).

create table if not exists public.grammar_topic_log (
  user_id uuid not null references auth.users(id) on delete cascade,
  topic_slug text not null,
  opened_at timestamptz not null default now(),
  progress numeric not null default 0 check (progress >= 0 and progress <= 1),
  primary key (user_id, topic_slug)
);

create index if not exists grammar_topic_log_opened_at_idx
  on public.grammar_topic_log (user_id, opened_at desc);

alter table public.grammar_topic_log enable row level security;

create policy "grammar_topic_log_own" on public.grammar_topic_log
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
