document.querySelector('#currYear').textContent = new Date().getUTCFullYear()
let products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : localStorage.setItem(('products'),JSON.stringify(
    [
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
    ]))
let productContainer = document.querySelector('[data-products]')
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
                  <a href="#" class="btn btn-dark">Add to cart</a>
                </div>
              </div>
                
            `
            
        });
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
              <a href="#" class="btn btn-dark">Add to cart</a>
            </div>
          </div>
            
        `      
        })
    }
})
let btnSort = document.querySelector('#btnSort')

function sorting(){
    let sorted = products.sort()
    productContainer.innerHTML = ''
    sorted.forEach(item => {
        productContainer.innerHTML += `
        <div class="card mx-3 my-3" style="width: 18rem;">
         <img src="${item.image}" class="card-img-top" alt="${item.name}">
         <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <h6 class="fw-bold">R${item.price}</h6>
          <button class="btn btn-dark">Add to cart</button>
        </div>
      </div>
        
    `
    })
}


btnSort.addEventListener('click', sorting )
