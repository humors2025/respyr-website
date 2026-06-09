'use client';

import { useEffect } from 'react';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === 'true') return resolve();
      existing.addEventListener('load', resolve, { once: true });
      existing.addEventListener('error', reject, { once: true });
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = () => {
      script.dataset.loaded = 'true';
      resolve();
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default function SiteScripts() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js');
        if (cancelled) return;
        await loadScript('/scripts/site.js');
        if (cancelled) return;
        // site.js was loaded after the document's own load event already fired,
        // so re-fire the lifecycle events its init code listens for.
        document.dispatchEvent(new Event('DOMContentLoaded'));
        window.dispatchEvent(new Event('load'));
      } catch (error) {
        console.error('Respyr page scripts failed to load:', error);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
