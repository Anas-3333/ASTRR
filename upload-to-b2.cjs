const fs = require("fs");
const path = require("path");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

// =====================================================
// B2 CONFIGURATION
// =====================================================

const REGION = "eu-central-003";
const ENDPOINT = "https://s3.eu-central-003.backblazeb2.com";

const ACCESS_KEY_ID = process.env.B2_APPLICATION_KEY_ID;
const SECRET_ACCESS_KEY = process.env.B2_APPLICATION_KEY;
const BUCKET_NAME = process.env.B2_BUCKET_NAME;

// =====================================================
// CHECK ENVIRONMENT VARIABLES
// =====================================================

if (!ACCESS_KEY_ID) {
  console.error("ERROR: B2_APPLICATION_KEY_ID is missing.");
  process.exit(1);
}

if (!SECRET_ACCESS_KEY) {
  console.error("ERROR: B2_APPLICATION_KEY is missing.");
  process.exit(1);
}

if (!BUCKET_NAME) {
  console.error("ERROR: B2_BUCKET_NAME is missing.");
  process.exit(1);
}

// =====================================================
// B2 CLIENT
// =====================================================

const s3 = new S3Client({
  region: REGION,
  endpoint: ENDPOINT,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

// =====================================================
// MIME TYPE
// =====================================================

function getContentType(filePath) {
  const extension = path.extname(filePath).toLowerCase();

  switch (extension) {
    case ".webp":
      return "image/webp";

    case ".avif":
      return "image/avif";

    case ".png":
      return "image/png";

    case ".jpg":
    case ".jpeg":
      return "image/jpeg";

    case ".mp4":
      return "video/mp4";

    default:
      return "application/octet-stream";
  }
}

// =====================================================
// UPLOAD FUNCTION
// =====================================================

async function uploadFile(localFile, b2FileName) {
  if (!fs.existsSync(localFile)) {
    throw new Error(`Local file not found: ${localFile}`);
  }

  const fileBuffer = fs.readFileSync(localFile);
  const contentType = getContentType(localFile);

  console.log("");
  console.log("Uploading:");
  console.log(`  Local file : ${localFile}`);
  console.log(`  B2 file    : ${b2FileName}`);
  console.log(`  Type       : ${contentType}`);
  console.log(`  Size       : ${(fileBuffer.length / 1024 / 1024).toFixed(2)} MB`);

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: b2FileName,
    Body: fileBuffer,

    // IMPORTANT:
    // Explicitly tell B2 the correct MIME type.
    ContentType: contentType,

    // Cache images efficiently.
    CacheControl: "public, max-age=31536000, immutable",
  });

  await s3.send(command);

  console.log("");
  console.log("SUCCESS!");
  console.log(`B2 file: ${b2FileName}`);
  console.log(`Content-Type: ${contentType}`);
}

// =====================================================
// COMMAND LINE
// =====================================================
//
// Usage:
//
// node upload-to-b2.cjs "C:\\path\\to\\MIL1.webp"
//
// Or:
//
// node upload-to-b2.cjs "C:\\path\\to\\MIL1.webp" "MIL1.webp"
//

async function main() {
  const localFile = process.argv[2];
  const b2FileName = process.argv[3];

  if (!localFile) {
    console.log("");
    console.log("B2 WebP Uploader");
    console.log("================");
    console.log("");
    console.log("Usage:");
    console.log('node upload-to-b2.cjs "LOCAL_FILE" ["B2_FILE_NAME"]');
    console.log("");
    console.log("Example:");
    console.log('node upload-to-b2.cjs "C:\\images\\MIL1.webp"');
    console.log("");
    console.log('Example with B2 filename:');
    console.log(
      'node upload-to-b2.cjs "C:\\images\\MIL1.webp" "MIL1.webp"'
    );
    console.log("");

    process.exit(1);
  }

  const finalB2Name = b2FileName || path.basename(localFile);

  try {
    await uploadFile(localFile, finalB2Name);
  } catch (error) {
    console.error("");
    console.error("UPLOAD FAILED");
    console.error("================");

    console.error(error);

    process.exit(1);
  }
}

main();