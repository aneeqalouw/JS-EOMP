document.querySelector('#currYear').textContent = new Date().getUTCFullYear()
let cartItems = []
let cart = document.querySelector('#cartContainer')

if (cartItems == ''){
    cart.innerHTML = `
       <p class="my-5">Your cart is empty</p>
       <a class="fw-bold" href="../html/products.html">Shop now</a>
    `
}
function addToCart(){

}