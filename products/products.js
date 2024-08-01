import { products } from "../modules/productList.js"
const container = document.querySelector("#container");
const productContainer = document.querySelector("#product-container");
const header = document.querySelector("#product-header");
const p = document.querySelector("#product-p");
const title = document.querySelector("#title");
function createChoice(){
    let choice = localStorage.getItem("choice");
    if(choice === "See All"){
        title.innerText = "Products | EZY BIKE"
        header.innerText = "Our Collection";
        p.innerText = "products";
        renderProducts("");
    }
    else if(choice === "Bikes"){
        title.innerText = "Bikes | EZY BIKE"
        header.innerText = "Bikes";
        p.innerText = "bikes";
        renderProducts("bike");
    }
    else if(choice === "Parts"){
        title.innerText = "Parts | EZY BIKE"
        header.innerText = "Parts";
        p.innerText = "parts";
        renderProducts("part");
    }
    else if(choice === "Accessories"){
        title.innerText = "Accessories | EZY BIKE"
        header.innerText = "Accessories";
        p.innerText = "accessories";
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
        
        photoDiv.setAttribute("class", "col-lg-4 col-md-6 col-sm-12 p-2 item-element");
        photoDiv.addEventListener("click", function(){
            localStorage.setItem("current", product["id"]);
            location.href ="../singleView/singleView.html";
        });
        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card border-0 rounded-0 shadow");
        

        let image = document.createElement("img");
        image.setAttribute("src", product["img"]);
        image.setAttribute("class", "card-img-top");
        image.setAttribute("alt", product["title"]);
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
        button.addEventListener("click", addToCart);
    
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
    e.stopPropagation();
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
if(location.pathname == "/Project-1/products/products.html"){
    createChoice();
}
//figure out a way to determine the name of the current tab and then run this function accordingly
