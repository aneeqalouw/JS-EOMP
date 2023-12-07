document.querySelector('#currYear').textContent = new Date().getUTCFullYear()
let cartTbl = document.querySelector('[data-cart-table]');
let totalContainer = document.querySelector('[data-total-amount]');
let cart = JSON.parse(localStorage.getItem('checkout'));

function showCart(){
    try{
        let data = Object.groupBy( cart, item => item.id )
        for(let item in data) {
            cartTbl.innerHTML += `
               <tr>
                 <td>
                   ${data[item][0].name}
                 </td>
                 <td>
                   ${data[item].length}
                 </td>
                 <td>
                   ${data[item][0].price}
                 </td>
                 <td data-amount>
                    R ${Math.round(eval(`${data[item][0].price} * ${data[item].length}`))}
                 </td>
               </tr>
               <br><br>
            `
            let totalPrice = 0;
            for(let item of cart){
              totalPrice += item.price
            }
            totalContainer.innerHTML = `R ${Intl.NumberFormat().format(totalPrice)}`
        }
    }catch(e) {
     console.log('Uh oh! Something went wrong. We are sorry about that!:(') 
    }
}
showCart()

let btnClear = document.querySelector('[data-clear-cart]')

function clearCart(){
    localStorage.clear(cart)
    cartTbl.innerHTML = ''
}
btnClear.addEventListener('click', clearCart)

let btnBuy = document.querySelector('[data-purchase]')

function purchased(){
  alert('Thank you for your purchase!')
  clearCart()
  totalContainer.innerHTML = ''
}

btnBuy.addEventListener('click', purchased)

