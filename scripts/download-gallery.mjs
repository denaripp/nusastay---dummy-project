import fs from "fs";
import path from "path";
import https from "https";

const photos = [
  { id: "gallery-1", url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80&fm=webp" },
  { id: "gallery-2", url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80&fm=webp" },
  { id: "gallery-3", url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80&fm=webp" },
  { id: "gallery-4", url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80&fm=webp" },
  { id: "gallery-5", url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80&fm=webp" },
  { id: "gallery-6", url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80&fm=webp" },
  { id: "gallery-7", url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80&fm=webp" },
  { id: "gallery-8", url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80&fm=webp" },
  { id: "gallery-9", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80&fm=webp" },
  { id: "gallery-10", url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80&fm=webp" },
  { id: "gallery-11", url: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80&fm=webp" },
  { id: "gallery-12", url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80&fm=webp" },
];

const targetDir = path.resolve(process.cwd(), "public/images/gallery");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status code ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on("finish", () => {
        fileStream.close();
        resolve();
      });
      fileStream.on("error", reject);
    }).on("error", reject);
  });
}

async function main() {
  for (const item of photos) {
    const dest = path.join(targetDir, `${item.id}.webp`);
    console.log(`Downloading ${item.id}.webp...`);
    await downloadFile(item.url, dest);
  }
  console.log("All 12 gallery images downloaded successfully!");
}

main().catch((err) => {
  console.error("Error downloading:", err);
  process.exit(1);
});
