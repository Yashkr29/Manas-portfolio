# Manas Kumar — Graphic Designer Portfolio

A one-page portfolio for Manas Kumar, graphic designer for jewellery, retail and festive brands.

**Stack:** React 19 · Vite · Tailwind CSS v4 · Framer Motion · React Bits (Ribbons cursor, CurvedInput search)

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build
```

## Editing content

All text, projects, contact details and social links live in one file:
[`src/data/portfolio.js`](src/data/portfolio.js).

- **Contact:** `contact.email` and `contact.whatsapp` (international format, digits only).
- **Social links:** `socials`, one entry per platform (Instagram, Facebook, Behance, LinkedIn, X).
- **Projects:** `projects` (featured gallery) and `printWork` (flyers, cards, posters). Images are in `public/work/`.

## Structure

```
src/
  components/
    Navbar.jsx        section links with scroll-spy + curved "jump to" search
    NavSearch.jsx     search index & navigation logic (uses CurvedInput)
    Hero.jsx          three-column hero with spotlight portrait
    Work.jsx          filterable gallery + Lightbox
    PrintWork.jsx     printable projects
    Services.jsx      services list + "Why me"
    About.jsx         bio, pillars, industries
    Contact.jsx       WhatsApp / email form
    CursorRibbons.jsx ribbon cursor trail (mouse devices only)
    Ribbons.jsx, CurvedInput.jsx   React Bits components
  data/portfolio.js   all site content
DESIGN.md             design system (colours, type, components, motion)
```

Contact form messages open WhatsApp (`wa.me`) or the visitor's email app (`mailto:`); no backend is needed.
