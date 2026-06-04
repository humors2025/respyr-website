const html = String.raw`<section class="layers" id="layers">
  <div class="layers-head">
    <div class="eyb reveal">Six intelligence layers</div>
    <h2 class="reveal">From three biomarkers, <em>six dimensions of insight.</em></h2>
    <p class="reveal">Each breath produces a complete picture of how your body is functioning — organized across three parent trends and six precise sub-scores.</p>
  </div>
  <div class="layers-carousel">
    <div class="layers-track" id="layers-track">
      <div class="layer-card" data-pos="-2">
        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" alt="Fat Burn Trend" loading="lazy" decoding="async">
        <div class="layer-card-overlay"></div>
        <div class="layer-card-content">
          <div class="layer-card-tag">01 · Acetone</div>
          <div class="layer-card-title">Fat Burn Trend</div>
          <p class="layer-card-desc">How efficiently your body is converting stored fat into energy right now — the metabolic signal behind every diet decision.</p>
        </div>
      </div>
      <div class="layer-card" data-pos="-1">
        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80" alt="Carb Load Trend" loading="lazy" decoding="async">
        <div class="layer-card-overlay"></div>
        <div class="layer-card-content">
          <div class="layer-card-tag">02 · Acetone</div>
          <div class="layer-card-title">Carb Balance Trend</div>
          <p class="layer-card-desc">Whether yesterday's carbs were used or stored. The upstream signal before glucose ever spikes.</p>
        </div>
      </div>
      <div class="layer-card" data-pos="0">
        <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" alt="Recovery Activity Trend" loading="lazy" decoding="async">
        <div class="layer-card-overlay"></div>
        <div class="layer-card-content">
          <div class="layer-card-tag">03 · Ethanol</div>
          <div class="layer-card-title">Recovery Activity Trend</div>
          <p class="layer-card-desc">Recovery demand and physiological strain. The internal signal of whether to push or hold back today.</p>
        </div>
      </div>
      <div class="layer-card" data-pos="1">
        <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" alt="Metabolic Load Trend" loading="lazy" decoding="async">
        <div class="layer-card-overlay"></div>
        <div class="layer-card-content">
          <div class="layer-card-tag">04 · Ethanol</div>
          <div class="layer-card-title">Metabolic Load Trend</div>
          <p class="layer-card-desc">How hard your metabolism is working. What's happening beneath the surface — even when you feel fine.</p>
        </div>
      </div>
      <div class="layer-card" data-pos="2">
        <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80" alt="Digestive Activity Trend" loading="lazy" decoding="async">
        <div class="layer-card-overlay"></div>
        <div class="layer-card-content">
          <div class="layer-card-tag">05 · Hydrogen</div>
          <div class="layer-card-title">Digestive Activity Trend</div>
          <p class="layer-card-desc">Gut fermentation and digestive efficiency. The signal that tells you which foods your body actually agrees with.</p>
        </div>
      </div>
      <div class="layer-card" data-pos="hidden">
        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80" alt="Gut Balance Trend" loading="lazy" decoding="async">
        <div class="layer-card-overlay"></div>
        <div class="layer-card-content">
          <div class="layer-card-tag">06 · Hydrogen</div>
          <div class="layer-card-title">Gut Balance Trend</div>
          <p class="layer-card-desc">Microbiome equilibrium over time. The long-range view of how your gut is adapting to what you eat.</p>
        </div>
      </div>
    </div>
    <button class="layers-nav prev" onclick="layersNav(-1)" aria-label="Previous"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>
    <button class="layers-nav next" onclick="layersNav(1)" aria-label="Next"><svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"/></svg></button>
  </div>
  <div class="layers-dots" id="layers-dots">
    <span class="layers-dot" onclick="layersGo(0)"></span>
    <span class="layers-dot" onclick="layersGo(1)"></span>
    <span class="layers-dot active" onclick="layersGo(2)"></span>
    <span class="layers-dot" onclick="layersGo(3)"></span>
    <span class="layers-dot" onclick="layersGo(4)"></span>
    <span class="layers-dot" onclick="layersGo(5)"></span>
  </div>
</section>`;

export default function LayersSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
