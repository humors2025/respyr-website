const html = String.raw`<div class="ticker">
  <div class="ticker-track">
    <div class="ticker-item">Decode your metabolism <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg></div>
    <div class="ticker-item"><em>Three biomarkers</em> <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg></div>
    <div class="ticker-item">One breath <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg></div>
    <div class="ticker-item"><em>Six metabolic scores</em> <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg></div>
    <div class="ticker-item">Non-invasive <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg></div>
    <div class="ticker-item"><em>60 seconds</em> <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg></div>
    <div class="ticker-item">Decode your metabolism <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg></div>
    <div class="ticker-item"><em>Three biomarkers</em> <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg></div>
    <div class="ticker-item">One breath <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg></div>
    <div class="ticker-item"><em>Six metabolic scores</em> <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg></div>
    <div class="ticker-item">Non-invasive <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg></div>
    <div class="ticker-item"><em>60 seconds</em> <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg></div>
  </div>
</div>`;

export default function Ticker() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
