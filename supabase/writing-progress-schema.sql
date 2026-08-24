-- Luyện viết: tiến độ theo tài khoản (chạy một lần trên Supabase SQL Editor).

create table if not exists public.writing_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  essays_completed integer not null default 0 check (essays_completed >= 0),
  skill_checks_total integer not null default 0 check (skill_checks_total >= 0),
  skill_checks_correct integer not null default 0 check (skill_checks_correct >= 0),
  current_streak integer not null default 0 check (current_streak >= 0),
  longest_streak integer not null default 0 check (longest_streak >= 0),
  last_activity_date date,
  updated_at timestamptz not null default now()
);

create table if not exists public.writing_essay_log (
  user_id uuid not null references auth.users(id) on delete cascade,
  prompt_id text not null,
  task text not null check (task in ('task1', 'task2')),
  word_count integer not null default 0 check (word_count >= 0),
  completed_at timestamptz not null default now(),
  primary key (user_id, prompt_id)
);

create index if not exists writing_essay_log_completed_at_idx
  on public.writing_essay_log (user_id, completed_at desc);

-- Mỗi lần Submit lưu một bản bài viết để xem lại trong View History.
create table if not exists public.writing_essay_submissions (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  prompt_id text not null,
  task text not null check (task in ('task1', 'task2')),
  title text not null default '',
  prompt_text text not null default '',
  body text not null,
  word_count integer not null default 0 check (word_count >= 0),
  submitted_at timestamptz not null default now()
);

create index if not exists writing_essay_submissions_user_idx
  on public.writing_essay_submissions (user_id, submitted_at desc);

create table if not exists public.writing_skill_check_log (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  skill text not null check (skill in ('dich-cau', 'cloze', 'sua-loi')),
  item_id text not null,
  correct_count integer not null default 0 check (correct_count >= 0),
  total_count integer not null default 1 check (total_count >= 1),
  checked_at timestamptz not null default now()
);

create index if not exists writing_skill_check_log_user_idx
  on public.writing_skill_check_log (user_id, checked_at desc);

alter table public.writing_progress enable row level security;
alter table public.writing_essay_log enable row level security;
alter table public.writing_essay_submissions enable row level security;
alter table public.writing_skill_check_log enable row level security;

create policy "writing_progress_own" on public.writing_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "writing_essay_log_own" on public.writing_essay_log
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "writing_essay_submissions_own" on public.writing_essay_submissions
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "writing_skill_check_log_own" on public.writing_skill_check_log
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create table if not exists public.writing_saved_samples (
  user_id uuid not null references auth.users(id) on delete cascade,
  sample_id text not null,
  saved_at timestamptz not null default now(),
  primary key (user_id, sample_id)
);

create index if not exists writing_saved_samples_user_idx
  on public.writing_saved_samples (user_id, saved_at desc);

alter table public.writing_saved_samples enable row level security;

create policy "writing_saved_samples_own" on public.writing_saved_samples
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
