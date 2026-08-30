/* =====================================================
   CozyFinds — Site Behavior
   -----------------------------------------------------
   This file reads the data in data.js and turns it into
   HTML, plus handles small features like the mobile menu,
   search, and category filters.

   You usually won't need to edit this file. To add or
   change products/articles, edit js/data.js instead.
   ===================================================== */

/* ========== 1. PLACEHOLDER IMAGE HELPER ========== */
/* Generates a simple on-brand placeholder image (no
   internet connection or image file required) so the
   site never shows a broken image icon before you add
   real photos. */
function placeholderImage(label) {
  const safeLabel = escapeHTML((label || "CozyFinds").slice(0, 42));
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480" viewBox="0 0 640 480">'
    + '<rect width="100%" height="100%" fill="#F3E3DC"/>'
    + '<text x="50%" y="44%" font-family="sans-serif" font-size="46" text-anchor="middle" dominant-baseline="middle">&#128444;&#65039;</text>'
    + '<text x="50%" y="62%" font-family="sans-serif" font-size="20" fill="#B5654A" text-anchor="middle" dominant-baseline="middle">' + safeLabel + '</text>'
    + '</svg>';
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

function applyImageFallback(imgEl, label) {
  imgEl.addEventListener("error", function onError() {
    imgEl.removeEventListener("error", onError);
    imgEl.src = placeholderImage(label);
  });
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str === null || str === undefined ? "" : String(str);
  return div.innerHTML;
}

/* ========== 2. DATA HELPER FUNCTIONS ========== */
function getProductsBySection(section) {
  return PRODUCTS.filter(function (p) { return p.section === section; });
}

function getProductsByCategory(categorySlug) {
  return PRODUCTS.filter(function (p) { return p.category === categorySlug; });
}

function getProductsByIds(ids) {
  return ids
    .map(function (id) { return PRODUCTS.find(function (p) { return p.id === id; }); })
    .filter(Boolean);
}

function getFeaturedProducts(limit) {
  const featured = PRODUCTS.filter(function (p) { return p.featured; });
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}

function getLatestProducts(limit) {
  const latest = PRODUCTS.filter(function (p) { return p.latest; });
  return typeof limit === "number" ? latest.slice(0, limit) : latest;
}

function searchProducts(query) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return [];
  return PRODUCTS.filter(function (p) {
    return (
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.tags || []).some(function (tag) { return tag.toLowerCase().includes(q); })
    );
  });
}

/* ========== 3. RENDER FUNCTIONS ========== */
function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card reveal";

  const imageWrap = document.createElement("div");
  imageWrap.className = "product-card__image-wrap";

  const img = document.createElement("img");
  img.className = "product-card__image";
  img.src = product.image;
  img.alt = product.imageAlt || product.name;
  img.loading = "lazy";
  applyImageFallback(img, product.name);
  imageWrap.appendChild(img);

  const body = document.createElement("div");
  body.className = "product-card__body";
  // NOTE: product.price intentionally is NOT rendered here. It's kept in
  // js/data.js for internal reference, but hidden from visitors until
  // verified current prices are ready to display.
  body.innerHTML =
    '<h3 class="product-card__name">' + escapeHTML(product.name) + '</h3>' +
    '<p class="product-card__description">' + escapeHTML(product.description) + '</p>' +
    '<div class="product-card__footer">' +
      '<a class="btn btn--primary product-card__cta" href="' + escapeHTML(product.affiliateLink) + '" ' +
         'target="_blank" rel="nofollow sponsored noopener" ' +
         'aria-label="View ' + escapeHTML(product.name) + ' (opens in a new tab)">View Product</a>' +
      '<span class="product-card__link-note">Affiliate link</span>' +
    '</div>';

  card.appendChild(imageWrap);
  card.appendChild(body);
  return card;
}

function renderProductGrid(products, container, emptyMessage) {
  if (!container) return;
  container.innerHTML = "";
  if (!products || !products.length) {
    const p = document.createElement("p");
    p.className = "empty-state";
    p.textContent = emptyMessage || "No products found here yet — check back soon!";
    container.appendChild(p);
    return;
  }
  const fragment = document.createDocumentFragment();
  products.forEach(function (product) { fragment.appendChild(createProductCard(product)); });
  container.appendChild(fragment);
}

function createCategoryCard(category, targetPage) {
  const link = document.createElement("a");
  link.className = "category-card reveal";
  link.href = targetPage + "?category=" + encodeURIComponent(category.slug);

  const imageWrap = document.createElement("div");
  imageWrap.className = "category-card__image-wrap";

  const img = document.createElement("img");
  img.className = "category-card__image";
  img.src = category.image;
  img.alt = category.name;
  img.loading = "lazy";
  applyImageFallback(img, category.name);
  imageWrap.appendChild(img);

  const name = document.createElement("h3");
  name.className = "category-card__name";
  name.textContent = category.name;

  link.appendChild(imageWrap);
  link.appendChild(name);
  return link;
}

