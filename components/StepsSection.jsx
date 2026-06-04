const html = String.raw`<section class="section steps">
  <div class="steps-inner-grid">

    <!-- ROW 1, COL 1 — header -->
    <div class="steps-head reveal">
      <div class="steps-eyb">How it works</div>
      <h2 class="section-h2">Decode your metabolism in <em>four steps.</em></h2>
      <p class="section-intro">From breath to blueprint in 60 seconds. Designed to feel like a moment of calm — not a clinical procedure.</p>
    </div>

    <!-- ROW 1, COL 2 — Step 01 -->
    <div class="step-card reveal-s">
      <div class="step-num">01</div>
      <h3 class="step-h3">Guided Breath</h3>
      <p class="step-desc">Power on the device and open the app. The interface guides your inhale, hold, and exhale through calm visual cues.</p>
      <div class="step-card-img">
        <img src="/images/embedded-07-8dbb06b5126aa3f1.jpg" alt="" loading="lazy" decoding="async">
      </div>
    </div>

    <!-- ROW 1, COL 3 — Step 02 -->
    <div class="step-card reveal-s">
      <div class="step-num">02</div>
      <h3 class="step-h3">Biomarker Capture</h3>
      <p class="step-desc">Three sensors capture acetone, ethanol, and hydrogen signals from your single exhale.</p>
      <div class="step-card-img">
        <img src="/images/embedded-08-556aba89caf70545.jpg" alt="" loading="lazy" decoding="async">
      </div>
    </div>

    <!-- ROW 2, COL 1 — Step 03 -->
    <div class="step-card reveal-s">
      <div class="step-num">03</div>
      <h3 class="step-h3">Intelligence Analysis</h3>
      <p class="step-desc">Biomarkers become trends and sub-scores. AI explains what your metabolism is actually doing.</p>
      <div class="step-card-img">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" alt="" loading="lazy" decoding="async">
      </div>
    </div>

    <!-- ROW 2, COL 2 — Step 04 -->
    <div class="step-card reveal-s">
      <div class="step-num">04</div>
      <h3 class="step-h3">Adaptive Lifestyle</h3>
      <p class="step-desc">Today's nutrition, training, and recovery — calibrated to today's actual metabolic state.</p>
      <div class="step-card-img">
        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80" alt="" loading="lazy" decoding="async">
      </div>
    </div>

    <!-- ROW 2, COL 3 — soft CTA cell — points to reviews, NOT shop (price comes after proof) -->
    <div class="steps-cta reveal">
      <h3>Ready to see real results?</h3>
      <p>Hear from coaches, athletes, and everyday users who took back control of their metabolism.</p>
      <button class="btn-primary" onclick="document.getElementById('reviews').scrollIntoView({behavior:'smooth'})">
        See what users say
        <span class="arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </span>
      </button>
    </div>

  </div>
</section>`;

export default function StepsSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
