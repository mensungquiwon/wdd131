const year = document.querySelector("#currentYear");
const today = new Date();
const month = today.getMonth() + 1;
const date = today.getDate();
const fullYear = today.getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + month + "/" + date + "/" + fullYear;


const hamburger = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburger.classList.toggle("open");
});