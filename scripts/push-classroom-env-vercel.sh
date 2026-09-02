#!/usr/bin/env bash
# Đẩy env LMS lên Vercel (cần đã chạy `vercel login` và `vercel link` trong reviewtuvung/).
set -euo pipefail
cd "$(dirname "$0")/.."

if ! command -v vercel >/dev/null 2>&1; then
  echo "Cài Vercel CLI: npm i -g vercel"
  exit 1
fi

if [[ ! -f .env.local ]]; then
  echo "Thiếu .env.local"
  exit 1
fi

get_env() {
  local key="$1"
  local line
  line="$(grep -E "^${key}=" .env.local | tail -1 || true)"
  if [[ -z "$line" ]]; then
    echo ""
    return
  fi
  echo "${line#*=}" | sed -e 's/^"//' -e 's/"$//' -e "s/^'//" -e "s/'$//"
}

push_var() {
  local key="$1"
  local value="$2"
  if [[ -z "$value" ]]; then
    echo "Bỏ qua $key (trống trong .env.local)"
    return
  fi
  for env in production preview; do
    echo "→ $key ($env)"
    vercel env add "$key" "$env" --force --yes --value "$value" --sensitive
  done
}

SERVICE_ROLE="$(get_env SUPABASE_SERVICE_ROLE_KEY)"
ADMIN_EMAILS="$(get_env CLASSROOM_ADMIN_EMAILS)"

push_var SUPABASE_SERVICE_ROLE_KEY "$SERVICE_ROLE"
push_var CLASSROOM_ADMIN_EMAILS "$ADMIN_EMAILS"

for key in GOOGLE_OAUTH_CLIENT_ID GOOGLE_OAUTH_CLIENT_SECRET GOOGLE_OAUTH_REFRESH_TOKEN GOOGLE_DRIVE_FOLDER_ID R2_ACCOUNT_ID R2_ACCESS_KEY_ID R2_SECRET_ACCESS_KEY R2_BUCKET_NAME; do
  push_var "$key" "$(get_env "$key")"
done

echo ""
echo "Xong. Redeploy: vercel --prod"
