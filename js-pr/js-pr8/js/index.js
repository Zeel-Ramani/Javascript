let products = JSON.parse(localStorage.getItem("products")) || [];

function saveToStorage() {
    localStorage.setItem("products", JSON.stringify(products));
}

function renderProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Clear before rendering

    products.forEach((product, index) => {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" width="100" />
                <h2>${product.name}</h2>
                <p>Price: ₹${product.price}</p>
                <p>Quantity: ${product.quantity}</p>
                <p>Total: ₹${product.total}</p>
                <p>Category: ${product.category}</p>
                <button onclick="openEditModal(${index})">Edit</button>
                <button onclick="deleteProduct(${index})">Delete</button>
            </div>
        `;
    });
}

function calculateTotal() {
    const price = parseFloat(document.getElementById("productPrice").value) || 0;
    const quantity = parseInt(document.getElementById("productQuantity").value) || 0;
    const total = price * quantity;
    document.getElementById("productTotal").value = total.toFixed(2);
}

function addProduct() {
    const name = document.getElementById("productName").value;
    const price = parseFloat(document.getElementById("productPrice").value) || 0;
    const quantity = parseInt(document.getElementById("productQuantity").value) || 0;
    const category = document.getElementById("productCategory").value;
    const image = document.getElementById("productImage").value;
    const total = price * quantity;

    if (!name || !price || !quantity || !category || !image) {
        alert("Please fill out all fields.");
        return;
    }

    const newProduct = {
        name,
        price,
        quantity,
        total: total.toFixed(2),
        category,
        image
    };

    products.push(newProduct);
    saveToStorage();
    renderProducts();

    // Clear input fields
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productQuantity").value = "";
    document.getElementById("productTotal").value = "";
    document.getElementById("productCategory").value = "";
    document.getElementById("productImage").value = "";
}

function openEditModal(index) {
    const product = products[index];
    document.getElementById("editName").value = product.name;
    document.getElementById("editPrice").value = product.price;
    document.getElementById("editQuantity").value = product.quantity;
    document.getElementById("editCategory").value = product.category;
    document.getElementById("editImage").value = product.image;
    document.getElementById("editTotal").value = product.total;

    const modal = document.getElementById("editModal");
    modal.style.display = "block";
    modal.dataset.index = index;
}

function closeModal() {
    const modal = document.getElementById("editModal");
    modal.style.display = "none";
}

function saveEditedProduct() {
    const index = document.getElementById("editModal").dataset.index;
    const name = document.getElementById("editName").value;
    const price = parseFloat(document.getElementById("editPrice").value) || 0;
    const quantity = parseInt(document.getElementById("editQuantity").value) || 0;
    const category = document.getElementById("editCategory").value;
    const image = document.getElementById("editImage").value;
    const total = price * quantity;

    if (!name || !price || !quantity || !category || !image) {
        alert("Please fill out all fields.");
        return;
    }

    products[index] = {
        name,
        price,
        quantity,
        total: total.toFixed(2),
        category,
        image
    };

    saveToStorage();
    renderProducts();
    closeModal();
}

function deleteProduct(index) {
    if (confirm("Are you sure you want to delete this product?")) {
        products.splice(index, 1);
        saveToStorage();
        renderProducts();
    }
}

// Initial render
renderProducts();
