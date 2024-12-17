    // Function to display the purchased products
    function displayProducts() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productList = document.getElementById('product-list');
        let totalPrice = 0;

        if (cart.length === 0) {
            productList.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        // Create product list
        cart.forEach(item => {
            const itemPrice = item.price;
            totalPrice += itemPrice;
            productList.innerHTML += `<p>${item.name} - ₱${itemPrice.toLocaleString()}</p>`;
        });

        document.getElementById('total-price').innerText = `Total: ₱${totalPrice.toLocaleString()}`;
    }

    document.addEventListener('DOMContentLoaded', displayProducts);

    document.getElementById('shipping-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert("Item Shipped! Thank you For Shopping!"); // Show the alert

        localStorage.removeItem('cart');

        document.getElementById('product-list').innerHTML = ""; // Clear product list
        document.getElementById('total-price').innerText = ""; // Clear total price

        setTimeout(() => {
            window.location.href = 'products.html'; 
        }, 500);
    });