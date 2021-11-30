const switchBtn = document.querySelector(".switch");
const checkBox = document.querySelector(".checkbox");

const annually = document.querySelectorAll(".price-annually");
const monthly = document.querySelectorAll(".price-monthly");

checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    annually.forEach((price) => (price.style.display = "none"));
    monthly.forEach((price) => (price.style.display = "flex"));
  } else {
    annually.forEach((price) => (price.style.display = "flex"));
    monthly.forEach((price) => (price.style.display = "none"));
  }
});
