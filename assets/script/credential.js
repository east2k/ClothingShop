let profile = [
    // {
    //     fullName: "Adam Adminson",
    //     username: "admin",
    //     password: "admin",
    //     userOrders: [],
    //     accountStats: {
    //         totalPurchases: [],
    //         totalCashSpent: [],
    //         highestItemBought: []
    //     },
    //     loggedin: false
    // },
    // {
    //     username: "user",
    //     password: "user"
    // },
    // {
    //     username: "user1",
    //     password: "user1"
    // }
]

// localStorage.setItem("storeProfile", JSON.stringify(profile));
const storedProfile = JSON.parse(localStorage.getItem("storeProfile"));
profile = JSON.parse(localStorage.getItem("storeProfile"));

console.log(storedProfile);

const loginPage = document.querySelector(".credential-page-content.login");
const registerPage = document.querySelector(".credential-page-content.register");
const inactiveLoginButton = document.getElementById("login-button-inactive");
const inactiveRegisterButton = document.getElementById("register-button-inactive");

inactiveRegisterButton.addEventListener('click', () => {
    loginPage.classList.add("inactive");
    registerPage.classList.remove("inactive");
});
inactiveLoginButton.addEventListener('click', () => {
    registerPage.classList.add("inactive");
    loginPage.classList.remove("inactive");
});

const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");
const loginPopup = document.querySelector(".login-popup");
const loginPopupText = document.querySelector(".login-popup span");
const loginXButton = document.querySelector(".login-x-button");

loginButton.addEventListener('click', () => {
    for (let prof of profile) {
        if (String(loginUsername.value) === prof.username && String(loginPassword.value) === prof.password) {
            prof.loggedin = true;
            localStorage.setItem("storeProfile", JSON.stringify(profile));
            loginPopupText.innerHTML = "Successfully Logged In";
            loginPopup.classList.add("active");
            loginXButton.addEventListener('click', () => {
                window.location.href = "home.html";
            })
            // console.log("logedin");
            break;
        } else if (String(loginUsername.value) !== prof.username) {
            loginPopupText.innerHTML = "Username does not exist";
            loginPopup.classList.add("active");
            // console.log("fail");
        } else if (String(loginPassword.value) === prof.password) {
            loginPopupText.innerHTML = "Incorrect Password";
            loginPopup.classList.add("active");
        } else {
            loginPopupText.innerHTML = "Failed to Log In";
            loginPopup.classList.add("active");
        }
    }
});

loginXButton.addEventListener('click', () => {
    loginPopup.classList.remove("active");
})

const registerFullName = document.getElementById("register-name");
const registerUsername = document.getElementById("register-username");
const registerPassword = document.getElementById("register-password");
const registerConfirmPassword = document.getElementById("register-confirm-password");
const registerButton = document.getElementById("register-button");
const registerPopup = document.querySelector(".register-popup");
const registerPopupText = document.querySelector(".register-popup span");
const registerXButton = document.querySelector(".register-x-button");


registerButton.addEventListener('click', () => {
    // check existing user
    const filtered = profile.filter((prof) => {
        let good = true;
        console.log(prof.username);
        if (prof.username === registerUsername.value) good = false;
        return good
    });
    if (filtered.length !== profile.length) {
        registerPopupText.innerHTML = "Username Already Exist";
        registerPopup.classList.add("active");
        // console.log("user already exist");
    } else {
        if (String(registerUsername.value).length < 5 || String(registerPassword.value).length < 5) {
            registerPopupText.innerHTML = "Add More Characters";
            registerPopup.classList.add("active");
            // console.log("add more chacters");
        } else if (String(registerPassword.value) !== String(registerConfirmPassword.value)) {
            registerPopupText.innerHTML = "Password not matching";
            registerPopup.classList.add("active");
            // console.log("pass and confirm pass not matching");
        } else {
            profile.push({
                fullName: String(registerFullName.value),
                username: String(registerUsername.value),
                password: String(registerPassword.value),
                userOrders: [],
                accountStats: {
                    totalPurchases: [],
                    totalCashSpent: [],
                    highestItemBought: []
                },
                loggedin: false
            });
            console.log(profile);

            localStorage.setItem("storeProfile", JSON.stringify(profile));
            registerPopupText.innerHTML = "Successfully Registered"
            registerPopup.classList.add("active");
        }
    }
});


registerXButton.addEventListener('click', () => {
    registerPopup.classList.remove("active");
})