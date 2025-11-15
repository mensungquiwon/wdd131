const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;  

document.getElementById("lastModified").innerHTML = document.lastModified;