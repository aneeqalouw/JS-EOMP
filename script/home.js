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