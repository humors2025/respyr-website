// Replace the spotlight-device block with a true 3D cylinder of upright text.
const fs = require('fs');
const P = 'index.html';
let html = fs.readFileSync(P, 'utf8').replace(/\r\n/g, '\n');

const phrase = 'RESPYR · BREATH-POWERED · ';
let text = '';
while (text.length < 52) text += phrase;
text = text.slice(0, 52);
const chars = [...text];
const N = chars.length;
const R = 200; // cylinder radius (px)

let spans = '';
chars.forEach((c, i) => {
  const ang = (360 / N) * i;
  const glyph = c === ' ' ? '&nbsp;' : c;
  spans += `<span class="o3d-c" style="transform:translate(-50%,-50%) rotateY(${ang.toFixed(2)}deg) translateZ(${R}px)">${glyph}</span>`;
});

const oldBlock = `    <div class="spotlight-device">
      <div class="device-orbit device-orbit--back" aria-hidden="true">
        <svg viewBox="0 0 300 300"><defs><path id="respyrOrbitB" d="M150,150 m-122,0 a122,122 0 1,1 244,0 a122,122 0 1,1 -244,0"></path></defs><text><textPath href="#respyrOrbitB" startOffset="0">BREATH-POWERED · BREATH-POWERED · BREATH-POWERED ·</textPath></text></svg>
      </div>
      <img src="images/device-transparent.png" class="spotlight-device-img" alt="The Respyr breath-powered metabolic device" decoding="async">
      <div class="device-orbit device-orbit--front" aria-hidden="true">
        <svg viewBox="0 0 300 300"><defs><path id="respyrOrbitF" d="M150,150 m-122,0 a122,122 0 1,1 244,0 a122,122 0 1,1 -244,0"></path></defs><text><textPath href="#respyrOrbitF" startOffset="0">BREATH-POWERED · BREATH-POWERED · BREATH-POWERED ·</textPath></text></svg>
      </div>
    </div>`;

const newBlock = `    <div class="spotlight-device">
      <div class="orbit3d">
        <div class="orbit3d-ring" aria-hidden="true">${spans}</div>
        <img src="images/device-transparent.png" class="spotlight-device-img" alt="The Respyr breath-powered metabolic device" decoding="async">
      </div>
    </div>`;

if (!html.includes(oldBlock)) {
  console.error('OLD BLOCK NOT FOUND — aborting');
  process.exit(1);
}
html = html.replace(oldBlock, newBlock);
fs.writeFileSync(P, html);
console.log('Replaced spotlight-device with 3D cylinder; chars:', N, 'radius:', R);
