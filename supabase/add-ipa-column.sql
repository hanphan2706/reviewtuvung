-- Run in Supabase SQL editor (once): lưu phiên âm IPA trên thẻ SRS
alter table public.srs_words
  add column if not exists ipa text;
