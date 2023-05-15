const products = [{
        name: "Lorem White Designer",
        price: 1399,
        brand: "Adidas",
        type: "t-shirt",
        size: "xl",
        img: "assets/img/store-men/t-shirt/shirt-1.png",
        description: "Lorem Designer is gut ja ja lorem ipsum. "
    },
    {
        name: "Simple Levi Mood Jacket",
        price: 1299,
        brand: "Levi's",
        type: "jacket",
        size: "l",
        img: "assets/img/store-men/jacket/jacket-1.png",
        description: "Lorem Designer is gut ja ja lorem ipsum. Lorem Designer is gut ja ja lorem ipsum. Lorem Designer is gut ja ja lorem ipsum. Lorem Designer is gut ja ja lorem ipsum. "
    },
    {
        name: "Moods Designer 3",
        price: 4499,
        brand: "Supreme",
        type: "hoodie",
        size: "xl",
        img: "assets/img/store-men/hoodie/hoodie-1.png",
        description: "Lorem Designer is gut ja ja lorem ipsum. Lorem Designer is gut ja ja lorem ipsum. Lorem Designer is gut ja ja lorem ipsum. "
    },
    {
        name: "Black Apple Jack Daniels",
        price: 3499,
        brand: "Supreme",
        type: "hoodie",
        size: "l",
        img: "assets/img/store-men/hoodie/hoodie-2.png",
        description: "Lorem Designer is gut ja ja lorem ipsum. Lorem Designer is gut ja ja lorem ipsum. "
    },
    {
        name: "Jacky's Lories Moodies",
        price: 2499,
        brand: "Supreme",
        type: "jacket",
        size: "l",
        img: "assets/img/store-men/jacket/jacket-2.png",
        description: "Lorem Designer is gut ja ja lorem ipsum. Lorem Designer is gut ja ja lorem ipsum. "
    },
    {
        name: "Ninja Tutleneck Nike",
        price: 1799,
        brand: "Nike",
        type: "turtleneck",
        size: "l",
        img: "assets/img/store-men/turtleneck/turtleneck-1.png",
        description: "Borem Designer is gut ja ja lorem ipsum. Lorem Designer is orem Designer is gut ja ja lorem ipsum. Lorem Designer is "
    },
    {
        name: "Night and Day Supreme Hoodie",
        price: 4499,
        brand: "Supreme",
        type: "hoodie",
        size: "xl",
        img: "assets/img/store-men/hoodie/hoodie-3.png",
        description: "Lorem Designer is gut ja ja lorem ipsum. Lorem Designer is gut ja ja lorem ipsum. Lorem Designer is gut ja ja lorem ipsum. "
    },
    {
        name: "Easy Come Easy Go",
        price: 4199,
        brand: "Adidas",
        type: "jacket",
        size: "l",
        img: "assets/img/store-men/jacket/jacket-3.png",
        description: "Black Jaguar Borem Designer is gut ja ja lorem ipsum. Borem Designer is gut ja ja lorem ipsum. "
    },
    {
        name: "Simple Red Turtle",
        price: 699,
        brand: "Nike",
        type: "turtleneck",
        size: "m",
        img: "assets/img/store-men/turtleneck/turtleneck-2.png",
        description: "Borem Designer is gut ja ja lorem ipsum. Lorem Designer is orem Designer is gut ja ja lorem ipsum. Lorem Designer is "
    },
    {
        name: "Elephant Horn",
        price: 999,
        brand: "Levi's",
        type: "t-shirt",
        size: "m",
        img: "assets/img/store-men/t-shirt/shirt-2.png",
        description: "Elephant Horn gut ja ja lorem ipsum. Lorem Designer is orem Designer  gut ja ja lorem ipsum. Lorem Designer is orem Designer "
    },
    {
        name: "Trappingzimmer Polo",
        price: 1399,
        brand: "Nike",
        type: "polo",
        size: "l",
        img: "assets/img/store-men/polo/polo-1.png",
        description: "Mouse Trap Limit Lorem Ipsum Ja ja Mouse Trap Limit Mouse Trap Limit"
    },
    {
        name: "Cat's Paw",
        price: 1099,
        brand: "Nike",
        type: "t-shirt",
        size: "xl",
        img: "assets/img/store-men/t-shirt/shirt-3.png",
        description: "Cat's Paw lorem ipsum. Lorem Designer Cat's Paw Cat's Paw Elephant Horn"
    },
    {
        name: "Colored Designed Mood Adidas",
        price: 1699,
        brand: "Adidas",
        type: "jacket",
        size: "s",
        img: "assets/img/store-men/jacket/jacket-4.png",
        description: "Dog's Barky Darky Mookie Paw lorem ipsum. Lorem Designer CaDog's Barky Darky Mookie"
    },
    {
        name: "Night Cow's Moo",
        price: 4499,
        brand: "Supreme",
        type: "hoodie",
        size: "xl",
        img: "assets/img/store-men/hoodie/hoodie-4.png",
        description: "Lorem Designer is gut ja ja lorem ipsum. Lorem Designer is gut ja ja lorem ipsum. Lorem Designer is gut ja ja lorem ipsum. "
    },
    {
        name: "Mouse Trap Limit",
        price: 399,
        brand: "Nike",
        type: "polo",
        size: "xs",
        img: "assets/img/store-men/polo/polo-2.png",
        description: "Mouse Trap Limit Lorem Ipsum Ja ja Mouse Trap Limit Mouse Trap Limit"
    },
    {
        name: "Piano",
        price: 1499,
        brand: "Adidas",
        type: "polo",
        size: "l",
        img: "assets/img/store-men/polo/polo-3.png",
        description: "Lorem Ipsum Ja ja Mouse Trap Limit MouLorem Ipsum Ja ja Mouse Trap Limit Mou Piano"
    },
]

