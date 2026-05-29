en-vi-wiktionary.json — chỉ mục nghĩa VI trích từ EN Wiktionary + passage curated + core glossary.

Cập nhật:
  npm run dictionary:merge-passage-vi
  npm run dictionary:import-vi          # ~40 từ học thuật + bài đọc hub
  npm run dictionary:import-vi:all      # thêm token từ hub (chậm hơn)

en-vi-stardict.json — ~52k từ (StarDict, gitignore — file lớn).

Local:
  npm run dictionary:import-stardict

Production (Supabase Storage bucket `dictionary-data`, private):
  npm run dictionary:upload-stardict
  (cần SUPABASE_SERVICE_ROLE_KEY trên Vercel)

Sau khi import/upload, restart dev server để nạp lại chỉ mục.
