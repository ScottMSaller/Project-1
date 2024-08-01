import { products } from "../modules/productList.js";
const container = document.querySelector("#cart-container");
const checkout = document.querySelector("#checkout-container");
const message = document.querySelector("#cart-message");
let cart = JSON.parse(localStorage.getItem("cart"));
function isCartEmpty(){
    if(localStorage.getItem("cart") == null || localStorage.getItem("cart") == undefined || localStorage.getItem("cart") == "{}") {
        message.innerHTML = "Oops! looks like you haven't added anything to your cart yet. If you would like to browse what we have in stock,<a href=\"../products/products.html\">please click here</a>"
        localStorage.setItem("choice", "See All");
        checkout.innerHTML = "";
    }
    else {
        checkout.innerHTML = "";
        checkout.classList = "text-center"
        checkout.innerHTML = `
        <p class="lead">when you are ready to go to checkout, please click the button below</p>
        <a href="../checkout/checkout.html" class="btn btn-primary" >Checkout</a>`
    }
}


function removeFromCart(e){
    //product id is our pointer, it shows the product
    //temp obj is an empty object that we will use in the case of a value being at zero
    let productId = e.target.id;
    let tempObj = {};

    //start by going through our list of items
    for (const [key, value] of Object.entries(cart)) {
        let curr = { [key]: value};
        //once we find the item that we want to decrement, we will set the value to be one less in the cart array
        if([key] == productId){
            const newValue = value - 1
            curr = { [key]: newValue}
            Object.assign(cart, curr);
        //if the value is now zero, we will loop through everything again. we will assign every key value pair to tempObj unless it is the key that now has a value of zero
        if(newValue === 0){
            for (const [key, value] of Object.entries(cart)) {
                let curr = { [key]: value};
            if(productId != [key]) {
                Object.assign(tempObj, curr);
                }
            }
            cart = tempObj;
        }
    localStorage.setItem("cart", JSON.stringify(cart));
    isCartEmpty();
    return renderCart();
    }
}

}
//this creates a new object from the cart object


// Object.entries(cart).forEach(([key, value]) => {
//     let curr = {key: value};
//     console.log(curr)
//     if(value > 0){
//         Object.assign(tempObj, curr);
//     }
// });
function renderCart() {
    container.innerHTML = '';
    for(const [key, value] of Object.entries(cart)) {
        const currentProduct = products[key];
        const currentProductDiv = document.createElement('div');
        currentProductDiv.classList = "col-md-12 text-center pb-4"
        currentProductDiv.id = [key];
        currentProductDiv.innerHTML = 
        `<hr>
        <h2>${currentProduct["title"]}</h2>
        <img style="max-width: 80vw"src="${currentProduct["img"]}">
        <h4>${currentProduct["description"]}</h4>
        <h5>${currentProduct["price"]}</h5>
        <p>Quantity: ${value}</p>
        `
        const button = document.createElement("button");
        const br = document.createElement("br");
        button.textContent = "remove";
        button.id = [key];
        button.classList = "btn btn-danger";
        button.addEventListener("click", removeFromCart);
        currentProductDiv.appendChild(button);
        currentProductDiv.appendChild(br)
        container.appendChild(currentProductDiv);
        
    }
}
isCartEmpty();
renderCart();

















































// let cart;
// let keys;
// let values;
// if (localStorage.getItem("cart") !== null) {
//     cart = JSON.parse(localStorage.getItem('cart'));
//     keys = Object.keys(cart);
//     values = Object.values(cart);
// }
// const cartMessage = document.querySelector('#cart-message');
// const cartContainer = document.querySelector('#cart-container');
// function removeFromCart(e) {
//     let id = e.target.id;
//     cart[id]--;
//     if(cart[id] === NaN || cart[id] <= 0){
//         renderCart();
        
//     }
    
//     console.log(cart)
//     localStorage.setItem("cart", JSON.stringify(cart));
//     renderCart();
// }
// function renderCart(){
//     cartContainer.innerHTML = '';
//     if(!cart) {
//         cartMessage.textContent = "Oops, looks like you haven't added anything yet!";
//         return;
//      }
//     for(let key of keys){
//         let product = products.find(p => p.id === parseInt(key));
//         let productItem = document.createElement('div');
//         productItem.classList.add('product-item');
//         productItem.innerHTML = `
//             <img src="${product.img}" alt="${product.title}">
//             <h3>${product.title}</h3>
//             <p>Price: ${product.price}</p>
//             <p>Quantity: ${cart[key]}</p>
//         `;
//         let button = document.createElement('button');
//         button.textContent = "Remove";
//         button.setAttribute("class", "btn btn-primary")
//         button.id = key;
//         button.addEventListener('click', removeFromCart);
//         productItem.appendChild(button)
//         cartContainer.appendChild(productItem);
//     }
// }
    
// if(location.pathname === "/cart.html"){
//     renderCart();
// }
