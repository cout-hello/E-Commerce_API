/* ==========================================================================
   Admin Panel — Shared JavaScript
   Used by: products.html, product-details.html

   NOTE on future EJS conversion:
   The PRODUCTS array below stands in for data that would normally come
   from a database and be passed into an EJS template as `products` /
   `product`. Once converted, most of this file's "populate the page"
   logic goes away — you'd just render <%= product.name %> etc. directly
   in the HTML. Only the sidebar toggle and table search would remain.
   ========================================================================== */

// ---- Sample product data --------------------------------------------------
// In production this would be fetched from the backend (e.g. a MongoDB /
// PostgreSQL products table) and passed into the template.
const PRODUCTS = [
  {
    id: "P001",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    category: "Electronics",
    stock: 34,
    description:
      "Over-ear wireless headphones with active noise cancellation, 30-hour battery life, and a foldable design for easy travel.",
    createdAt: "2024-11-02",
    updatedAt: "2025-01-15",
  },
  {
    id: "P002",
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    category: "Apparel",
    stock: 120,
    description:
      "A soft, breathable everyday t-shirt made from 100% GOTS-certified organic cotton. Available in multiple colors and sizes.",
    createdAt: "2024-09-18",
    updatedAt: "2025-02-01",
  },
  {
    id: "P003",
    name: "Stainless Steel Water Bottle",
    price: 18.5,
    category: "Home & Kitchen",
    stock: 8,
    description:
      "Double-wall vacuum insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. 750ml capacity.",
    createdAt: "2024-08-05",
    updatedAt: "2025-01-28",
  },
  {
    id: "P004",
    name: "Yoga Mat Pro",
    price: 34.0,
    category: "Sports & Outdoors",
    stock: 0,
    description:
      "Extra-thick 6mm non-slip yoga mat with carrying strap, ideal for yoga, pilates, and general floor exercises.",
    createdAt: "2024-06-21",
    updatedAt: "2024-12-30",
  },
  {
    id: "P005",
    name: "Ceramic Coffee Mug Set",
    price: 29.99,
    category: "Home & Kitchen",
    stock: 56,
    description:
      "Set of 4 handcrafted ceramic mugs, 350ml each, dishwasher and microwave safe. Neutral matte finish.",
    createdAt: "2024-10-12",
    updatedAt: "2025-01-09",
  },
  {
    id: "P006",
    name: "Running Shoes - Men",
    price: 89.99,
    category: "Footwear",
    stock: 42,
    description:
      "Lightweight running shoes with breathable mesh upper and responsive cushioned sole for daily training runs.",
    createdAt: "2024-07-14",
    updatedAt: "2025-02-10",
  },
  {
    id: "P007",
    name: "Facial Cleanser 200ml",
    price: 15.75,
    category: "Beauty & Personal Care",
    stock: 5,
    description:
      "Gentle daily facial cleanser formulated with aloe vera and green tea extract, suitable for all skin types.",
    createdAt: "2024-12-01",
    updatedAt: "2025-02-05",
  },
  {
    id: "P008",
    name: "Leather Wallet",
    price: 45.0,
    category: "Accessories",
    stock: 27,
    description:
      "Slim bifold wallet crafted from genuine full-grain leather with 6 card slots and a hidden coin pocket.",
    createdAt: "2024-05-30",
    updatedAt: "2024-11-22",
  },
];

// ---- Helpers ---------------------------------------------------------------

/**
 * Returns a { label, className } pair describing stock status,
 * used to render the badge next to a stock quantity.
 */
function getStockStatus(stock) {
  if (stock === 0) {
    return { label: "Out of Stock", className: "badge-danger" };
  }
  if (stock <= 10) {
    return { label: "Low Stock", className: "badge-warning" };
  }
  return { label: "In Stock", className: "badge-success" };
}

function formatPrice(price) {
  return "$" + Number(price).toFixed(2);
}

// ---- Sidebar toggle (mobile off-canvas menu) --------------------------------
// Shared between both pages: opens/closes the sidebar drawer on small screens.
function initSidebarToggle() {
  const toggleBtn = document.getElementById("sidebarToggle");
  const overlay = document.getElementById("sidebarOverlay");

  if (!toggleBtn || !overlay) return;

  function closeSidebar() {
    document.body.classList.remove("sidebar-open");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-open");
  });

  overlay.addEventListener("click", closeSidebar);
}

// ---- Product Details page: populate fields from the URL's ?id= param -------
function initProductDetailsPage() {
  const page = document.body.getAttribute("data-page");
  if (page !== "product-details") return;

  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get("id");
  const product =
    PRODUCTS.find((item) => item.id === requestedId) || PRODUCTS[0];

  const stockStatus = getStockStatus(product.stock);

  document.getElementById("productId").textContent = product.id;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productPrice").textContent = formatPrice(
    product.price
  );
  document.getElementById("productCategory").textContent = product.category;
  document.getElementById("productStockNum").textContent = product.stock;
  document.getElementById("productDescription").textContent =
    product.description;
  document.getElementById("productCreatedAt").textContent = product.createdAt;
  document.getElementById("productUpdatedAt").textContent = product.updatedAt;

  const stockBadge = document.getElementById("productStockBadge");
  stockBadge.textContent = stockStatus.label;
  stockBadge.className = "badge " + stockStatus.className;

  // Keep the page's <title> and topbar in sync with the loaded product.
  document.title = product.name + " — Product Details — Admin Panel";
}

// ---- Products page: simple client-side table search -------------------------
function initProductSearch() {
  const searchInput = document.getElementById("productSearch");
  const table = document.getElementById("productsTable");
  if (!searchInput || !table) return;

  const rows = Array.from(table.querySelectorAll("tbody tr"));

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    rows.forEach((row) => {
      const matches = row.textContent.toLowerCase().includes(query);
      row.style.display = matches ? "" : "none";
    });
  });
}

// ---- Init --------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initSidebarToggle();
  initProductDetailsPage();
  initProductSearch();
});
