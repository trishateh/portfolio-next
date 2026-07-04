// Generates raster brand assets (PWA icons, apple-touch-icon, favicon.ico)
// from public/favicon.svg. Run: node scripts/generate-icons.mjs
import { readFile, writeFile, mkdir, stat, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BG = "#060609";
const source = join(root, "public", "favicon.svg");

// Render the mark centered on a solid background, occupying ~60% of the
// canvas so it sits inside the maskable safe zone.
async function renderMaskable(size, out) {
  const markSize = Math.round(size * 0.6);
  const mark = await sharp(await readFile(source))
    .resize(markSize, markSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  await sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toFile(out);
  return out;
}

// Render the mark on a transparent background (used for the .ico frames).
async function renderTransparent(size, out) {
  await sharp(await readFile(source))
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(out);
  return out;
}

async function logFile(path) {
  const { size } = await stat(path);
  console.log(`  ${path.replace(root + "/", "")}  (${size} bytes)`);
}

async function main() {
  const iconsDir = join(root, "public", "icons");
  await mkdir(iconsDir, { recursive: true });

  const written = [];
  written.push(await renderMaskable(192, join(iconsDir, "icon-192.png")));
  written.push(await renderMaskable(512, join(iconsDir, "icon-512.png")));
  written.push(await renderMaskable(180, join(root, "public", "apple-touch-icon.png")));

  // Build favicon.ico from 16px + 32px frames.
  const scratch16 = join(iconsDir, ".favicon-16.png");
  const scratch32 = join(iconsDir, ".favicon-32.png");
  await renderTransparent(16, scratch16);
  await renderTransparent(32, scratch32);
  const icoPath = join(root, "src", "app", "favicon.ico");
  await writeFile(icoPath, await pngToIco([scratch16, scratch32]));
  await rm(scratch16, { force: true });
  await rm(scratch32, { force: true });
  written.push(icoPath);

  console.log("Wrote brand assets:");
  for (const path of written) await logFile(path);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
