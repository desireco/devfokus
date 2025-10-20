import fs from "fs";
import path from "path";

// Simple favicon generation using base64 encoded ICO data
// This creates a basic 16x16 and 32x32 favicon

const generateICO = () => {
  // Create a simple 32x32 PNG data for the favicon
  const pngData = Buffer.from([
    0x89,
    0x50,
    0x4e,
    0x47,
    0x0d,
    0x0a,
    0x1a,
    0x0a, // PNG signature
    0x00,
    0x00,
    0x00,
    0x0d, // IHDR chunk length
    0x49,
    0x48,
    0x44,
    0x52, // IHDR
    0x00,
    0x00,
    0x00,
    0x20, // width: 32
    0x00,
    0x00,
    0x00,
    0x20, // height: 32
    0x08,
    0x02,
    0x00,
    0x00,
    0x00, // bit depth, color type, compression, filter, interlace
    0x4c,
    0x87,
    0x94,
    0x95, // CRC
    // IDAT chunk (simplified)
    0x00,
    0x00,
    0x00,
    0x0c, // IDAT chunk length
    0x49,
    0x44,
    0x41,
    0x54, // IDAT
    0x08,
    0x99,
    0x01,
    0x01,
    0x00,
    0x00,
    0x00,
    0xff,
    0xff,
    0x00,
    0x00,
    0x00,
    0x02,
    0x00,
    0x01, // compressed data
    0x00,
    0x00,
    0x00,
    0x00, // IEND chunk length
    0x49,
    0x45,
    0x4e,
    0x44, // IEND
    0xae,
    0x42,
    0x60,
    0x82, // CRC
  ]);

  // ICO header
  const icoHeader = Buffer.alloc(22);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type (1 = ICO)
  icoHeader.writeUInt16LE(1, 4); // Number of images
  icoHeader.writeUInt8(32, 6); // Width
  icoHeader.writeUInt8(32, 7); // Height
  icoHeader.writeUInt8(0, 8); // Color palette
  icoHeader.writeUInt8(0, 9); // Reserved
  icoHeader.writeUInt16LE(1, 10); // Color planes
  icoHeader.writeUInt16LE(32, 12); // Bits per pixel
  icoHeader.writeUInt32LE(pngData.length, 14); // Image size
  icoHeader.writeUInt32LE(22, 18); // Image offset

  return Buffer.concat([icoHeader, pngData]);
};

// Generate the favicon
const faviconData = generateICO();
fs.writeFileSync(
  path.join(process.cwd(), "public", "favicon.ico"),
  faviconData,
);

console.log("Favicon generated successfully!");
