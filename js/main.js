/*TODO:
 * - Group all consts into objects, menu, header, content etc
 * - Add rotate class to user popover open arrow
 * - Fix radio checkbox p/ desmarcar outros inputs selecionados
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
  },
  options: {
    dropdown: document.getElementsByClassName("dropdown-menu")
  }
};
const forms = {
  select: {
    input: document.querySelector(".select-input"),
    list: document.querySelector(".select-list"),
    listItem: document.querySelectorAll(".select-list__item"),
    trigger: document.querySelector(".select-icon"),
    toggleClass: "select-list___open"
  },
  checkboxes: document.querySelectorAll(".checkboxes"),
  radio: {
    item: document.querySelectorAll(".radio-button__item"),
    trigger: document.querySelectorAll(".radio-button__item label")
  }
}
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
  let toggle = menu.content[1].classList.toggle("menu-block__info___closed");
}

function dropdownToggle(target) {
  target.classList.toggle("dropdown___toggle");
}

function checkedToggle(elem) {
  return elem.checked ? elem.checked = false : elem.checked = true;
}

function radioToggle(elem) {
  Array.from(elem).map(i => {
    i.checked = false;
  });
}

function toggleSelect() {
  return forms.select.list.classList.toggle(forms.select.toggleClass);
}

function changeInput(elem) {
  forms.select.input.value = elem.target.innerText;
}

Array.from(toggleMenuIcon).filter(i => {
  i.addEventListener("click", () => {
    toggleMenu();
  })
});

togglePatientIcon.addEventListener("click", i => {
  togglePatient();
  dropdownToggle(i.target);
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
  dropdownToggle(i.target);
});

Array.from(menu.options.dropdown).filter(i => {
  i.addEventListener("click", d => {
    d.target.parentElement.nextElementSibling.classList.toggle("dropdown-list___open");
    dropdownToggle(d.target);
  })
});

Array.from(forms.checkboxes).map(i => {
  i.addEventListener("click", t => {
    let elem = t.target.previousSibling;
    return checkedToggle(elem);
  });
});

Array.from(forms.radio.trigger).map(i => {
  i.addEventListener("click", t => {
    let elem = t.target.previousSibling;

    console.dir(i);

    radioToggle(i.parentNode.parentNode);
    return checkedToggle(elem);
  })
})

forms.select.trigger.addEventListener("click", i => {
  toggleSelect();
});

Array.from(forms.select.listItem).map(i => {
  i.addEventListener("click", t => {
    changeInput(t);
    toggleSelect();
  });
});
