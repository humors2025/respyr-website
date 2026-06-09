export default function AnnouncementBar() {
  return (
    <div style={{ display: 'contents' }} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: "<div class=\"annc\">\n  Free US shipping on all orders · <strong>Save $50 on pre-orders</strong> · 30-day risk-free returns\n</div>" }} />
  );
}
