// Inline local images + video into a single self-contained HTML for sharing.
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC  = path.join(ROOT, 'respyr-final.html');
const OUT  = path.join(ROOT, 'respyr-final-shareable.html');

const MIMES = {
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.mp4':  'video/mp4',
  '.webm': 'video/webm',
};

let html = fs.readFileSync(SRC, 'utf8');
const seen = new Map();
const stats = [];

// Match src="images/anything" or src='images/anything' (no leading slash, no http)
html = html.replace(/src=(["'])(images\/[^"']+)\1/g, (full, q, relPath) => {
  if (seen.has(relPath)) return `src=${q}${seen.get(relPath)}${q}`;
  const filePath = path.join(ROOT, relPath);
  if (!fs.existsSync(filePath)) {
    console.warn('  ! missing, leaving as-is:', relPath);
    return full;
  }
  const ext = path.extname(filePath).toLowerCase();
  const mime = MIMES[ext] || 'application/octet-stream';
  const bytes = fs.readFileSync(filePath);
  const b64 = bytes.toString('base64');
  const dataUri = `data:${mime};base64,${b64}`;
  seen.set(relPath, dataUri);
  stats.push({ file: relPath, sourceBytes: bytes.length, base64Bytes: b64.length });
  return `src=${q}${dataUri}${q}`;
});

fs.writeFileSync(OUT, html);

const srcSize = fs.statSync(SRC).size;
const outSize = fs.statSync(OUT).size;
console.log('Inlined assets:');
stats.forEach(s => console.log(`  - ${s.file.padEnd(28)}  ${(s.sourceBytes/1024).toFixed(0).padStart(7)} KB  →  base64 ${(s.base64Bytes/1024).toFixed(0)} KB`));
console.log('---');
console.log(`Source HTML : ${(srcSize/1024/1024).toFixed(2)} MB`);
console.log(`Bundled HTML: ${(outSize/1024/1024).toFixed(2)} MB`);
console.log(`Output: ${OUT}`);
