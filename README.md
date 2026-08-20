# Orlando Portfolio | Managed Websites

A bilingual managed-website service and portfolio built with **Astro**, **Tailwind CSS 4**, and **Alpine.js**.

## 🛠️ Tech Stack

- **Framework:** [Astro 5](https://astro.build/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Interactivity:** [Alpine.js](https://alpinejs.dev/)
- **Deployment:** [Netlify](https://www.netlify.com/) (with Netlify Forms integration)
- **Internationalization:** Astro i18n routing (`/en`, `/fr`)

## 📂 Project Structure

```text
/
├── docs/               # Strategic documentation (specs, copy)
├── public/             # Static assets (logos, project screenshots)
├── src/
│   ├── components/     # Reusable Astro components (Navbar, Hero, Work, etc.)
│   ├── content/        # Project data collections (Bilingual JSON)
│   ├── layouts/        # Base HTML layouts
│   ├── pages/          # i18n Routes ([lang]/index.astro)
│   └── styles/         # Global CSS and Tailwind 4 theme
└── package.json
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run development server:**
   ```sh
   npm run dev
   ```
   The site will be available at `http://localhost:4321`.

3. **Build for production:**
   ```sh
   npm run build
   ```
   This command runs `astro check` and then builds the static site to the `dist/` directory.

## 📝 Features

- **Bilingual Support:** Full EN/FR routing and content collections.
- **Engineering Grade UI:** High-contrast, performance-focused design with custom color profiles for tech stacks.
- **Responsive Design:** Optimized for mobile, tablet, and desktop.
- **Form Automation:** Built-in Netlify Forms support with honeypot spam protection.
- **Privacy-friendly Analytics:** Optional Umami Cloud traffic and conversion events.

## Optional analytics

Copy `.env.example` to `.env` and provide `PUBLIC_UMAMI_WEBSITE_ID` to enable Umami Cloud. When the value is absent, the analytics script is not rendered.

## 🧞 Commands

| Command           | Action                                           |
| :---------------- | :----------------------------------------------- |
| `npm install`     | Installs dependencies                            |
| `npm run dev`     | Starts local dev server at `localhost:4321`      |
| `npm run build`   | Runs type checking and builds for production     |
| `npm run preview` | Preview your build locally                       |
| `npm run astro`   | Run CLI commands like `astro add`, `astro check` |
