// Convert the standalone secondary HTML pages into Next.js App Router routes.
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'respyr-next');

const PAGES = [
  { src: 'respyr-about.html', route: 'about', name: 'about' },
  { src: 'respyr-contact.html', route: 'contact', name: 'contact' },
  { src: 'respyr-read-more.html', route: 'read-more', name: 'read-more' },
];

function fixAssets(s) {
  return s.replace(/url\((['"]?)images\//g, 'url($1/images/'),
    s.replace(/="images\//g, '="/images/').replace(/='images\//g, "='/images/");
}
function fixPaths(s) {
  return s.replace(/="images\//g, '="/images/').replace(/='images\//g, "='/images/");
}
function fixLinks(s) {
  return s
    .replace(/href="respyr-final\.html#/g, 'href="/#')
    .replace(/href="respyr-final\.html"/g, 'href="/"')
    .replace(/href="respyr-about\.html"/g, 'href="/about"')
    .replace(/href="respyr-contact\.html"/g, 'href="/contact"')
    .replace(/href="respyr-read-more\.html"/g, 'href="/read-more"');
}

for (const p of PAGES) {
  const raw = fs.readFileSync(path.join(ROOT, p.src), 'utf8').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // --- CSS ---
  let css = (raw.match(/<style>([\s\S]*?)<\/style>/) || [, ''])[1];
  css = css.replace(/url\((['"]?)images\//g, 'url($1/images/');

  // --- JS (inline <script> block) ---
  let js = (raw.match(/<script>([\s\S]*?)<\/script>/) || [, ''])[1];
  js = fixLinks(fixPaths(js));

  // --- body (minus inline scripts) ---
  let body = (raw.match(/<body[^>]*>([\s\S]*?)<\/body>/) || [, ''])[1];
  body = body.replace(/<script>[\s\S]*?<\/script>/g, '').trim();
  body = fixLinks(fixPaths(body));

  // --- title / description ---
  const title = (raw.match(/<title>([^<]*)<\/title>/) || [, 'Respyr'])[1].trim();
  const desc = (raw.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1].trim();

  const routeDir = path.join(OUT, 'app', p.route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'styles.css'), css.trim() + '\n');
  fs.writeFileSync(path.join(OUT, 'public', 'scripts', `${p.name}.js`), js.trim() + '\n');

  const pageJsx =
`import './styles.css';
import ScriptLoader from '../../components/ScriptLoader';

export const metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(desc)},
};

const html = ${JSON.stringify(body)};

export default function Page() {
  return (
    <>
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />
      <ScriptLoader srcs={['/scripts/${p.name}.js']} />
    </>
  );
}
`;
  fs.writeFileSync(path.join(routeDir, 'page.jsx'), pageJsx);
  console.log(`/${p.route}  ->  body ${body.length}b, css ${css.length}b, js ${js.length}b  (title: ${title})`);
}
