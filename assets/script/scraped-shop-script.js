// Price Filter
const filterBtn = document.querySelector('.price-filter-button');
const priceMin = document.getElementById("price-min");
const priceMax = document.getElementById("price-max");
const itemPrice = document.getElementsByClassName("item-price");
const itemList = document.getElementsByClassName("item-container");

filterBtn.addEventListener('click', () => {
    let min = Number(priceMin.value);
    let max = Number(priceMax.value);
    if (min >= max) {
        alert("Change the Price!");
    } else {
        for (let i = 0; i < itemPrice.length; i++) {
            let price = Number(itemPrice[i].innerHTML.trim());

            // console.log(price >= min && price <= max);

            if (price >= min && price <= max) {
                itemList[i].style.display = "block";
            } else {
                itemList[i].style.display = "none";
            }
        }
    }
});

// Filter

const checkType = document.getElementsByName("clothing-type");
const checkSize = document.getElementsByName("clothing-size");
const checkBrand = document.getElementsByName("clothing-brand");
const itemType = document.getElementsByClassName("item-type");
const itemSize = document.getElementsByClassName("item-size");
const itemBrand = document.getElementsByClassName("item-brand");

const chosenBox = check => {
    if (check == "type") {
        filterCheckbox(checkType, itemType);
    } else if (check == "size") {
        filterCheckbox(checkSize, itemSize);

    } else if (check == "brand") {
        filterCheckbox(checkBrand, itemBrand);

    } else {
        return console.log("invalid");
    }
}

const filterCheckbox = (filterCheck, filterItem) => {

    for (let item of filterCheck) {
        item.addEventListener('click', () => {
            if (item.checked == true) {
                addFilter(item.value, filterItem);
            } else {
                removeFilter(item.value, filterItem);
            }
        });
    }

}

const addFilter = (type, item) => {
    // console.log(type.toLowerCase());
    for (let i = 0; i < item.length; i++) {
        if (type.toLowerCase() == item[i].innerHTML.toLowerCase()) {
            // console.log("filtered");
            itemList[i].style.display = "block";
        } else {
            continue;
        }
    }
}

const removeFilter = (type, item) => {
    // console.log("removed " + type.toLowerCase());
    for (let i = 0; i < item.length; i++) {
        if (type.toLowerCase() == item[i].innerHTML.toLowerCase()) {
            // console.log("removed filtered");
            itemList[i].style.display = "none";
        } else {
            continue;
        }
    }

}

checkType[0].addEventListener('mouseover', chosenBox("type"));
checkSize[0].addEventListener('mouseover', chosenBox("size"));
checkBrand[0].addEventListener('mouseover', chosenBox("brand"));
// for (let i = 0; i < itemList.length; i++) {
//     checkType[i].addEventListener('mouseover', chosenBox("type"));
//     checkSize[i].addEventListener('mouseover', chosenBox("size"));
//     checkBrand[i].addEventListener('mouseover', chosenBox("brand"));

// }

// let listArray = [];

// for (let type of clothingType) {
//     type.addEventListener('click', () => {
//         if (type.checked == true) {
//             listArray.push(type.value);
//             filterType(listArray);
//         } else {
//             listArray = listArray.filter(e => e != type.value);
//             filterType(listArray);
//         }
//     });
// }

// type

// const clothingType = document.getElementsByName("clothing-type");
// const itemType = document.getElementsByClassName("item-type");
// for (let type of clothingType) {
//     type.addEventListener('click', () => {
//         if (type.checked == true) {
//             console.log(type.length);
//             addFilterType(type.value);
//         } else {
//             removeFilterType(type.value);
//         }
//     });
// }

// addFilterType = type => {
//     console.log(type.toLowerCase());
//     for (let i = 0; i < itemType.length; i++) {
//         if (type.toLowerCase() == itemType[i].innerHTML.toLowerCase()) {
//             itemList[i].style.display = "block";
//         } else {
//             continue;
//         }
//     }
// }

