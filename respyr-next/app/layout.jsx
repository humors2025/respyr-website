export const metadata = {
  title: "Respyr · Your breath is more than air. It's metabolic information.",
  description:
    'Respyr · A breath-powered metabolic intelligence platform. Decode your metabolism in 60 seconds through three exhaled biomarkers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/images/hero-photo.jpg" fetchPriority="high" />
        {/* Safety net (runs at HTML-parse time, independent of React/Next):
            content starts at opacity:0 and is revealed by JS. If the reveal
            scripts fail for any reason, force everything visible after 2.5s so
            the page is never blank. No-op when the normal reveal works. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){function show(){try{document.querySelectorAll('.reveal:not(.in),.reveal-s:not(.in)').forEach(function(e){e.classList.add('in');});}catch(e){}}setTimeout(function(){if(!document.querySelector('.reveal.in,.reveal-s.in'))show();},2500);})();",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
