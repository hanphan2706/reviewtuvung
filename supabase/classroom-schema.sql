-- Lớp học & bài tập (chạy một lần trên Supabase SQL Editor).

create table if not exists public.classroom_classes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null default '',
  created_by uuid not null references auth.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.classroom_members (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classroom_classes (id) on delete cascade,
  email text not null,
  user_id uuid references auth.users (id) on delete set null,
  added_at timestamptz not null default now(),
  unique (class_id, email)
);

create index if not exists classroom_members_email_idx
  on public.classroom_members (lower(email));

create index if not exists classroom_members_user_idx
  on public.classroom_members (user_id);

create table if not exists public.classroom_assignments (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classroom_classes (id) on delete cascade,
  title text not null,
  instructions text not null default '',
  kind text not null check (kind in ('writing', 'self_study', 'external_link')),
  payload jsonb not null default '{}'::jsonb,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists classroom_assignments_class_idx
  on public.classroom_assignments (class_id, sort_order, created_at);

create table if not exists public.classroom_submissions (
  id uuid primary key default gen_random_uuid(),
  assignment_id uuid not null references public.classroom_assignments (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  status text not null default 'in_progress' check (status in ('in_progress', 'submitted')),
  google_doc_id text,
  google_doc_url text,
  submitted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (assignment_id, user_id)
);

create index if not exists classroom_submissions_user_idx
  on public.classroom_submissions (user_id, updated_at desc);

alter table public.classroom_classes enable row level security;
alter table public.classroom_members enable row level security;
alter table public.classroom_assignments enable row level security;
alter table public.classroom_submissions enable row level security;

-- Học viên: đọc lớp mình tham gia.
create policy "classroom_classes_member_read" on public.classroom_classes
  for select using (
    exists (
      select 1
      from public.classroom_members m
      where m.class_id = id
        and (
          m.user_id = auth.uid()
          or lower(m.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
        )
    )
  );

create policy "classroom_members_self_read" on public.classroom_members
  for select using (
    user_id = auth.uid()
    or lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );

create policy "classroom_assignments_member_read" on public.classroom_assignments
  for select using (
    exists (
      select 1
      from public.classroom_members m
      where m.class_id = classroom_assignments.class_id
        and (
          m.user_id = auth.uid()
          or lower(m.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
        )
    )
  );

create policy "classroom_submissions_own" on public.classroom_submissions
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
