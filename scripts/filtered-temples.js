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


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Denver Colorado Temple",
    location: "2001 E Phillip Centennial, Colorado, United States",
    dedicated: "1986, October, 28",
    area: 29117,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/denver-colorado-temple/denver-colorado-temple-66046.jpg"
  },
  {
    templeName: "Idaho Falls Idaho Temple",
    location: "Idaho Falls, United States",
    dedicated: "2017, July, 4",
    area: 85624,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-1912.jpg"

  },
  {
    templeName: "Dallas Texas Temple",
    location: "Dallas, Texas, United States",
    dedicated: "19, October, 1984",
    area: 44207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-67231.jpg"
  }
];

createTempleCard()
function createTempleCard()  {
    temples.forEach(temple => {

        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        let figure = document.createElement("figure");
        figure.classList.add("figure-overlay")
    
        name.textContent =temple.templeName;
        location.innerHTML = `<span class = "label">Location:<span> ${temple.location}`;
        dedication.innerHTML = `<span class = "label">Dedication:<span> ${temple.dedicated}`;
        area.innerHTML = `<span class = "label">Size:<span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName}`);
        img.setAttribute("loading", "lazy");
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
    
        document.querySelector(".gallery").appendChild(card);
    });





}