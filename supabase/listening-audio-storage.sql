-- Bucket private cho audio Luyện nghe (Cam 19, Tactics Basic…).
-- Supabase Free: tối đa 50 MB / file (global, không tăng được trên Free).
-- File lớn (vd. real test 1.mp3 ~86 MB): npm run listening:prepare-audio-for-upload rồi upload.
-- Chạy SQL này trong Supabase SQL Editor, rồi: npm run listening:upload-audio

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'listening-audio',
  'listening-audio',
  false,
  104857600,
  array['audio/mpeg', 'audio/mp3']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "listening_audio_select_authenticated" on storage.objects;

create policy "listening_audio_select_authenticated"
on storage.objects
for select
to authenticated
using (bucket_id = 'listening-audio');
