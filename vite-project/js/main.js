import "../styles/style.css";
import { menu } from "./menu";

const DOMSelectors = {
  btnA: document.querySelector(".btnA"),
  btnB: document.querySelector(".btnB"),
  btnC: document.querySelector(".btnC"),
  btnAll: document.querySelector(".btnAll"),
  display: document.querySelector(".display"),
  him: change("ice cream"),
  her: change("something small"),
  them: change("cakes"),
};

function change(change) {
  return menu.filter((el) => el.type === `${change}`);
}

function remove() {
  document.querySelectorAll(".d-card").forEach((e) => e.remove());
  document.querySelectorAll(".subhead").forEach((e) => e.remove());
}

function subhead(type, comment) {
  DOMSelectors.display.insertAdjacentHTML(
    "beforebegin",
    `<div class="subhead">
    <h3 class="hero"> ${type}</h3>
    <h4 class="hero"> ${comment}</h4>
  </div>`
  );
}

function initial() {
  menu.forEach((el) => console.log(el));
  subhead("all", "so indecisive!");
  menu.forEach(function htmlher(dish) {
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="d-card">
      <h3 class="dish-name">${dish.name}</h3>
      <h4 class="dish-description">${dish.description}</h4>
      <h4 class="dish-name">${dish.price}</h4>
      <img class= "image" src="${dish.img}">
      </div>
      `
    );
  });
}

function html(dish) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="d-card">
    <h3 class="dish-name">${dish.name}</h3>
    <h4 class="dish-description">${dish.description}</h4>
    <h4 class="dish-name">${dish.price}</h4>
    <img class= "image" src="${dish.img}">
    </div>
   `
  );
}

initial();
//start off page with all desserts selected

DOMSelectors.btnA.addEventListener("click", function () {
  remove();
  console.log(DOMSelectors.him);
  subhead("ice cream", "so many different options!");
  const map1 = Array.from(DOMSelectors.him);
  map1.forEach((el) => html(el));
});

DOMSelectors.btnB.addEventListener("click", function () {
  remove();
  console.log(DOMSelectors.her);
  subhead("something small", "the best things come in small packages");
  const map2 = Array.from(DOMSelectors.her);
  map2.forEach((el) => html(el));
});

DOMSelectors.btnC.addEventListener("click", function () {
  remove();
  console.log(DOMSelectors.them);
  subhead("cakes", "i want them all!");
  const map3 = Array.from(DOMSelectors.them);
  map3.forEach((el) => html(el));
});

DOMSelectors.btnAll.addEventListener("click", function () {
  remove();
  initial();
});
//as you click each button, the subheading changes and the array w cards shown changes

document.querySelector(".color").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
// if the body class is cool, click to change class to warm. if on warm, click to change to cool
