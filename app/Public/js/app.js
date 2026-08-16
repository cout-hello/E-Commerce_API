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

  document.title = product.name + " — Product Details — Admin Panel";
}

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

document.addEventListener("DOMContentLoaded", () => {
  initSidebarToggle();
  initProductDetailsPage();
  initProductSearch();
});
