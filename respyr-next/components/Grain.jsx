// Grain — this section's markup (raw HTML, owned by this component).
export const html = "<div class=\"grain\"></div>";

export default function Grain() {
  return <div style={{ display: 'contents' }} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
