// news-image-20261124 — "Sum up 24 November's world news in one image".
// The program copies the entry image (entry.png, a JPEG file by its first
// bytes) that this repository ships into the output directory as entry.png.
// It uses only the Node standard library, touches no network, and writes
// the same bytes on every run.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const source = join(scriptDir, "entry.png");
// The grader sets MAKEFUN_OUTPUT_DIR; without it, /output is the default.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

if (!existsSync(source)) {
  console.error(`entry image not found: ${source}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "entry.png"));
