import fs from "node:fs/promises";
import path from "node:path";

async function getAllMdxFiles(dirPath, arrayOfFiles) {
  const files = await fs.readdir(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = await fs.stat(filePath);
    if (stat.isDirectory()) {
      await getAllMdxFiles(filePath, arrayOfFiles);
    } else if (path.extname(file) === ".mdx") {
      arrayOfFiles.push(filePath);
    }
  }

  return arrayOfFiles;
}

async function renamePubDate() {
  const topicsDir = path.join(process.cwd(), "src/content/topics");
  const allMdxFiles = await getAllMdxFiles(topicsDir);

  for (const file of allMdxFiles) {
    try {
      let content = await fs.readFile(file, "utf-8");
      if (content.includes("pubDate:")) {
        content = content.replace(/pubDate:/g, "publishDate:");
        await fs.writeFile(file, content, "utf-8");
        console.log(`Updated ${file}`);
      }
    } catch (error) {
      console.error(`Error processing file ${file}:`, error);
    }
  }
}

renamePubDate();
