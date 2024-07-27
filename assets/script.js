
document.getElementById('btn').addEventListener('click', function () {
    let productDetails = {
        productName: 'EASYBIKE2',
        productPrice: '$50',
        productDesc: 'The EasyBike2 is a great bike for beginners and experienced riders alike. It is lightweight and easy to handle, making it perfect for commuting or leisurely rides around town. The EasyBike2 features a durable steel frame and fork, 26-inch wheels, and a 7-speed Shimano drivetrain. It also has front and rear linear pull brakes for reliable stopping power. Whether you are looking for a reliable commuter bike or a fun way to get around town, the EasyBike2 is a great choice.',
    }

    localStorage.setItem('productDetails', JSON.stringify(productDetails));
    // window.location.href = 'checkout.html';

});


// productDetails = [{ 
//     productName: 'EASYBIKE2',
//     productPrice: '$50',
//     productDesc: 'The EasyBike2 is a great bike for beginners and experienced riders alike. It is lightweight and easy to handle, making it perfect for commuting or leisurely rides around town. The EasyBike2 features a durable steel frame and fork, 26-inch wheels, and a 7-speed Shimano drivetrain. It also has front and rear linear pull brakes for reliable stopping power. Whether you are looking for a reliable commuter bike or a fun way to get around town, the EasyBike2 is a great choice.',
// },{
//     productName: 'EASYBIKE3',
//     productPrice: '$60',
//     productDesc: 'The EasyBike2 is a great bike for beginners and experienced riders alike. It is lightweight and easy to handle, making it perfect for commuting or leisurely rides around town. The EasyBike2 features a durable steel frame and fork, 26-inch wheels, and a 7-speed Shimano drivetrain. It also has front and rear linear pull brakes for reliable stopping power. Whether you are looking for a reliable commuter bike or a fun way to get around town, the EasyBike2 is a great choice.',





