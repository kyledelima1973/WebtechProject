document.getElementById('checkout-button').addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart before checking out.");
        return;
    }

    const alert = "Proceeding to checkout with the following items:\n" + cart.map(item => `${item.name} - ₱${item.price}`).join('\n');


    if(confirm(alert)){
        localStorage.setItem('cart',JSON.stringify(cart));
        window.location.href = 'checkout.html'
    }

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    localStorage.setItem('totalPrice', totalPrice);
});