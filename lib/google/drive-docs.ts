import "server-only";

export type GoogleDriveConfig = {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  folderId: string;
};

export type CreatedGoogleDoc = {
  id: string;
  url: string;
  embedUrl: string;
};

export function getGoogleDriveConfig(): GoogleDriveConfig | null {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET?.trim();
  const refreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN?.trim();
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID?.trim();
  if (!clientId || !clientSecret || !refreshToken || !folderId) return null;
  return { clientId, clientSecret, refreshToken, folderId };
}

export function isGoogleDriveConfigured(): boolean {
  return getGoogleDriveConfig() !== null;
}

async function fetchGoogleAccessToken(config: GoogleDriveConfig): Promise<string> {
  const body = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    refresh_token: config.refreshToken,
    grant_type: "refresh_token",
  });
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  const payload = (await response.json()) as { access_token?: string; error?: string };
  if (!response.ok || !payload.access_token) {
    throw new Error(payload.error ?? "Không lấy được Google access token.");
  }
  return payload.access_token;
}

function googleDocUrls(docId: string): CreatedGoogleDoc {
  return {
    id: docId,
    url: `https://docs.google.com/document/d/${docId}/edit`,
    embedUrl: `https://docs.google.com/document/d/${docId}/edit?embedded=true`,
  };
}

export async function createStudentWritingDoc(input: {
  title: string;
  studentEmail: string;
  studentName?: string | null;
}): Promise<CreatedGoogleDoc> {
  const config = getGoogleDriveConfig();
  if (!config) {
    throw new Error("Google Drive chưa được cấu hình trên server.");
  }

  const accessToken = await fetchGoogleAccessToken(config);
  const docTitle = [input.title.trim(), input.studentName?.trim() || input.studentEmail.trim()]
    .filter(Boolean)
    .join(" — ");

  const createResponse = await fetch("https://www.googleapis.com/drive/v3/files?supportsAllDrives=true", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: docTitle,
      mimeType: "application/vnd.google-apps.document",
      parents: [config.folderId],
    }),
  });

  const created = (await createResponse.json()) as { id?: string; error?: { message?: string } };
  if (!createResponse.ok || !created.id) {
    throw new Error(created.error?.message ?? "Không tạo được Google Doc.");
  }

  const permissionResponse = await fetch(
    `https://www.googleapis.com/drive/v3/files/${created.id}/permissions?sendNotificationEmail=false`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "user",
        role: "writer",
        emailAddress: input.studentEmail.trim().toLowerCase(),
      }),
    },
  );

  if (!permissionResponse.ok) {
    const permissionError = (await permissionResponse.json()) as { error?: { message?: string } };
    throw new Error(permissionError.error?.message ?? "Không cấp quyền Google Doc cho học viên.");
  }

  return googleDocUrls(created.id);
}
