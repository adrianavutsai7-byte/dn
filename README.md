# MarginHaul

A static storefront concept for browsing high-margin dropshipping products. Every product shows supplier cost, sell price, profit per unit, and margin %, and can be filtered by category or sorted by margin/profit/price/rating. Includes a simple profit calculator.

## Pages

- `index.html` — landing page with top 8 trending picks, "why these products" section, and profit calculator
- `shop.html` — full 18-product catalog with category filters, search, and sorting
- `product.html?id=<slug>` — individual product detail view

## Structure

- `js/products.js` — product data (name, category, cost, price, rating, etc.)
- `js/main.js` — rendering, filtering/sorting, and the profit calculator logic
- `css/style.css` — all styling
- Product images are generated as inline SVG placeholders (no external image requests, no build step required)

## Running locally

No build step needed — it's plain HTML/CSS/JS. Serve the folder with any static server, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Notes

This is a demo/marketing storefront, not a live store: there's no cart, checkout, or payment processing. Costs and prices are illustrative for planning purposes — verify real supplier costs before listing any product for sale.
