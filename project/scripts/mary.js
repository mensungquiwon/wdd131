/*************************************************
 * Mary's Kitchen – Single JS file (simple version)
 * - Popular Dishes (Home)
 * - Menu (Menu page)
 * - LocalStorage Cart (+ Checkout page render)
 **************************************************/

/* =============== DATA ================== */
const popularDishes = [
  {
    id: "chuck-rice",
    name: "Chuck Rice with Spicy Stew",
    description: "Fragrant green rice served with slow-simmered stew and prawns.",
    price: 5.99,
    image: "./images/chuck_rice.webp",
    alt: "Chuck rice with spicy stew and prawns on a plate",
    tags: ["Signature", "Customer Favorite"]
  },
  {
    id: "classic_Gb",
    name: "Classic GB",
    description: "Goat meat and dried meat and fishes mixed",
    price: 4.99,
    image: "./images/classic_gb.webp",
    alt: "Classic GB dish with goat meat, dried meat and fishes",
    tags: ["Classic", "Comfort Food"]
  },
  {
    id: "Dumboy",
    name: "DumBoy",
    description: "A traditional dish made with cassava and a savory sauce.",
    price: 5.49,
    image: "./images/dumboy.webp",
    alt: "Dum boy dish with cassava and savory sauce",
    tags: ["Traditional", "Comfort Food"]
  },
  {
    id: "dried-rice",
    name: "Dried Rice",
    description: "Fragrant dried rice served with a savory sauce and vegetables.",
    price: 4.99,
    image: "./images/normal_driedrice.webp",
    alt: "Dried rice with sauce, vegetables, plantains and fish",
    tags: ["Traditional", "Comfort Food"]
  }
];

/* =============== SIMPLE UTILS ================== */
function moneyUSD(n) {
  return `$${Number(n).toFixed(2)}`;
}
// If you prefer Liberian Dollar, use this instead:
// function moneyLRD(n) { return new Intl.NumberFormat("en-LR", {style:"currency", currency:"LRD"}).format(Number(n)); }

/* =============== CART (LocalStorage) ================== */
const CART_KEY = "mk_cart";

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(dishId, qty = 1) {
  const cart = getCart();
  const found = cart.find(i => i.id === dishId);
  if (found) {
    found.qty += qty;
  } else {
    cart.push({ id: dishId, qty });
  }
  saveCart(cart);
}

function updateQty(dishId, qty) {
  qty = Math.max(1, Number(qty) || 1);
  const cart = getCart().map(i => i.id === dishId ? { ...i, qty } : i);
  saveCart(cart);
}

function removeFromCart(dishId) {
  const cart = getCart().filter(i => i.id !== dishId);
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

/* =============== BUTTON FACTORY ================== */
function makeOrderButton(dishId) {
  const btn = document.createElement("a");
  btn.textContent = "Order Now";
  btn.href = "#";
  btn.className = "dish-btn";
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    addToCart(dishId, 1);
    // Redirect to checkout page
    window.location.href = "Order.html";
  });
  return btn;
}

/* =============== HOME: Popular Dishes ================== */
function createPopularDishCards() {
  const container = document.querySelector(".popular-dish");
  if (!container) return;

  // Clean container if function re-runs
  container.innerHTML = "";

  popularDishes.forEach(dish => {
    const card = document.createElement("section");
    const img = document.createElement("img");
    const name = document.createElement("h3");
    const desc = document.createElement("p");
    const price = document.createElement("p");
    const btn = makeOrderButton(dish.id);

    img.src = dish.image;
    img.alt = dish.alt || dish.name;
    img.loading = "lazy";

    name.textContent = dish.name;
    // Make "Description:" label bold (as you requested)
    desc.innerHTML = `<strong>Description:</strong> ${dish.description}`;
    // Make "Price:" label bold
    price.innerHTML = `<strong>Price:</strong> ${moneyUSD(dish.price)}`;

    card.append(img, name, desc, price, btn);
    container.appendChild(card);
  });
}

/* =============== MENU: Full List ================== */
function createMenuList() {
  const container = document.querySelector(".menu-list");
  if (!container) return;

  container.innerHTML = "";

  popularDishes.forEach(dish => {
    const card = document.createElement("section");
    const img = document.createElement("img");
    const name = document.createElement("h3");
    const desc = document.createElement("p");
    const price = document.createElement("p");
    const btn = makeOrderButton(dish.id);

    img.src = dish.image;
    
    img.alt = dish.alt || dish.name;
    img.loading = "lazy";

    name.textContent = dish.name;
    desc.innerHTML = `<strong>Description:</strong> ${dish.description}`;
    price.innerHTML = `<strong>Price:</strong> ${moneyUSD(dish.price)}`;

    card.append(img, name, desc, price, btn);
    container.appendChild(card);
  });
}

