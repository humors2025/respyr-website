const html = String.raw`<div class="grain"></div>`;

export default function Grain() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
