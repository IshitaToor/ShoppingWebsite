const products = [
    {
      id: 1,
      name: "White T-Shirt",
      price: 450,
      category: "Tops",
      image: "images/white-tshirt.webp"
    },
    {
      id: 2,
      name: "Denim Jeans",
      price: 700,
      category: "Bottoms",
      image: "images/denim-jeans.webp"
    },
    {
      id: 3,
      name: "Formal Blazer",
      price: 1400,
      category: "Formal",
      image: "images/formal-blazer.webp"
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 800,
      category: "Shoes",
      image: "images/running-shoes.webp"
    },
    {
      id: 5,
      name: "Sunglasses",
      price: 500,
      category: "Accessories",
      image: "images/sunglasses.webp"
    },
    {
      id: 6,
      name: "Oversized",
      price: 550,
      category: "Hoodies",
      image: "images/over-sized.webp"
    },
    {
      id: 7,
      name: "Faux Leather Skirt",
      price: 700,
      category: "Outwear",
      image: "images/faux-leather.jpg"
    }
  ];

  
    let selectedCategories = [];
  
  const grid = document.getElementById("product-grid");
  const productCount = document.getElementById("product-count");
  const sortSelect = document.getElementById("sort-select");
  
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
        <p style="font-size: 0.8rem;">${product.category}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      `;
  
      // Add click event to the entire product card
      div.addEventListener("click", (e) => {
        if (!e.target.classList.contains("add-to-cart")) {
          const id = div.getAttribute("data-id");
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

  document.querySelectorAll(".product-card img").forEach(img => {
    img.addEventListener("click", () => {
      window.location.href = "product-detail.html";
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
  renderProducts(products);
  