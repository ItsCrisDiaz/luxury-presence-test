const HTML = document.getElementsByTagName("html");
const NAV_BUTTON = document.querySelector(".nav-button");
const NAV_MENU = document.querySelector(".nav-menu");
const NAV_ITEMS = document.querySelectorAll(".nav-menu a");

NAV_BUTTON.addEventListener("click", function () {
  let expanded = this.getAttribute("aria-expanded") === "true";
  this.setAttribute("aria-expanded", !expanded);
  let menu = this.nextElementSibling;
  menu.hidden = !menu.hidden;

  if (this.getAttribute("aria-expanded") === "true") {
    HTML[0].style.overflow = "hidden";
  } else {
    HTML[0].style.overflow = "visible";
  }
});

NAV_ITEMS.forEach((element) => {
  element.addEventListener("click", function () {
    NAV_BUTTON.setAttribute("aria-expanded", false);
    NAV_MENU.hidden = true;
    HTML[0].style.overflow = "visible";
  });
});
