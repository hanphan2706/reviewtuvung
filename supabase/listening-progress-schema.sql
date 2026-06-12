-- Luyện nghe: lịch sử nghe theo tài khoản (chạy một lần trên Supabase SQL Editor).

create table if not exists public.listening_lesson_log (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  opened_at timestamptz not null default now(),
  progress numeric not null default 0 check (progress >= 0 and progress <= 1),
  primary key (user_id, lesson_id)
);

create index if not exists listening_lesson_log_opened_at_idx
  on public.listening_lesson_log (user_id, opened_at desc);

alter table public.listening_lesson_log enable row level security;

create policy "listening_lesson_log_own" on public.listening_lesson_log
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
