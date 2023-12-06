document.querySelector('#currYear').textContent = new Date().getUTCFullYear()
let products = [
    {
        id: 1,
        name: 'clear lip gloss',
        image: 'https://i.postimg.cc/MG4nPyxK/clear.webp',
        price: 109.90
    },
    {
        id: 2,
        image: 'https://i.postimg.cc/zfDwZw9C/nude.webp',
        name: 'nude lip gloss',
        price: 109.90
    },
    {
        id: 3,
        image: 'https://i.postimg.cc/jjvWzG3N/red.webp',
        name: 'red lip gloss',
        price: 109.90
    },
    {
        id: 4,
        image: 'https://i.postimg.cc/qv0W9YQz/pink.webp',
        name: 'pink lip gloss',
        price: 109.90

    },
    {
        id: 5,
        image: 'https://i.postimg.cc/sfLTYLbt/orange.webp',
        name: 'peach lip gloss',
        price: 109.90
    },
    {
        id: 6,
        image:'https://i.postimg.cc/d3Dvzf9b/pink-Lipoil.webp',
        name: 'pink lip oil',
        price: 89.90
    },
    {
        id: 7,
        image: 'https://i.postimg.cc/htCFqsXg/red-Lipoil.webp',
        name: 'red lip oil',
        price: 89.90
    },
    {
        id: 8,
        image: 'https://i.postimg.cc/nzJGSbnL/plum-Lip-Oil.png',
        name: 'plum lip oil',
        price: 89.90
    },
    {
        id: 9,
        image: 'https://i.postimg.cc/bv3wW1h2/nude-Lipoil.webp',
        name: 'burgundy lip oil',
        price: 89.90
    }
]
localStorage.setItem(('products'),JSON.stringify(products))
let adminTable = document.querySelector('[data-admin-table]')



function displayAdmin(){
    adminTable.innerHTML = ''
    try{
        products.map((prod,index) => {
            adminTable.innerHTML += `
                <tr>
                  <td>${index+1}</td>
                  <td>${prod.name}</td>
                  <td><img src="${prod.image}" alt="${prod.name}" class="img-fluid" style="width:15rem;"></td>
                  <td>${prod.price}</td>
                  <td>
                    <div>
                       <button class="btn btn-dark" value='${index} data-btnEdit'><i class="bi bi-pencil-square"></i></button>
                       <button class="btn btn-dark" value='${index}'data-btnDel>Del</button>
                    </div>
                  </td>
                </tr>
            `
            
        });

    }catch(e){
        alert(e.message)
    }
}
displayAdmin()

function deleteProduct(item){
    products.splice(item,1)
    localStorage.setItem('products', JSON.stringify(products))
    displayAdmin()
}

adminTable.addEventListener('click', ()=>{
    //if the element has an attribute of data-btnDel the the function will execute when that element(the button) is clicked
    if(event.target.hasAttribute('data-btnDel')){
        deleteProduct(event.target.value)
    }
})

let btnAddProduct = document.querySelector('[data-btnAdd-product]')
function addNewProduct(){
    let id = +document.getElementById('newId').value 
    let name = document.getElementById('newName').value 
    let image = document.getElementById('newImage').value 
    let price = document.getElementById('newPrice').value 
    products.push({id, name, image, price})
    localStorage.setItem('products', JSON.stringify(products))
    displayAdmin()

}

btnAddProduct.addEventListener('click', addNewProduct)

function editProduct(){
    document.write(`<div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  `)
}

