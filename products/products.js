import { products } from "../modules/productList.js"
const container = document.querySelector("#container");
const productContainer = document.querySelector("#product-container");
function createChoice(){
    let choice = localStorage.getItem("choice");
    if(choice === "See All"){
        renderProducts("");
    }
    else if(choice === "Bikes"){
        renderProducts("bike");
    }
    else if(choice === "Parts"){
        renderProducts("part");
    }
    else if(choice === "Accessories"){
        renderProducts("accessory");
    }
    
}
console.log(products)
function renderProducts(arg) {
    console.log(arg)
    if(productContainer !== null){
        while(productContainer.hasChildNodes()){
            productContainer.removeChild(productContainer.firstChild);
        }
    }
    for(let product of products) {
        if(product["type"] === arg || arg === ""){
        let photoDiv = document.createElement("div");
        photoDiv.setAttribute("class", "col-4 p-2");
        
        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card border-0 rounded-0 shadow");
    
        let image = document.createElement("img");
        image.setAttribute("src", product["img"]);
        image.setAttribute("class", "card-img-top");
        
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", "card-body");
    
        let cardTitle = document.createElement("h4");
        cardTitle.setAttribute("class", "card-title");
        cardTitle.textContent = product["title"];
        
        let cardText = document.createElement("p");
        cardText.setAttribute("class", "card-text");
        cardText.textContent = product["description"]
        
        let price = document.createElement("p");
        price.setAttribute("class", "card-text");
        price.textContent = product["price"];

        let button = document.createElement("a");
        button.setAttribute("class", "btn btn-primary");
        button.textContent = "Add to Cart";
        button.id = product["id"];
        button.addEventListener("click", addToCart)
    
        photoDiv.appendChild(cardDiv);
        cardDiv.appendChild(image);
        cardDiv.appendChild(innerDiv);
        innerDiv.appendChild(cardTitle);
        innerDiv.appendChild(cardText);
        innerDiv.appendChild(price);
        innerDiv.appendChild(button);
        productContainer.appendChild(photoDiv);
        }
    }
}

function addToCart(e) {
    let id = e.target.id;
    if(!localStorage.getItem("cart")) {
        localStorage.setItem("cart", `{"${[id]}" : 1}`);
    }
    else if(localStorage.getItem("cart")) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if(cart[id]) {
            cart[id]++;
        }
        else {
            cart[id] = 1;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    alert(`Successfully added ${products[id]["title"]} to your cart!`)
}
if(location.pathname === "/products/products.html"){
    createChoice();
}
//figure out a way to determine the name of the current tab and then run this function accordingly