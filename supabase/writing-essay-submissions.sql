-- Chạy nếu đã apply writing-progress-schema.sql trước khi có bảng submissions.

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

alter table public.writing_essay_submissions enable row level security;

drop policy if exists writing_essay_submissions_own on public.writing_essay_submissions;
create policy "writing_essay_submissions_own" on public.writing_essay_submissions
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
