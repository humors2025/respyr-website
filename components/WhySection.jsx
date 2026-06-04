const html = String.raw`<section class="section why">
  <div class="why-inner">
    <div class="why-text reveal">
      <div class="section-eyb">Why Respyr</div>
      <h2 class="section-h2">Two people. Same diet. <em>Different bodies.</em></h2>
      <p class="section-intro">For decades, health technology has only tracked the outside of you — steps, calories, heart rate. Your metabolism is more complex than movement alone.</p>
    </div>

    <div class="why-grid reveal-s">
      <!-- LEFT COLUMN — 2 cards -->
      <div class="why-col">
        <div class="why-item">
          <div class="why-item-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/><circle cx="12" cy="12" r="10"/></svg>
          </div>
          <div class="why-item-body">
            <h3>Do everything right, get nothing back.</h3>
            <p>You follow the diet, sleep eight hours, hit the gym four times a week. The scale won't move and the energy crashes don't stop. Generic formulas don't know what's happening inside you.</p>
          </div>
        </div>
        <div class="why-item why-item--purple">
          <div class="why-item-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>
          </div>
          <div class="why-item-body">
            <h3>Your metabolism changes daily.</h3>
            <p>Your metabolic state shifts continuously with sleep, stress, hydration, food timing, and recovery. A static calorie model can't capture that. A 60-second breath reading can.</p>
          </div>
        </div>
      </div>

      <!-- CENTER — cross-fading photo carousel (theme: two people, same diet, different bodies) -->
      <div class="why-image" id="whyCarousel" aria-hidden="true">
        <img class="is-active" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80" alt="" decoding="async">
        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80" alt="" loading="lazy" decoding="async">
        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80" alt="" loading="lazy" decoding="async">
        <img src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&w=1200&q=80" alt="" loading="lazy" decoding="async">
        <div class="why-image-dots" role="tablist" aria-label="Choose slide">
          <button type="button" class="is-active" aria-label="Slide 1"></button>
          <button type="button" aria-label="Slide 2"></button>
          <button type="button" aria-label="Slide 3"></button>
          <button type="button" aria-label="Slide 4"></button>
        </div>
      </div>

      <!-- RIGHT COLUMN — 2 cards -->
      <div class="why-col">
        <div class="why-item why-item--pink">
          <div class="why-item-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg>
          </div>
          <div class="why-item-body">
            <h3>Effort isn't the same as outcome.</h3>
            <p>Two people can follow the same diet, do the same workout, sleep the same hours — and still experience completely different internal results. The difference is in how the body is responding.</p>
          </div>
        </div>
        <div class="why-item why-item--green">
          <div class="why-item-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 2a4 4 0 0 1 4 4c0 2.5-2 4-2 6a2 2 0 0 1-4 0c0-2-2-3.5-2-6a4 4 0 0 1 4-4z"/><path d="M9 16h6"/><path d="M10 20h4"/></svg>
          </div>
          <div class="why-item-body">
            <h3>Breath as a new interface.</h3>
            <p>We built Respyr on one belief: three exhaled biomarkers <strong>reflect the real-time chemistry</strong> of how your body is fueling, recovering, and digesting — right now.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;

export default function WhySection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
