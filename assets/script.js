const dropdownMenu = document.querySelector(".dropdown-menu");
const seeAll = document.querySelector("#See-All");
const parts = document.querySelector("#Parts");
const bikes = document.querySelector("#Bikes");
const accessories = document.querySelector("#Accessories");
const cartIcon = document.querySelector("#cart-icon");

dropdownMenu.addEventListener("click", function(event) {
    localStorage.setItem("choice", event.target.innerHTML);
});
console.log(location.pathname)
if(location.pathname === "/Project-1/"){
    seeAll.addEventListener("click", function(event) {
        localStorage.setItem("choice", "See All");
        location.href ="/Project-1/products/products.html"
    });
    parts.addEventListener("click", function(event) {
        localStorage.setItem("choice", "Parts");
        location.href ="/Project-1/products/products.html"
    });
    bikes.addEventListener("click", function(event) {
        localStorage.setItem("choice", "Bikes");
        location.href ="/Project-1/products/products.html"
    });
    accessories.addEventListener("click", function(event) {
        localStorage.setItem("choice", "Accessories");
        location.href ="/Project-1/products/products.html"
    });
}
