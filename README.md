# Respyr Next.js Componentized Project

This project was converted from the uploaded single HTML file into a Next.js 14 app using the App Router.

## Structure

- `app/page.jsx` renders the page by composing all sections.
- `components/` contains separate components for navbar, hero, science, reviews, shop, FAQ, footer, cart drawer, and other sections.
- `app/globals.css` contains the original extracted CSS.
- `public/images/` contains extracted embedded image assets from the original HTML.
- `public/scripts/site.js` contains the original page JavaScript.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Notes

- UI/classes/layout are preserved from the original HTML.
- The original inline HTML event handlers and page animations are preserved through `public/scripts/site.js`.
- GSAP and ScrollTrigger are loaded client-side from CDN before the custom script.
- External Unsplash image URLs are kept as normal `<img>` sources, same as the original HTML.
