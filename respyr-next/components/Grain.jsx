export default function Grain() {
  return (
    <div style={{ display: 'contents' }} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: "<div class=\"grain\"></div>" }} />
  );
}
