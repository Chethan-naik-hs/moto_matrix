document.addEventListener("DOMContentLoaded", function () {
    // Sample product data in JSON format
    const products = [
        {
            name: "DUKE 200",
            price: 250000,
            description: "KTM 200 Duke is a 200cc sports naked bike at a starting price of Rs. 1.96 Lakh in India. KTM 200 Duke gives a mileage of 33 kmpl. It gets disc brakes in the front and rear, apart from this it weighs 159 kg and has a fuel tank capacity of 13.4 liters. The bike has a six speed gearbox. It is offered in a single variant and 2 beautiful colours. Considering the price and specs the 200 Duke is a tough competition to Bajaj Pulsar NS200, Royal Enfield Classic 350 and Yamaha MT 15.",
            image: "bike img/d4.webp"
        },
        {
            name: "KAWASAKI NINJA ZX10R",
            price: 1800000,
            description: "Kawasaki Ninja ZX-10R is a 998cc sports bike at a starting price of Rs. 16.63 Lakh in India. Kawasaki Ninja ZX-10R gives a mileage of 12 kmpl. It gets double disc brakes in the front and disc brakes at the rear, apart from this it weighs 207 kg and has a fuel tank capacity of 17 liters. The bike has a six speed gearbox. It is offered in a single variant and 2 beautiful colours. Considering the price and specs the Ninja ZX-10R is a tough competition to BMW S 1000 RR, Ducati Panigale V4 and Suzuki Hayabusa.",
            image: "bike img/monster (2).webp"
        },
        {
            name: "BMW S1000RR",
            price: 3000000,
            description: "BMW S 1000 RR is a 999cc super bike in a price range of Rs. 20.50 Lakh to 24.95 Lakh in India. BMW S 1000 RR gives a mileage of 15.62 kmpl. It gets double disc brakes in the front and disc brakes at the rear, apart from this it weighs 197 kg and has a fuel tank capacity of 16.5 liters. The bike has a six speed gearbox. It is available in 3 variants and 3 beautiful colours. Considering the price and specs the S 1000 RR is a tough competition to Ducati Panigale V4, Kawasaki Ninja H2 and Kawasaki Ninja ZX-10R.",
            image: "  bike img/srr (1).webp"
        },
        {
            name: "YAMAHA MT15",
            price:200000,
            description: "Yamaha MT 15 is a 155cc sports bike in a price range of Rs. 1.67 Lakh to 1.73 Lakh in India. Yamaha MT 15 gives a mileage of 47.94 kmpl. It gets disc brakes in the front and rear, apart from this it weighs 139 kg and has a fuel tank capacity of 10 liters. It is available in 3 variants and 10 beautiful colours. Considering the price and specs the MT 15 V2 is a tough competition to Bajaj Pulsar NS160, Bajaj Pulsar NS200",
            image: "bike img/front-right-view-414570827_930x620.webp"
        },
        {
            name: "TVS APACHE310",
            price: 300000,
            description:"TVS Apache RTR 310 is a 312cc sports bike in a price range of Rs. 2.42 Lakh to 2.63 Lakh in India. TVS Apache RTR 310 gives a mileage of 35 kmpl. It gets disc brakes in the front and rear, apart from this it weighs 169 kg and has a fuel tank capacity of 11 liters. The bike has a six speed gearbox. It is available in 3 variants and 2 beautiful colours. Considering the price and specs the Apache RTR 310 is a tough competition to BMW G 310 R, KTM 250 Duke and KTM 390 Duke." ,
            image: "bike img/ten.webp "
        },
        {
            name: "KAWASAKI NINJA ZX4R",
            price:1000000,
            description:"Kawasaki Ninja ZX4R is a 399cc sports bike at a starting price of Rs. 8.49 Lakh in India. Kawasaki Ninja ZX4R gives a mileage of 24.18 kmpl. It gets disc brakes in the front and rear, apart from this it weighs 189 kg. It is offered in a single variant and Black colour only. Considering the price and specs the Ninja ZX4R is a tough competition to Honda CBR650R.",
            image: "  bike img/right-side-view-149984993_930x620.webp"
        },
        {
            name: "KTM ADVENTURE 390",
            price:350000 ,
            description: "KTM 390 Adventure is a 373cc adventure tourer bike in a price range of Rs. 3.39 Lakh to 3.60 Lakh in India. KTM 390 Adventure gives a mileage of 30 kmpl. It gets disc brakes in the front and rear, apart from this it has a fuel tank capacity of 14.5 liters. The bike has a six speed gearbox. It is available in 2 variants and 2 beautiful colours. Considering the price and specs the 390 Adventure is a tough competition to Bajaj Dominar 400, BMW G 310 GS and Honda CB500X.",
            image: "bike img/right-side-view-564303990_930x620.webp"
        },
        {
            name: "HONDA CBR 650R",
            price:1100000 ,
            description: "Honda CBR650R is a 648cc sports bike at a starting price of Rs. 8.89 Lakh in India. Honda CBR650R gives a mileage of 23 kmpl. It gets double disc brakes in the front and disc brakes at the rear, apart from this it weighs 211 kg and has a fuel tank capacity of 15.4 liters. The bike has a six speed gearbox. It is offered in a single variant and 2 beautiful colours. Considering the price and specs the CBR650R is a tough competition to Kawasaki Ninja 650, Kawasaki Ninja ZX-6R and Kawasaki Ninja ZX4R.",
            image: "  bike img/front-right-view-304381998_930x620.webp"
        },
        {
            name: "DOMINAR 400",
            price:300000,
            description: "Bajaj Dominar 400 is a 373cc sports bike at a starting price of Rs. 2.29 Lakh in India. Bajaj Dominar 400 gives a mileage of 27 kmpl. It gets disc brakes in the front and rear, apart from this it weighs 193 kg and has a fuel tank capacity of 13 liters. The bike has a six speed gearbox. It is offered in a single variant and 2 beautiful colours. Considering the price and specs the Dominar 400 is a tough competition to Harley Davidson X440, Hero Mavrick 440 and KTM 250 Duke.",
            image: "  bike img/domi (1).webp"
        },
        {
            name: "RS200",
            price:210000,
            description: "Bajaj Pulsar RS200 is a 199cc sports bike at a starting price of Rs. 1.72 Lakh in India. Bajaj Pulsar RS200 gives a mileage of 35 kmpl. It gets disc brakes in the front and rear, apart from this it weighs 166 kg and has a fuel tank capacity of 13 liters. The bike has a six speed gearbox. It is offered in a single variant and 3 beautiful colours. Considering the price and specs the Pulsar RS200 is a tough competition to Hero Karizma XMR, KTM 200 Duke and Yamaha MT 15.",
            image: "  bike img/rs.webp"
        },
        {
            name: "DUKE 390",
            price:400000 ,
            description: "KTM 390 Duke is a 398cc sports naked bike at a starting price of Rs. 3.11 Lakh in India. KTM 390 Duke gives a mileage of 28.9 kmpl. It gets disc brakes in the front and rear, apart from this it weighs 168.3 kg and has a fuel tank capacity of 15 liters. The bike has a six speed gearbox. It is offered in a single variant and 2 beautiful colours. Considering the price and specs the 390 Duke is a tough competition to Bajaj Dominar 400, Kawasaki Ninja 300 and Royal Enfield Continental GT 650.",
            image: "bike img/srr (2).webp"
        },
        {
            name: "PULSER 220",
            price:400000 ,
            description: "PULSER 220 is a 373cc sports bike in a price range of Rs. 3.18 Lakh to 3.18 Lakh in India. KTM RC 390 gives a mileage of 31.22 kmpl. It gets disc brakes in the front and rear, apart from this it weighs 172 kg and has a fuel tank capacity of 13.7 liters. The bike has a six speed gearbox. It is available in 2 variants and 2 beautiful colours. Considering the price and specs the RC 390 is a tough competition to BMW G 310 RR, Kawasaki Ninja 400 and Royal Enfield Continental GT 650.",
            image: "  bike img/right-side-view-1110685345_930x620.webp"
        },
        {
            name: "RC 390",
            price:350000,
            description: "KTM RC 390  is a 398cc sports naked bike at a starting price of Rs. 3.11 Lakh in India. KTM 390 Duke gives a mileage of 28.9 kmpl. It gets disc brakes in the front and rear, apart from this it weighs 168.3 kg and has a fuel tank capacity of 15 liters. The bike has a six speed gearbox. It is offered in a single variant and 2 beautiful colours. Considering the price and specs the 390 Duke is a tough competition to Bajaj Dominar 400, Kawasaki Ninja 300 and Royal Enfield Continental GT 650.",
            image: " bike img/front-left-view-606560330_930x620.webp"
        },
        {
            name: "KAWASAKI Z900",
            price:1100000,
            description: "Kawasaki Z900 is a 948cc sports naked bike at a starting price of Rs. 9.29 Lakh in India. Kawasaki Z900 gives a mileage of 17 kmpl. It gets double disc brakes in the front and disc brakes at the rear, apart from this it weighs 212 kg and has a fuel tank capacity of 17 liters. The bike has a six speed gearbox. It is offered in a single variant and 2 beautiful colours. Considering the price and specs the Z900 is a tough competition to Ducati Monster, Honda CB650R and Honda CBR650R.",
            image: "bike img/right-side-view-1486030765_930x620.webp"
        },
        {
            name: "RC 200",
            price:290000,
            description: "KTM RC 200 is a 199cc sports bike in a price range of Rs. 2.17 Lakh to 2.18 Lakh in India. KTM RC 200 gives a mileage of 35 kmpl. It gets disc brakes in the front and rear, apart from this it weighs 160 kg and has a fuel tank capacity of 13.7 liters. The bike has a six speed gearbox. It is available in 2 variants and 3 beautiful colours. Considering the price and specs the RC 200 is a tough competition to Bajaj Pulsar NS200 and Yamaha R15 V4.",
            image: "bike img/monster (4).webp"
        },
        {
            name: "BMW S1000R",
            price:3500000,
            description: "BMW S 1000 R is a 999cc sports bike in a price range of Rs. 19.00 Lakh to 23.30 Lakh in India. BMW S 1000 R gives a mileage of 16.1 kmpl. It gets double disc brakes in the front and disc brakes at the rear, apart from this it weighs 194 kg and has a fuel tank capacity of 16.5 liters. The bike has a six speed gearbox. It is available in 3 variants and 3 beautiful colours.",
            image: "bike img/front-left-view-357609404_930x620.webp"
        },
        {
            name: "DUCATI STREETFIGHTER V4",
            price:2500000,
            description: "Ducati Streetfighter V4 is a 1103cc sports naked bike in a price range of Rs. 22.15 Lakh to 25.69 Lakh in India. Ducati Streetfighter V4 gives a mileage of 13.2 kmpl. It gets disc brakes in the front and rear, apart from this it weighs 197.5 kg and has a fuel tank capacity of 17 liters. The bike has a six speed gearbox. It is available in 5 variants and 3 beautiful colours.",
            image: "bike img/front-right-view-683814395_930x620.webp"
        },
        {
            name: "MT 03",
            price:500000,
            description: "Yamaha MT-03 is a 321cc sports naked bike at a starting price of Rs. 4.59 Lakh in India. Yamaha MT-03 gives a mileage of 26.31 kmpl. It gets disc brakes in the front and rear, apart from this it weighs 167 kg and has a fuel tank capacity of 14 liters. The bike has a six speed gearbox. It is offered in a single variant and 2 beautiful colours. Considering the price and specs the MT-03 is a tough competition to KTM 390 Duke.",
            image: "bike img/front-right-view-384686410_930x620.webp"
        },
        {
            name: "HONDA CRF1100L AFRICA TWIN",
            price:4000000 ,
            description: "Honda CRF1100L Africa Twin is a 1082cc adventure tourer bike in a price range of Rs. 15.96 Lakh to 17.50 Lakh in India. Honda CRF1100L Africa Twin gives a mileage of 20 kmpl. It gets double disc brakes in the front and disc brakes at the rear, apart from this it weighs 249 kg and has a fuel tank capacity of 24.5 liters. It is available in 2 variants and 2 beautiful colours. Considering the price and specs the CRF1100L Africa Twin is a tough competition to Ducati DesertX.",
            image: "bike img/right-side-view-826321084_930x620.webp"
        },
        {
            name: "DOMINER 250",
            price:200000,
            description: "Bajaj Dominar 250 is a 248cc sports bike at a starting price of Rs. 1.83 Lakh in India. Bajaj Dominar 250 gives a mileage of 33.99 kmpl. It gets disc brakes in the front and rear, apart from this it weighs 180 kg and has a fuel tank capacity of 13 liters. The bike has a six speed gearbox. It is offered in a single variant and 3 beautiful colours. Considering the price and specs the Dominar 250 is a tough competition to Honda CB300F, KTM 250 Duke and Suzuki Gixxer 250.",
            image: "bike img/front-right-view-1904662776_930x620.webp"
        },
        
        
        // Add more products as needed
    ];

    const productContainer = document.querySelector(".product-container");

    // Function to create product details
    function createProductDetails(product) {
        const productDetails = document.createElement("div");
        productDetails.classList.add("product-details");
        
        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.classList.add("product-image");

        const productName = document.createElement("p");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: ₹${product.price.toFixed(2)}`;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        productDetails.appendChild(productImage);
        productDetails.appendChild(productName);
        productDetails.appendChild(productPrice);
        productDetails.appendChild(productDescription);

        return productDetails;
    }

    // Function to handle clicking on a product
    function handleProductClick(product) {
        // Create a query string from the product data
        const queryParams = `?name=${encodeURIComponent(product.name)}&price=${product.price}&description=${encodeURIComponent(product.description)}&image=${encodeURIComponent(product.image)}`;
        // Redirect to the product details page with query parameters
        window.location.href = `product-details.html${queryParams}`;
    }

    // Loop through the products and generate HTML for each product
    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.classList.add("product-image");

        const productName = document.createElement("p");
        productName.textContent = product.name;

        const viewDetailsButton = document.createElement("button");
        viewDetailsButton.textContent = "View Details";
        
        viewDetailsButton.addEventListener("click", () => {
            handleProductClick(product);
        });

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(viewDetailsButton);

        productContainer.appendChild(productDiv);
    });
});
