const products = [
    { id: 1, name: "Смартфон", category: "electronics", price: 20000, image: "images/смартфон.jpg" },
    { id: 2, name: "Футболка", category: "clothing", price: 1500, image: "images/футболка.jpg" },
    { id: 3, name: "Часы", category: "accessories", price: 5000, image: "images/часы.jpg" },
    { id: 4, name: "Ноутбук", category: "electronics", price: 60000, image: "images/ноутбук.jpg" },
    { id: 5, name: "Кепка", category: "clothing", price: 800, image: "images/кепка.jpg" },
    { id: 6, name: "Наушники", category: "electronics", price: 3000, image: "images/наушники.jpg" },
    { id: 7, name: "Куртка", category: "clothing", price: 5000, image: "images/куртка.jpg" },
    { id: 8, name: "Очки", category: "accessories", price: 2000, image: "images/очки.jpg" },
    { id: 9, name: "Планшет", category: "electronics", price: 25000, image: "images/планшет.png" },
    { id: 10, name: "Рюкзак", category: "accessories", price: 4000, image: "images/рюкзак.jpg" },
    { id: 11, name: "Кроссовки", category: "clothing", price: 7000, image: "images/кроссовки.jpg" },
    { id: 12, name: "Монитор", category: "electronics", price: 15000, image: "images/монитор.jpg" },
    { id: 13, name: "Браслет", category: "accessories", price: 1200, image: "images/браслет.jpg" },
    { id: 14, name: "Штаны", category: "clothing", price: 2500, image: "images/штаны.jpg" },
    { id: 15, name: "Клавиатура", category: "electronics", price: 5000, image: "images/клавиатура.jpeg" },
    { id: 16, name: "Пояс", category: "accessories", price: 900, image: "images/Ремень.jpg" },
    { id: 17, name: "Телевизор", category: "electronics", price: 40000, image: "images/телевизор.jpg" },
    { id: 18, name: "Перчатки", category: "clothing", price: 1000, image: "images/перчатки.jpg" },
    { id: 19, name: "Колонка", category: "electronics", price: 8000, image: "images/колонка.jpg" },
    { id: 20, name: "Шапка", category: "clothing", price: 1200, image: "images/шапка.jpg" },
  ];
  
  const cart = [];
  const productList = document.getElementById("productList");
  const searchInput = document.getElementById("search");
  const categoryFilter = document.getElementById("categoryFilter");
  const cartItems = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalPrice");
  
  // Render products
  function renderProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
  
    const filteredProducts = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm);
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  
    productList.innerHTML = filteredProducts.map(product => `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} ₽</p>
        <button onclick="addToCart(${product.id})">Добавить в корзину</button>
      </div>
    `).join("");
  }
  
  // Add to cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
  }
  
  // Render cart
  function renderCart() {
    cartItems.innerHTML = cart.map((item, index) => `
      <li>
        ${item.name} - ${item.price} ₽
        <button onclick="removeFromCart(${index})">Удалить</button>
      </li>
    `).join("");
  
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    totalPriceElement.textContent = `Общая стоимость: ${totalPrice} ₽`;
  }
  
  // Remove from cart
  function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
  }
  
  // Event listeners
  searchInput.addEventListener("input", renderProducts);
  categoryFilter.addEventListener("change", renderProducts);
  
  // Initial render
  renderProducts();
  