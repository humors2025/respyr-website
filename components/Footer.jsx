const html = String.raw`<footer class="footer">
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand-wrap">
        <div class="footer-brand">
          <img src="/images/embedded-01-acdb0cb45fc9de42.png" alt="Respyr" class="footer-logo" decoding="async">
        </div>
        <p class="footer-tagline">A breath-powered metabolic intelligence platform. Designed to make metabolism visible — one calm breath at a time.</p>
        <form class="footer-newsletter" onsubmit="event.preventDefault();this.querySelector('button').textContent='Subscribed ✓';this.querySelector('input').value='';">
          <input type="email" placeholder="your@email.com" required>
          <button type="submit">Join</button>
        </form>
        <div class="footer-social">
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58 0 4.85.07a6.6 6.6 0 0 1 2.23.41 3.7 3.7 0 0 1 1.4.9 3.7 3.7 0 0 1 .9 1.4 6.6 6.6 0 0 1 .41 2.23c.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85a6.6 6.6 0 0 1-.41 2.23 3.7 3.7 0 0 1-.9 1.4 3.7 3.7 0 0 1-1.4.9 6.6 6.6 0 0 1-2.23.41c-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07a6.6 6.6 0 0 1-2.23-.41 3.7 3.7 0 0 1-1.4-.9 3.7 3.7 0 0 1-.9-1.4 6.6 6.6 0 0 1-.41-2.23C2.16 15.58 2.16 15.2 2.16 12s0-3.58.07-4.85a6.6 6.6 0 0 1 .41-2.23 3.7 3.7 0 0 1 .9-1.4 3.7 3.7 0 0 1 1.4-.9 6.6 6.6 0 0 1 2.23-.41C8.42 2.16 8.8 2.16 12 2.16zM12 7.16a4.84 4.84 0 1 0 0 9.68 4.84 4.84 0 0 0 0-9.68zm5.04-.97a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26z"/></svg></a>
          <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
          <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27z"/></svg></a>

        </div>
      </div>
      <div class="footer-col"><h5>Learn</h5><ul><li><a href="#science">The science</a></li><li><a href="#how">How it works</a></li><li><a href="#testimonials">Reviews</a></li><li><a href="#showcase">The app</a></li><li><a href="#shop">Shop</a></li><li><a href="#faq">FAQ</a></li><li><a href="respyr-read-more.html">Read more</a></li></ul></div>
      <div class="footer-col"><h5>Company</h5><ul><li><a href="respyr-about.html">About</a></li><li><a href="#">Careers</a></li><li><a href="#">Press</a></li><li><a href="respyr-contact.html">Contact</a></li></ul></div>
      <div class="footer-col"><h5>Support</h5><ul><li><a href="#faq">FAQ</a></li><li><a href="respyr-contact.html">Help center</a></li><li><a href="respyr-contact.html">Returns</a></li><li><a href="respyr-contact.html">Warranty</a></li></ul></div>
    </div>
    <div class="footer-bottom">
      <div>© 2026 Respyr · All rights reserved</div>
      <div class="footer-legal"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a><a href="#">Accessibility</a></div>
    </div>
  </div>
</footer>`;

export default function Footer() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
