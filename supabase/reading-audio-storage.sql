-- Bucket private cho audio Luyện đọc (Compass / curated).
-- Chạy trong Supabase SQL Editor, rồi: npm run reading:upload-audio

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'reading-audio',
  'reading-audio',
  false,
  52428800,
  array['audio/mpeg', 'audio/mp3']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "reading_audio_select_authenticated" on storage.objects;

create policy "reading_audio_select_authenticated"
on storage.objects
for select
to authenticated
using (bucket_id = 'reading-audio');
