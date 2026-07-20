// Optimize portfolio raster images: resize to max width 1600px and convert to
// WebP (quality 80). Idempotent: skips a source whose .webp already exists and
// is newer than the source. Run: `node scripts/optimize-images.mjs`.
import { readdir, stat, utimes } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicImages = path.join(__dirname, "..", "public", "images");

const MAX_WIDTH = 1600;
const WEBP_QUALITY = 80;
const RASTER_EXT = new Set([".png", ".jpg", ".jpeg"]);

// Directories to scan recursively-free (flat) plus explicit single files.
const scanDirs = [
  path.join(publicImages, "projects"),
  path.join(publicImages, "arcaden"),
];
const explicitFiles = [path.join(publicImages, "about.png")];

async function collectTargets() {
  const targets = [];
  for (const dir of scanDirs) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isFile()) continue;
      if (RASTER_EXT.has(path.extname(entry.name).toLowerCase())) {
        targets.push(path.join(dir, entry.name));
      }
    }
  }
  targets.push(...explicitFiles);
  return targets;
}

function webpPathFor(src) {
  return src.slice(0, src.length - path.extname(src).length) + ".webp";
}

function formatBytes(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + " MB";
}

async function isUpToDate(src, dest) {
  try {
    const [srcStat, destStat] = await Promise.all([stat(src), stat(dest)]);
    return destStat.mtimeMs >= srcStat.mtimeMs;
  } catch {
    return false; // dest missing
  }
}

async function main() {
  const targets = await collectTargets();
  const rows = [];
  let totalOriginal = 0;
  let totalWebp = 0;

  for (const src of targets) {
    const dest = webpPathFor(src);
    const rel = path.relative(publicImages, src);
    const srcStat = await stat(src);

    if (await isUpToDate(src, dest)) {
      const destStat = await stat(dest);
      rows.push([rel, formatBytes(srcStat.size), formatBytes(destStat.size), "skip"]);
      totalOriginal += srcStat.size;
      totalWebp += destStat.size;
      continue;
    }

    await sharp(src)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(dest);
    // Ensure the freshly written webp is newer than the source for idempotency.
    await utimes(dest, new Date(), new Date());

    const destStat = await stat(dest);
    rows.push([rel, formatBytes(srcStat.size), formatBytes(destStat.size), "done"]);
    totalOriginal += srcStat.size;
    totalWebp += destStat.size;
  }

  const header = ["File", "Original", "WebP", "Status"];
  const widths = header.map((h, i) =>
    Math.max(h.length, ...rows.map((r) => r[i].length))
  );
  const pad = (cells) =>
    cells.map((c, i) => c.padEnd(widths[i])).join("  ");

  console.log(pad(header));
  console.log(widths.map((w) => "-".repeat(w)).join("  "));
  for (const row of rows) console.log(pad(row));

  console.log(widths.map((w) => "-".repeat(w)).join("  "));
  console.log(
    pad([
      `TOTAL (${rows.length} files)`,
      formatBytes(totalOriginal),
      formatBytes(totalWebp),
      "",
    ])
  );
  console.log(
    `Saved ${formatBytes(totalOriginal - totalWebp)} (${(
      (1 - totalWebp / totalOriginal) *
      100
    ).toFixed(1)}% smaller)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
