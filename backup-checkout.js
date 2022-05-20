// const shopProfile = JSON.parse(localStorage.getItem("storeProfile"));
// let currentProfileLogged;
// let storedCartList;

// // Check the saved ordered
// const checkSavedOrders = () => {
//     for (let prof of shopProfile) {
//         if (prof.loggedin === true) {
//             currentProfileLogged = prof;
//             if (prof.userOrders !== undefined) {
//                 storedCartList = prof.userOrders
//             }
//             break;
//         }
//     }
//     if (storedCartList === undefined) {
//         // console.log("No User");
//         window.location.href = "home.html";
//     }
// }

// // Add orders to List
// const addUserOrders = () => {
//     for (let prof of shopProfile) {
//         if (prof.loggedin === true) {
//             // console.log(prof.username + " user is online");
//             prof["userOrders"] = storedCartList;
//             localStorage.setItem("storeProfile", JSON.stringify(shopProfile));
//             break;
//         } else {
//             // console.log("No User");
//             continue;
//         };
//     }
// }

// window.addEventListener('load', checkSavedOrders);

// // Add to Cart
// const checkoutCartProducts = document.querySelector(".checkout-cart-products tbody");
// const removeFromCart = document.getElementsByClassName("remove-button");
// const products = document.getElementsByClassName("checkout-product");
// const reminder = document.querySelector(".checkout-reminder");

// const addToCart = () => {
//     for (let i = 0; i < storedCartList.length; i++) {
//         const tableRowProduct = document.createElement("tr");
//         tableRowProduct.classList.add("checkout-product");
//         checkoutCartProducts.appendChild(tableRowProduct);

//         const tableDataDetail = document.createElement("td");
//         tableDataDetail.classList.add("checkout-product-detail");
//         tableRowProduct.appendChild(tableDataDetail);

//         const divProductImg = document.createElement("div");
//         divProductImg.classList.add("checkout-product-img");
//         tableDataDetail.appendChild(divProductImg);

//         const imgProduct = document.createElement("img");
//         // imgProduct.setAttribute("src", "assets/img/store-men/white-shirt.png");
//         divProductImg.appendChild(imgProduct);

//         const divProductDescription = document.createElement("div");
//         divProductDescription.classList.add("checkout-product-description");
//         tableDataDetail.appendChild(divProductDescription);

//         const headerProductName = document.createElement("h3");
//         headerProductName.classList.add("checkout-product-name");
//         // headerProductName.innerHTML = "Placeholder yeye";
//         divProductDescription.appendChild(headerProductName);

//         const divProductType = document.createElement("div");
//         divProductType.classList.add("checkout-product-type");
//         // divProductType.innerHTML = "Placeh";
//         divProductDescription.appendChild(divProductType);

//         const tableDataSize = document.createElement("td");
//         const productSizeDiv = document.createElement("div");
//         productSizeDiv.classList.add("td-style");
//         productSizeDiv.classList.add("checkout-product-size");
//         // productSizeDiv.innerHTML = "Placehe";
//         tableDataSize.appendChild(productSizeDiv);
//         tableRowProduct.appendChild(tableDataSize);

//         const tableDataBrand = document.createElement("td");
//         const productBrandDiv = document.createElement("div");
//         productBrandDiv.classList.add("td-style");
//         productBrandDiv.classList.add("checkout-product-brand");
//         // productBrandDiv.innerHTML = "Place";
//         tableDataBrand.appendChild(productBrandDiv);
//         tableRowProduct.appendChild(tableDataBrand);

//         const tableDataPrice = document.createElement("td");
//         const productPriceDiv = document.createElement("div");
//         productPriceDiv.classList.add("td-style");
//         productPriceDiv.classList.add("checkout-product-price");
//         // productPriceDiv.innerHTML = "Placeeye";
//         tableDataPrice.appendChild(productPriceDiv);
//         tableRowProduct.appendChild(tableDataPrice);

//         const tableDataRemove = document.createElement("td");
//         tableDataRemove.classList.add("remove-from-cart");
//         const buttonRemove = document.createElement("button");
//         buttonRemove.classList.add("remove-button");
//         tableDataRemove.appendChild(buttonRemove);
//         const imgRemove = document.createElement("img");
//         imgRemove.setAttribute("src", "assets/svg/x-solid.svg");
//         buttonRemove.appendChild(imgRemove);
//         tableRowProduct.appendChild(tableDataRemove);


