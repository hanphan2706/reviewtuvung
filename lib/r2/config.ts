export type R2Config = {
  accountId: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucketName: string;
};

export function getR2Config(): R2Config | null {
  const accountId = process.env.R2_ACCOUNT_ID?.trim();
  const accessKeyId = process.env.R2_ACCESS_KEY_ID?.trim();
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY?.trim();
  const bucketName = process.env.R2_BUCKET_NAME?.trim() ?? "anthichtuhoc-audio";
  if (!accountId || !accessKeyId || !secretAccessKey) return null;
  return { accountId, accessKeyId, secretAccessKey, bucketName };
}

export function isR2Configured(): boolean {
  return getR2Config() !== null;
}

export const R2_LISTENING_PREFIX = "listening-audio/";

export const R2_READING_PREFIX = "reading-audio/";

export const R2_MEDIA_PREFIX = "media-audio/";

export function r2ListeningKey(fileName: string): string {
  return `${R2_LISTENING_PREFIX}${fileName}`;
}

export function r2ReadingKey(objectKey: string): string {
  return `${R2_READING_PREFIX}${objectKey}`;
}

export function r2MediaKey(objectKey: string): string {
  return `${R2_MEDIA_PREFIX}${objectKey}`;
}
