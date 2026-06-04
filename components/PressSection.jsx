const html = String.raw`<section class="press">
  <div class="press-inner">
    <div class="press-label">As featured in</div>
    <div class="press-grid">
      <span class="press-item">Wired</span>
      <span class="press-item">Outside</span>
      <span class="press-item">Men's Health</span>
      <span class="press-item">Well + Good</span>
      <span class="press-item">TechCrunch</span>
      <span class="press-item">Forbes</span>
    </div>
  </div>
</section>`;

export default function PressSection() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
