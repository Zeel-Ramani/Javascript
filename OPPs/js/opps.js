// class Hii {

//     a = 200;

//     hello() {
//         console.log("hello world", this.a);
//     }
// }

// let opjs = new Hii();
// opjs.hello();


// single inheritance

// class perent{

//     display(){
//         console.log("zeel")
//     }
// }

// class child extends perent{

//     display1(){
//         console.log("hello")
//     }
// }

// let obj = new child();
// obj.display1();


// multilevel inheritance

// class perent{
//     constructor(){
//         console.log("perent constructor")
//     }
//     hii(){
//         console.log("hello");
//     }
// }

// class child extends perent{
//     constructor(){
//         super();
//         console.log("child constructor")
//     }
//     hello(){
//         console.log("zeel ramani")
//     }
// }

// class child1 extends perent{
//     constructor(){
//         super();
//         console.log("child1 constructor")
//     }
//     display(){
//         console.log("1223")
//     }
// }

// let obj = new child1();
// obj.display();
// obj.hii();


// hierarchial inheritance

// class perent{
//     constructor(){
//         console.log("perent constructor")
//     }
//     hii(){
//         console.log("hello");
//     }
// }

// class child extends perent{
//     constructor(){
//         super();
//         console.log("child constructor")
//     }
//     hello(){

//         console.log("zeel ramani")
//     }
// }

// class child1 extends perent{
//     constructor(){
//         super();
//         console.log("child1 constructor")
//     }
//     display(){
//         console.log("animal")
//     }
// }

// let obj = new child1();
// obj.display();
// obj.hii();
// obj.hello()



let products = JSON.parse(localStorage.getItem('products')) || [];

    function renderProducts(filter = '') {
      const productList = document.getElementById('productList');
      productList.innerHTML = '';
      products.forEach((product, index) => {
        if (!product.name.toLowerCase().includes(filter.toLowerCase())) return;
        productList.innerHTML += `
          <div class="card">
            <img src="${product.image}" alt="Product Image">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="cart-btn">Add to Cart</button>
            <div class="actions">
              <button onclick="editProduct(${index})">Edit</button>
              <button onclick="deleteProduct(${index})">Delete</button>
            </div>
          </div>
        `;
      });
    }

    function addProduct() {
      const name = document.getElementById('name').value;
      const price = document.getElementById('price').value;
      const image = document.getElementById('image').value;
      if (!name || !price || !image) return alert('Please fill all fields.');

      products.unshift({ name, price, image }); // Add to top
      localStorage.setItem('products', JSON.stringify(products));
      renderProducts();

      document.getElementById('name').value = '';
      document.getElementById('price').value = '';
      document.getElementById('image').value = '';
    }

    function editProduct(index) {
      const newName = prompt("Enter new name:", products[index].name);
      const newPrice = prompt("Enter new price:", products[index].price);
      const newImage = prompt("Enter new image URL:", products[index].image);

      if (newName && newPrice && newImage) {
        products[index] = { name: newName, price: newPrice, image: newImage };
        localStorage.setItem('products', JSON.stringify(products));
        renderProducts();
      }
    }

    function deleteProduct(index) {
      if (confirm("Are you sure to delete this product?")) {
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        renderProducts();
      }
    }

    function searchProducts() {
      const searchValue = document.getElementById('searchInput').value;
      renderProducts(searchValue);
    }

    renderProducts();  