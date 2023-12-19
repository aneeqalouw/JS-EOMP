document.querySelector('#currYear').textContent = new Date().getUTCFullYear()
let products = [
    {
        id: 1,
        name: 'clear lip gloss',
        image: '../images/clear.webp',
        price: 109.90
    },
    {
        id: 2,
        image: '../images/nude.webp',
        name: 'nude lip gloss',
        price: 109.90
    },
    {
        id: 3,
        image: '../images/red.webp',
        name: 'red lip gloss',
        price: 109.90
    },
    {
        id: 4,
        image: '../images/pink.webp',
        name: 'pink lip gloss',
        price: 109.90
  
    },
    {
        id: 5,
        image: '../images/orange.webp',
        name: 'peach lip gloss',
        price: 109.90
    },
    {
        id: 6,
        image:'../images/pinkLipoil.webp',
        name: 'pink lip oil',
        price: 89.90
    },
    {
        id: 7,
        image: '../images/redLipoil.webp',
        name: 'red lip oil',
        price: 89.90
    },
    {
        id: 8,
        image: '../images/plumLipOil.png',
        name: 'plum lip oil',
        price: 89.90
    },
    {
        id: 9,
        image: '../images/nudeLipoil.webp',
        name: 'burgundy lip oil',
        price: 89.90
    }
  ]
  localStorage.setItem(('products'),JSON.stringify(products))