const filters = {}

let cart = []

const productDetails = {
    img: "",
    name: "",
    type: "",
    size: "",
    brand: "",
    description: "",
    price: ""
}

// class MiniCart {
//     constructor(name, price, img) {
//         this.name = name;
//         this.price = price;
//         this.img = img;
//     }

//     setName(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }

// }

// localStorage.setItem("storedCart", JSON.stringify(cart));
// Local Storage 
cart = JSON.parse(localStorage.getItem("storedCart"));
profile = JSON.parse(localStorage.getItem("storeProfile"));
let profileIsLogged;

const checkSavedOrders = () => {
    for (let prof of profile) {
        if (prof.loggedin === true) {
            profileIsLogged = true;
            if (prof.userOrders !== undefined) {
                cart = prof.userOrders
            }
            break;
        } else {
            profileIsLogged = false;
            cart = [];
        }
    }
}
const addUserOrders = () => {
    for (let prof of profile) {
        if (prof.loggedin === true) {
            prof["userOrders"] = cart;
            localStorage.setItem("storeProfile", JSON.stringify(profile));
            break;
        } else {
            // console.log("No User");
            continue;
        };
    }
}

window.addEventListener('load', checkSavedOrders);

// Shop Body --------------------------------------------------------------
const shopBody = document.querySelector(".shop-body");

const productCard = document.getElementsByClassName("item-container");
const productImg = document.getElementsByClassName("item-img");
const productName = document.getElementsByClassName("item-name");
const productPrice = document.getElementsByClassName("item-price");
const productType = document.getElementsByClassName("item-type");
const productSize = document.getElementsByClassName("item-size");
const productBrand = document.getElementsByClassName("item-brand");
const productDesc = document.getElementsByClassName("item-desc");

const productSideContainer = document.querySelector(".product-side-details-container");
const productSideImg = document.querySelector(".product-side-img img");
const productSideName = document.querySelector(".product-side-name h2");
const productSideType = document.querySelector(".product-side-desc.type p");
const productSideSize = document.querySelector(".product-side-desc.size p");
const productSideBrand = document.querySelector(".product-side-desc.brand p");
const productSideDescription = document.querySelector(".product-side-desc.description p");
const productSideBack = document.querySelector(".product-side-back-icon");
const productSidePrice = document.querySelector('.product-side-price');

const productSideCart = document.querySelector(".product-side-cart");