// removeFilterType = type => {
//     console.log("removed " + type.toLowerCase());
//     for (let i = 0; i < itemType.length; i++) {
//         if (type.toLowerCase() == itemType[i].innerHTML.toLowerCase()) {
//             itemList[i].style.display = "none";
//         } else {
//             continue;
//         }
//     }

// }
// //  Size
// const clothingSize = document.getElementsByName("clothing-size");
// const itemSize = document.getElementsByClassName("item-size");
// for (let type of clothingSize) {
//     type.addEventListener('click', () => {
//         if (type.checked == true) {
//             console.log(type.length);
//             addFilterSize(type.value);
//         } else {
//             removeFilterSize(type.value);
//         }
//     });
// }

// addFilterSize = type => {
//     console.log(type.toLowerCase());
//     for (let i = 0; i < itemSize.length; i++) {
//         if (type.toLowerCase() == itemSize[i].innerHTML.toLowerCase()) {
//             itemList[i].style.display = "block";
//         } else {
//             continue;
//         }
//     }
// }

// removeFilterSize = type => {
//     console.log("removed " + type.toLowerCase());
//     for (let i = 0; i < itemSize.length; i++) {
//         if (type.toLowerCase() == itemSize[i].innerHTML.toLowerCase()) {
//             itemList[i].style.display = "none";
//         } else {
//             continue;
//         }
//     }

// }
// // Brand
// const clothingBrand = document.getElementsByName("clothing-brand");
// const itemBrand = document.getElementsByClassName("item-brand");
// for (let type of clothingBrand) {
//     type.addEventListener('click', () => {
//         if (type.checked == true) {
//             console.log(type.length);
//             addFilterBrand(type.value);
//         } else {
//             removeFilterBrand(type.value);
//         }
//     });
// }

// addFilterBrand = type => {
//     console.log(type.toLowerCase());
//     for (let i = 0; i < itemBrand.length; i++) {
//         if (type.toLowerCase() == itemBrand[i].innerHTML.toLowerCase()) {
//             itemList[i].style.display = "block";
//         } else {
//             continue;
//         }
//     }
// }

// removeFilteBrand = type => {
//     console.log("removed " + type.toLowerCase());
//     for (let i = 0; i < itemBrand.length; i++) {
//         if (type.toLowerCase() == itemBrand[i].innerHTML.toLowerCase()) {
//             itemList[i].style.display = "none";
//         } else {
//             continue;
//         }
//     }

// }

// const filterType = arr => {
//     for (let i = 0; i < itemType.length; i++) {
//         if (arr.length == 0) {
//             itemList[i].style.display = "none";
//         } else {
//             let type = itemType[i].innerHTML.trim();
//             arr.forEach(a => {
//                 if (a == type.toLowerCase()) {
//                     itemList[i].style.display = "block";
//                     // console.log("yest");
//                 }
//                 else {
//                     itemList[i].style.display = "none";
//                     
//                 }
//             });

//             // for (let array of arr) {
//             //     console.log(array);
//             //     if (array == type.toLowerCase()) {
//             //         itemList[i].style.display = "block";
//             //         // console.log("yest");
//             //     }
//             //     //  else {
//             //     //     itemList[i].style.display = "none";
//             //     //     
//             //     // }
//             // }
//             // for (let e = 0; e < arr.length; e++) {
//             //     if (arr[e] == type.toLowerCase()) {
//             //         itemList[i].style.display = "block";
//             //         // console.log("yest");
//             //     } else if (arr[e] == "t-shirt" ||
//             //         arr[e] == "polo" ||
//             //         arr[e] == "turtleneck" ||
//             //         arr[e] == "jacket" ||
//             //         arr[e] == "hoodie") {
//             //         continue;
//             //     } else {
//             //         itemList[i].style.display = "none";
//             //         
//             //     }
//             // }
//         }
//     }
// }



// console.log(clothingType[1].value.trim());
// for (let i = 0; i < clothingType.length; i++) {



