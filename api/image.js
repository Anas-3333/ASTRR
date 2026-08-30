import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: "eu-central-003",
  endpoint: "https://s3.eu-central-003.backblazeb2.com",

  credentials: {
    accessKeyId: process.env.B2_APPLICATION_KEY_ID,
    secretAccessKey: process.env.B2_APPLICATION_KEY,
  },
});

export default async function handler(req, res) {
  try {
    const { file } = req.query;

    /* =========================================================
       VALIDATE FILE PARAMETER
    ========================================================= */

    if (!file || typeof file !== "string") {
      return res.status(400).json({
        error: "Missing file parameter",
      });
    }

    /* =========================================================
       SECURITY
       Only allow simple filenames.
       No ../ paths or folders.
    ========================================================= */

    const safeFilenameRegex =
      /^[a-zA-Z0-9._-]+$/;

    if (!safeFilenameRegex.test(file)) {
      return res.status(400).json({
        error: "Invalid file name",
      });
    }

    /* =========================================================
       ALLOWED IMAGE FORMATS
    ========================================================= */

    const allowedExtensions = [
      ".webp",
      ".avif",
      ".png",
      ".jpg",
      ".jpeg",
    ];

    const lowerFile = file.toLowerCase();

    const isAllowed = allowedExtensions.some(
      (extension) => lowerFile.endsWith(extension)
    );

    if (!isAllowed) {
      return res.status(400).json({
        error: "Invalid image type",
      });
    }

    /* =========================================================
       B2 FILE
    ========================================================= */

    const command = new GetObjectCommand({
      Bucket: process.env.B2_BUCKET_NAME,
      Key: file,
    });

    /* =========================================================
       CREATE TEMPORARY SIGNED URL
    ========================================================= */

    const signedUrl = await getSignedUrl(
      s3,
      command,
      {
        expiresIn: 3600,
      }
    );

    /* =========================================================
       CACHE REDIRECT
    ========================================================= */

    res.setHeader(
      "Cache-Control",
      "public, max-age=3600"
    );

    return res.redirect(302, signedUrl);

  } catch (error) {
    console.error("B2 image error:", error);

    return res.status(500).json({
      error: "Unable to load image",
    });
  }
}