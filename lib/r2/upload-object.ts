import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getR2Config } from "@/lib/r2/config";
import { createR2Client } from "@/lib/r2/client";

export function requireR2Client(): { client: S3Client; bucketName: string } {
  const config = getR2Config();
  const client = createR2Client();
  if (!config || !client) {
    throw new Error("Thiếu R2_ACCOUNT_ID / R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY trong .env.local");
  }
  return { client, bucketName: config.bucketName };
}

export async function uploadR2Object(
  objectKey: string,
  bytes: Buffer,
  contentType: string,
): Promise<void> {
  const { client, bucketName } = requireR2Client();
  await client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: objectKey,
      Body: bytes,
      ContentType: contentType,
    }),
  );
}
