"use script";

const hamburger_open = document.querySelector(".hamburger-menu-open");
const hamburger_close = document.querySelector(".hamburger-menu-close");
const displaySidebarMenu = document.querySelector(".aside-sidebar");
const closeMenu = document.querySelectorAll(".list-menu");

hamburger_open.addEventListener("click", function () {
  //   hamburger_open.style.display = "none";
  hamburger_open.classList.remove("hamburger-menu-open");
  displaySidebarMenu.style.display = "block";
});

hamburger_close.addEventListener("click", function () {
  //   hamburger_open.style.display = "block";
  hamburger_open.classList.add("hamburger-menu-open");
  displaySidebarMenu.style.display = "none";
});

closeMenu.forEach(function (item, i) {
  item.addEventListener("click", function () {
    // hamburger_open.style.display = "block";
    hamburger_open.classList.add("hamburger-menu-open");

    displaySidebarMenu.style.display = "none";
  });
});
