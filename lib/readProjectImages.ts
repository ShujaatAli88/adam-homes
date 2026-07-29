import fs from "fs";
import path from "path";

export type ProjectImage = { src: string; alt: string };

/**
 * Reads every image file out of /public/<publicRelativeDir> at build time,
 * sorted by filename. Drop any .jpg/.jpeg/.png/.webp files into that folder
 * and they show up automatically - no code changes or manifest entries
 * needed. Server-only (uses `fs`) - only import this from a Server
 * Component, never a "use client" file.
 */
export function readProjectImages(publicRelativeDir: string): ProjectImage[] {
  const dir = path.join(process.cwd(), "public", publicRelativeDir);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => ({
      src: `/${publicRelativeDir}/${file}`.replace(/\\/g, "/"),
      alt: "",
    }));
}
