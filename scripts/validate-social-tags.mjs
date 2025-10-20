// Simple validation script for social media tags
console.log("🔍 Validating social media setup for devFokus...\n");

// Check if OG image exists and has correct dimensions
import fs from "fs";
import path from "path";
import sharp from "sharp";

async function validateOGImage() {
  const imagePath = path.join(process.cwd(), "public", "og.webp");

  if (!fs.existsSync(imagePath)) {
    console.log("❌ OG image not found");
    return false;
  }

  try {
    const metadata = await sharp(imagePath).metadata();
    console.log("✅ OG image found");
    console.log(`📏 Dimensions: ${metadata.width}x${metadata.height}`);
    console.log(`📄 Format: ${metadata.format}`);

    if (metadata.width === 1200 && metadata.height === 630) {
      console.log("✅ OG image has optimal dimensions for social media");
    } else {
      console.log(
        "⚠️  OG image dimensions are not optimal (should be 1200x630)",
      );
    }

    return true;
  } catch (error) {
    console.log("❌ Error reading OG image metadata:", error.message);
    return false;
  }
}

async function validateFavicon() {
  const faviconPath = path.join(process.cwd(), "public", "favicon.ico");
  const faviconSvgPath = path.join(process.cwd(), "public", "favicon.svg");

  const icoExists = fs.existsSync(faviconPath);
  const svgExists = fs.existsSync(faviconSvgPath);

  console.log("\n🔍 Validating favicon...");

  if (icoExists) {
    console.log("✅ favicon.ico found");
  } else {
    console.log("❌ favicon.ico not found");
  }

  if (svgExists) {
    console.log("✅ favicon.svg found");
  } else {
    console.log("❌ favicon.svg not found");
  }

  return icoExists && svgExists;
}

async function main() {
  console.log("📱 Social Media Validation for devFokus\n");

  const ogValid = await validateOGImage();
  const faviconValid = await validateFavicon();

  console.log("\n📋 Summary:");
  console.log(`OG Image: ${ogValid ? "✅" : "❌"}`);
  console.log(`Favicon: ${faviconValid ? "✅" : "❌"}`);

  if (ogValid && faviconValid) {
    console.log("\n🎉 Social media setup is ready!");
    console.log("\n📝 Next steps:");
    console.log(
      "1. Test sharing on LinkedIn: https://www.linkedin.com/post-inspector/",
    );
    console.log(
      "2. Test sharing on X/Twitter: https://cards-dev.twitter.com/validator",
    );
    console.log(
      "3. Test sharing on Facebook: https://developers.facebook.com/tools/debug/",
    );
  } else {
    console.log("\n⚠️  Some issues found. Please fix them before testing.");
  }
}

main().catch(console.error);
