# Prithi Cuisine

Website for **Prithi Cuisine** — a contemporary Bangladeshi & Indian restaurant in Surbiton, UK.

## Tech Stack

- **React 19** + **TypeScript** with Vite
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **React Router v7** for client-side routing
- **Web3Forms** for reservation email notifications
- Deployed on **Vercel**

## Pages

- **Home** — Hero, about preview, featured dishes, banquet offer, chef's craft, testimonials
- **Menu** — Full menu with 15 categories, sticky navigation, scroll-to-top
- **About** — Story, chef, values, awards & certificates, private events
- **Gallery** — Filterable photo grid with lightbox
- **Contact** — Reservation form, contact details, Google Maps embed

## Getting Started

```bash
npm install
npm run dev
```

### Environment Variables

Copy `.env.example` to `.env` and add your Web3Forms access key:

```
VITE_WEB3FORMS_KEY=your_access_key_here
```

## Build & Deploy

```bash
npm run build
```

The `vercel.json` is pre-configured for SPA routing. Push to your connected Vercel project to deploy.
