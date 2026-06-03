# Al Sarh Technical Services

Marketing website for **Al Sarh Technical Services** — a UAE-based provider of
integrated building maintenance and MEP (Mechanical, Electrical & Plumbing)
solutions.

Built with [Next.js 15](https://nextjs.org) (App Router), TypeScript, and
[Tailwind CSS v4](https://tailwindcss.com).

## Features

- Responsive, single-page marketing site with smooth-scroll navigation
- Sections: Hero, Services, Why Choose Us, About, Contact, Footer
- Accessible quote-request form (ready to wire up to an email/CRM endpoint)
- Brand theme defined via CSS variables in `src/app/globals.css`

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    layout.tsx      # Root layout, fonts & metadata
    page.tsx        # Home page composition
    globals.css     # Theme tokens & base styles
  components/
    Navbar.tsx
    Hero.tsx
    Services.tsx
    WhyUs.tsx
    About.tsx
    Contact.tsx
    Footer.tsx
```

## Customization

- **Brand colors / fonts:** edit the CSS variables in `src/app/globals.css`.
- **Contact details:** update phone, email and address in `Contact.tsx` and
  `Footer.tsx`.
- **Contact form submission:** the `handleSubmit` handler in `Contact.tsx` is a
  placeholder — connect it to your email service, API route, or CRM.

## Available Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the development server      |
| `npm run build` | Create a production build         |
| `npm run start` | Run the production build          |
| `npm run lint`  | Run ESLint                        |
