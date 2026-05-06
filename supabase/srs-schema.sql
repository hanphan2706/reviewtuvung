create table if not exists public.srs_decks (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.srs_words (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  deck_id uuid not null references public.srs_decks(id) on delete cascade,
  term text not null,
  definition text not null default '',
  created_at timestamptz not null default now(),
  next_review_at timestamptz not null default now(),
  last_reviewed_at timestamptz,
  last_rating text check (last_rating in ('hard', 'ok', 'easy')),
  hard_priority boolean not null default false,
  interval_days integer,
  ease numeric,
  review_count integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.srs_settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  daily_review_limit integer not null default 15 check (daily_review_limit between 1 and 500),
  review_day_tallies jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Bảng đã tạo trước khi có cột thống kê: chạy một lần trên project cũ.
alter table public.srs_settings
  add column if not exists review_day_tallies jsonb not null default '{}'::jsonb;

alter table public.srs_decks enable row level security;
alter table public.srs_words enable row level security;
alter table public.srs_settings enable row level security;

drop policy if exists "Users can read own decks" on public.srs_decks;
create policy "Users can read own decks"
on public.srs_decks for select
using (auth.uid() = user_id);

drop policy if exists "Users can insert own decks" on public.srs_decks;
create policy "Users can insert own decks"
on public.srs_decks for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can update own decks" on public.srs_decks;
create policy "Users can update own decks"
on public.srs_decks for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users can delete own decks" on public.srs_decks;
create policy "Users can delete own decks"
on public.srs_decks for delete
using (auth.uid() = user_id);

drop policy if exists "Users can read own words" on public.srs_words;
create policy "Users can read own words"
on public.srs_words for select
using (auth.uid() = user_id);

drop policy if exists "Users can insert own words" on public.srs_words;
create policy "Users can insert own words"
on public.srs_words for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can update own words" on public.srs_words;
create policy "Users can update own words"
on public.srs_words for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users can delete own words" on public.srs_words;
create policy "Users can delete own words"
on public.srs_words for delete
using (auth.uid() = user_id);

drop policy if exists "Users can read own settings" on public.srs_settings;
create policy "Users can read own settings"
on public.srs_settings for select
using (auth.uid() = user_id);

drop policy if exists "Users can insert own settings" on public.srs_settings;
create policy "Users can insert own settings"
on public.srs_settings for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can update own settings" on public.srs_settings;
create policy "Users can update own settings"
on public.srs_settings for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users can delete own settings" on public.srs_settings;
create policy "Users can delete own settings"
on public.srs_settings for delete
using (auth.uid() = user_id);
