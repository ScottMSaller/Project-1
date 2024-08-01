import { products } from "../modules/productList.js";
const priceEl = document.querySelector("#product-price");
const nameEl = document.querySelector("#product-name");
const descriptionEl = document.querySelector("#product-description");
const imageEl = document.querySelector("#image")
const quantityEl = document.querySelector("#product-quantity");
const titleEl = document.querySelector("#title");
const button = document.querySelector("#btn");
const id = localStorage.getItem("current");
let cart = JSON.parse(localStorage.getItem("cart"));

function renderView(){
    const img = products[id]["img"];
    const title = products[id]["title"];
    const price = `Price: ${products[id]["price"]}`;
    const description = products[id]["description"];
    
    titleEl.innerText = `${products[id]["title"]} | EZY BIKE`
    priceEl.textContent = price;
    nameEl.textContent = title;
    descriptionEl.textContent = description;
    imageEl.src = img;
    imageEl.setAttribute("alt", title);
}

function addToCart(event) {
    let cartQuantity = quantityEl.value;
    let temp;
    if(cartQuantity > 50 || cartQuantity <= 0){
        return alert("please enter a quantity greater than 0 and less than 50.")
    }
    if(cart === undefined || cart === null){
        temp = { [id] : cartQuantity };
        cart = temp;
        localStorage.setItem("cart", JSON.stringify(cart));
        return alert(`Added ${cartQuantity} of ${products[id]["title"]} to your cart!`);
    }
    else {
        for (const [key, value] of Object.entries(cart)) {
            if([key] == id){
                cartQuantity = parseInt(value) + parseInt(cartQuantity);
                temp = { [key] : cartQuantity }
                Object.assign(cart, temp);
                localStorage.setItem("cart", JSON.stringify(cart));
                return alert(`Added ${cartQuantity - value} of ${products[key]["title"]} to your cart!`);
            }
        }
    temp = { [id] : cartQuantity };
    Object.assign(cart, temp);
    localStorage.setItem("cart", JSON.stringify(cart));
    return alert(`Added ${cartQuantity} of ${products[id]["title"]} to your cart!`);
    }
}
button.addEventListener("click", addToCart);
renderView();