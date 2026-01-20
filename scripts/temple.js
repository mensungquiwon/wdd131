const year = document.querySelector("#currentYear");
document.getElementById("lastModified").textContent = "Last Modified: " + new Date().getFullYear();


const hamburger = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburger.classList.toggle("open");
});