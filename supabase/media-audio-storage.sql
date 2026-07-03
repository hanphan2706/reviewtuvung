-- Bucket private cho accent clips, intro ngắn, v.v.
-- Chạy SQL này trong Supabase SQL Editor, rồi: npm run media:upload-audio

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'media-audio',
  'media-audio',
  false,
  10485760,
  array['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/x-wav']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "media_audio_select_authenticated" on storage.objects;

create policy "media_audio_select_authenticated"
on storage.objects
for select
to authenticated
using (bucket_id = 'media-audio');
