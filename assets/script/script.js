// save just incase
// localStorage.setItem("backupProfile", JSON.stringify(profile));

const profile = JSON.parse(localStorage.getItem("storeProfile"));
let currentProfile;

// Loop if login is true
window.addEventListener('load', () => {
    if (profile === null) {
        localStorage.setItem("storeProfile", JSON.stringify([{
            fullName: "Adam Adminson",
            username: "admin",
            password: "admin",
            userOrders: [],
            accountStats: {
                totalPurchases: [],
                totalCashSpent: [],
                highestItemBought: []
            },
            loggedin: false
        }]));
        noUserLoggedIn();
    } else {
        if (profile.length < 1) {
            noUserLoggedIn();
            console.log("No User");
        }
        for (let prof of profile) {
            if (prof.loggedin === true) {
                console.log("User Logged In");
                currentProfile = prof;
                userLoggedIn();
                break;
            } else {
                console.log("No User");
                noUserLoggedIn();
            };
        }
    }
});

// Update Profile Name
const miniProfileName = document.querySelector(".mini-profile-name");

const updateProfileName = () => {
    const temp1 = currentProfile.fullName;
    const temp2 = temp1.charAt(0).toUpperCase() + temp1.slice(1);
    miniProfileName.innerHTML = temp2;
};

// Check if any user is logged in
const userProfile = document.querySelector(".side-content.profile");
const credentialBox = document.querySelector(".credential-container");
const miniProfileBox = document.querySelector(".mini-profile-box-container");

const userLoggedIn = () => {
    userProfile.classList.add("active");
    credentialBox.classList.remove("active");
    updateProfileName();
}

const noUserLoggedIn = () => {
    credentialBox.classList.add("active");
    userProfile.classList.remove("active");
}

userProfile.addEventListener('mouseover', () => {
    miniProfileBox.classList.add("active");
})

miniProfileBox.addEventListener('mouseleave', () => {
    miniProfileBox.classList.remove("active");
});

// Logout Box
const miniProfileLogout = document.querySelector('.mini-profile.logout');
const confirmationBox = document.querySelector('.confirmation-box');

miniProfileLogout.addEventListener('click', () => {
    confirmationBox.classList.add("active");
});

// Confirm Yes or No Logout Box
const confirmYes = document.querySelector('.confirm.yes');
const confirmNo = document.querySelector('.confirm.no');

confirmYes.addEventListener('click', () => {
    for (let i = 0; i < profile.length; i++) {
        if (profile[i].loggedin === true) {
            profile[i].loggedin = false;
            localStorage.setItem("storeProfile", JSON.stringify(profile));
            break;
        }
    }
    location.reload();
    // console.log("logged out: " + currentProfile.username);
});

// const checkCart = () => {

// }

confirmNo.addEventListener('click', () => {
    confirmationBox.classList.remove("active");
});