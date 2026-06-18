
// ======================================
// START SCREEN & PROFILE SETUP
// ======================================
const profileUsername = document.querySelector(".profile-username");
const sessionPopup = document.querySelector(".session-popup");
const profileCat = document.querySelector(".profile-cat");
const floatingProfile = document.querySelector(".floating-profile");

const startScreen = document.querySelector(".start-screen");
const startButton = document.querySelector(".start-button");

const savedUsername = localStorage.getItem("username");
const startName = document.querySelector(".start-name");
const cardUsername = document.querySelector(".card-username");
const cardPfp = document.querySelector(".card-pfp");

let selectedPfp = "blue";
const savedPfp = localStorage.getItem("pfp");

if (savedPfp) {
    selectedPfp = savedPfp;
}
const pfpOptions = document.querySelectorAll(".pfp-option");

pfpOptions.forEach(function(pfp) {
    pfp.onclick = function() {
        pfpOptions.forEach(p => p.classList.remove("selected"));
        pfp.classList.add("selected");
        selectedPfp = pfp.dataset.pfp;
        localStorage.setItem("pfp", selectedPfp);

    };
});
    pfpOptions.forEach(function (pfp) {
    if (pfp.dataset.pfp === selectedPfp) {
        pfp.classList.add("selected");
    } else {
        pfp.classList.remove("selected");
    }
});

const blackOption = document.querySelector(".black-option");
const orangeOption = document.querySelector(".orange-option");

let selectedCat = "black";
const savedCat = localStorage.getItem("cat");

if (savedCat) {
    selectedCat = savedCat;
}
if (selectedCat === "orange") {
    orangeOption.classList.add("selected");
    blackOption.classList.remove("selected");
}

if (selectedCat === "black") {
    blackOption.classList.add("selected");
    orangeOption.classList.remove("selected");
}


blackOption.onclick = function () {
    selectedCat = "black";
    localStorage.setItem("cat", "black");
    blackOption.classList.add("selected");
    orangeOption.classList.remove("selected");
};

orangeOption.onclick = function () {
    selectedCat = "orange";
    localStorage.setItem("cat", "orange");
    orangeOption.classList.add("selected");
    blackOption.classList.remove("selected");
};

startButton.onclick = function () {

    let userName = startName.value.trim();

    if (userName === "") {
        userName = "vishwa";
    }

    profileUsername.textContent = userName;
    localStorage.setItem("username", userName);
    cardUsername.textContent = userName;

    profileCat.style.display = "block";

    cardPfp.src = "assets/profile_" + selectedPfp + ".png";

    document.querySelector(".floating-profile").style.display = "flex";
    startScreen.style.display = "none";

    updateProfileCat();
};
if (savedUsername && savedCat && savedPfp) {
    profileUsername.textContent = savedUsername;
    cardUsername.textContent = savedUsername;

    cardPfp.src = "assets/profile_" + savedPfp + ".png";

    selectedCat = savedCat;
    selectedPfp = savedPfp;

    floatingProfile.style.display = "flex";
    startScreen.style.display = "none";

    updateProfileCat();
}
// ======================================
// COMPANION CAT SYSTEM
// ======================================



function updateProfileCat() {

    let totalTime;

    if (workButton.classList.contains("active")) {
        totalTime = 25 * 60;
    } else {
        totalTime = 5 * 60;
    }

    const progress = ((totalTime - time) / totalTime) * 100;

    if (selectedCat === "black") {

        if (progress < 25) {
            profileCat.src = "assets/black25.gif";
        } else if (progress < 50) {
            profileCat.src = "assets/black50.gif";
        } else if (progress < 75) {
            profileCat.src = "assets/black75.gif";
        } else {
            profileCat.src = "assets/black100.gif";
        }

    } else {

        if (progress < 25) {
            profileCat.src = "assets/orange25.gif";
        } else if (progress < 50) {
            profileCat.src = "assets/orange50.gif";
        } else if (progress < 75) {
            profileCat.src = "assets/orange75.gif";
        } else {
            profileCat.src = "assets/orange100.gif";
        }
    }
}

// ======================================
// FLOATING PROFILE
// ======================================

let draggingProfile = false;
let profileOffsetX = 0;
let profileOffsetY = 0;

floatingProfile.addEventListener("mousedown", function (event) {
    draggingProfile = true;

    profileOffsetX = event.clientX - floatingProfile.offsetLeft;
    profileOffsetY = event.clientY - floatingProfile.offsetTop;
});

document.addEventListener("mousemove", function (event) {
    if (draggingProfile) {
        floatingProfile.style.left = event.clientX - profileOffsetX + "px";
        floatingProfile.style.top = event.clientY - profileOffsetY + "px";
        floatingProfile.style.bottom = "auto";
    }
});

document.addEventListener("mouseup", function () {
    draggingProfile = false;
});


// ======================================
// CAT MESSAGES
// ======================================
const catMessage = document.querySelector(".cat-message");

const messages = [
    "you can do it ✦",
    "just one more task!",
    "proud of you!",
    "focus focus!!",
    "meow!! study time"
];
profileCat.addEventListener("click", function () {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    catMessage.textContent = randomMessage;

    setTimeout(function () {
        catMessage.textContent = "";
    }, 2000);
});

// ======================================
// PROFILE CARD
// ======================================
const profileCardWindow = document.querySelector(".profile-card-window");
const cardBioSave = document.querySelector(".card-bio-save");
const cardBio = document.querySelector(".card-bio");
const cardBioDisplay = document.querySelector(".card-bio-display");
const profileCardClose = document.querySelector(".profile-card-close");
cardBioSave.onclick = function () {
    cardBioDisplay.textContent = cardBio.value;

    cardBio.style.display = "none";
    cardBioSave.style.display = "none";
};

profileCardClose.onclick = function () {
    profileCardWindow.style.display = "none";
};
floatingProfile.addEventListener("dblclick", function () {
    profileCardWindow.style.display = "block";

    cardUsername.textContent = profileUsername.textContent;
    cardPfp.src = "assets/profile_" + selectedPfp + ".png";
});
