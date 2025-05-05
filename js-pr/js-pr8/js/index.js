let products = JSON.parse(localStorage.getItem('products')) || [];
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let editingCartIndex = null;

  function saveToStorage() {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function addOrUpdateProduct() {
    let name = document.getElementById('name').value.trim();
    let price = +document.getElementById('price').value;
    let quantity = +document.getElementById('quantity').value;
    let category = document.getElementById('category').value.trim();
    let total = price * quantity;

    if (!name || !price || !quantity) {
      alert('Please fill all required fields.');
      return;
    }

    let product = { name, price, quantity, category, total };

    if (editingCartIndex !== null) {
      cart[editingCartIndex] = product;
      editingCartIndex = null;
    } else {
      products.push(product);
    }

    saveToStorage();
    clearForm();
    renderProducts();
    renderCart();
  }

  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('category').value = '';
  }

  function renderProducts() {
    let table = document.getElementById('productTable');
    table.innerHTML = '';
    products.forEach((p, i) => {
      table.innerHTML += `
        <tr>
          <td>${p.name}</td>
          <td>₹${p.price}</td>
          <td>${p.quantity}</td>
          <td>₹${p.total}</td>
          <td>${p.category}</td>
          <td><button class="btn-edit" onclick="addToCart(${i})">Add to Cart</button></td>
        </tr>`;
    });
  }

  function renderCart() {
    let table = document.getElementById('cartTable');
    table.innerHTML = '';
    let totalValue = 0;
    cart.forEach((p, i) => {
      totalValue += p.total;
      table.innerHTML += `
        <tr>
          <td>${p.name}</td>
          <td>${p.quantity}</td>
          <td>₹${p.total}</td>
          <td>
            <button class="btn-edit" onclick="editCartItem(${i})">E</button>
            <button class="btn-delete" onclick="deleteCartItem(${i})">D</button>
          </td>
        </tr>`;
    });

    document.getElementById('totalValue').textContent = `Total: ₹${totalValue}`;
    document.getElementById('cartBadge').textContent = cart.length;
  }

  function addToCart(index) {
    cart.push(products[index]);
    products.splice(index, 1);
    saveToStorage();
    renderProducts();
    renderCart();
  }

  function editCartItem(index) {
    let p = cart[index];
    document.getElementById('name').value = p.name;
    document.getElementById('price').value = p.price;
    document.getElementById('quantity').value = p.quantity;
    document.getElementById('category').value = p.category;
    editingCartIndex = index;
  }

  function deleteCartItem(index) {
    let productToDelete = cart[index];
    cart.splice(index, 1);
    products = products.filter(p =>
      !(p.name === productToDelete.name &&
        p.price === productToDelete.price &&
        p.quantity === productToDelete.quantity &&
        p.category === productToDelete.category)
    );
    saveToStorage();
    renderCart();
    renderProducts();
  }

  function toggleCart() {
    document.getElementById('cartPanel').classList.toggle('open');
  }
  
  renderProducts();
  renderCart();