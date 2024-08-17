// cart.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to update the cart display and calculate the total
    function updateCart() {
        const cartItemsContainer = document.querySelector(".cart-items-container");
        const totalElement = document.getElementById("total");

        // Clear the existing cart display
        cartItemsContainer.innerHTML = "";

        // Retrieve the cart from sessionStorage
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

        // Calculate and update the total
        let total = 0;
        cart.forEach((product, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");

            const productName = document.createElement("p");
            productName.classList.add("cart-item-name");
            productName.textContent = product.name;

            const productPrice = parseFloat(product.price);
            total += productPrice;

            const productPriceElement = document.createElement("p");
            productPriceElement.classList.add("cart-item-price");
            productPriceElement.textContent = `Price: ₹${productPrice.toFixed(2)}`;

            const productRemoveButton = document.createElement("button");
            productRemoveButton.textContent = "Remove";
            productRemoveButton.classList.add("remove-button");
            productRemoveButton.addEventListener("click", () => {
                removeFromCart(index);
                updateCart(); // Update the cart display after removal
            });

            cartItem.appendChild(productName);
            cartItem.appendChild(productPriceElement);
            cartItem.appendChild(productRemoveButton);
            cartItemsContainer.appendChild(cartItem);
        });

        totalElement.textContent = total.toFixed(2);
    }

    // Function to remove a product from the cart by index
    function removeFromCart(index) {
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        if (index >= 0 && index < cart.length) {
            cart.splice(index, 1);
            sessionStorage.setItem("cart", JSON.stringify(cart));
        }
    }

    updateCart();
});
