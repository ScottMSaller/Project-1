// TODO: ADD shipping ADDRESS IF IT IS DIFFERENT FROM billing ADDRESS
//import to access our array of products
import { products } from "../modules/productList.js";
const cart = JSON.parse(localStorage.getItem("cart"));

//save our product container into a constant
const productContainer = document.querySelector("#product-container");
const totalEl = document.querySelector("#totalPrice"); 
const quantityEl = document.querySelector("#totalCart");
//first, determine what we have in our cart, get the name, price, and quantity of the product.
function createCart() {
    let total = 0;
    let totalQuantity = 0;
    for(const [key, value] of Object.entries(cart)) {
        let productName = products[key]["title"];
        let quantity = value;
        totalQuantity += quantity;
        let price = quantity * (products[key]["price"].slice(1));
        total += price;
        const p = document.createElement("p");
        p.innerHTML = `<a href="./cart.html">${productName}</a><span id="quantity"><br> x${quantity}</span><span class="price">$${price}</span>`
        productContainer.appendChild(p);
    }
    totalEl.textContent = `$${total}`;
    quantityEl.textContent = totalQuantity;
}
createCart();
function showShippingAddress() {
    var checkBox = document.getElementById("shippingAddress");
    var shippingAddress = document.getElementById("shippingAddressDiv");
    var shippingAddressInput = document.getElementById("shippingAddressInput");
    if (checkBox.checked == true) {
        shippingAddress.style.display = "block";
        shippingAddressInput.style.display = "none";
    } else {
        shippingAddress.style.display = "none";
        shippingAddressInput.style.display = "block";
    }
}

// TODO: add event listener to  the shipping address checkbox

document.getElementById("shippingAddress").addEventListener("change", showShippingAddress);


// TODO: create a function to pull items from shopping cart and display them in the checkout page

// Assuming the shoppingCart object is defined elsewhere in the code!!!!!

function displayCart() {
    if (typeof shoppingCart === 'undefined') {
        console.error("shoppingCart is not defined!");
        return;
    }
    var cartArray = shoppingCart.listCart();
    var output = "";
    for (var i in cartArray) {
        output += "<tr>"
            + "<td>" + cartArray[i].name + "</td>"
            + "<td>(" + cartArray[i].count + ")</td>"
            + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
            + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
            + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
            + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
            + " = "
            + "<td>" + cartArray[i].total + "</td>"
            + "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
}

// TODO: create a function to calculate the total price of the items in the shopping cart

function displayTotal() {
    var cartArray = shoppingCart.listCart();
    var total = 0;
    for (var i in cartArray) {
        total += cartArray[i].total;
    }
    $('.total-cart').html(total);
}

// TODO: Add a function to remove items from the shopping cart

$('.show-cart').on("click", ".delete-item", function (event) {
    var name = $(this).data('name');
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
    displayTotal();
});

// TODO: Add a function to increment the quantity of an item in the shopping cart

$('.show-cart').on("click", ".plus-item", function (event) {
    var name = $(this).data('name');
    shoppingCart.addItemToCart(name, 0, 1);
    displayCart();
    displayTotal();
});

// TODO: Add a function to decrement the quantity of an item in the shopping cart

$('.show-cart').on("click", ".minus-item", function () {
    var name = $(this).data('name');
    shoppingCart.removeItemFromCart(name);
    displayCart();
    displayTotal();
});

// TODO: Add a function to clear the shopping cart

$('.clear-cart').click(function () {
    shoppingCart.clearCart();
    displayCart();
    displayTotal();
});

// TODO: Add a function to display the items in the shopping cart

$('.show-cart').on("change", ".item-count", function () {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
    displayTotal();
});

displayCart();
displayTotal();