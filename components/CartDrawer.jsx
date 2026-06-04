const html = String.raw`<aside class="drawer" id="drawer" aria-label="Shopping cart">
  <div class="drawer-header">
    <div class="drawer-title">Your cart</div>
    <button class="drawer-close" onclick="closeCart()" aria-label="Close cart">×</button>
  </div>
  <div class="drawer-body" id="drawer-body">
    <div class="drawer-empty" id="drawer-empty">
      <div class="drawer-empty-icon">🌬</div>
      <h3>Your cart is empty</h3>
      <p>Reserve a Respyr to get started.</p>
      <button class="btn-primary" onclick="closeCart();document.getElementById('shop').scrollIntoView({behavior:'smooth'})" style="display:inline-flex">See plans →</button>
    </div>
    <div id="drawer-items"></div>
  </div>
  <div class="drawer-footer" id="drawer-footer" style="display:none">
    <div class="drawer-row"><span>Subtotal</span><span id="drawer-subtotal">$0</span></div>
    <div class="drawer-row"><span>Shipping</span><span style="color:var(--rs-green,#3faf58);font-weight:600">FREE</span></div>
    <div class="drawer-row total"><span class="l">Total</span><span class="v" id="drawer-total">$0</span></div>
    <button class="drawer-checkout" onclick="alert('Secure checkout opens here in production.')">Secure checkout →</button>
    <div class="drawer-note"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Free US shipping · 30-day returns · No charge until shipment</div>
  </div>
</aside>`;

export default function CartDrawer() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
