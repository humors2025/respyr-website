import './globals.css';
// The page markup is static HTML owned per-section by the component files in
// ../components. We assemble it into a SINGLE dangerouslySetInnerHTML container
// rather than 19 sibling React nodes — that avoids React hydration mismatches
// (which would otherwise regenerate the DOM and break the GSAP scroll effects).
import { html as grain } from '../components/Grain';
import { html as announcementBar } from '../components/AnnouncementBar';
import { html as navbar } from '../components/Navbar';
import { html as hero } from '../components/Hero';
import { html as ticker } from '../components/Ticker';
import { html as why } from '../components/Why';
import { html as science } from '../components/Science';
import { html as layers } from '../components/Layers';
import { html as lifestyleBanner } from '../components/LifestyleBanner';
import { html as productVideo } from '../components/ProductVideo';
import { html as steps } from '../components/Steps';
import { html as testimonials } from '../components/Testimonials';
import { html as showcase } from '../components/Showcase';
import { html as press } from '../components/Press';
import { html as shop } from '../components/Shop';
import { html as faq } from '../components/Faq';
import { html as finalCta } from '../components/FinalCta';
import { html as footer } from '../components/Footer';
import { html as cartDrawer } from '../components/CartDrawer';
import SiteScripts from '../components/SiteScripts';

const PAGE_HTML = [
  grain,
  announcementBar,
  navbar,
  hero,
  ticker,
  why,
  science,
  layers,
  lifestyleBanner,
  productVideo,
  steps,
  testimonials,
  showcase,
  press,
  shop,
  faq,
  finalCta,
  footer,
  cartDrawer,
].join('\n');

export default function Home() {
  return (
    <>
      <div style={{ display: 'contents' }} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
      <SiteScripts />
    </>
  );
}
