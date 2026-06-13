# 📚 BookBrief — AI Book Summarizer

> Paste a book passage → get an instant AI summary, key concepts, and book recommendations. Save everything to your personal reading library.

## Live Demo

🔗 **Deployment URL:** *(Add your Vercel URL here after deployment)*

---

## Features

- **AI Summary** — 3-sentence summary of any pasted passage via Claude API
- **Keyword Extraction** — 5 core concepts surfaced from the text
- **Book Recommendations** — 3 thematically related titles
- **Personal Library** — Save entries with star ratings and one-line reviews
- **Search** — Filter your saved books by title
- **Delete** — Remove entries with a confirmation step
- **Copy** — One-click clipboard copy of any summary
- **No backend** — All data stored in browser `localStorage`

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with service overview and CTA |
| Analyze | `analyze.html` | Paste passage → AI analysis → save to library |
| My Library | `library.html` | Browse, search, and delete saved books |

---

## How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/bookbrief.git
   cd bookbrief
   ```

2. **Open in browser**
   ```bash
   # Option A: just open index.html directly in your browser
   open index.html

   # Option B: use a local server (recommended to avoid CORS issues)
   npx serve .
   # or
   python3 -m http.server 8080
   ```

3. **No build step needed** — pure HTML/CSS/JavaScript.

---

## Tech Stack

- **HTML5 / CSS3 / Vanilla JavaScript** — no frameworks, no npm
- **Claude API** (`claude-sonnet-4-6`) via `fetch()`
- **localStorage** — client-side persistence, no backend
- **Vercel** — zero-config static deployment

---

## Project Structure

```
bookbrief/
├── index.html      # Home page
├── analyze.html    # AI analysis page
├── library.html    # Personal library page
├── style.css       # Shared stylesheet
└── README.md       # This file
```

---

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repo.
4. Leave all settings as default (Vercel auto-detects static sites).
5. Click **Deploy** — your site will be live in ~30 seconds.

---

## Course Info

**Introduction to AI Programming — Spring 2026 — Assignment 4**
