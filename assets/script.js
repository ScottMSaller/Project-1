


document.getElementById('btn').addEventListener('click', function addToLocalStorage() {
    let quantity = document.getElementById('QuantityInput').value;
    let productDetails = {
        productName: 'EASYBIKE2',
        productPrice: '$200',
        productDesc:"The EASY BIKE2.0 is a great bike for beginners and experienced riders alike. It is lightweight and easy to handle, making it perfect for commuting or enjoying rides around town. The EASY BIKE2.0 features a durable steel frame and fork, and 26-inch wheels. It also has front and rear linear pull brakes for reliable stopping power. Whether you are looking for a reliable commuter bike or a fun way to get around town, the EASY BIKE2.0 is a great choice.",
        productQuantity: quantity
    
    };

    if (productDetails.productQuantity > 50) {
        alert('Please enter a quantity number lower than 50');
    } else {
        localStorage.setItem('productDetails', JSON.stringify(productDetails));
    }
    if (productDetails.productQuantity < 1) {
        alert('Please enter a quantity number higher than 0');
    }



    // localStorage.setItem('productDetails', JSON.stringify(productDetails));

});






