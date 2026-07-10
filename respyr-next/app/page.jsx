import './globals.css';
// The page markup is static HTML owned per-section by the component files in
// ../components. We assemble it into a SINGLE dangerouslySetInnerHTML container
// rather than 19 sibling React nodes — that avoids React hydration mismatches
// (which would otherwise regenerate the DOM and break the GSAP scroll effects).
import { html as grain } from '../components/Grain';
import { html as announcementBar } from '../components/AnnouncementBar';
import { html as navbar } from '../components/Navbar';
import { html as hero2 } from '../components/Hero2';
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
import { html as deviceSpotlight } from '../components/DeviceSpotlight';
import { html as faq } from '../components/Faq';
import { html as finalCta } from '../components/FinalCta';
import { html as footer } from '../components/Footer';
import ScriptLoader from '../components/ScriptLoader';

const PAGE_HTML = [
  grain,
  announcementBar,
  navbar,
  hero2,
  hero,
  ticker,
  why,
  science,
  layers,
  lifestyleBanner,
  productVideo,
  deviceSpotlight,
  steps,
  showcase,
  testimonials,
  faq,
  finalCta,
  footer,
].join('\n');

export default function Home() {
  return (
    <>
      <div style={{ display: 'contents' }} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
      {/* Loaded after hydration so handlers bind to the final DOM. GSAP is
          best-effort; site.js falls back to IntersectionObserver without it. */}
      <ScriptLoader
        srcs={[
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
          '/scripts/site.js',
        ]}
      />
    </>
  );
}
