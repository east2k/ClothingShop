const accountProfile = JSON.parse(localStorage.getItem("storeProfile"));
let currentProfile;
let storedCartList;

// Check the saved ordered
const checkSavedOrders = () => {
    for (let prof of accountProfile) {
        if (prof.loggedin === true) {
            currentProfile = prof;
            storedCartList = currentProfile.accountStats.totalPurchases;
            break;
        }
    }
    if (storedCartList === undefined) {
        // console.log("No User");
        window.location.href = "home.html";
    }
}

window.addEventListener('load', () => {
    for (let prof of accountProfile) {
        if (prof.loggedin === true) {
            console.log("User Logged In");
            currentProfile = prof;
            checkSavedOrders();
            loadWebsite();
            updateStatistics();
            break;
        }
    }
    if (currentProfile === undefined) {
        console.log("No User");
        window.location.href = "home.html";
    }
});

// Set to Default
const setUsername = document.getElementById("setting-username");
const setFullName = document.getElementById("setting-full-name");

const loadWebsite = () => {
    setUsername.value = currentProfile.username;
    setFullName.value = currentProfile.fullName;
}

const setButton = document.querySelector(".setting-button");

setButton.addEventListener('click', () => {
    if (setFullName.value != currentProfile.fullName) {
        currentProfile.fullName = setFullName.value;
        localStorage.setItem("storeProfile", JSON.stringify(accountProfile));
        alert("Sucessfully changed Name");
    } else {
        alert("Fullname text field is the same as current fullname");
    }
})

// Display Order History

// Add to Cart
const checkoutCartProducts = document.querySelector(".checkout-cart-products tbody");
const removeFromCart = document.getElementsByClassName("remove-button");
const products = document.getElementsByClassName("checkout-product");
const reminder = document.querySelector(".checkout-reminder");

const addToCart = () => {
    for (let i = 0; i < storedCartList.length; i++) {
        const tableRowProduct = document.createElement("tr");
        tableRowProduct.classList.add("checkout-product");
        checkoutCartProducts.appendChild(tableRowProduct);

        const tableDataDetail = document.createElement("td");
        tableDataDetail.classList.add("checkout-product-detail");
        tableRowProduct.appendChild(tableDataDetail);

        const divProductImg = document.createElement("div");
        divProductImg.classList.add("checkout-product-img");
        tableDataDetail.appendChild(divProductImg);

        const imgProduct = document.createElement("img");
        // imgProduct.setAttribute("src", "assets/img/store-men/white-shirt.png");
        divProductImg.appendChild(imgProduct);

        const divProductDescription = document.createElement("div");
        divProductDescription.classList.add("checkout-product-description");
        tableDataDetail.appendChild(divProductDescription);

        const headerProductName = document.createElement("h3");
        headerProductName.classList.add("checkout-product-name");
        // headerProductName.innerHTML = "Placeholder yeye";
        divProductDescription.appendChild(headerProductName);

        const divProductType = document.createElement("div");
        divProductType.classList.add("checkout-product-type");
        // divProductType.innerHTML = "Placeh";
        divProductDescription.appendChild(divProductType);

        const tableDataSize = document.createElement("td");
        const productSizeDiv = document.createElement("div");
        productSizeDiv.classList.add("td-style");
        productSizeDiv.classList.add("checkout-product-size");
        // productSizeDiv.innerHTML = "Placehe";
        tableDataSize.appendChild(productSizeDiv);
        tableRowProduct.appendChild(tableDataSize);

        const tableDataBrand = document.createElement("td");
        const productBrandDiv = document.createElement("div");
        productBrandDiv.classList.add("td-style");
        productBrandDiv.classList.add("checkout-product-brand");
        // productBrandDiv.innerHTML = "Place";
        tableDataBrand.appendChild(productBrandDiv);
        tableRowProduct.appendChild(tableDataBrand);

        const tableDataPrice = document.createElement("td");
        const productPriceDiv = document.createElement("div");
        productPriceDiv.classList.add("td-style");
        productPriceDiv.classList.add("checkout-product-price");
        // productPriceDiv.innerHTML = "Placeeye";
        tableDataPrice.appendChild(productPriceDiv);
        tableRowProduct.appendChild(tableDataPrice);

        imgProduct.setAttribute("src", storedCartList[i].img);
        headerProductName.innerHTML = storedCartList[i].name;
        divProductType.innerHTML = storedCartList[i].type;
        productSizeDiv.innerHTML = storedCartList[i].size.toUpperCase();
        productBrandDiv.innerHTML = storedCartList[i].brand;
        productPriceDiv.innerHTML = storedCartList[i].price;

    }
}

// Check if cart is Empty 
const cartIsEmpty = () => {
    if (storedCartList.length < 1) {
        reminder.classList.add("active");
    }
}

window.addEventListener('load', cartIsEmpty);
window.addEventListener('load', addToCart)

// Statistic Fillter
const totalAmount = document.querySelector(".statistic-amount.total-amount");
const totalSpent = document.querySelector(".statistic-amount.total-spent");
const highestPurchase = document.querySelector(".statistic-amount.highest-purchase");

const updateStatistics = () => {
    totalAmount.innerHTML = currentProfile.accountStats.totalPurchases.length;

    let sum = 0;
    for (let i = 0; i < currentProfile.accountStats.totalCashSpent.length; i++) {
        sum += currentProfile.accountStats.totalCashSpent[i];
    }
    totalSpent.innerHTML = sum;

    let max,
        priceList = [];
    for (let i = 0; i < currentProfile.accountStats.totalPurchases.length; i++) {
        priceList.push(currentProfile.accountStats.totalPurchases[i].price);
    }
    max = Math.max.apply("Math", priceList);
    console.log(max);
    console.log(max === -Infinity);

    if (max === -Infinity) highestPurchase.innerHTML = 0;
    else highestPurchase.innerHTML = max;
}