// let type = itemType[i].innerHTML.trim();
// console.log(type);
// clothingType[i].addEventListener('click', () => {
//     // let type = clothingType[i].value.trim();
//     // if (i = 0) {
//     //     console.log("shirt");
//     // } else if (i = 1) {
//     //     console.log("polo");
//     // } else if (i = 2) {
//     //     console.log("turtleneck");
//     // } else if (i = 3) {
//     //     console.log("jacket");
//     // } else if (i = 4) {
//     //     console.log("hoodie");
//     // }
//     if (clothingType[0].checked) {
//         if (type == "polo") {
//             itemList[i].style.display = "block";
//             console.log("WHAT");
//         } else {
//             itemList[i].style.display = "none";
//             console.log("cunt");
//         }
//     }
//     else if (clothingType[1].checked) {
//         itemList[i].style.display = "block";
//     }
//     else if (clothingType[2].checked) {
//         itemList[i].style.display = "block";
//     }
//     else if (clothingType[3].checked) {
//         itemList[i].style.display = "block";
//     }
//     else if (clothingType[4].checked) {
//         itemList[i].style.display = "block";
//     } else {
//         itemList[i].style.display = "none";
//     }
// });

// }

// const clothingType = document.getElementsByName("clothing-type");
// const itemType = document.getElementsByClassName("item-type");

// for (let checkType of clothingType) {
//     checkType.addEventListener('click', () => {
//         for (let i = 0; i < itemType.length; i++) {
//             let type = itemType[i].innerHTML.trim();
//             if (checkType.checked == true) {
//                 if (checkType.value == type.toLowerCase()) {
//                     itemList[i].style.display = "block";
//                 } else {
//                     itemList[i].style.display = "none";
//                 }
//             } else {
//                 // if (checkType.value != type.toLowerCase()) {
//                 //     itemList[i].style.display = "none";
//                 // } else {
//                 //     itemList[i].style.display = "block";
//                 // }
//             }
//         }
//     });
// }
// function filterCondtn1(event) {
//     var element = event.target
//     var condt1 = document.getElementsByClassName("option")
//     for (var i = 0; i < condt1.length; i++) {
//         if (condt1[i].innerHTML.toLowerCase() == element.value.toLowerCase()) {
//             if (element.checked == true) {
//                 condt1[i].parentElement.style = "display:none"
//             } else {
//                 condt1[i].parentElement.style = "display:block"
//             }
//         }
//     }
// }

// const clothingType = document.getElementsByName("clothing-type");
// const itemType = document.getElementsByClassName("item-type");

// for (let type of clothingType) {
//     type.addEventListener('click', filterCondtn1);
// }

// function filterCondtn1(event) {
//     let element = event.target;
//     let itemType = document.getElementsByClassName("item-type");
//     for (let i = 0; i < itemType.length; i++) {
//         if (itemType[i].innerHTML.toLowerCase() == element.value.toLowerCase()) {
//             if (element.checked == true) {
//                 itemList[i].style = "display:block";
//             } else {
//                 itemList[i].style = "display:none";
//             }
//         }
//     }
// }

//side menu item counter

const shirtCounter = document.getElementById("shirt-counter");
const poloCounter = document.getElementById("polo-counter");
const neckCounter = document.getElementById("neck-counter");
const jacketCounter = document.getElementById("jacket-counter");
const hoodieCounter = document.getElementById("hoodie-counter");



const itemCounter = item => {
    // type
    let counter = 0;
    let arr = [];
    for (let i = 0; i < itemList.length; i++) {
        if (itemType[i] = "t-shirt") {
            let x = 0;
            x++;
            counter += x;
        }else{
            continue;
        }
    }
    item.innerHTML = counter;
}

itemCounter(shirtCounter);
// itemCounter(poloCounter);
// itemCounter(neckCounter);
// itemCounter(jacketCounter);
// itemCounter(hoodieCounter);