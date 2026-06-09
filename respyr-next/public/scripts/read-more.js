// Reveal-on-scroll
(function(){
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

// 11s clock — counts up when the clock scrolls into view (respects reduced-motion)
(function(){
  const num = document.getElementById('clockNum');
  if (!num) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { num.textContent = '11'; return; }
  let played = false;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !played) {
      played = true;
      const start = performance.now();
      const dur = 1400;
      const ease = t => 1 - Math.pow(1 - t, 3);
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        num.textContent = Math.round(ease(t) * 11);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.disconnect();
    }
  }, { threshold: 0.4 });
  obs.observe(num.closest('.clock'));
})();
