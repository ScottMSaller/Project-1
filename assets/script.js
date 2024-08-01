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
if(location.pathname === "/index.html"){
    seeAll.addEventListener("click", function(event) {
        localStorage.setItem("choice", "See All");
        location.href ="./products/products.html"
    });
    parts.addEventListener("click", function(event) {
        localStorage.setItem("choice", "Parts");
        location.href ="./products/products.html"
    });
    bikes.addEventListener("click", function(event) {
        localStorage.setItem("choice", "Bikes");
        location.href ="./products/products.html"
    });
    accessories.addEventListener("click", function(event) {
        localStorage.setItem("choice", "Accessories");
        location.href ="./products/products.html"
    });
}
