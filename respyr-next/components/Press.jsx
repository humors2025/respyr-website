// Press — this section's markup (raw HTML, owned by this component).
export const html = "<span class=\"press-item\">Wired</span>\n      <span class=\"press-item\">Outside</span>\n      <span class=\"press-item\">Men's Health</span>\n      <span class=\"press-item\">Well + Good</span>\n      <span class=\"press-item\">TechCrunch</span>\n      <span class=\"press-item\">Forbes</span>\n    </div>\n  </div>\n</section>\n\n<!-- SHOP PAGE -->\n<section class=\"shop-page\" id=\"shop\">\n  <div class=\"shop-page-inner\">\n    <div class=\"shop-page-head reveal\">\n      <div class=\"section-eyb\">Shop · Pre-order open</div>";

export default function Press() {
  return <div style={{ display: 'contents' }} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
