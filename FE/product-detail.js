// Sample product data
const products = [
    {
      id: 1,
      name: "White T-Shirt",
      price: 450,
      category: "Tops",
      image: "images/white-tshirt.webp",
      description: "A timeless white t-shirt made with 100% organic cotton. Perfect for any casual outfit."
    },
    {
      id: 2,
      name: "Denim Jeans",
      price: 700,
      category: "Bottoms",
      image: "images/denim-jeans.webp",
      description: "Classic denim jeans with a slim fit. Made for everyday wear."
    },
    {
      id: 3,
      name: "Formal Blazer",
      price: 1400,
      category: "Formal",
      image: "images/formal-blazer.webp",
      description: "A sharp formal blazer to complete your professional look."
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 800,
      category: "Shoes",
      image: "images/running-shoes.webp",
      description: "Comfortable running shoes designed for performance and durability."
    },
    {
      id: 5,
      name: "Sunglasses",
      price: 500,
      category: "Accessories",
      image: "images/sunglasses.webp",
      description: "Stylish UV-protected sunglasses for sunny days."
    },
    {
      id: 6,
      name: "Oversized",
      price: 550,
      category: "Hoodies",
      image: "images/over-sized.webp",
      description: "Cozy oversized hoodie perfect for chilly days."
    },
    {
      id: 7,
      name: "Faux Leather Skirt",
      price: 700,
      category: "Outwear",
      image: "images/faux-leather.jpg",
      description: "Elegant faux leather skirt that elevates your style instantly."
    }
  ];
  
  // Get product ID from URL
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));
  
  // Find the product
  const product = products.find(p => p.id === productId);
  
  // Populate the page
  if (product) {
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `INR ${product.price}`;
    document.getElementById("product-description").textContent = product.description;
  }
  
  // Quantity logic
  let quantity = 1;
  const quantitySpan = document.getElementById("quantity");
  document.getElementById("increase").addEventListener("click", () => {
    quantity++;
    quantitySpan.textContent = quantity;
  });
  document.getElementById("decrease").addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantitySpan.textContent = quantity;
    }
  });
  const sizeButtons = document.querySelectorAll(".size-btn");

  sizeButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons
      sizeButtons.forEach(btn => btn.classList.remove("active"));
      // Add 'active' to the clicked one
      button.classList.add("active");
    });
  });  