//         imgProduct.setAttribute("src", storedCartList[i].img);
//         headerProductName.innerHTML = storedCartList[i].name;
//         divProductType.innerHTML = storedCartList[i].type;
//         productSizeDiv.innerHTML = storedCartList[i].size.toUpperCase();
//         productBrandDiv.innerHTML = storedCartList[i].brand;
//         productPriceDiv.innerHTML = storedCartList[i].price;
//         const prodId = storedCartList[i].id;

//         buttonRemove.addEventListener('click', () => {
//             tableRowProduct.remove();
//             cartFilter = storedCartList.filter((prod) => {
//                 let include = true;
//                 if (prod.id !== prodId) include = false;
//                 return include;
//             });
//             for (let i = 0; i < storedCartList.length; i++) {
//                 if (cartFilter[0].id === storedCartList[i].id) {
//                     storedCartList.splice(i, 1);
//                 }
//             }
//             console.log(storedCartList);
//             calculateTotalPrice();
//             addUserOrders();
//             cartIsEmpty()

//         });
//         addUserOrders();
//         calculateTotalPrice();
//     }
// }

// // Check if cart is Empty 
// const cartIsEmpty = () => {
//     if (storedCartList.length < 1) {
//         reminder.classList.add("active");
//     }
// }

// window.addEventListener('load', cartIsEmpty);
// window.addEventListener('load', addToCart)

// // Get Total Price
// const subTotalPrice = document.querySelector(".checkout-subtotal-price span");
// const shippingFee = document.querySelector(".checkout-fee");
// const checkoutTotalPrice = document.querySelector(".checkout-total-price span");
// const checkoutTotalCount = document.querySelector(".checkout-total-amount span");

// const calculateTotalPrice = () => {
//     let sum = 0,
//         fee = 0;
//     for (let x of storedCartList) {
//         sum += parseInt(x.price);
//         fee += 25;
//     }
//     subTotalPrice.innerHTML = sum;
//     shippingFee.innerHTML = fee;
//     let total = sum + fee;
//     checkoutTotalPrice.innerHTML = total;
//     checkoutTotalCount.innerHTML = storedCartList.length;
// }

// // Confirmation of Purchase

// // confirm information
// const paymentMethod = document.getElementsByName("method");
// const confirmFullName = document.getElementById("full-name");
// const confirmPhone = document.getElementById("phone-number");
// const confirmVoucher = document.getElementById("voucher");

// // confirm final
// const finalPrice = document.querySelector(".final-confirm.price p");
// const finalAmount = document.querySelector(".final-confirm.amount p ");
// const finalName = document.querySelector(".final-confirm.name p");
// const finalPhone = document.querySelector(".final-confirm.phone p");
// const finalMethod = document.querySelector(".final-confirm.method p");

// // confirm buttons
// const confirmButton = document.querySelector(".checkout-confirm");
// const confirmPopup = document.querySelector(".final-confirm-popup");
// const finalConfirmNo = document.querySelector(".final-confirm-button.no");
// const finalConfirmYes = document.querySelector(".final-confirm-button.yes");

// const finalConfirmationBox = () => {
//     let methodValue;
//     for (let check of paymentMethod) {
//         if (check.checked) {
//             methodValue = check.value;
//             break;
//         }
//     }
//     finalPrice.innerHTML = checkoutTotalPrice.innerHTML;
//     finalAmount.innerHTML = storedCartList.length;
//     finalName.innerHTML = currentProfileLogged.fullName;
//     finalPhone.innerHTML = confirmPhone.value;
//     finalMethod.innerHTML = methodValue;
// }

// confirmButton.addEventListener('click', () => {
//     if (confirmFullName.value === "" || confirmPhone.value === "") {
//         console.log("Fill the name");
//         console.log("Fill the phonenumber");
//     } else if (confirmFullName.value !== currentProfileLogged.fullName) {
//         console.log("Make sure name is same as registered");
//     } else {
//         console.log("proceed to confirm");
//         confirmPopup.classList.add("active");
//         finalConfirmationBox();
//     }
// });

// finalConfirmNo.addEventListener('click', () => {
//     confirmPopup.classList.remove("active");
// });

// finalConfirmYes.addEventListener('click', () => {
//     console.log("confirmed");
// });