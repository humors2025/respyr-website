import './globals.css';

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
      </head>
      <body>{children}</body>
    </html>
  );
}
