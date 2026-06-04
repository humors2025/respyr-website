// ── Layers Carousel ──────────────────────
(function(){
  const cards = document.querySelectorAll('.layer-card');
  const dots = document.querySelectorAll('.layers-dot');
  if(!cards.length) return;
  let current = 2;
  const total = cards.length;
  function update(){
    cards.forEach((c,i)=>{
      let diff = i - current;
      if(diff < -2) diff = 'hidden';
      else if(diff > 2) diff = 'hidden';
      c.setAttribute('data-pos', diff);
    });
    dots.forEach((d,i)=>{ d.classList.toggle('active', i===current); });
  }
  window.layersNav = function(dir){
    current = (current + dir + total) % total;
    update();
  };
  window.layersGo = function(idx){
    current = idx;
    update();
  };
  // Auto-advance every 4s
  let auto = setInterval(()=> layersNav(1), 4000);
  document.querySelector('.layers-carousel').addEventListener('mouseenter',()=> clearInterval(auto));
  document.querySelector('.layers-carousel').addEventListener('mouseleave',()=>{ auto = setInterval(()=> layersNav(1), 4000); });
  update();
})();

const products = {
  essentials: { name: 'Respyr · Essentials', price: 199, tier: 'Essentials · Device + App' },
  complete: { name: 'Respyr · Complete', price: 299, tier: 'Complete · 12-mo premium' },
  lifetime: { name: 'Respyr · Lifetime', price: 379, tier: 'Lifetime · All future features' }
};

let cart = {};
let currentVariant = 'complete';
let currentQty = 1;

