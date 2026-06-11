'use client';

import { useEffect } from 'react';

// Best-effort sequential script loader. A failed/blocked script (e.g. the GSAP
// CDN) resolves instead of rejecting, so it never blocks the scripts after it.
function load(src) {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = () => resolve();
    s.onerror = () => resolve();
    document.body.appendChild(s);
  });
}

// Loads page scripts AFTER React has hydrated (useEffect), so their DOM event
// handlers attach to the final, post-hydration nodes — not nodes React later
// replaces when it re-applies the dangerouslySetInnerHTML content.
export default function ScriptLoader({ srcs = [] }) {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const src of srcs) {
        if (cancelled) return;
        await load(src);
      }
      if (cancelled) return;
      // Some setup in the page scripts lives in a window 'load' listener that
      // already fired before this ran; re-fire so it executes.
      try {
        document.dispatchEvent(new Event('DOMContentLoaded'));
        window.dispatchEvent(new Event('load'));
      } catch (e) {}
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
