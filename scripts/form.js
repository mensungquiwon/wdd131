const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProductSelect(selectId, items) {
  const select = document.getElementById(selectId);
  if (!select) return;


  select.length = 1; 

  items.forEach(({ id, name }) => {
    const option = document.createElement("option");
    option.value = id;         
    option.textContent = name; 
    select.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateProductSelect("product", products);

  const form = document.querySelector(".review-form");
  if (form) {
    form.addEventListener("submit", () => {
      sessionStorage.setItem("reviewJustSubmitted", "true");
    });
  }
});

const year = document.querySelector("#currentYear");
const today = new Date();
const month = today.getMonth() + 1;
const date = today.getDate();
const fullYear = today.getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + month + "/" + date + "/" + fullYear;