// TODO: ADD shipping ADDRESS IF IT IS DIFFERENT FROM billing ADDRESS

function showShippingAddress() {
    var checkBox = document.getElementById("shippingAddress");
    var shippingAddress = document.getElementById("shippingAddressDiv");
    if (checkBox.checked == true) {
        shippingAddress.style.display = "block";
    } else {
        prompt("Please enter your shipping address");
    }
};

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