const displayProducts = (filteredList) => {
    for (let i = 0; i < shopBody.children.length; i++) {
        let child = shopBody.lastElementChild;
        while (child) {
            shopBody.removeChild(child);
            child = shopBody.lastElementChild;
        }
    }
    // console.log(filteredList);
    if (filteredList === null) {
        shopBody.innerHTML = ""
        arr = products;
    } else if (Object.keys(filteredList).length == 0) {
        shopBody.innerHTML = "Search for Products...";
        arr = 0;
        // uncheckBox();
        // alert("No Item Searched...");
    } else if (products.length > filteredList) {
        shopBody.innerHTML = ""
        arr = products;
    } else {
        shopBody.innerHTML = ""
        arr = filteredList;
    }
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr.length);
        // item container
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");
        shopBody.appendChild(itemContainer);

        // img
        const itemImg = document.createElement("div");
        itemImg.classList.add("item-img");

        const img = document.createElement("img");
        // img.setAttribute("src", "assets/img/store-men/white-shirt.png");
        itemImg.appendChild(img);
        itemContainer.appendChild(itemImg);

        // description
        const itemDescription = document.createElement("div");
        itemDescription.classList.add("item-description");
        itemContainer.appendChild(itemDescription);

        // detail
        const itemDetails = document.createElement("div");
        itemDetails.classList.add("item-details");
        itemDescription.appendChild(itemDetails);

        const itemName = document.createElement("div");
        itemName.classList.add("item-name");
        itemDetails.appendChild(itemName);

        const itemPrice = document.createElement("div");
        itemPrice.classList.add("item-price");
        itemDetails.appendChild(itemPrice);

        const itemBrand = document.createElement("div");
        itemBrand.classList.add("item-brand");
        itemDetails.appendChild(itemBrand);

        const itemType = document.createElement("div");
        itemType.classList.add("item-type");
        itemDetails.appendChild(itemType);

        const itemSize = document.createElement("div");
        itemSize.classList.add("item-size");
        itemDetails.appendChild(itemSize);

        const itemDesc = document.createElement("div");
        itemDesc.classList.add("item-desc");
        itemDetails.appendChild(itemDesc);

        // button
        const itemButton = document.createElement("div");
        itemButton.classList.add("item-button");

        // const buyIcon = document.createElement("span");
        // buyIcon.classList.add("buy-icon");
        // buyIcon.classList.add("material-symbols-outlined");
        // buyIcon.innerHTML = "add_shopping_cart";
        // itemButton.appendChild(buyIcon);
        // itemDescription.appendChild(itemButton);

        itemName.innerHTML = arr[i].name;
        itemPrice.innerHTML = arr[i].price;
        itemBrand.innerHTML = arr[i].brand;
        itemType.innerHTML = arr[i].type;
        itemSize.innerHTML = arr[i].size;
        itemDesc.innerHTML = arr[i].description;
        img.setAttribute("src", arr[i].img);
    }


    // Product Side Menu  --------------------------------------------------------------
    for (let i = 0; i < productCard.length; i++) {
        productCard[i].addEventListener('click', () => {
            productSideContainer.classList.remove("hide");
            productDetails.img = productImg[i].firstChild.getAttribute("src");
            productDetails.name = productName[i].innerHTML;
            productDetails.type = productType[i].innerHTML;
            productDetails.size = productSize[i].innerHTML;
            productDetails.brand = productBrand[i].innerHTML;
            productDetails.description = productDesc[i].innerHTML;
            productDetails.price = productPrice[i].innerHTML;
            // productSideImg.setAttribute("src", productImg[i].firstChild.getAttribute("src"));
            // console.log(productSideImg.getAttribute("src"));
            // let miniProductItem = new MiniCart(productSideName.innerHTML, productSidePrice.innerHTML, productSideImg);
            // console.log(miniProductItem.name);
            // console.log(miniProductItem.price);productDetails.img 
            productSideImg.setAttribute("src", productDetails.img);
            productSideName.innerHTML = productDetails.name;
            productSideType.innerHTML = productDetails.type;
            productSideSize.innerHTML = productDetails.size;
            productSideBrand.innerHTML = productDetails.brand;
            productSideDescription.innerHTML = productDetails.description;
            productSidePrice.innerHTML = productDetails.price;
        });
    }
    productSideBack.addEventListener('click', () => {
        productSideContainer.classList.add("hide");
    });


}

displayProducts(products, filters);

// Product Checkout

const miniCartShowMore = document.querySelector(".mini-cart-show-more");


// Mini Cart Box Show  --------------------------------------------------------------

const headerCart = document.querySelector(".side-content.cart");
const miniCartBox = document.querySelector('.mini-cart-box');
const miniCartColapse = document.querySelector('.mini-cart-box-colapse');

miniCartColapse.addEventListener('click', () => miniCartBox.classList.add("hide"));

headerCart.addEventListener('mouseover', () => miniCartBox.classList.remove("hide"));

miniCartBox.addEventListener('mouseleave', () => miniCartBox.classList.add("hide"));

