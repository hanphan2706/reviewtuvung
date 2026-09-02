/**
 * In hướng dẫn cấu hình Google Drive cho bài Writing LMS.
 * Chạy: npx tsx scripts/print-classroom-google-setup.ts
 */

console.log(`
=== Anthichtuhoc — Google Drive cho bài Writing ===

1) Google Cloud Console (đăng nhập giaan.phuong98@gmail.com)
   https://console.cloud.google.com
   - Tạo project mới (vd. anthichtuhoc-classroom)
   - APIs & Services → Enable APIs → bật "Google Drive API"

2) OAuth consent screen
   - User type: External (hoặc Internal nếu Workspace)
   - Scopes: thêm https://www.googleapis.com/auth/drive.file

3) Credentials → Create OAuth client ID → Web application
   - Authorized redirect URIs: http://localhost (dùng tạm để lấy refresh token)
   - Copy Client ID + Client Secret → .env.local

4) Lấy refresh token (một lần)
   Mở URL (thay CLIENT_ID):

   https://accounts.google.com/o/oauth2/v2/auth?client_id=CLIENT_ID&redirect_uri=http://localhost&response_type=code&scope=https://www.googleapis.com/auth/drive.file&access_type=offline&prompt=consent

   - Đăng nhập bằng giaan.phuong98@gmail.com
   - Copy ?code=... từ thanh địa chỉ sau redirect
   - Đổi code lấy refresh token:

   curl -X POST https://oauth2.googleapis.com/token \\
     -d client_id=CLIENT_ID \\
     -d client_secret=CLIENT_SECRET \\
     -d code=CODE_TU_URL \\
     -d redirect_uri=http://localhost \\
     -d grant_type=authorization_code

   - Lưu refresh_token vào GOOGLE_OAUTH_REFRESH_TOKEN

5) Tạo folder trên Google Drive
   - Tạo folder "Anthichtuhoc — Bài tập học viên"
   - Mở folder → copy ID từ URL (phần sau /folders/)
   - GOOGLE_DRIVE_FOLDER_ID=...

6) Supabase
   - Chạy SQL: supabase/classroom-schema.sql
   - Thêm SUPABASE_SERVICE_ROLE_KEY vào .env.local

7) Env tổng hợp (.env.local)
   CLASSROOM_ADMIN_EMAILS=giaan.phuong98@gmail.com
   GOOGLE_OAUTH_CLIENT_ID=...
   GOOGLE_OAUTH_CLIENT_SECRET=...
   GOOGLE_OAUTH_REFRESH_TOKEN=...
   GOOGLE_DRIVE_FOLDER_ID=...

8) Truy cập admin
   - Đăng nhập Google bằng giaan.phuong98@gmail.com trên site
   - Mở trực tiếp: /admin
`);
