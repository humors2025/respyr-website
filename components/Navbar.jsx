const html = String.raw`<nav class="nav">
  <a href="#" class="nav-brand">
    <img src="/images/embedded-01-acdb0cb45fc9de42.png" alt="Respyr" class="nav-logo" decoding="async">
  </a>
  <div class="nav-links">
    <a href="#science">The Science</a>
    <a href="#how">How it works</a>
    <a href="#reviews">Reviews</a>
    <a href="#shop">Shop</a>
    <a href="#faq">FAQ</a>
    <a href="respyr-about.html">About</a>
    <a href="respyr-contact.html">Contact</a>
  </div>
  <div class="nav-actions">
    <!-- Pause-all-motion toggle (3): persists user's preference to localStorage; default = motion on -->
    <button class="nav-motion" id="motionToggle" type="button" aria-label="Pause all motion" title="Pause all motion">
      <svg class="ico-pause" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
      <svg class="ico-play"  viewBox="0 0 24 24" aria-hidden="true"><polygon points="6 4 20 12 6 20 6 4"/></svg>
    </button>
    <!-- Hamburger menu for mobile — toggles body.menu-open which reveals .nav-links as a dropdown -->
    <button class="nav-menu-btn" id="navMenuBtn" type="button" aria-label="Open menu" aria-expanded="false">
      <svg class="ico-bars" viewBox="0 0 24 24" aria-hidden="true"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
      <svg class="ico-x"    viewBox="0 0 24 24" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>
    </button>
    <button class="nav-icon" aria-label="Cart" onclick="openCart()">
      <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <span class="cart-count" id="cart-count">0</span>
    </button>
    <button class="nav-shop" onclick="document.getElementById('shop').scrollIntoView({behavior:'smooth'})">
      Get Respyr
    </button>
  </div>
</nav>`;

export default function Navbar() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
