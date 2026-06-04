const html = String.raw`<section class="section biomarkers science" id="science">

  <!-- HEADER -->
  <div class="science-header reveal">
    <div class="section-eyb">The science</div>
    <h2 class="section-h2">Three biomarkers. <em>Three metabolic scores.</em></h2>
    <p class="section-intro">Each exhaled biomarker maps to one metabolic trend in your body. Each trend resolves into two precise sub-scores — so you see not just <em>what</em> is happening, but <em>why</em>.</p>
  </div>

  <!-- STACKED STICKY CARDS — each pins at the top, next slides over (Numa benefits style) -->
  <div class="science-stack" id="scienceStack">

    <article class="science-card science-card--blue" data-idx="0">
      <div class="science-card-img">
        <span class="science-card-num">01</span>
        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80" alt="" loading="lazy" decoding="async">
      </div>
      <div class="science-card-body">
        <p class="science-card-formula">C₃H₆O · Acetone</p>
        <h3 class="science-card-title">Fuel &amp; Energy</h3>
        <p class="science-card-desc">Acetone appears in your breath when your body is burning fat. Maps to how flexibly your metabolism switches between fat and glucose for energy.</p>
        <div class="science-card-tags">
          <span class="science-card-tag">Fuel Balance Trend</span>
          <span class="science-card-tag">Energy Source Trend</span>
        </div>
      </div>
    </article>

    <article class="science-card science-card--purple" data-idx="1">
      <div class="science-card-img">
        <span class="science-card-num">02</span>
        <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80" alt="" loading="lazy" decoding="async">
      </div>
      <div class="science-card-body">
        <p class="science-card-formula">C₂H₅OH · Ethanol</p>
        <h3 class="science-card-title">Metabolic Recovery</h3>
        <p class="science-card-desc">Endogenous ethanol reflects how hard your systems are working. Surfaces the recovery state and internal load most signals miss.</p>
        <div class="science-card-tags">
          <span class="science-card-tag">Recovery Activity Trend</span>
          <span class="science-card-tag">Metabolic Load Trend</span>
        </div>
      </div>
    </article>

    <article class="science-card science-card--pink" data-idx="2">
      <div class="science-card-img">
        <span class="science-card-num">03</span>
        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1400&q=80" alt="" loading="lazy" decoding="async">
      </div>
      <div class="science-card-body">
        <p class="science-card-formula">H₂ · Hydrogen</p>
        <h3 class="science-card-title">Digestive Balance</h3>
        <p class="science-card-desc">Hydrogen on the breath reflects gut microbial activity. Reveals digestive behavior and how well your body is utilizing what you eat.</p>
        <div class="science-card-tags">
          <span class="science-card-tag">Nutrient Balance Trend</span>
          <span class="science-card-tag">Digestive Activity Trend</span>
        </div>
      </div>
    </article>

  </div>

  <!-- Soft CTA — placed OUTSIDE .science-stack so sticky cards release before it appears.
       Captures peak intellectual belief, moves user to "How it works" (no price). -->
  <div class="science-soft-cta reveal">
    <p class="science-soft-cta-h">Three biomarkers. <em>Six scores.</em> One breath.</p>
    <a class="btn-primary" href="#how" onclick="document.getElementById('how').scrollIntoView({behavior:'smooth'});return false;">
      See how it works
      <span class="arrow"><svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg></span>
    </a>
  </div>
</section>`;

export default function ScienceSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
