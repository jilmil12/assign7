// List of products (or items)
const products = [
  "Crochet Bunny Keychain",
  "Miffy Phone Charm",
  "Pink Flower Bracelet",
  "Daisy Bag Charm",
  "Rainbow Neckchain",
  "Heart Crochet Bouquet",
  "Blue Star Keychain",
  "Bear Couple Keychain"
];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');

// Function to render the list
function renderList(filteredProducts) {
  productList.innerHTML = '';
  if (filteredProducts.length === 0) {
    productList.innerHTML = '<li style="color:#aaa;">No items found 💭</li>';
    return;
  }
  filteredProducts.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    productList.appendChild(li);
  });
}

// Initial display
renderList(products);

// Add event listener for real-time filtering
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = products.filter(item => item.toLowerCase().includes(query));
  renderList(filtered);
});
