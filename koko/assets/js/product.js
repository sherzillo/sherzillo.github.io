/*==================== PRODUCT CARD ====================*/

let carts = document.querySelectorAll('.menu__btn');

let products = [
    {
        name: 'Чикен бекон бургер',
        tag: 'pic_1',
        price: 21,
        inCart: 0
    },
    {
        name: 'Бургер Классик',
        tag: 'pic_2',
        price: 16,
        inCart: 0
    },
    {
        name: 'Чили чикен бургер',
        tag: 'pic_3',
        price: 16,
        inCart: 0
    },
    {
        name: 'Чикен бекон бургер',
        tag: 'pic_4',
        price: 21,
        inCart: 0
    },
    {
        name: 'Чикен твистер',
        tag: 'pic_5',
        price: 19,
        inCart: 0
    },
    {
        name: 'Чикен чиз твистер',
        tag: 'pic_6',
        price: 21,
        inCart: 0
    },
    {
        name: 'Крылышки КоКо',
        tag: 'pic_7',
        price: 31,
        inCart: 0
    },
    {
        name: 'Куриные ножки',
        tag: 'pic_8',
        price: 31,
        inCart: 0
    },
    {
        name: 'Куриные наггетсы',
        tag: 'pic_9',
        price: 26,
        inCart: 0
    },
    {
        name: 'Куриный шницель',
        tag: 'pic_10',
        price: 46,
        inCart: 0
    },
    {
        name: 'Крылышки гриль',
        tag: 'pic_11',
        price: 41,
        inCart: 0
    },
    {
        name: 'Тантуни',
        tag: 'pic_12',
        price: 21,
        inCart: 0
    },
    {
        name: 'Картошка Кумпир',
        tag: 'pic_13',
        price: 21,
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] === undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        };
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let product = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if (cartItems && product) {
        product.innerHTML = '';
        Object.values(cartItems).map(item => {
           product.innerHTML += `
           <div class="products__wrapper">
           <div class="product">
                <i class='bx bxs-dish'></i>
                <img src="assets/images/${item.tag}.png">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price},00 манат</div>
            <div class="quantity"><span>${item.inCart}</span>,00</div>
            <div class="total"><span>${item.inCart * item.price},00 манат</span></div>
            </div>
            `
        });

        product.innerHTML +=`
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">Всего заказа на: </h4>
            <h4 class="basketTotal">${cartCost} манат</h4>
        </div>`;

    }
}

onLoadCartNumbers();
displayCart();