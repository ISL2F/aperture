const burger = document.querySelector(".header__burger");
const headerNavigation = document.querySelector(".header__navigation");
const body = document.querySelector("body");
const openBurger = () => {
  burger.classList.toggle("active");
  headerNavigation.classList.toggle("active");
  body.classList.toggle("locked");
  //   if (body.style.overflow === "hidden") {
  //     body.style.overflow = "auto";
  //   } else {
  //     body.style.overflow = "hidden";
  //   }
};

burger.addEventListener("click", openBurger);
