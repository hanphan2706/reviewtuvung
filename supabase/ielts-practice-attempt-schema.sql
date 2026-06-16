-- Luyện đề IELTS: lưu band từng lần nộp bài (chạy một lần trên Supabase SQL Editor).

create table if not exists public.ielts_practice_attempt_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  skill text not null check (skill in ('reading', 'listening')),
  band numeric(2, 1) not null check (band >= 0 and band <= 9),
  exam_key text,
  attempted_at timestamptz not null default now()
);

create index if not exists ielts_practice_attempt_user_skill_idx
  on public.ielts_practice_attempt_log (user_id, skill, attempted_at desc);

alter table public.ielts_practice_attempt_log enable row level security;

create policy "ielts_practice_attempt_own" on public.ielts_practice_attempt_log
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
