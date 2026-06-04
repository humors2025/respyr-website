const html = String.raw`<div class="slide-stack">

<!-- LIFESTYLE BANNER -->
<section class="lifestyle-banner">
  <img src="/images/embedded-04-ab41e10f57f2e850.jpg" class="lifestyle-banner-img" alt="A moment of calm metabolic awareness" decoding="async">
  <div class="lifestyle-banner-overlay"></div>
  <div class="lifestyle-banner-content">
    <div class="lifestyle-banner-inner">
      <div class="lifestyle-banner-text">
        <div class="section-eyb">A daily ritual</div>
        <h2>Sixty seconds of calm.<br><em>One blueprint for your day.</em></h2>
        <p>Sit. Breathe naturally. Exhale once. The rest is automatic — and the answer comes in the time it takes to brew coffee.</p>
        <button class="btn-primary" onclick="document.getElementById('shop').scrollIntoView({behavior:'smooth'})">
          Reserve your Respyr
          <span class="arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>

<!-- PRODUCT VIDEO -->
<section class="section product-vid" id="how">
  <div class="product-vid-inner">
    <!-- TOP: small eyebrow on left, headline + body + CTA on right -->
    <div class="product-vid-text reveal">
      <div class="section-eyb">Our product</div>
      <div class="product-vid-copy">
        <h2 class="section-h2">Lab-grade sensors. <em>Pocket-grade ritual.</em></h2>
        <p>Three independent semiconductor sensors — each tuned for one biomarker — inside a brushed aluminum body. Designed to feel calm and premium, not clinical. No needles. No patches. No fasting.</p>
        <a class="btn-primary" href="respyr-read-more.html">
          Read More
          <span class="arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </span>
        </a>
      </div>
      <!-- kept (hidden) so old data isn't lost — restore by removing the .product-vid-list display:none rule -->
      <ul class="product-vid-list">
        <li><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><div><strong>Three independent sensors</strong>One dedicated channel each for acetone, ethanol, and hydrogen</div></li>
        <li><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><div><strong>60-second reading</strong>Faster than brewing coffee. Sit still, breathe naturally, one controlled exhale.</div></li>
        <li><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><div><strong>Factory-calibrated for 5 years</strong>No re-calibration. No consumables. No subscriptions.</div></li>
        <li><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg><div><strong>iOS + Android</strong>USB-C and Bluetooth 5.0. Syncs in under a second.</div></li>
      </ul>
    </div>
    <div class="product-vid-visual reveal">
      <video autoplay loop muted playsinline preload="metadata">
        <source src="/videos/embedded-05-18d1a1c84f0e2c71.mp4" type="video/mp4" media="(min-width: 1100px)" />
              <source src="/videos/embedded-06-8d1551b6f95c4c16.mp4" type="video/mp4" />
      </video>
      <div class="video-overlay-stat">
        <span class="l">Reading completes in</span>
        <span class="v">60 seconds</span>
      </div>
    </div>
  </div>
</section>

</div>`;

export default function RitualAndDeviceSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
