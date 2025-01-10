const generateYr = () => {
  const yrElement = document.getElementById("year");

  //updt with current yr
  const date = new Date();
  const currentYr = date.getFullYear();

  yrElement.innerHTML = currentYr;
};

//toggle the menu
const initApp = () => {
  //|| GET ELEMENTS
  //get the hamb btn
  const hamburgerMenuBtnEl = document.getElementById("hamburger-btn");
  //get the animate mobile menu sectn
  const mobileMenuEl = document.getElementById("mobile-menu");

  //create toggle menu ftn
  const toggleMenu = () => {
    hamburgerMenuBtnEl.classList.toggle("toggle-btn"); //for the variation 2 hamburger menu
    mobileMenuEl.classList.toggle("hidden"); //using tailwind
    mobileMenuEl.classList.toggle("flex"); //using tailwind
  };

  //add event listener to the hamburgr menu
  hamburgerMenuBtnEl.addEventListener("click", toggleMenu);

  //add event listener to the mobile sectn menu
  mobileMenuEl.addEventListener("click", toggleMenu);
};

//invoke the functionsson window obj
window.addEventListener("DOMContentLoaded", () => {
  generateYr();
  initApp();
});
