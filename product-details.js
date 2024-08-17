// product-details.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to get query parameters from the URL
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            name: params.get("name"),
            price: params.get("price"),
            description: params.get("description"),
            image: params.get("image")
        };
    }

    // Function to add a product to the cart
    function addToCart(product) {
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        cart.push(product);
        sessionStorage.setItem("cart", JSON.stringify(cart));
    }

    // Get the product details from the query parameters
    const product = getQueryParams();

    // Display the product details on the product details page
    const productImage = document.createElement("img");
    productImage.src = decodeURIComponent(product.image);
    productImage.alt = product.name;
    productImage.classList.add("product-image");

    const productName = document.createElement("p");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `Price: ₹${parseFloat(product.price).toFixed(2)}`;

    const productDescription = document.createElement("p");
    productDescription.textContent = decodeURIComponent(product.description);

    const productDetailsContainer = document.querySelector(".product-details-container");
    productDetailsContainer.appendChild(productImage);
    productDetailsContainer.appendChild(productName);
    productDetailsContainer.appendChild(productPrice);
    productDetailsContainer.appendChild(productDescription);

    // Get the "Add to Cart" button
    const addToCartButton = document.getElementById("add-to-cart");

    // Handle "Add to Cart" button click
    addToCartButton.addEventListener("click", () => {
        // Save the selected product to the cart
        addToCart(product);

        // Display a message
        alert(`"${product.name}" has been successfully booked`);
    });
});
