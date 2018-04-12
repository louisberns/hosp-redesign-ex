const menu = document.querySelector(".menu-wrap");
const toggleMenuIcon = document.querySelector("#toggle-menu-icon");
const footer = document.querySelector(".footer-block");

toggleMenuIcon.addEventListener("click", () => {
  const toggleMenu = menu.classList.toggle("menu-wrap___closed");
  return (toggleMenu ? toggleMenuIcon.innerHTML = "menu" : toggleMenuIcon.innerHTML = "close");
});
