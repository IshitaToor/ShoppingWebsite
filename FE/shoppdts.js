let products = [];
let selectedCategories = [];

const grid = document.getElementById("product-grid");
const productCount = document.getElementById("product-count");
const sortSelect = document.getElementById("sort-select");

async function fetchProducts() {
  try {
    const response = await fetch("http://127.0.0.1:5000/api/products/all");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    grid.innerHTML = "<p>Failed to load products. Please try again later.</p>";
  }
}

function renderProducts(items) {
  grid.innerHTML = "";
  productCount.textContent = `${items.length} products`;

  items.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.setAttribute("data-id", product.id);

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>INR ${product.price}</p>
      <p style="font-size: 0.8rem;">${product.description}</p>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;

    // Add click event to the entire product card
    div.addEventListener("click", (e) => {
      if (!e.target.classList.contains("add-to-cart")) {
        const id = div.getAttribute("data-id");
        const selectedProduct = products.find(product => product.id === parseInt(id));
        localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
        window.location.href = `pdtdetailpg.html?id=${id}`;
      }
    });

    // Add click event to Add to Cart button only
    div.querySelector(".add-to-cart").addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent triggering parent click
      const productId = e.target.getAttribute("data-id");
      addToCart(productId);
    });

    grid.appendChild(div);
  });
}

function getFilteredProducts() {
  let result = [...products];

  if (selectedCategories.length > 0) {
    result = result.filter(p => selectedCategories.includes(p.category));
  }

  const sort = sortSelect.value;
  if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
  else if (sort === "name-asc") result.sort((a, b) => a.name.localeCompare(b.name));

  return result;
}

document.querySelectorAll(".category-filter").forEach(cb => {
  cb.addEventListener("change", () => {
    const val = cb.value;
    if (cb.checked) selectedCategories.push(val);
    else selectedCategories = selectedCategories.filter(c => c !== val);
    renderProducts(getFilteredProducts());
  });
});

sortSelect.addEventListener("change", () => {
  renderProducts(getFilteredProducts());
});

function addToCart(productId) {
  console.log("Product added to cart:", productId);
  // You can extend this for actual cart logic
}

// Initial rendering
fetchProducts();