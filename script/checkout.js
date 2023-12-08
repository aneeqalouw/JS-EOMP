//getting the current year and displaying it in the span next to the copyright
document.querySelector('#currYear').textContent = new Date().getUTCFullYear()

let cartTbl = document.querySelector('[data-cart-table]');
let totalContainer = document.querySelector('[data-total-amount]');
let cart = JSON.parse(localStorage.getItem('checkout'));

function showCart(){
    try{
      //group elements by their id to avoid a gloss appearing more than once in the cart
      //get the length of how many products of the same name in the quantity section
        let data = Object.groupBy( cart, item => item.id )
        for(let item in data) {
          //two dimensional array(data is now an object with an array of objects)
            cartTbl.innerHTML += `
               <tr>
                 <td>
                   ${data[item][0].name}
                 </td>
                 <td>
                   ${data[item].length} 
                 </td>
                 <td>
                   ${data[item][0].price}0
                 </td>
                 <td data-amount>
                    R ${Math.round(eval(`${data[item][0].price} * ${data[item].length}`))}
                 </td>
               </tr>
               <br><br>
            `
            //calculating the total amount due
            let totalPrice = 0;
            for(let item of cart){
              totalPrice += item.price
            }
            totalContainer.innerHTML = `R ${Intl.NumberFormat().format(totalPrice)}`
        }
    }catch(e) {
     
    }
}
showCart()

let btnClear = document.querySelector('[data-clear-cart]')

function clearCart(){
    localStorage.clear(cart)
    cartTbl.innerHTML = ''
    totalContainer.innerHTML = ''
}
btnClear.addEventListener('click', clearCart)

let btnBuy = document.querySelector('[data-purchase]')

function purchased(){
  if(cart){
    alert('Thank you for your purchase!')
    clearCart()
    totalContainer.innerHTML = ''

  }else{
    alert('Your cart is empty!')
  }
  
}

btnBuy.addEventListener('click', purchased)

