// Regenerate the orbit3d-ring spans at a new radius so the ring stays
// proportional to a smaller device image (keeps the whole hero in one screen).
const fs = require('fs');
const P = 'index.html';
let html = fs.readFileSync(P, 'utf8').replace(/\r\n/g, '\n');

const phrase = 'RESPYR · BREATH-POWERED · ';
let text = '';
while (text.length < 52) text += phrase;
text = text.slice(0, 52);
const chars = [...text];
const N = chars.length;
const R = 200; // cylinder radius (original)

let spans = '';
chars.forEach((c, i) => {
  const ang = (360 / N) * i;
  const glyph = c === ' ' ? '&nbsp;' : c;
  spans += `<span class="o3d-c" style="transform:translate(-50%,-50%) rotateY(${ang.toFixed(2)}deg) translateZ(${R}px)">${glyph}</span>`;
});

// Replace the inner spans of the existing orbit3d-ring div.
const re = /(<div class="orbit3d-ring" aria-hidden="true">)[\s\S]*?(<\/div>)/;
if (!re.test(html)) { console.error('orbit3d-ring not found — aborting'); process.exit(1); }
html = html.replace(re, `$1${spans}$2`);
fs.writeFileSync(P, html);
console.log('Ring regenerated at radius', R, 'chars', N);
