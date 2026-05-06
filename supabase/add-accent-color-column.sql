-- Run in Supabase SQL editor (once): thêm cột màu nền thẻ kiểu Notion
alter table public.srs_words add column if not exists accent_color text check (
  accent_color is null
  or accent_color in ('gray', 'brown', 'orange', 'yellow', 'blue')
);