function selectImage(idx){
  document.querySelectorAll('.shop-gallery-main img').forEach((img, i) => {
    if(i === idx) img.classList.add('active'); else img.classList.remove('active');
  });
  document.querySelectorAll('.shop-thumb').forEach((thumb, i) => {
    if(i === idx) thumb.classList.add('active'); else thumb.classList.remove('active');
  });
}
function selectVariant(key){
  currentVariant = key;
  document.querySelectorAll('.shop-variant').forEach(btn => {
    if(btn.dataset.variant === key) btn.classList.add('selected'); else btn.classList.remove('selected');
  });
  const p = products[key];
  document.getElementById('price-now').textContent = '$' + p.price;
  document.getElementById('variant-label').textContent = p.tier;
  updateAddBtnPrice();
}
function changeProductQty(delta){
  currentQty = Math.max(1, currentQty + delta);
  document.getElementById('product-qty').textContent = currentQty;
  document.getElementById('qty-label').textContent = currentQty + (currentQty === 1 ? ' device' : ' devices');
  updateAddBtnPrice();
}
function updateAddBtnPrice(){
  const total = products[currentVariant].price * currentQty;
  document.getElementById('add-btn-price').textContent = '$' + total;
}
function addCurrentToCart(){
  if(!cart[currentVariant]) cart[currentVariant] = { ...products[currentVariant], qty: 0 };
  cart[currentVariant].qty += currentQty;
  renderCart();
  openCart();
}
function openCart(){
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart(){
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
function changeQty(key, delta){
  if(!cart[key]) return;
  cart[key].qty += delta;
  if(cart[key].qty <= 0) delete cart[key];
  renderCart();
}
function renderCart(){
  const items = Object.entries(cart);
  const totalQty = items.reduce((s, [, item]) => s + item.qty, 0);
  document.getElementById('cart-count').textContent = totalQty;
  const empty = document.getElementById('drawer-empty');
  const itemsContainer = document.getElementById('drawer-items');
  const footer = document.getElementById('drawer-footer');
  if(items.length === 0){
    empty.style.display = 'block';
    itemsContainer.innerHTML = '';
    footer.style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  footer.style.display = 'block';
  itemsContainer.innerHTML = items.map(([key, item]) => `
    <div class="drawer-item">
      <div class="drawer-thumb"><img src="/images/embedded-10-7107db71c2136c24.jpg" alt="${item.name}" decoding="async"></div>
      <div class="drawer-item-info">
        <div class="drawer-item-name">${item.name}</div>
        <div class="drawer-item-meta">${item.tier}</div>
        <div class="drawer-qty"><button onclick="changeQty('${key}',-1)">−</button><span class="q">${item.qty}</span><button onclick="changeQty('${key}',1)">+</button></div>
      </div>
      <div class="drawer-price">$${item.price * item.qty}</div>
    </div>
  `).join('');
  const subtotal = items.reduce((s, [, item]) => s + (item.price * item.qty), 0);
  document.getElementById('drawer-subtotal').textContent = '$' + subtotal;
  document.getElementById('drawer-total').textContent = '$' + subtotal;
}

const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
document.querySelectorAll('.reveal, .reveal-s').forEach(el => obs.observe(el));
window.addEventListener('load', () => {
  document.querySelectorAll('.reveal, .reveal-s').forEach(el => {
    const r = el.getBoundingClientRect();
    if(r.top < window.innerHeight) el.classList.add('in');
  });
});

/* ── Mobile hamburger menu ── */
(function navMenu(){
  const btn = document.getElementById('navMenuBtn');
  if (!btn) return;
  const close = () => { document.body.classList.remove('menu-open'); btn.setAttribute('aria-expanded','false'); btn.setAttribute('aria-label','Open menu'); };
  const open  = () => { document.body.classList.add('menu-open');    btn.setAttribute('aria-expanded','true');  btn.setAttribute('aria-label','Close menu'); };
  btn.addEventListener('click', () => document.body.classList.contains('menu-open') ? close() : open());
  // Close menu when a nav link is clicked
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', close));
  // Close on resize past mobile breakpoint
  window.addEventListener('resize', () => { if (window.innerWidth > 980) close(); });
})();

/* ── Pause-all-motion toggle in nav ── */
(function motionToggle(){
  const btn = document.getElementById('motionToggle');
  if (!btn) return;
  const KEY = 'respyr-motion-off';
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // default OFF unless user opts in OR OS-level reduced motion is set
  const initOff = localStorage.getItem(KEY) === '1' || prefersReduced;
  if (initOff) document.body.classList.add('motion-off');
  const sync = () => {
    const off = document.body.classList.contains('motion-off');
    btn.setAttribute('aria-label', off ? 'Resume all motion' : 'Pause all motion');
    btn.setAttribute('title',      off ? 'Resume all motion' : 'Pause all motion');
    btn.setAttribute('aria-pressed', off ? 'true' : 'false');
  };
  sync();
  btn.addEventListener('click', () => {
    document.body.classList.toggle('motion-off');
    localStorage.setItem(KEY, document.body.classList.contains('motion-off') ? '1' : '0');
    sync();
  });
})();

/* ── Hero — only the background image zooms in as the user scrolls
   (no margin/radius shrink — the hero frame stays edge-to-edge) ── */
(function heroScroll(){
  // Works for either an <img decoding="async"> or a <video> inside .hero-bg
  const heroImg = document.querySelector('.hero-bg img, .hero-bg video');
  if (!heroImg) return;

  const FULL_DIST = 700;   // px of scroll over which the zoom completes
  const IMG_START = 1.00;  // natural scale at top
  const IMG_END   = 1.15;  // zoomed-in scale at FULL_DIST and beyond

  let scheduled = false;
  const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);

  const update = () => {
    scheduled = false;
    const y = window.scrollY;
    const p = Math.max(0, Math.min(1, y / FULL_DIST));
    const e = easeOutCubic(p);
    const s = IMG_START + (IMG_END - IMG_START) * e;
    heroImg.style.transform = 'scale(' + s.toFixed(4) + ')';
  };

  const onScroll = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();

/* ── Science section — stacked sticky cards (Numa benefits style) ──
   The sticky stacking itself is pure CSS. JS adds the polish: as each card is
   covered by the next one sliding up over it, the covered card scales down and
   fades slightly to feel like a deck being shuffled. */
(function scienceCardsStack(){
  const cards = document.querySelectorAll('#scienceStack .science-card');
  if (!cards.length) return;

  let scheduled = false;
  const update = () => {
    scheduled = false;
    const vh = window.innerHeight;
    cards.forEach((card, i) => {
      const next = cards[i + 1];
      if (!next) {
        // last card never gets covered — keep it pristine
        card.style.transform = '';
        card.style.opacity = '';
        return;
      }
      const cardRect = card.getBoundingClientRect();
      const nextRect = next.getBoundingClientRect();
      // distance from this card's TOP to the next card's TOP (in viewport coords)
      // when this distance shrinks to ~0, the next card has fully covered this one
      const gap = nextRect.top - cardRect.top;
      // when gap is greater than vh/2, no coverage yet → progress 0
      // when gap is 0, fully covered → progress 1
      const covered = Math.max(0, Math.min(1, 1 - (gap / (vh * 0.55))));
      const scale = 1 - covered * 0.06;          // 1.00 → 0.94
      const opacity = 1 - covered * 0.35;        // 1.00 → 0.65
      const y = -covered * 18;                   // tiny upward push for depth
      card.style.transform = 'translateY(' + y.toFixed(2) + 'px) scale(' + scale.toFixed(4) + ')';
      card.style.opacity = opacity.toFixed(3);
    });
  };

  const onScroll = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();

/* ── (Old science timeline handler removed — replaced by the stacked-cards version above) ── */
(function deadScienceHandler(){
  // The previous markup with #scienceTimeline .science-step + #scienceText .science-bg-stack
  // no longer exists in the new layout. This empty IIFE is a no-op kept only so the rest of
  // the script below remains untouched. Remove freely if you ever clean up the script block.
  const steps = [], bgs = [];
  if (!steps.length || !bgs.length) return;

  const setActiveClass = (idx) => {
    steps.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    bgs.forEach((b, i) => b.classList.toggle('is-active', i === idx));
  };

  /* ── Primary path: GSAP + ScrollTrigger ── */
  const useGSAP = () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return false;
    gsap.registerPlugin(ScrollTrigger);

    // Start with step 0 already "active" — no fade-in needed since CSS already painted bg[0]
    // via the .is-active class. This avoids any flash of a dark panel while the initial tween runs.
    let activeIdx = 0;
    bgs.forEach(b => { b.style.transition = 'none'; });
    gsap.set(bgs, { opacity: 0 });
    gsap.set(bgs[0], { opacity: 1 });

    const activate = (i) => {
      i = Math.max(0, Math.min(steps.length - 1, i));
      if (i === activeIdx) return;
      activeIdx = i;
      setActiveClass(i);
      gsap.to(bgs, { opacity: 0, duration: 0.55, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(bgs[i], { opacity: 1, duration: 0.75, ease: 'power2.out', overwrite: 'auto' });
      // tiny "pop" on the newly-active number circle
      const num = steps[i].querySelector('.science-step-num');
      if (num) gsap.fromTo(num, { scale: 0.92 }, { scale: 1.05, duration: 0.45, ease: 'back.out(2)', overwrite: true });
    };

    // Custom scroll handler — ScrollTrigger's measurements were going stale on this page
    // (negative start/end caused by lazy-loaded images shifting the doc after init).
    // Recomputing live from getBoundingClientRect every frame is rock-solid and cheap.
    const section = document.querySelector('#science');
    const total = steps.length; // 3

    // Each step activates after ~2 wheel ticks (≈ 240px of scroll).
    // Total step-change range = STEP_PX * total. The section itself stays at its natural height for visuals;
    // we just sample progress over the first STEP_PX*total px of scroll-through.
    const STEP_PX = 240;
    const TRIGGER_TOP = 0.55; // section.top at 55% of viewport = progress 0 (step 0 just locked in)
    const TOTAL_DIST = STEP_PX * total; // 360px for 3 steps

    let scheduled = false;
    const onScroll = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const startTop = vh * TRIGGER_TOP;
        // traveled = how far past the start line the section has moved
        const traveled = startTop - rect.top;
        let p = traveled / TOTAL_DIST;
        p = Math.max(0, Math.min(1, p));
        const idx = Math.min(total - 1, Math.floor(p * total));
        activate(idx);

        // parallax — slow zoom while section is anywhere near viewport
        const px = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
        gsap.set(bgs, { scale: 1 + px * 0.06 });
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // run once on init so the initial position is correct
    onScroll();

    return true;
  };

  /* ── Fallback: IntersectionObserver if GSAP didn't load ── */
  const useIO = () => {
    const obs = new IntersectionObserver((entries) => {
      let best = null;
      entries.forEach(e => {
        if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) best = e;
      });
      if (best) {
        const idx = parseInt(best.target.dataset.step, 10);
        if (!Number.isNaN(idx)) setActiveClass(idx);
      }
    }, { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });
    steps.forEach(s => obs.observe(s));
  };

  // GSAP scripts use `defer` — wait for window load to be safe.
  const init = () => { if (!useGSAP()) useIO(); };
  if (document.readyState === 'complete') init();
  else window.addEventListener('load', init);
})();

/* ── App showcase — glass tab bar: click to switch the active tab ── */
(function appTabbar(){
  const bar = document.querySelector('.app-tabbar');
  if(!bar) return;
  const tabs = [...bar.querySelectorAll('.app-tab')];
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(t => { t.classList.remove('is-active'); t.setAttribute('aria-selected','false'); });
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected','true');
  }));
})();

/* ── Why-section image carousel — cross-fade + clickable dots ── */
(function whyCarousel(){
  const root = document.getElementById('whyCarousel');
  if(!root) return;
  const allImgs = [...root.querySelectorAll('img')];
  // Drop any image that fails to load so a broken slide doesn't show a black slot.
  // Wait briefly for the browser to attempt fetches before deciding.
  const pruneBroken = () => {
    allImgs.forEach((img, idx) => {
      img.addEventListener('error', () => {
        img.remove();
        root.querySelectorAll('.why-image-dots button')[idx]?.remove();
      });
    });
  };
  pruneBroken();
  const imgs = root.querySelectorAll('img');
  const dots = root.querySelectorAll('.why-image-dots button');
  if(imgs.length < 2) return;
  let i = 0;
  let timer;
  const INTERVAL = 4000;

  const show = (n) => {
    n = ((n % imgs.length) + imgs.length) % imgs.length;
    if(n === i) return;
    imgs[i].classList.remove('is-active');
    dots[i]?.classList.remove('is-active');
    i = n;
    imgs[i].classList.add('is-active');
    dots[i]?.classList.add('is-active');
  };

  const advance = () => show(i + 1);
  const start = () => { stop(); timer = setInterval(advance, INTERVAL); };
  const stop  = () => { if(timer){ clearInterval(timer); timer = null; } };

  dots.forEach((btn, idx) => {
    btn.addEventListener('click', () => { show(idx); start(); /* reset cadence after manual nav */ });
  });

  // pause on hover, resume on leave
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);

  start();
})();
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeCart(); });
