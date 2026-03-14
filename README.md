# Resume Portfolio React Template

A small React + Vite portfolio that reads everything from `public/config.json`.

## What to edit

Update only this file for most changes:

- `public/config.json`

You can change:
- name
- title
- summary
- skills
- experience
- projects
- education
- contact links
- social links
- profile image URL

## Local run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

### Option A: username.github.io repo
If your repo name is exactly:

`yourusername.github.io`

then do this:

1. Open `vite.config.js`
2. Keep it like this if you are using a username.github.io repo:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

3. Push the project to GitHub.
4. Run:

```bash
npm install
npm run deploy
```

5. In GitHub repo settings:
   - go to **Pages**
   - set source branch to `gh-pages`
   - save

Your site will be available at:

`https://yourusername.github.io/`

### Option B: project repo
If your repo name is something like `portfolio-site`, update `vite.config.js` like this:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-site/'
});
```

Then deploy again:

```bash
npm run deploy
```

Your site will be available at:

`https://yourusername.github.io/portfolio-site/`

## Recommended next edits

- replace the image URL in `public/config.json` with your real photo
- add LinkedIn and GitHub URLs
- replace `resumeUrl` with a direct resume PDF link
- add project links if available

## Folder structure

- `public/config.json` -> your data
- `src/App.jsx` -> main page
- `src/components/ui.jsx` -> reusable UI blocks
- `src/styles.css` -> design and layout
