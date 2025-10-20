import sharp from "sharp";
import fs from "fs";
import path from "path";

async function convertOGImage() {
  try {
    const inputPath = path.join(process.cwd(), "public", "og-new.svg");
    const outputPath = path.join(process.cwd(), "public", "og.webp");

    // Read the SVG file
    const svgBuffer = fs.readFileSync(inputPath);

    // Convert SVG to WebP with optimal settings for social media
    await sharp(svgBuffer)
      .resize(1200, 630) // Ensure exact dimensions for OG
      .webp({
        quality: 90,
        effort: 6,
        lossless: false,
      })
      .toFile(outputPath);

    console.log("✅ OG image converted successfully!");
    console.log(`📁 Output: ${outputPath}`);

    // Also create a backup of the original
    const backupPath = path.join(process.cwd(), "public", "og-backup.webp");
    if (fs.existsSync(path.join(process.cwd(), "public", "og.webp"))) {
      fs.copyFileSync(
        path.join(process.cwd(), "public", "og.webp"),
        backupPath,
      );
      console.log(`💾 Backup created: ${backupPath}`);
    }
  } catch (error) {
    console.error("❌ Error converting OG image:", error);
    process.exit(1);
  }
}

convertOGImage();
