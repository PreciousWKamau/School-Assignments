# Minimal HTML Project

This workspace contains a minimal HTML starter project with the following files:

- `index.html` — main page
- `css/style.css` — basic styles
- `js/main.js` — small JavaScript to handle the sample form

Run locally

- Option 1: Open `index.html` directly in your browser (double-click or right-click → Open).

- Option 2: Run a simple local server (recommended for fetch/XHR or proper content-type behavior).

Windows (PowerShell or Command Prompt):

```bash
# From the workspace root
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

If you use Node.js you can install `http-server`:

```bash
npm install -g http-server
http-server -p 8000
# Then open http://127.0.0.1:8000
```
