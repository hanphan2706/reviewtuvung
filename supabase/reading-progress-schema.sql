-- Luyện đọc: streak + lịch sử đọc theo tài khoản (chạy một lần trên Supabase SQL Editor).

create table if not exists public.reading_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  current_streak integer not null default 0 check (current_streak >= 0),
  longest_streak integer not null default 0 check (longest_streak >= 0),
  last_read_date date,
  articles_opened integer not null default 0 check (articles_opened >= 0),
  updated_at timestamptz not null default now()
);

create table if not exists public.reading_article_log (
  user_id uuid not null references auth.users(id) on delete cascade,
  article_key text not null,
  opened_at timestamptz not null default now(),
  progress numeric not null default 0 check (progress >= 0 and progress <= 1),
  primary key (user_id, article_key)
);

alter table public.reading_progress enable row level security;
alter table public.reading_article_log enable row level security;

create policy "reading_progress_own" on public.reading_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "reading_article_log_own" on public.reading_article_log
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
