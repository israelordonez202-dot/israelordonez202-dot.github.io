# Portfolio

A fast, dependency-free personal portfolio built with plain HTML, CSS, and JavaScript. Hosted on GitHub Pages.

## Live site

https://YOUR-USERNAME.github.io

## Structure

```
portfolio/
├── index.html    # All page content and sections
├── styles.css    # Styling, light/dark themes, responsive layout
├── script.js     # Theme toggle, mobile nav, footer year
└── resume.pdf    # (add your own) linked from the hero
```

## Customize

Open `index.html` and replace every placeholder:

- **Your Name / YN** — your name and initials (brand)
- **Company / Previous Co / First Co** — your employers
- Project cards under **Selected Work** — real projects with impact metrics
- Timeline entries under **Experience**
- All links: `github.com/yourusername`, `linkedin.com/in/yourusername`, `you@example.com`
- The `<title>` and `<meta name="description">` in `<head>` (matters for SEO/social)

Drop a `resume.pdf` in this folder to make the "Download résumé" button work.

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000
