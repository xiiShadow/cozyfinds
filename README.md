# CozyFinds

A static, no-backend affiliate product-recommendation website for cozy
room decor and gift ideas. Built with plain HTML, CSS, and vanilla
JavaScript — no frameworks, no build step, no server. Ready to host on
GitHub Pages.

## File structure

```
cozyfinds/
├── index.html                  Home
├── room-finds.html             Room Finds hub (with category filters)
├── gift-ideas.html             Gift Ideas hub (with category filters)
├── articles.html               Ideas & Inspiration hub
├── article-*.html              5 individual articles
├── search.html                 Site-wide search results
├── about.html
├── contact.html
├── privacy-policy.html
├── affiliate-disclosure.html
├── robots.txt
├── sitemap.xml
├── .nojekyll                   tells GitHub Pages to skip Jekyll processing
├── css/
│   └── style.css               all styling — CSS variables at the top
├── js/
│   ├── data.js                 ← the file you'll edit most: products, articles, categories
│   └── main.js                 rendering, search, filtering, mobile menu (rarely needs edits)
└── images/
    ├── README.md                guide to adding real images
    ├── hero/  categories/  products/  articles/
```

## Previewing the site

You can just double-click `index.html` to open it in your browser — it
works fine that way (all the internal links, search, and filtering use
relative paths and browser APIs that work with or without a server).
Google Fonts will need an internet connection to load.

For the smoothest experience while editing (auto-reload on save), you
can optionally use a local server, e.g. the "Live Server" extension in
VS Code, or from a terminal in this folder: `python -m http.server`
then visit `http://localhost:8000`.

## How to edit things

### Add or edit a product
Open `js/data.js`, find the `PRODUCTS` array, copy an existing product
object, paste it at the end, and change the values. See the comment
block above the array for what each field does.

### Replace an affiliate link
In `js/data.js`, find the product and change its `affiliateLink` value
from a placeholder like `"AFFILIATE_LINK_01"` to your real URL, e.g.
`"https://www.amazon.com/dp/EXAMPLE?tag=yourtag-20"`.

### Replace prices
Prices in `js/data.js` are example placeholder values for layout —
update the `price` field on each product with accurate pricing before
publishing.

### Add or edit an article
1. Duplicate one of the `article-*.html` files, rename it, and edit the
   title, intro text, and meta tags inside.
2. Add a matching entry to the `ARTICLES` array in `js/data.js` (with a
   `productIds` list of which products to feature) so it shows up on
   the homepage and the Ideas page.

### Add real images
See `images/README.md` for folder structure, sizing tips, and where to
legally source images. Until you add them, the site automatically shows
tasteful placeholder tiles — nothing will look broken in the meantime.

### Change the site name or logo
The name "CozyFinds" and the 🕯️ logo appear in the header and footer of
**every page** (there's no shared template file, since this is a
plain multi-file static site). To change it everywhere, use your code
editor's "Find and Replace in Files" feature (in VS Code:
`Ctrl/Cmd+Shift+H`) across the whole `cozyfinds` folder, searching for
`CozyFinds` and replacing with your new name. Do the same for the 🕯️
emoji if you want a different icon. The favicon (browser tab icon) is
a small inline image in the `<head>` of each page — search for
`rel="icon"` to find and edit it.

### Change colors or fonts
Open `css/style.css` and edit the CSS variables at the very top of the
file (under `1. CSS VARIABLES`). Changing `--color-primary` alone will
re-theme most of the buttons, links, and accents site-wide.

### Activate the contact form
The form on `contact.html` currently shows a friendly confirmation
message but doesn't send anywhere (this project has no backend). To
make it actually deliver messages to your inbox, sign up for a free
static-form service like Formspree or Getform, then point the form's
submission at their endpoint per their setup instructions — typically
just adding an `action` URL to the `<form>` tag in `contact.html`.

## Publishing to GitHub Pages

1. Create a new repository on GitHub (e.g. named `cozyfinds`).
2. Upload every file and folder from this project into that repository,
   keeping the folder structure intact (either via `git push` from your
   computer, or by dragging files into GitHub's "Add file → Upload
   files" web interface).
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a
   branch," choose your main branch and the `/ (root)` folder, then
   save.
5. GitHub will publish your site to a URL like
   `https://YOUR-USERNAME.github.io/cozyfinds/` — it can take a minute
   or two the first time.
6. Once you know your real URL, update the placeholder domain
   (`YOUR-USERNAME.github.io/cozyfinds`) in `robots.txt` and
   `sitemap.xml` to match.

That's it — no build step, no server setup required.
