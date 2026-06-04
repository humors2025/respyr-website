const html = String.raw`<section class="section testimonials" id="reviews">
  <div class="section-inner">
    <div class="testimonials-head reveal">
      <div class="section-eyb">Real users · real results</div>
      <h2 class="section-h2">Reviews from <span class="b"><em>our community.</em></span></h2>
    </div>
    <div class="testimonials-grid reveal-s" aria-label="Customer testimonials">

      <!-- COLUMN 1 — scrolls UP. Cards 1, 2, 3 duplicated for a seamless loop. -->
      <div class="testimonials-col" data-dir="up" aria-hidden="false">
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★ <span class="testimonial-verified">✓ Verified</span></div>
          <div class="testimonial-attrib"><div class="testimonial-avatar tav-1">JM</div><div><div class="testimonial-name">Jordan M.</div><div class="testimonial-role">Wellness coach <span class="at">@LosAngeles</span></div></div></div>
          <p class="testimonial-quote">"I've been chasing fat loss for two years. Respyr is the first thing that <strong>actually told me when my body was burning fat vs glucose</strong>. Down 12 pounds in 8 weeks."</p>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★ <span class="testimonial-verified">✓ Verified</span></div>
          <div class="testimonial-attrib"><div class="testimonial-avatar tav-2">SK</div><div><div class="testimonial-name">Sara K.</div><div class="testimonial-role">NASM Trainer <span class="at">@Austin</span></div></div></div>
          <p class="testimonial-quote">"I work with 15 clients a week. Respyr lets me see <strong>which clients are actually recovering and which are heading toward burnout</strong> — before they tell me."</p>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★ <span class="testimonial-verified">✓ Verified</span></div>
          <div class="testimonial-attrib"><div class="testimonial-avatar tav-3">AR</div><div><div class="testimonial-name">Verified Respyr user</div><div class="testimonial-role">GLP-1 user <span class="at">@6mo</span></div></div></div>
          <p class="testimonial-quote">"I'm on semaglutide and most apps just gave me generic disclaimers. <strong>Respyr is the first one that actually adapts my nutrition</strong>."</p>
        </div>
        <!-- duplicate the same 3 cards for seamless infinite loop -->
        <div class="testimonial-card" aria-hidden="true">
          <div class="testimonial-stars">★★★★★ <span class="testimonial-verified">✓ Verified</span></div>
          <div class="testimonial-attrib"><div class="testimonial-avatar tav-1">JM</div><div><div class="testimonial-name">Jordan M.</div><div class="testimonial-role">Wellness coach <span class="at">@LosAngeles</span></div></div></div>
          <p class="testimonial-quote">"I've been chasing fat loss for two years. Respyr is the first thing that <strong>actually told me when my body was burning fat vs glucose</strong>. Down 12 pounds in 8 weeks."</p>
        </div>
        <div class="testimonial-card" aria-hidden="true">
          <div class="testimonial-stars">★★★★★ <span class="testimonial-verified">✓ Verified</span></div>
          <div class="testimonial-attrib"><div class="testimonial-avatar tav-2">SK</div><div><div class="testimonial-name">Sara K.</div><div class="testimonial-role">NASM Trainer <span class="at">@Austin</span></div></div></div>
          <p class="testimonial-quote">"I work with 15 clients a week. Respyr lets me see <strong>which clients are actually recovering and which are heading toward burnout</strong> — before they tell me."</p>
        </div>
        <div class="testimonial-card" aria-hidden="true">
          <div class="testimonial-stars">★★★★★ <span class="testimonial-verified">✓ Verified</span></div>
          <div class="testimonial-attrib"><div class="testimonial-avatar tav-3">AR</div><div><div class="testimonial-name">Verified Respyr user</div><div class="testimonial-role">GLP-1 user <span class="at">@6mo</span></div></div></div>
          <p class="testimonial-quote">"I'm on semaglutide and most apps just gave me generic disclaimers. <strong>Respyr is the first one that actually adapts my nutrition</strong>."</p>
        </div>
      </div>

      <!-- COLUMN 2 — scrolls DOWN. Cards 4, 5, 6 duplicated. -->
      <div class="testimonials-col" data-dir="down" aria-hidden="false">
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★ <span class="testimonial-verified">✓ Verified</span></div>
          <div class="testimonial-attrib"><div class="testimonial-avatar tav-4">DH</div><div><div class="testimonial-name">Devin H.</div><div class="testimonial-role">Ultra-endurance athlete <span class="at">@Boulder</span></div></div></div>
          <p class="testimonial-quote">"HRV told me I was recovered. Respyr told me my <strong>metabolic load was actually still elevated</strong>. I held back one extra day before a 100-miler. PR'd by 22 minutes."</p>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★ <span class="testimonial-verified">✓ Verified</span></div>
          <div class="testimonial-attrib"><div class="testimonial-avatar tav-5">MC</div><div><div class="testimonial-name">Marcus C.</div><div class="testimonial-role">Founder <span class="at">@Seattle</span></div></div></div>
          <p class="testimonial-quote">"I run a tech company and travel three weeks a month. <strong>Respyr is the only tool that keeps up with how chaotic my schedule is</strong>. 60 seconds in the morning."</p>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★ <span class="testimonial-verified">✓ Verified</span></div>
          <div class="testimonial-attrib"><div class="testimonial-avatar tav-6">RP</div><div><div class="testimonial-name">Verified Respyr user</div><div class="testimonial-role">Biohacker <span class="at">@HealthStack</span></div></div></div>
          <p class="testimonial-quote">"I have Whoop, Oura, and a CGM. Respyr gives me <strong>the one signal none of those captured</strong> — direct fat vs carb burn, in real time. Best $299 I've spent."</p>
        </div>
        <!-- duplicate set for seamless infinite loop -->
        <div class="testimonial-card" aria-hidden="true">
          <div class="testimonial-stars">★★★★★ <span class="testimonial-verified">✓ Verified</span></div>
          <div class="testimonial-attrib"><div class="testimonial-avatar tav-4">DH</div><div><div class="testimonial-name">Devin H.</div><div class="testimonial-role">Ultra-endurance athlete <span class="at">@Boulder</span></div></div></div>
          <p class="testimonial-quote">"HRV told me I was recovered. Respyr told me my <strong>metabolic load was actually still elevated</strong>. I held back one extra day before a 100-miler. PR'd by 22 minutes."</p>
        </div>
        <div class="testimonial-card" aria-hidden="true">
          <div class="testimonial-stars">★★★★★ <span class="testimonial-verified">✓ Verified</span></div>
          <div class="testimonial-attrib"><div class="testimonial-avatar tav-5">MC</div><div><div class="testimonial-name">Marcus C.</div><div class="testimonial-role">Founder <span class="at">@Seattle</span></div></div></div>
          <p class="testimonial-quote">"I run a tech company and travel three weeks a month. <strong>Respyr is the only tool that keeps up with how chaotic my schedule is</strong>. 60 seconds in the morning."</p>
        </div>
        <div class="testimonial-card" aria-hidden="true">
          <div class="testimonial-stars">★★★★★ <span class="testimonial-verified">✓ Verified</span></div>
          <div class="testimonial-attrib"><div class="testimonial-avatar tav-6">RP</div><div><div class="testimonial-name">Verified Respyr user</div><div class="testimonial-role">Biohacker <span class="at">@HealthStack</span></div></div></div>
          <p class="testimonial-quote">"I have Whoop, Oura, and a CGM. Respyr gives me <strong>the one signal none of those captured</strong> — direct fat vs carb burn, in real time. Best $299 I've spent."</p>
        </div>
      </div>

    </div>
  </div>
</section>`;

export default function TestimonialsSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
