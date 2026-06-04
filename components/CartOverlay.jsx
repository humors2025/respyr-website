const html = String.raw`<div class="drawer-overlay" id="drawer-overlay" onclick="closeCart()"></div>`;

export default function CartOverlay() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