// Mini Cart Box
const miniProductContainer = document.querySelector(".mini-cart-product-container");

// current count
const miniCurrentCount = document.querySelector(".mini-cart-current-count");

// checkout

miniCartShowMore.addEventListener('click', () => {
    if (cart.length < 1) alert("Cart is Empty");
    else {
        localStorage.setItem("storedCart", JSON.stringify([]));
        addUserOrders();
    }
});

// Add to Cart Function  --------------------------------------------------------------

const addToCart = (name, price, img, id) => {
    // mini cart
    const miniCartProduct = document.createElement("div");
    miniCartProduct.classList.add("mini-cart-product");
    miniProductContainer.appendChild(miniCartProduct);

    // mini cart img
    const miniCartImg = document.createElement("div");
    miniCartImg.classList.add("mini-product-img");
    const miniImg = document.createElement("img");
    miniCartImg.appendChild(miniImg);
    miniCartProduct.appendChild(miniCartImg);

    // mini cart description
    const miniProductDesc = document.createElement("div");
    miniProductDesc.classList.add("mini-product-description");
    miniCartProduct.appendChild(miniProductDesc);

    // mini cart name
    const miniProductName = document.createElement("div");
    miniProductName.classList.add("mini-product-name");
    miniProductDesc.appendChild(miniProductName);

    // mini cart price
    const miniProductPrice = document.createElement("div");
    miniProductPrice.classList.add("mini-product-price");
    miniProductDesc.appendChild(miniProductPrice);

    // mini product remove
    const miniProductRemove = document.createElement("div");
    miniProductRemove.classList.add("mini-product-remove");
    miniProductRemove.innerHTML = "Remove From Cart";
    miniCartProduct.appendChild(miniProductRemove);


    miniImg.setAttribute("src", img);
    miniProductName.innerHTML = name;
    miniProductPrice.innerHTML = price;
    const miniProdId = id;

    // Remove From Cart

    miniProductRemove.addEventListener('click', () => {
        for (let i = 0; i < cart.length; i++) {
            console.log(miniProdId);
            console.log(cart[i]["id"]);
            console.log(miniProdId == cart[i]["id"]);
            if (miniProdId == cart[i]["id"]) {
                miniCartProduct.remove();
                cart.splice(i, 1);
                console.log(cart);
            }
            miniCurrentCount.innerHTML = cart.length;
            if (cart.length < 1) miniCurrentCount.classList.add("hide");
        }
        // if (cart.length < 4) miniCartShowMore.classList.add("hide");
        localStorage.setItem("storedCart", JSON.stringify(cart));
        addUserOrders();
    });
    addUserOrders();
    // if (cart.length > 4) miniCartShowMore.classList.remove("hide");

    // console.log(cart);
}


// Add to List 
let count = 0;
const addToList = () => {
    if (!profileIsLogged) {
        alert("Must be Logged in First");
    } else {
        count++;
        for (let prod of cart) {
            if (prod.id === count) {
                count++;
            }
        }
        cart.push({
            id: count,
            name: productDetails.name,
            price: productDetails.price,
            img: productDetails.img,
            type: productDetails.type,
            size: productDetails.size,
            brand: productDetails.brand
        });
        localStorage.setItem("storedCart", JSON.stringify(cart));

        if (cart.length < 1) {
            miniCurrentCount.classList.add("hide");
        } else if (cart.length >= 1) {
            miniCurrentCount.classList.remove("hide")
            miniCurrentCount.innerHTML = cart.length;
        }

        addToCart(productDetails.name, productDetails.price, productDetails.img, count);
        // console.log(cart);
    }
}

const updateListedCart = () => {
    if (cart.length < 1) {
        miniCurrentCount.classList.add("hide");
    } else if (cart.length >= 1) {
        miniCurrentCount.classList.remove("hide")
        miniCurrentCount.innerHTML = cart.length;
        for (let prod of cart) {
            if (prod !== undefined) {
                addToCart(prod["name"], prod["price"], prod["img"], prod["id"])
            } else {
                continue;
            };
        }
    }

}

// Add To Cart
productSideCart.addEventListener('click', addToList);
window.addEventListener('load', updateListedCart);

// Currently Searching  --------------------------------------------------------------

const currentSearching = document.querySelector(".current-searching");

