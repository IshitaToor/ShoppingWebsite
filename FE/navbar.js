// navbar.js
document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
      <nav class="navbar">
        <div class="logo">
          <a href="index.html">COMETICA</a>
        </div>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="collection.html">Collection</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <div class="cart-icon">
          <a href="cart.html">🛒 <span class="cart-count" id="cart-count">0</span></a>
        </div>
      </nav>
    `;
  
    const navbarContainer = document.createElement('div');
    navbarContainer.innerHTML = navbarHTML;
    document.body.insertBefore(navbarContainer, document.body.firstChild);
  
    const count = localStorage.getItem("cartCount") || 0;
    document.getElementById("cart-count").textContent = count;
  });
  
 

  