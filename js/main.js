const menu = {
  wrap: document.querySelector(".menu-wrap"),
  content: [
    document.querySelector(".menu-block__header"),
    document.querySelector(".menu-block__info"),
    document.querySelector(".menu-block__opt")
  ],
  patient: document.querySelector("#patient-pic")
};
const dock = document.querySelector(".dock-wrap");
const toggleMenuIcon = document.getElementsByClassName("toggle-menu-icon");
const iconMenu = document.querySelector("#toggle-menu-icon");
const content = document.querySelector("#content");
const footer = document.querySelector(".footer-block");
const menuWrapClass = "menu-wrap___closed";

function toggleMenu() {
  const toggleMenu = menu.wrap.classList.toggle(menuWrapClass);

  return (toggleMenu ? iconMenu.innerHTML = "menu" : iconMenu.innerHTML = "close");
}


Array.from(toggleMenuIcon).filter(i => {
  i.addEventListener("click", () => {
    toggleMenu();
  })
});

window.addEventListener("resize", i => {
  if (i.target.innerWidth <= 1100 && !menu.wrap.classList.contains(menuWrapClass)) {
    toggleMenu();
  }
});