const displayCurrentSearching = (category) => {
    for (let i = 0; i < currentSearching.children.length; i++) {
        let child = currentSearching.lastElementChild;
        while (child) {
            currentSearching.removeChild(child);
            child = currentSearching.lastElementChild;
        }

    }
    for (let cat of category) {
        let cat2 = cat.charAt(0).toUpperCase() + cat.slice(1);
        const searchCategory = document.createElement("div");
        searchCategory.classList.add("searching-category");

        currentSearching.appendChild(searchCategory);
        searchCategory.innerHTML = cat2;
    }
}

// Filtering --------------------------------------------------------------

const filterProduct = (product, filter) => {
    const filterKeys = Object.keys(filter);
    let filterType = ["t-shirt", "polo", "turtleneck", "jacket", "hoodie"];
    let filterSize = ["xs", "s", "m", "l", "xl"];
    let filterBrand = ["adidas", "nike", "supreme", "levi's"];
    const filterList = product.filter((product) => {
        let include = true;
        for (let i = 0; i < filterKeys.length; i++) {
            const filterKey = filterKeys[i];
            // let typeArr = [];
            // let sizeArr = [];
            // let brandArr = [];
            // let trueCounter;
            if (filterKey === "price") {
                if (Number(filter.price.min) > Number(product.price)) include = false;
                if (Number(filter.price.max) < Number(product.price)) include = false;
            } else if (filterKey === "search") {
                if (!product.name.toLowerCase().includes(String(filter.search).toLowerCase())) include = false;
            } else if (filterKey === "type") {
                for (let e of filterType) {
                    // typeArr.push(filter.type[e]);
                    // console.log(typeArr);
                    // console.log(typeArr);
                    // trueCounter = typeArr.filter(e => e).length;
                    // console.log(trueCounter);
                    // if (trueCounter == 0) include = true;
                    if (e === String(product.type)) {
                        if (filter.type[e] === false) include = false;
                        if (filter.type[e] === null) include = false;
                        if (filter.type[e] === undefined) include = false;
                    }
                }
            } else if (filterKey === "size") {
                for (let e of filterSize) {
                    // sizeArr.push(filter.size[e]);
                    // console.log(sizeArr);
                    // trueCounter = sizeArr.filter(e => e).length;
                    // console.log(trueCounter);
                    // if (trueCounter == 0) include = true;
                    if (e === String(product.size)) {
                        if (filter.size[e] === false) include = false;
                        if (filter.size[e] === null) include = false;
                        if (filter.size[e] === undefined) include = false;
                    }
                }
            } else if (filterKey === "brand") {
                for (let e of filterBrand) {
                    // brandArr.push(filter.brand[e]);
                    // console.log(brandArr);
                    // trueCounter = brandArr.filter(e => e).length;
                    // console.log(trueCounter);
                    // if (trueCounter == 0) include = true;
                    if (e === String(product.brand).toLowerCase()) {
                        if (filter.brand[e] === false) include = false;
                        if (filter.brand[e] === null) include = false;
                        if (filter.brand[e] === undefined) include = false;
                    }
                }
            }
            // else {
            //     include = true;
            // }

        }
        return include;

    });
    // console.log(filterList);
    displayProducts(filterList);

}

// Search Box Searching --------------------------------------------------------------
const searchBox = document.getElementById("shop-search-box");

searchBox.addEventListener('keyup', (event) => {
    const value = event.target.value;

    if (filters.search === undefined) {
        filters.search = {};
    }

    filters.search = value;

    console.log(value);
    filterProduct(products, filters);

});

searchBox.addEventListener('onchange', (event) => {
    const value = event.target.value;

    if (filters.search === undefined) {
        filters.search = {};
    }

    filters.search = value;

    console.log(value);
    filterProduct(products, filters);

});

// Price Box --------------------------------------------------------------

const priceChange = (event) => {
    const type = event.target.name;
    const value = event.target.value;

    if (filters.price === undefined) {
        filters.price = {};
    }

    filters.price[type] = value;

    filterProduct(products, filters);
}


const priceBox = document.getElementsByClassName("price-range");

for (let i = 0; i < priceBox.length; i++) {
    priceBox[i].addEventListener('change', priceChange);
    priceBox[i].addEventListener('keyup', priceChange);
}

// Type --------------------------------------------------------------
let currentFilter = [];

