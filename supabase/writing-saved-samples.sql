-- Bài mẫu đã lưu (Save Article). Chạy trên Supabase SQL Editor nếu schema cũ chưa có bảng này.

create table if not exists public.writing_saved_samples (
  user_id uuid not null references auth.users(id) on delete cascade,
  sample_id text not null,
  saved_at timestamptz not null default now(),
  primary key (user_id, sample_id)
);

create index if not exists writing_saved_samples_user_idx
  on public.writing_saved_samples (user_id, saved_at desc);

alter table public.writing_saved_samples enable row level security;

drop policy if exists writing_saved_samples_own on public.writing_saved_samples;
create policy "writing_saved_samples_own" on public.writing_saved_samples
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
