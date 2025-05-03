let products = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = "";

function updateTotal() {
  let price = parseFloat(document.getElementById("price").value) || 0;
  let qty = parseFloat(document.getElementById("qty").value) || 0;
  let total = price * qty;
  document.getElementById("total").textContent = total.toFixed(2);
}

function render() {
  let list = document.getElementById("productList");
  list.innerHTML = "";
  products.forEach((p, i) => {
    let total = p.price * p.qty;
    list.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>₹${p.price}</td>
        <td>${p.qty}</td>
        <td>₹${total.toFixed(2)}</td>
        <td>${p.category}</td>
        <td>
          <button class="btn-edit" onclick="editProduct(${i})">Edit</button>
          <button class="btn-delete" onclick="deleteProduct(${i})">Delete</button>
        </td>
      </tr>
    `;
  });
  localStorage.setItem("products", JSON.stringify(products));
}

function submitProduct() {
  let name = document.getElementById("name").value.trim();
  let price = parseFloat(document.getElementById("price").value);
  let qty = parseFloat(document.getElementById("qty").value);
  let category = document.getElementById("category").value.trim();

  if (!name || !price || !qty || !category) {
    alert("Please fill all fields.");
    return;
  }

  let newProduct = { name, price, qty, category };

  if (editIndex === "") {
    products.push(newProduct);
  } else {
    products[editIndex] = newProduct;
    editIndex = "";
    document.getElementById("submitBtn").textContent = "Add Product";
    document.getElementById("submitBtn").className = "";
  }

  clearForm();
  render();
}

function editProduct(index) {
  let p = products[index];
  document.getElementById("name").value = p.name;
  document.getElementById("price").value = p.price;
  document.getElementById("qty").value = p.qty;
  document.getElementById("category").value = p.category;
  updateTotal();
  editIndex = index;
  document.getElementById("submitBtn").textContent = "Update Product";
  document.getElementById("submitBtn").className = "btn-update";
}

function deleteProduct(index) {
  if (confirm("Are you sure?")) {
    products.splice(index, 1);
    render();
  }
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("category").value = "";
  document.getElementById("total").textContent = "0";
  document.getElementById("submitBtn").textContent = "Add Product";
  document.getElementById("submitBtn").className = "";
  editIndex = "";
}

render();
