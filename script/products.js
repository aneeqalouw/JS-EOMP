//getting the current year and displaying it in the span next to the copyright
document.querySelector('#currYear').textContent = new Date().getUTCFullYear()

let productContainer = document.querySelector('[data-products]')
let products = JSON.parse(localStorage.getItem('products'))
let cart = JSON.parse(localStorage.getItem('checkout')) || []
let loaderDiv = document.getElementById('spinner')

function displayProducts(){
    productContainer.innerHTML = ''
    if (products){
        products.forEach(product => {
            productContainer.innerHTML += `
                <div class="card mx-3 my-3" style="width: 18rem;">
                 <img src="${product.image}" class="card-img-top" alt="${product.name}">
                 <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <h6 class="fw-bold">R${product.price}</h6>
                  <a href="#" class="btn btn-dark " data-add-to-cart onclick='addToCart(${JSON.stringify(product)})'>Add to cart</a>
                </div>
              </div>
                
            `
            
        });
    }else {
      loaderDiv.innerHTML = `
      <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>
      <p class="text-secondary">Oops! We couldn't find any data 😑 Try reloading the home page</p>
      
      `

    }
    
}
 displayProducts() 

let searchInput = document.querySelector('[data-search-products]')

searchInput.addEventListener('keyup',()=>{
    let searchItem = products.filter(prod =>{
        return prod.name.toLowerCase().includes(searchInput.value.toLowerCase())
    })
    if (searchItem){
        productContainer.innerHTML = ''
        searchItem.forEach(item => { 
            productContainer.innerHTML += `
            <div class="card mx-3 my-3" style="width: 18rem;">
             <img src="${item.image}" class="card-img-top" alt="${item.name}">
             <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <h6 class="fw-bold">R${item.price}</h6>
              <a href="#" class="btn btn-dark" data-add-to-cart onclick='addToCart(${JSON.stringify(item)})'>Add to cart</a>
            </div>
          </div>
            
        `      
        })
    }
})
let btnSort = document.querySelector('#btnSort')

function sorting(){
  let sorted = products.sort((e1,e2)=>{
    if(e1.price<e2.price){
      return -1
    }else if(e1.price>e2.price){
      return 1
    }else return 0
    
  }) 
  productContainer.innerHTML = ''
  sorted.forEach(sortedProduct=>{
     productContainer.innerHTML += `
     <div class="card mx-3 my-3" style="width: 18rem;">
     <img src="${sortedProduct.image}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${sortedProduct.name}</h5>
       <h6 class="fw-bold">${sortedProduct.price}</h6>
       <a href="#" class="btn btn-dark" data-add-to-cart onclick='addToCart(${JSON.stringify(sortedProduct)})'>Add to cart</a>
     </div>
   </div>
     
     `
  })

   

}

btnSort.addEventListener('click', sorting )


function addToCart(item){
  if(item)
    cart.push(item)
  localStorage.setItem('checkout', JSON.stringify(cart))
     
}


