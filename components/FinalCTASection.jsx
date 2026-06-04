const html = String.raw`<section class="final-cta">
  <div class="final-cta-inner reveal">
    <div class="section-eyb">Ready when you are</div>
    <h2>Your breath is more than air.<span style="display:block"><em>Start reading what it means.</em></span></h2>
    <p>Reserve your Respyr today. Free US shipping. 30-day risk-free returns. No payment until your unit ships.</p>
    <button class="btn-primary" onclick="document.getElementById('shop').scrollIntoView({behavior:'smooth'})">
      Reserve your Respyr · $299
      <span class="arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </span>
    </button>
  </div>
</section>`;

export default function FinalCTASection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
