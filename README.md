# Invitation Website — WLC & LNHS (Formal & Minimalist)

Files included:
- `index.html` — main page (responsive, navy & gold theme)
- `styles.css` — styling
- `script.js` — slideshow behavior (autoplay + manual controls)
- `README.md` — this file

Notes & how it works:
- The slideshow uses the image URLs stored in the GitHub repository (raw.githubusercontent.com links).
- Images are lazy-loaded to keep mobile data usage lower.
- For **package everything** (images included) — download the images from the GitHub repo into a local `images/` folder,
  then update `index.html` `images` array to use local `images/filename.jpg`. (Downloading images into the ZIP isn't done here
  so the repo remains the single source of truth.)
- To host on GitHub Pages: push these files to the repository root (or `docs/`) and enable Pages in repo settings.
- Colors: Navy `#0b2340` and Gold `#caa14b`. Fonts use system stack for best performance on Android/iOS.

Live preview (you provided): https://b1loan.github.io/WLC-LNHS-2025-OCT-22/

If you want me to:
- include the images into the ZIP (I can embed them) — say "include images" and I will provide a ZIP with them embedded;
- or convert this into a small PWA/manifest and offline-capable version — say "make PWA".

