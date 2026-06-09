export default function Press() {
  return (
    <div style={{ display: 'contents' }} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: "<section class=\"press\">\n  <div class=\"press-inner\">\n    <div class=\"press-label\">As featured in</div>\n    <div class=\"press-grid\">\n      <span class=\"press-item\">Wired</span>\n      <span class=\"press-item\">Outside</span>\n      <span class=\"press-item\">Men's Health</span>\n      <span class=\"press-item\">Well + Good</span>\n      <span class=\"press-item\">TechCrunch</span>\n      <span class=\"press-item\">Forbes</span>\n    </div>\n  </div>\n</section>\n\n<!-- SHOP PAGE -->" }} />
  );
}
