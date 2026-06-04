'use client';

import { useEffect } from 'react';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      existing.addEventListener('load', resolve, { once: true });
      existing.addEventListener('error', reject, { once: true });
      if (existing.dataset.loaded === 'true') resolve();
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

    async function boot() {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js');
        if (!cancelled) await loadScript('/scripts/site.js');
      } catch (error) {
        console.error('Respyr page scripts failed to load:', error);
      }
    }

    boot();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
