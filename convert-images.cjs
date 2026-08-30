const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = "./public/images";
const outputFolder = "./converted-webp";

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

const files = fs.readdirSync(inputFolder);

async function convertImages() {
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();

    if (![".png", ".jpg", ".jpeg"].includes(ext)) {
      continue;
    }

    const input = path.join(inputFolder, file);
    const outputName = path.basename(file, ext) + ".webp";
    const output = path.join(outputFolder, outputName);

    await sharp(input)
      .webp({ quality: 82 })
      .toFile(output);

    console.log(`Converted: ${file} → ${outputName}`);
  }

  console.log("✅ All images converted!");
}

convertImages().catch(console.error);