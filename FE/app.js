let cart = [];

function addToCart(id, name, price) {
  const item = cart.find(product => product.id === id);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  alert(`${name} added to cart!`);
  console.log(cart);
}
const productGrid = document.getElementById('product-grid');
const collectionGrid = document.getElementById('collection-grid');

// Render products
window.products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price.toFixed(2)}</p>
    <p>${product.description}</p>
    <button class="btn-outline">Add to Cart</button>
  `;
  productGrid.appendChild(card);
});

// Render collections
window.collections.forEach(collection => {
  const card = document.createElement('div');
  card.className = 'collection-card';
  card.innerHTML = `
    <img src="${collection.image}" alt="${collection.name}">
    <div class="overlay">
      <h3>${collection.name}</h3>
      <p>${collection.description}</p>
      <span class="btn-outline">Explore</span>
    </div>
  `;
  collectionGrid.appendChild(card);
});
