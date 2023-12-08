//getting the current year and displaying it in the span next to the copyright
document.querySelector("#currYear").textContent = new Date().getUTCFullYear();

let loaderDiv = document.getElementById('spinner')
let errorMsg = document.getElementById('errorHandler')

let products = JSON.parse(localStorage.getItem("products"));
let adminTable = document.querySelector("[data-admin-table]");

//displaying the admin table with a button that triggers a modal pop up
function displayAdmin() {
  adminTable.innerHTML = "";
  try {

    if(products){
      products.forEach((prod, index) => {
        adminTable.innerHTML += `
                  <tr>
                    <td>${index + 1}</td>
                    <td>${prod.name}</td>
                    <td><img src="${prod.image}" alt="${prod.name
                    }" class="img-fluid" style="width:15rem;"></td>
                    <td>${prod.price}0</td>
                    <td>
                    <!-- Button trigger modal -->
                    <button type="button"  class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#editProduct${
                      prod.id
                    }">
                       <i class="bi bi-pencil-square"></i>
                    </button>
                    
                    <!-- Modal -->
                    <div class="modal fade" id="editProduct${
                      prod.id
                    }" tabindex="-1" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="modalHeader">Edit Product</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                             <form>
                               <label>ID</label>
                               <br><br>
                               <input type="text" id="proID${prod.id}" placeholder='ID' value="${
                                 prod.id
                               }" readonly>
                               <br><br>
                               <label>Name</label>
                               <br><br>
                               <input type="text" id="proName${prod.id}" placeholder="Enter product's name" value="${
                                 prod.name
                               }">
                               <br><br>
                               <label>Image URL</label>
                               <br><br>
                               <input type="text" id="proImage${prod.id}" placeholder="Enter product's image link" value="${
                                 prod.image
                               }">
                               <br><br>
                               <label>Price</label>
                               <br><br>
                               <input type="text" id="proPrice${prod.id}" placeholder="Enter product's price" value="${
                                 prod.price
                               }">
                               <br><br>
                             </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success" onclick='new UpdateProduct(${JSON.stringify(
                              prod)}, ${JSON.stringify(index)})'>Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    </td>
                    <td>  
                      <button class="btn btn-dark" value='${index}'data-btnDel><i class="bi bi-trash3-fill"></i></button>
                    </td>
                  </tr>
              `;
      });

    }else {
      loaderDiv.innerHTML = `
      <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>
      <p class="text-secondary">Oops! We couldn't find any data :( Try reloading the home page</p>
      `
    }
  } catch (e) {
     
    
  }
}
displayAdmin();

function deleteProduct(item) {
  products.splice(item, 1);
  localStorage.setItem("products", JSON.stringify(products));
  displayAdmin();
}

adminTable.addEventListener("click", () => {
  //if the element has an attribute of data-btnDel the the function will execute when that element(the button) is clicked
  if (event.target.hasAttribute("data-btnDel")) {
    deleteProduct(event.target.value);
  }
});
//here
let btnAddProduct = document.querySelector("[data-btnAdd-product]");
function addNewProduct() {
  let id = +document.getElementById("newId").value;
  let name = document.getElementById("newName").value;
  let image = document.getElementById("newImage").value;
  let price = document.getElementById("newPrice").value;
  products.push({ id, name, image, price });
  localStorage.setItem("products", JSON.stringify(products));
  displayAdmin();
}

btnAddProduct.addEventListener("click", addNewProduct);

function UpdateProduct(item, index) {
    this.id = item.id
    this.name = document.getElementById("proName"+item.id).value
    this.image = document.getElementById("proImage"+item.id).value
    this.price = +document.getElementById("proPrice"+item.id).value
    products[index] = Object.assign({}, this);
    localStorage.setItem("products", JSON.stringify(products));
    displayAdmin();
    location.reload()
}