const identifyBox = (event) => {
    const type = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;

    if (filters[type] === undefined) {
        filters[type] = {};
    }

    if (checked === false) {
        currentFilter = currentFilter.filter((e) => {
            let include = true;
            if (value == e) include = false;
            return include;
        });
        console.log(currentFilter);
    } else {
        currentFilter.push(value);
        console.log(currentFilter);

    }

    filters[type][value] = checked;

    // console.log(filters)
    // console.log(filters[type][value])
    displayCurrentSearching(currentFilter);
    filterProduct(products, filters);
}

// item type --------------------------------------------------------------
const itemType = document.getElementsByName("type");

for (let i = 0; i < itemType.length; i++) {
    itemType[i].addEventListener('load', identifyBox);
    itemType[i].addEventListener('click', identifyBox);
}

// item size --------------------------------------------------------------
const itemSize = document.getElementsByName("size");

for (let i = 0; i < itemSize.length; i++) {
    itemSize[i].addEventListener('load', identifyBox);
    itemSize[i].addEventListener('click', identifyBox);
}

// item brand --------------------------------------------------------------
const itemBrand = document.getElementsByName("brand");

for (let i = 0; i < itemBrand.length; i++) {
    itemBrand[i].addEventListener('load', identifyBox);
    itemBrand[i].addEventListener('click', identifyBox);
}

// Product Counter --------------------------------------------------------------

const typeCounter = document.querySelectorAll(".type.counter");
const sizeCounter = document.querySelectorAll(".size.counter");
const brandCounter = document.querySelectorAll(".brand.counter");

const itemCounter = () => {
    let shirtCounter = 0;
    let poloCounter = 0;
    let turtleCounter = 0;
    let jacketCounter = 0;
    let hoodieCounter = 0;

    let xsCounter = 0;
    let sCounter = 0;
    let mCounter = 0;
    let lCounter = 0;
    let xlCounter = 0;

    let adidasCounter = 0;
    let nikeCounter = 0;
    let supremeCounter = 0;
    let leviCounter = 0;

    for (let i = 0; i < products.length; i++) {
        let countType = String(products[i].type);
        if (countType === "t-shirt") shirtCounter++;
        if (countType === "polo") poloCounter++;
        if (countType === "turtleneck") turtleCounter++;
        if (countType === "jacket") jacketCounter++;
        if (countType === "hoodie") hoodieCounter++;
        let countSize = String(products[i].size);
        if (countSize === "xs") xsCounter++;
        if (countSize === "s") sCounter++;
        if (countSize === "m") mCounter++;
        if (countSize === "l") lCounter++;
        if (countSize === "xl") xlCounter++;
        let countBrand = String(products[i].brand);
        if (countBrand === "Adidas") adidasCounter++;
        if (countBrand === "Nike") nikeCounter++;
        if (countBrand === "Supreme") supremeCounter++;
        if (countBrand === "Levi's") leviCounter++;
    }
    typeCounter[0].innerHTML = shirtCounter;
    typeCounter[1].innerHTML = poloCounter;
    typeCounter[2].innerHTML = turtleCounter;
    typeCounter[3].innerHTML = jacketCounter;
    typeCounter[4].innerHTML = hoodieCounter;

    sizeCounter[0].innerHTML = xsCounter;
    sizeCounter[1].innerHTML = sCounter;
    sizeCounter[2].innerHTML = mCounter;
    sizeCounter[3].innerHTML = lCounter;
    sizeCounter[4].innerHTML = xlCounter;

    brandCounter[0].innerHTML = adidasCounter;
    brandCounter[1].innerHTML = nikeCounter;
    brandCounter[2].innerHTML = supremeCounter;
    brandCounter[3].innerHTML = leviCounter;
}

itemCounter();

// Product Sort --------------------------------------------------------------

const productSort = document.getElementById("shop-sort");
productSort.addEventListener('change', () => {
    if (productSort.value === "increasing") {
        productSortIncreasing();
    } else if (productSort.value === "decreasing") {
        productSortDecreasing();
    }
});

const productSortIncreasing = () => {
    let sorted = products.sort((a, b) => {
        return a.price - b.price
    });
    filterProduct(sorted, filters);
}
const productSortDecreasing = () => {
    let sorted = products.sort((a, b) => {
        return b.price - a.price
    });
    filterProduct(sorted, filters);
}

// Window offset

const productSideDetails = document.querySelector(".product-side-details");

window.addEventListener('scroll', () => {
    let scrollPos = window.pageYOffset;
    // console.log(scrollPos)
    if(scrollPos >= 400){
        productSideDetails.style.top = scrollPos-50+"px";
    }
    else{
        productSideDetails.style.top = "0px";
    }
});