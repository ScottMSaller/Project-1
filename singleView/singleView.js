import { products } from "../modules/productList.js";
const container = document.querySelector("#product-details");
const id = localStorage.getItem("current");
let cart = JSON.parse(localStorage.getItem("cart"));

function renderHtml() {
    const windowWidth = window.innerWidth;
    if(windowWidth > 1200){
        container.innerHTML = `<section class="flex-container">
    <div>
        <div class="p-2 flex-fill" id="image-div">
            <img id="image">
        </div>
    </div>
    <div class="d-flex">
        <div class="p-2 flex-fill">
            <p id="product-name"><b></b></p>
            <p id="product-price"></p>
            <p id="product-description"></p>
                <div class="col-xxs-1">
                    <div class="seProductQuantitySelection" data-ui="product-buygrid-quantity">
                    <div class="form-group seQuantityContainer">
                    <label class="seControlLabel" for="QuantityInput">Quantity</label>
                    <input type="number" name="quantity" id="product-quantity" class="form-control seFormInputText seQuantityInput"  value="1"  min="1" max="50">
                    
                    </div>
                    </div>
                    </div>
            <button type="button" class="btn btn-outline-danger" id="btn">Add to cart</button>
            <img id="cart" src="../assets/cart.svg" alt="shopping-cart">    
        </div>
    </div>
</section>`
    }
    else if(windowWidth < 1200){
        container.innerHTML = `<section class="flex-container">
        <div class="d-flex">
            <div class="flex-fill">
                <p id="product-name" class="text-center"><b></b></p>
                <div>
            <div class="p-2 flex-fill text-center" id="image-div">
                <img id="image">
            </div>
            </div>
                <p id="product-price"></p>
                <p id="product-description"></p>
                    <div class="col-xxs-1">
                        <div class="seProductQuantitySelection" data-ui="product-buygrid-quantity">
                        <div class="form-group seQuantityContainer">
                        <label class="seControlLabel" for="QuantityInput">Quantity</label>
                        <input type="number" name="quantity" id="product-quantity" class="form-control seFormInputText seQuantityInput"  value="1"  min="1" max="50">
                        
                        </div>
                        </div>
                        </div>
                <button type="button" class="btn btn-outline-danger" id="btn">Add to cart</button>
                <img id="cart" src="../assets/cart.svg" alt="shopping-cart">    
            </div>
        </div>
    </section>`
    }
    renderDetails();
};



function renderDetails(){
    
    const priceEl = document.querySelector("#product-price");
    const nameEl = document.querySelector("#product-name");
    const descriptionEl = document.querySelector("#product-description");
    const imageEl = document.querySelector("#image")
    
    const titleEl = document.querySelector("#title");
    const button = document.querySelector("#btn");
    button.addEventListener("click", addToCart);

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

renderHtml();



function addToCart(event) {
    const quantityEl = document.querySelector("#product-quantity");
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
window.addEventListener("resize", renderHtml);