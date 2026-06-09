'use client';

import { useEffect } from 'react';

// Loads a page's plain <script> (extracted verbatim from the original HTML)
// after the route's markup has mounted, so its DOM queries resolve.
export default function ExternalScript({ src }) {
  useEffect(() => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) return;
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    document.body.appendChild(s);
  }, [src]);

  return null;
}
