const html = String.raw`<div class="annc">
  Free US shipping on all orders · <strong>Save $50 on pre-orders</strong> · 30-day risk-free returns
</div>`;

export default function AnnouncementBar() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