function renderCategoryGrid(categories, targetPage, container) {
  if (!container) return;
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();
  categories.forEach(function (cat) { fragment.appendChild(createCategoryCard(cat, targetPage)); });
  container.appendChild(fragment);
}

function createArticleCard(article) {
  const card = document.createElement("article");
  card.className = "article-card reveal";

  const imageLink = document.createElement("a");
  imageLink.className = "article-card__image-wrap";
  imageLink.href = article.link;
  imageLink.setAttribute("aria-hidden", "true");
  imageLink.tabIndex = -1;

  const img = document.createElement("img");
  img.className = "article-card__image";
  img.src = article.image;
  img.alt = article.imageAlt || article.title;
  img.loading = "lazy";
  applyImageFallback(img, article.title);
  imageLink.appendChild(img);

  const body = document.createElement("div");
  body.className = "article-card__body";
  body.innerHTML =
    '<span class="article-card__badge">' + escapeHTML(article.badge) + '</span>' +
    '<h3 class="article-card__title"><a href="' + escapeHTML(article.link) + '">' + escapeHTML(article.title) + '</a></h3>' +
    '<p class="article-card__excerpt">' + escapeHTML(article.excerpt) + '</p>' +
    '<a class="article-card__link" href="' + escapeHTML(article.link) + '">Read More &rarr;</a>';

  card.appendChild(imageLink);
  card.appendChild(body);
  return card;
}

function renderArticleGrid(articles, container) {
  if (!container) return;
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();
  articles.forEach(function (article) { fragment.appendChild(createArticleCard(article)); });
  container.appendChild(fragment);
}

/* ========== 4. CATEGORY FILTER PILLS (room-finds / gift-ideas) ========== */
function setupCategoryFilters(sectionKey, gridEl, filterBarEl, emptyMessage) {
  if (!gridEl || !filterBarEl) return;

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "all";

  const pills = filterBarEl.querySelectorAll(".filter-pill");
  const validSlugs = Array.prototype.map.call(pills, function (btn) { return btn.dataset.category; });
  if (validSlugs.indexOf(activeCategory) === -1) {
    activeCategory = "all";
  }

  function applyActiveStyles() {
    pills.forEach(function (btn) {
      const isActive = btn.dataset.category === activeCategory;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  function render() {
    const all = getProductsBySection(sectionKey);
    const products = activeCategory === "all"
      ? all
      : all.filter(function (p) { return p.category === activeCategory; });
    renderProductGrid(products, gridEl, emptyMessage);
    applyActiveStyles();
    setupScrollReveal();
  }

  pills.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activeCategory = btn.dataset.category;
      const url = new URL(window.location.href);
      if (activeCategory === "all") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", activeCategory);
      }
      history.replaceState({}, "", url);
      render();
    });
  });

  render();
}

/* ========== 5. MOBILE NAVIGATION ========== */
function setupMobileNav() {
  const toggleBtn = document.getElementById("hamburger-btn");
  const nav = document.getElementById("main-nav");
  if (!toggleBtn || !nav) return;

  toggleBtn.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("is-open");
    toggleBtn.classList.toggle("is-open", isOpen);
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggleBtn.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ========== 6. ACTIVE NAV LINK HIGHLIGHT ========== */
function highlightActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav__list a").forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });
}

/* ========== 7. BACK TO TOP BUTTON ========== */
function setupBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", function () {
    btn.classList.toggle("is-visible", window.scrollY > 500);
  });
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ========== 8. SCROLL REVEAL ANIMATION ========== */
function setupScrollReveal() {
  const items = document.querySelectorAll(".reveal:not(.reveal--visible)");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("reveal--visible"); });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal--visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(function (el) { observer.observe(el); });
}

/* ========== 9. FOOTER YEAR ========== */
function setFooterYear() {
  const el = document.getElementById("current-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ========== 10. CONTACT FORM (no backend — shows a friendly confirmation) ========== */
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const status = document.getElementById("contact-form-status");
    if (status) {
      status.textContent = "Thanks for reaching out! This form isn't connected to an inbox yet — see the note below for how to activate it, or email us directly.";
      status.classList.add("is-visible");
    }
    form.reset();
  });
}

/* ========== 11. GLOBAL INIT — runs on every page ========== */
document.addEventListener("DOMContentLoaded", function () {
  setupMobileNav();
  highlightActiveNavLink();
  setupBackToTop();
  setupScrollReveal();
  setFooterYear();
  setupContactForm();
});
