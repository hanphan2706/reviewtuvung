/**
 * Hướng dẫn setup Cloudflare R2 cho audio anthichtuhoc.
 * Chạy: npx tsx scripts/print-r2-setup.ts
 */

console.log(`
=== Cloudflare R2 — audio anthichtuhoc ===

BƯỚC 1 — Bật R2 (dashboard Cloudflare)
  1. Đăng nhập https://dash.cloudflare.com
  2. Sidebar trái → R2 Object Storage
  3. Lần đầu sẽ hỏi bật R2 — chọn Enable (free, không cần thẻ nếu chỉ dùng free tier)

BƯỚC 2 — Tạo bucket
  1. R2 → Create bucket
  2. Tên: anthichtuhoc-audio
  3. Location: Automatic
  4. Storage class: Standard (KHÔNG chọn Infrequent Access — Infrequent không có free tier)
  5. Create bucket

BƯỚC 3 — Tạo API token (Access Key)
  1. R2 → Overview → bên phải "Account ID" → copy (đây là R2_ACCOUNT_ID)
  2. R2 → Manage R2 API Tokens → Create API token
  3. Permissions: Object Read & Write
  4. Chọn bucket: anthichtuhoc-audio (hoặc Apply to all buckets)
  5. Create → copy ngay:
     - Access Key ID  → R2_ACCESS_KEY_ID
     - Secret Access Key → R2_SECRET_ACCESS_KEY
     (Secret chỉ hiện một lần!)

BƯỚC 4 — Thêm vào reviewtuvung/.env.local

  R2_ACCOUNT_ID=...
  R2_ACCESS_KEY_ID=...
  R2_SECRET_ACCESS_KEY=...
  R2_BUCKET_NAME=anthichtuhoc-audio

BƯỚC 5 — Copy audio từ Supabase sang R2 (một lần, ~10–20 phút)

  cd reviewtuvung
  npx tsx scripts/migrate-supabase-audio-to-r2.ts

  Chỉ listening trước (nhanh hơn để test):
  npx tsx scripts/migrate-supabase-audio-to-r2.ts --listening-only

BƯỚC 6 — Thêm 4 biến R2_* lên Vercel (Production) → Redeploy

  bash scripts/push-classroom-env-vercel.sh   (sau khi cập nhật script)
  hoặc Vercel Dashboard → Settings → Environment Variables

BƯỚC 7 — Test production
  - Đăng nhập site → mở bài Luyện nghe → nghe thử
  - Nếu OK → vào Supabase → Storage → xóa bucket listening-audio (giải phóng ~1.2 GB)

Lưu ý:
  - Bucket R2 là PRIVATE — user vẫn nghe qua /api/listening/audio (cần đăng nhập)
  - Supabase fallback vẫn hoạt động trong lúc migrate — an toàn để test trước khi xóa Supabase Storage
  - Free tier R2: 10 GB storage — đủ mở rộng lâu dài
`);
