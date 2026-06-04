const html = String.raw`<section class="shop-page" id="shop">
  <div class="shop-page-inner">
    <div class="shop-page-head reveal">
      <div class="section-eyb">Shop · Pre-order open</div>
      <h2 class="section-h2">Reserve your Respyr <span class="b"><em>today.</em></span></h2>
      <p class="section-intro" style="margin:0 auto">No payment until your unit ships. Free US shipping. 30-day risk-free returns.</p>
    </div>
    <div class="shop-product reveal">
      <div class="shop-gallery">
        <div class="shop-gallery-main">
          <div class="shop-gallery-tag">Pre-order · Ships Q3 2026</div>
          <img src="/images/embedded-10-7107db71c2136c24.jpg" class="active" data-idx="0" alt="Respyr device close-up" decoding="async">
          <img src="/images/embedded-04-ab41e10f57f2e850.jpg" data-idx="1" alt="Respyr in use" decoding="async">
          <img src="/images/embedded-03-7122557b7badaa69.jpg" data-idx="2" alt="Respyr lifestyle" decoding="async">
        </div>
        <div class="shop-gallery-thumbs">
          <button class="shop-thumb active" onclick="selectImage(0)"><img src="/images/embedded-10-7107db71c2136c24.jpg" alt="Device" decoding="async"></button>
          <button class="shop-thumb" onclick="selectImage(1)"><img src="/images/embedded-04-ab41e10f57f2e850.jpg" alt="In use" decoding="async"></button>
          <button class="shop-thumb" onclick="selectImage(2)"><img src="/images/embedded-03-7122557b7badaa69.jpg" alt="Lifestyle" decoding="async"></button>
        </div>
      </div>
      <div class="shop-info">
        <div class="shop-info-eyb">Respyr · Breath-tech device</div>
        <h2 class="shop-info-h">The Respyr <em>device.</em></h2>
        <div class="shop-info-rating">
          <span class="shop-info-stars">★★★★★</span>
          <strong>4.8</strong>
          <span class="rating-count">from 1,247 pre-order reviews</span>
        </div>
        <p class="shop-info-desc">A breath-powered metabolic intelligence platform. Three sensors. Six metabolic scores. One 60-second ritual that tells you what your body actually needs today.</p>
        <div class="shop-price-row">
          <div class="shop-price-now" id="price-now">$299</div>
          <div class="shop-price-was">$349</div>
          <div class="shop-price-save">SAVE $50</div>
        </div>
        <!-- Trust signals near price (5) -->
        <div class="shop-price-trust">
          <span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Free US shipping</span>
          <span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 30-day risk-free returns</span>
          <span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> No payment until shipped</span>
        </div>
        <div class="shop-variant-section">
          <div class="shop-variant-label">
            <span class="l">Plan</span>
            <span class="v" id="variant-label">Essentials · Device + App</span>
          </div>
          <div class="shop-variant-options">
            <button class="shop-variant" data-variant="essentials" onclick="selectVariant('essentials')">
              <div class="shop-variant-left">
                <div class="shop-variant-name">Respyr Essentials</div>
                <div class="shop-variant-sub">Device + free app. Daily breath reads, 3 metabolic scores, and basic trends.</div>
                <div class="shop-variant-incl">Respyr Breath Tracker included.</div>
              </div>
              <div class="shop-variant-right">
                <span class="shop-variant-was">$399</span>
                <span class="shop-variant-price">$199</span>
              </div>
            </button>
            <button class="shop-variant selected" data-variant="complete" onclick="selectVariant('complete')">
              <span class="shop-variant-badge">Most popular</span>
              <div class="shop-variant-left">
                <div class="shop-variant-name">Respyr Complete</div>
                <div class="shop-variant-sub">Everything in Essentials + nutrition coaching, advanced insights, and 12 months of premium data.</div>
                <div class="shop-variant-incl">Respyr Breath Tracker included.</div>
              </div>
              <div class="shop-variant-right">
                <span class="shop-variant-was">$549</span>
                <span class="shop-variant-price">$299</span>
              </div>
            </button>
            <button class="shop-variant" data-variant="lifetime" onclick="selectVariant('lifetime')">
              <div class="shop-variant-left">
                <div class="shop-variant-name">Respyr Lifetime</div>
                <div class="shop-variant-sub">Everything in Complete + lifetime premium access, priority support, and all future features.</div>
                <div class="shop-variant-incl">Respyr Breath Tracker included.</div>
              </div>
              <div class="shop-variant-right">
                <span class="shop-variant-was">$699</span>
                <span class="shop-variant-price">$379</span>
              </div>
            </button>
          </div>
        </div>
        <div class="shop-variant-section">
          <div class="shop-variant-label">
            <span class="l">Quantity</span>
            <span class="v" id="qty-label">1 device</span>
          </div>
        </div>
        <div class="shop-actions">
          <div class="shop-qty">
            <button onclick="changeProductQty(-1)" aria-label="Decrease">−</button>
            <span class="shop-qty-val" id="product-qty">1</span>
            <button onclick="changeProductQty(1)" aria-label="Increase">+</button>
          </div>
          <button class="shop-add-btn" onclick="addCurrentToCart()">
            Add to cart · <span id="add-btn-price">$299</span>
            <span style="font-size:12px">→</span>
          </button>
        </div>
        <ul class="shop-trust-list">
          <li><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Free US shipping on all orders</li>
          <li><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>30-day risk-free return</li>
          <li><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>2-year warranty on hardware</li>
          <li><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>No subscriptions · app free forever</li>
          <li><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>No payment until shipment</li>
        </ul>
      </div>
    </div>
  </div>
</section>`;

export default function ShopSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
