const html = String.raw`<section class="hero">
  <div class="hero-bg" aria-hidden="true">
    <img src="/images/embedded-02-62752e05161f9457.jpg" alt="" loading="eager" fetchpriority="high" decoding="async" />
  </div>

  <div class="hero-inner reveal-s">
    <div class="hero-eyb">Breath-powered metabolic intelligence</div>
    <h1>
      <span class="b">Your breath</span>
      <span class="b"><em>is more</em> than air.</span>
    </h1>
    <p class="hero-sub">
      <strong>Breathe once.</strong> Respyr reads your metabolism in 60 seconds — the actual chemistry of how your body is fueling, recovering, and digesting today. Not steps. Not calories.
    </p>
    <div class="hero-cta-row">
      <button class="btn-primary" onclick="document.getElementById('shop').scrollIntoView({behavior:'smooth'})">
        Explore
        <span class="arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </span>
      </button>
      <a href="#how" class="btn-ghost">See how it works</a>
    </div>
    <div class="hero-trust-row">
      <div class="hero-trust"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Non-invasive · 60 seconds</div>
      <div class="hero-trust"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>No subscriptions</div>
      <div class="hero-trust"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>30-day risk-free</div>
    </div>
  </div>

  <div class="hero-visual" aria-hidden="true">
    <div class="hero-photo">
        <img src="/images/embedded-03-7122557b7badaa69.jpg" alt="A woman taking a Respyr breath reading at home" decoding="async">
        <div class="hero-photo-frame"></div>
      </div>
      <div class="hero-metric-badge">
        <div class="hero-metric-dot"></div>
        <div class="hero-metric-text">Live reading</div>
      </div>
      <div class="hero-overlay">
        <div class="hero-overlay-num">88<span class="p">%</span></div>
        <div class="hero-overlay-text">
          <div class="hero-overlay-l">Fuel & Energy</div>
          <div class="hero-overlay-h">Fat-leaning today</div>
          <div class="hero-overlay-d">Your body is using stored energy efficiently</div>
        </div>
      </div>
    </div>
  </div>`;

export default function HeroSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
