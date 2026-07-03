function fmt(n) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const CATEGORY_ICON = {
  "Home & Gadgets": "\u{1F3E0}",
  "Beauty": "\u{1F484}",
  "Health & Wellness": "\u{1F33F}",
  "Pet": "\u{1F43E}",
  "Auto & Tech": "\u{1F697}",
  "Fitness": "\u{1F3CB}\u{FE0F}"
};

function hashSeed(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

// Self-contained SVG placeholder (no external image requests, so the
// catalog never shows broken images regardless of network conditions).
function placeholderImg(seed, category) {
  const hash = hashSeed(seed);
  const hue = hash % 360;
  const hue2 = (hue + 45) % 360;
  const icon = CATEGORY_ICON[category] || "\u{1F4E6}";
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='hsl(${hue},60%,42%)'/>
        <stop offset='100%' stop-color='hsl(${hue2},70%,24%)'/>
      </linearGradient>
    </defs>
    <rect width='600' height='600' fill='url(#g)'/>
    <text x='50%' y='53%' font-size='190' text-anchor='middle' dominant-baseline='middle'>${icon}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function imgUrl(seed, category) {
  return placeholderImg(seed, category);
}

function badgeHtml(p) {
  return p.badge ? `<span class="badge">${p.badge}</span>` : "";
}

function cardHtml(p) {
  const m = margin(p).toFixed(0);
  const pr = profit(p);
  return `
    <a class="card" href="product.html?id=${p.id}">
      <div class="card-media">
        <img src="${imgUrl(p.seed, p.category)}" alt="${p.name}">
        ${badgeHtml(p)}
        <span class="margin-pill">${m}% margin</span>
      </div>
      <div class="card-body">
        <span class="card-cat">${p.category}</span>
        <h3 class="card-title">${p.name}</h3>
        <p class="card-blurb">${p.blurb}</p>
        <div class="card-rating">★ ${p.rating} <span>(${p.reviews.toLocaleString()})</span></div>
        <div class="price-row">
          <div>
            <div class="price-sell">${fmt(p.price)}</div>
            <div class="price-cost">supplier cost ${fmt(p.cost)}</div>
          </div>
          <div class="price-profit">+${fmt(pr)} profit</div>
        </div>
      </div>
    </a>
  `;
}

function renderGrid(container, items) {
  if (!items.length) {
    container.innerHTML = `<div class="no-results">No products match those filters. Try clearing search or category.</div>`;
    return;
  }
  container.innerHTML = items.map(cardHtml).join("");
}

function setupCatalog({ gridId, filterId, sortId, searchId, countId, limit }) {
  const grid = document.getElementById(gridId);
  const filterBar = filterId ? document.getElementById(filterId) : null;
  const sortSelect = sortId ? document.getElementById(sortId) : null;
  const searchBox = searchId ? document.getElementById(searchId) : null;
  const countEl = countId ? document.getElementById(countId) : null;

  let activeCategory = "All";
  let searchTerm = "";
  let sortMode = "margin-desc";

  const categories = ["All", ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  if (filterBar) {
    filterBar.innerHTML = categories
      .map(c => `<button class="chip${c === "All" ? " active" : ""}" data-cat="${c}">${c}</button>`)
      .join("");
    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      activeCategory = btn.dataset.cat;
      [...filterBar.children].forEach(c => c.classList.toggle("active", c === btn));
      update();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      sortMode = sortSelect.value;
      update();
    });
  }

  if (searchBox) {
    searchBox.addEventListener("input", () => {
      searchTerm = searchBox.value.trim().toLowerCase();
      update();
    });
  }

  function update() {
    let items = PRODUCTS.filter(p => {
      const matchesCat = activeCategory === "All" || p.category === activeCategory;
      const matchesSearch = !searchTerm || p.name.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm);
      return matchesCat && matchesSearch;
    });

    switch (sortMode) {
      case "margin-desc": items.sort((a, b) => margin(b) - margin(a)); break;
      case "profit-desc": items.sort((a, b) => profit(b) - profit(a)); break;
      case "price-asc": items.sort((a, b) => a.price - b.price); break;
      case "price-desc": items.sort((a, b) => b.price - a.price); break;
      case "rating-desc": items.sort((a, b) => b.rating - a.rating); break;
    }

    if (limit) items = items.slice(0, limit);

    if (countEl) countEl.textContent = `${items.length} product${items.length === 1 ? "" : "s"}`;
    renderGrid(grid, items);
  }

  update();
}

function setupCalculator() {
  const select = document.getElementById("calcProduct");
  const qtyInput = document.getElementById("calcQty");
  const out = document.getElementById("calcOut");
  if (!select) return;

  select.innerHTML = PRODUCTS
    .slice()
    .sort((a, b) => margin(b) - margin(a))
    .map(p => `<option value="${p.id}">${p.name}</option>`)
    .join("");

  function update() {
    const p = PRODUCTS.find(x => x.id === select.value) || PRODUCTS[0];
    const qty = Math.max(1, parseInt(qtyInput.value, 10) || 1);
    const revenue = p.price * qty;
    const cost = p.cost * qty;
    const totalProfit = revenue - cost;
    out.querySelector('[data-k="revenue"]').textContent = fmt(revenue);
    out.querySelector('[data-k="cost"]').textContent = fmt(cost);
    out.querySelector('[data-k="profit"]').textContent = fmt(totalProfit);
  }

  select.addEventListener("change", update);
  qtyInput.addEventListener("input", update);
  update();
}
