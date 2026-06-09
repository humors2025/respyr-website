// One-off converter: static index.html -> component-wise Next.js (JSX) app in respyr-next/
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'index.html');
const OUT = path.join(ROOT, 'respyr-next');

// Normalize CRLF -> LF up front: literal \r in dangerouslySetInnerHTML strings
// causes React hydration mismatches (Turbopack normalizes server/client differently).
const html = fs.readFileSync(SRC, 'utf8').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
const lines = html.split('\n'); // line N = lines[N-1]

function mkdirp(p) { fs.mkdirSync(p, { recursive: true }); }
mkdirp(path.join(OUT, 'app'));
mkdirp(path.join(OUT, 'components'));
mkdirp(path.join(OUT, 'public', 'images'));
mkdirp(path.join(OUT, 'public', 'scripts'));

// ---- 1. Extract CSS (the single <style> block) ----
let css = html.match(/<style>([\s\S]*?)<\/style>/)[1];
css = css.replace(/url\((['"]?)images\//g, 'url($1/images/'); // fix asset paths in CSS
fs.writeFileSync(path.join(OUT, 'app', 'globals.css'), css.trim() + '\n');

// ---- 2. Extract inline JS (the single attribute-less <script> block) ----
let siteJs = html.match(/<script>([\s\S]*?)<\/script>/)[1];
siteJs = siteJs.replace(/(["'`])images\//g, '$1/images/'); // fix asset paths in JS
fs.writeFileSync(path.join(OUT, 'public', 'scripts', 'site.js'), siteJs.trim() + '\n');

// ---- 3. Section map (verified start lines, 1-indexed) ----
const SECTIONS = [
  ['Grain', 1081],
  ['AnnouncementBar', 1083],
  ['Navbar', 1087],
  ['Hero', 1122],
  ['Ticker', 1173],
  ['Why', 1190],
  ['Science', 1268],
  ['Layers', 1327],
  ['LifestyleBanner', 1378],
  ['ProductVideo', 1399],
  ['Steps', 1438],
  ['Testimonials', 1504],
  ['Showcase', 1587],
  ['Press', 1636],
  ['Shop', 1651],
  ['Faq', 1764],
  ['FinalCta', 1784],
  ['Footer', 1799],
  ['CartDrawer', 1829],
];
const BODY_END = 1852; // last body line before the <script> at 1853

let imgCounter = 0;
function externalizeAndFixPaths(chunk) {
  // externalize inline base64 image data URIs to real files
  chunk = chunk.replace(/data:image\/([a-zA-Z0-9]+);base64,([^"')\s]+)/g, (m, ext, b64) => {
    imgCounter++;
    const e = (ext.toLowerCase() === 'jpeg') ? 'jpg' : ext.toLowerCase();
    const file = `embedded-${String(imgCounter).padStart(2, '0')}.${e}`;
    fs.writeFileSync(path.join(OUT, 'public', 'images', file), Buffer.from(b64, 'base64'));
    return `/images/${file}`;
  });
  // fix relative asset paths -> absolute public paths
  chunk = chunk.replace(/="images\//g, '="/images/').replace(/='images\//g, "='/images/");
  // rewrite cross-page links from the old .html files to Next.js routes
  chunk = chunk
    .replace(/href="respyr-final\.html#/g, 'href="/#')
    .replace(/href="respyr-final\.html"/g, 'href="/"')
    .replace(/href="respyr-about\.html"/g, 'href="/about"')
    .replace(/href="respyr-contact\.html"/g, 'href="/contact"')
    .replace(/href="respyr-read-more\.html"/g, 'href="/read-more"');
  return chunk;
}

const summary = [];
for (let i = 0; i < SECTIONS.length; i++) {
  const [name, start] = SECTIONS[i];
  const end = (i + 1 < SECTIONS.length) ? SECTIONS[i + 1][1] - 1 : BODY_END;
  let chunk = lines.slice(start - 1, end).join('\n').trim();
  chunk = externalizeAndFixPaths(chunk);
  const jsx =
`// ${name} — this section's markup (raw HTML, owned by this component).
export const html = ${JSON.stringify(chunk)};

export default function ${name}() {
  return <div style={{ display: 'contents' }} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
`;
  fs.writeFileSync(path.join(OUT, 'components', `${name}.jsx`), jsx);
  summary.push(`${name} (lines ${start}-${end}, ${chunk.length} chars)`);
}

console.log('Components written:');
summary.forEach(s => console.log('  - ' + s));
console.log(`Images externalized: ${imgCounter}`);
console.log(`CSS bytes: ${css.length}, JS bytes: ${siteJs.length}`);
