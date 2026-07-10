import '../globals.css';
import './styles.css';
// Dedicated Shop page — uses the lightweight secondary-page shell (logo + Back)
// like the About/Contact/Terms pages, plus the Shop + CartDrawer section
// components generated from index.html so styling + cart JS stay in sync.
import { html as shop } from '../../components/Shop';
import { html as cartDrawer } from '../../components/CartDrawer';
import ScriptLoader from '../../components/ScriptLoader';

export const metadata = {
  title: 'Shop · Reserve your Respyr',
  description: 'Reserve your Respyr today. Free US shipping. 30-day risk-free returns. No payment until your unit ships.',
};

const topbar = `<header class="topbar">
  <div class="topbar-inner">
    <a class="brand" href="/">
      <img src="/images/respyr logo.png" alt="Respyr" class="brand-logo" decoding="async">
    </a>
    <a class="back-link" href="/">
      <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
      Back
    </a>
  </div>
</header>`;

const foot = `<footer class="foot">
  <div class="foot-inner">
    <div>© Respyr 2026 · All rights reserved</div>
    <div>
      <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/refund">Refund</a> · <a href="mailto:support@respyr.com">support@respyr.com</a>
    </div>
  </div>
</footer>`;

const PAGE_HTML = [topbar, shop, foot, cartDrawer].join('\n');

export default function ShopPage() {
  return (
    <>
      <div style={{ display: 'contents' }} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
      <ScriptLoader srcs={['/scripts/site.js']} />
    </>
  );
}
