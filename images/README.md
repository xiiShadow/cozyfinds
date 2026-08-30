# Images Folder Guide

You don't need to add anything here right away — every image on the site
automatically falls back to a clean, on-brand placeholder tile until you
add a real photo with the matching filename. Nothing will ever look
"broken."

## Folder structure

```
images/
├── hero/
│   ├── hero-main.jpg        → homepage hero photo (recommended ~1600×700px)
│   ├── about-photo.jpg      → About page photo (~1200×600px)
│   └── og-cover.jpg         → social-share preview image (~1200×630px)
├── categories/
│   └── [category-slug].jpg  → one square-ish photo per category (~800×800px)
├── products/
│   └── p01.jpg, p02.jpg...  → one photo per product, matching its id in js/data.js (~800×600px)
└── articles/
    └── [article-name].jpg   → one wide photo per article (~1200×750px)
```

The exact filenames CozyFinds expects are already set in `js/data.js`
(look for the `image:` field on each product/category/article). Matching
the filename exactly (including lowercase and hyphens) is all you need to
do — no code changes required.

## Where to get images legally

- **Your own photos** are always the safest option, and often perform
  best on Pinterest since they feel authentic.
- **Free stock photo sites** like Unsplash, Pexels, and Pixabay offer
  images that are generally free to use — but always check the specific
  license on each individual photo before publishing, since terms can
  vary.
- **Official product images** — once you join an affiliate program (like
  Amazon Associates or similar), many programs allow you to use their
  official product photos under their operating agreement. Check the
  specific program's terms.
- Avoid pulling images directly from Pinterest, Google Images, or other
  websites unless you've confirmed you have the right to use them —
  most images you find that way are copyrighted to someone else.

## Image sizing tips

- Product photos look best around a 4:3 ratio (e.g., 800×600px).
- Category photos are square (1:1 ratio, e.g., 800×800px).
- Keep file sizes reasonable (under ~300KB each) so the site loads
  quickly — most image editors and free online compressors can do this
  for you.
