import { S3Client } from "@aws-sdk/client-s3";
import { getR2Config } from "@/lib/r2/config";

let cachedClient: S3Client | null = null;

export function createR2Client(): S3Client | null {
  const config = getR2Config();
  if (!config) return null;

  if (cachedClient) return cachedClient;

  cachedClient = new S3Client({
    region: "auto",
    endpoint: `https://${config.accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    },
  });

  return cachedClient;
}