/* =============== CHECKOUT: Render Cart ================== */
/* This runs automatically if the page has <section id="cart"></section> */
function renderCheckoutCart() {
  const cartEl = document.getElementById("cart");
  if (!cartEl) return;

  const cart = getCart();
  cartEl.innerHTML = ""; // clear

  if (!cart.length) {
    cartEl.innerHTML = `<p class="muted">Your cart is empty.</p>`;
    return;
  }

  let subtotal = 0;

  const list = document.createElement("div");
  list.className = "cart-list";

  cart.forEach(item => {
    const dish = popularDishes.find(d => d.id === item.id);
    if (!dish) return;

    const lineTotal = dish.price * item.qty;
    subtotal += lineTotal;

    const row = document.createElement("div");
    row.className = "cart-row";

    const img = document.createElement("img");
    img.src = dish.image;
    img.alt = dish.alt || dish.name;
    img.loading = "lazy";

    const info = document.createElement("div");
    info.className = "cart-info";
    const title = document.createElement("h3");
    title.textContent = dish.name;
    const unit = document.createElement("p");
    unit.className = "muted";
    unit.textContent = `Unit: ${moneyUSD(dish.price)}`;
    info.append(title, unit);

    const controls = document.createElement("div");
    controls.className = "cart-controls";

    const minus = document.createElement("button");
    minus.textContent = "−";
    minus.className = "qty-btn";
    minus.addEventListener("click", () => {
      updateQty(item.id, Math.max(1, item.qty - 1));
      renderCheckoutCart();
    });

    const qty = document.createElement("input");
    qty.type = "number";
    qty.min = "1";
    qty.value = item.qty;
    qty.className = "qty-input";
    qty.addEventListener("change", () => {
      const v = parseInt(qty.value, 10);
      updateQty(item.id, isNaN(v) ? 1 : v);
      renderCheckoutCart();
    });

    const plus = document.createElement("button");
    plus.textContent = "+";
    plus.className = "qty-btn";
    plus.addEventListener("click", () => {
      updateQty(item.id, item.qty + 1);
      renderCheckoutCart();
    });

    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.className = "remove-btn";
    remove.addEventListener("click", () => {
      removeFromCart(item.id);
      renderCheckoutCart();
    });

    const line = document.createElement("div");
    line.className = "line-total";
    line.textContent = moneyUSD(lineTotal);

    controls.append(minus, qty, plus, remove);
    row.append(img, info, controls, line);
    list.appendChild(row);
  });

  const summary = document.createElement("div");
  summary.className = "cart-summary";

  const taxRate = 0.07; // example 7%
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const figures = document.createElement("div");
  figures.innerHTML = `
    <div><strong>Subtotal:</strong> ${moneyUSD(subtotal)}</div>
    <div><strong>Tax (7%):</strong> ${moneyUSD(tax)}</div>
    <div><strong>Total:</strong> ${moneyUSD(total)}</div>
  `;

  const actions = document.createElement("div");
  actions.className = "cart-actions";

  const clearBtn = document.createElement("button");
  clearBtn.className = "btn-outline";
  clearBtn.textContent = "Clear Cart";
  clearBtn.addEventListener("click", () => {
    clearCart();
    renderCheckoutCart();
  });

  const placeBtn = document.createElement("button");
  placeBtn.className = "btn-primary";
  placeBtn.textContent = "Place Order";
  placeBtn.addEventListener("click", () => {
    alert("Order placed! Thank you for choosing Mary’s Kitchen.");
    clearCart();
    renderCheckoutCart();
  });

  actions.append(clearBtn, placeBtn);
  summary.append(figures, actions);

  cartEl.append(list, summary);
}

/* =============== RUN ONLY WHERE NEEDED ================== */
document.addEventListener("DOMContentLoaded", () => {
  // Home page (Popular Dishes)
  if (document.querySelector(".popular-dish")) {
    createPopularDishCards();
  }

  // Menu page (Full list)
  if (document.querySelector(".menu-list")) {
    createMenuList();
  }

  // Checkout page (Order.html)
  if (document.getElementById("cart")) {
    renderCheckoutCart();
  }
});

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