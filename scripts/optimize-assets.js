const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const photosDir = path.resolve(__dirname, "../public/assets/hoja/photos");

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const inputBuffer = fs.readFileSync(filePath);
  const originalSize = inputBuffer.length;

  try {
    let pipeline = sharp(inputBuffer);
    const meta = await pipeline.metadata();

    // Redimensionner les images au-delà de 1800px de large
    if (meta.width && meta.width > 1800) {
      pipeline = pipeline.resize({ width: 1800, withoutEnlargement: true });
    }

    let buffer;
    if (ext === ".jpg" || ext === ".jpeg") {
      buffer = await pipeline
        .jpeg({ quality: 82, progressive: true, mozjpeg: true })
        .toBuffer();
    } else if (ext === ".png") {
      buffer = await pipeline
        .png({ compressionLevel: 9, quality: 85 })
        .toBuffer();
    } else {
      return;
    }

    if (buffer.length < originalSize) {
      fs.writeFileSync(filePath, buffer);
      const saved = ((1 - buffer.length / originalSize) * 100).toFixed(1);
      console.log(`✓ ${path.basename(filePath)}: ${(originalSize / 1024).toFixed(0)}KB -> ${(buffer.length / 1024).toFixed(0)}KB (-${saved}%)`);
    } else {
      console.log(`- ${path.basename(filePath)}: already optimal`);
    }
  } catch (err) {
    console.error(`✕ ${path.basename(filePath)}: error:`, err.message);
  }
}

async function main() {
  const files = fs.readdirSync(photosDir);
  console.log(`Optimizing ${files.length} images in ${photosDir}...`);
  for (const file of files) {
    const fullPath = path.join(photosDir, file);
    if (fs.statSync(fullPath).isFile()) {
      await optimizeFile(fullPath);
    }
  }
  console.log("Optimization complete!");
}

main();
