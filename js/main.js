/*TODO:
 * - Group all consts into objects, menu, header, content etc
 * - Add rotate class to user popover open arrow
 */

const menu = {
  wrap: document.querySelector(".menu-wrap"),
  content: [
    document.querySelector(".menu-block__header"),
    document.querySelector(".menu-block__info"),
    document.querySelector(".menu-block__opt")
  ],
  patient: {
    pic: document.querySelector("#patient-pic"),
    name: document.querySelector("#patient-name"),
    details: document.querySelector(".details")
  }
};
const dock = document.querySelector(".dock-wrap");
const toggleMenuIcon = document.getElementsByClassName("toggle-menu-icon");
const iconMenu = document.querySelector("#toggle-menu-icon");
const menuWrapClass = "menu-wrap___closed";
const headerUserMenu = document.querySelector(".open-user-menu");
const popoverUserMenu = document.querySelector(".header-opt__popover");
const togglePatientIcon = document.querySelector(".toggle-patient");
const content = document.querySelector("#content");
const footer = document.querySelector(".footer-block");
const loader = document.querySelector("#loader");

function toggleMenu() {
  const toggleMenu = menu.wrap.classList.toggle(menuWrapClass);

  return (toggleMenu ? iconMenu.innerHTML = "menu" : iconMenu.innerHTML = "close");
}

function togglePatient() {
  // let patientName = menu.patient.name;
  // let patientPic = menu.patient.pic;
  // let patientDetails = menu.patient.details;
  let toggle = menu.content[1].classList.toggle("menu-block__info___closed");
}

Array.from(toggleMenuIcon).filter(i => {
  i.addEventListener("click", () => {
    toggleMenu();
  })
});

togglePatientIcon.addEventListener("click", i => {
  togglePatient();
});

window.addEventListener("resize", i => {
  if (i.target.innerWidth <= 1100 && !menu.wrap.classList.contains(menuWrapClass)) {
    toggleMenu();
  } else { return }
});

document.onreadystatechange = function () {
  if (document.readyState === "loading") {
    loader.classList.add("active");
  } else if (document.readyState === "interactive") {
    if (window.innerWidth <= 1100 && !menu.wrap.classList.contains(menuWrapClass)) {
      toggleMenu();
    }
  } else if (document.readyState === "complete") {
    window.setTimeout(() => loader.classList.remove("active"), 1000);
  }
}

headerUserMenu.addEventListener("click", i => {
  popoverUserMenu.classList.toggle("header-opt__popover___open");
});
