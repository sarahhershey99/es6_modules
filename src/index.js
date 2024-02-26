console.log("Hello World");
// TODO
import Wishlist from "./wishlist";
let form = document.getElementById("submitForm");
let make = document.getElementById("makeInput");
let model = document.getElementById("modelInput");
let year = document.getElementById("yearInput");
let makeDisplay = document.getElementById("car-make");
let modelDisplay = document.getElementById("car-model");
let yearDisplay = document.getElementById("car-year");
let removeBtn = document.getElementById("removeBtn");
let wishlistUl = document.getElementById("wishlistUl");
let submitBtn = document.getElementById("submitBtn");

let wishlist = new Wishlist();
submitBtn.addEventListener("click", addCar);
removeBtn.addEventListener("click", removeCar);


function showCarDetails(car) {
    makeDisplay.textContent = car.make;
    modelDisplay.textContent = car.model;
    yearDisplay.textContent = car.year;
    removeBtn.disabled = false;
  };

  function updateDOMList() {
    wishlistUl.textContent = "";
    wishlist.list.forEach((car) => {
        const li = document.createElement("li");
        li.textContent = `${car.make} ${car.model} ${car.year}`;
        li.addEventListener("click", () => showCarDetails(car));
        wishlistUl.appendChild(li);
        removeBtn.setAttribute("data-carId", car.Id);
    });
  };

function addCar(){
    let carMake = make.value;
    let carModel = model.value;
    let carYear = year.value;
    wishlist.add(carMake, carModel, carYear);
    updateDOMList();
    console.log("clicked");
};

function removeCar(){
  let carId = Number(removeBtn.getAttribute("data-carId"));
    wishlist.remove(carId);
    updateDOMList();
    makeDisplay.textContent = "";
    modelDisplay.textContent = "";
    yearDisplay.textContent = "";
    removeBtn.disabled = true;
    console.log("clicked")
};