/*TODO:
 * - Group all consts into objects, menu, header, content etc
 * - Add rotate class to user popover open arrow
 * - Fix radio checkbox p/ desmarcar outros inputs selecionados
 */

const layout = {
  dock: document.querySelector(".dock-wrap"),
  content: document.querySelector("#content"),
  loader: document.querySelector("#loader")
}

const header = {
  user: {
    menu: document.querySelector(".open-user-menu"),
    popover: document.querySelector(".header-opt__popover")
  }
}

const menu = {
  wrap: {
    block: document.querySelector(".menu-wrap"),
    closeClass: "menu-wrap___closed"
  },
  content: [
    document.querySelector(".menu-block__header"),
    document.querySelector(".menu-block__info"),
    document.querySelector(".menu-block__opt")
  ],
  patient: {
    pic: document.querySelector("#patient-pic"),
    name: document.querySelector("#patient-name"),
    details: document.querySelector(".details"),
    toggle: document.querySelector(".toggle-patient")
  },
  options: {
    dropdown: document.getElementsByClassName("dropdown-link")
  },
  trigger: {
    menuIcon: document.querySelector("#toggle-menu-icon"),
    groupIcon: document.querySelectorAll(".toggle-menu-icon")
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

const tables = {
  wrapper: document.querySelectorAll(".table-wrapper"),
  block: document.querySelectorAll(".table-block"),
  checkboxes: {
    block: document.querySelectorAll(".table-block .checkboxes"),
    input: document.querySelectorAll(".table-block .checkboxes input[type='checkbox']"),
    header: document.querySelectorAll(".table-block th .checkboxes input[type='checkbox']")
  }
}

const footer = {
    block: document.querySelector(".footer-block")
}


/* Functions and Listeners */

// Menu lateral toggle + icon
function toggleMenu() {
  const toggleMenu = menu.wrap.block.classList.toggle(menu.wrap.closeClass);

  return (toggleMenu ? menu.trigger.menuIcon.innerHTML = "menu" : menu.trigger.menuIcon.innerHTML = "close");
}

// Info paciente menu lateral
function togglePatient() {
  let toggle = menu.content[1].classList.toggle("menu-block__info___closed");
}

// Open dropdown
function dropdownToggle(target) {
  target.classList.toggle("dropdown___toggle");
}

// Checkbox check function
function checkedToggle(elem) {
  return elem.checked ? elem.checked = false : elem.checked = true;
}

// Radio button check function
function radioToggle(elem) {
  Array.from(elem).map(i => {
    i.checked = false;
  });
}

/*
 * Select form field toggle
 * Change the input for selected option
 */
function toggleSelect() {
  return forms.select.list.classList.toggle(forms.select.toggleClass);
}
function changeInput(elem) {
  forms.select.input.value = elem.target.innerText;
}

// Listener for menu icon click open/close
Array.from(menu.trigger.groupIcon).filter(i => {
  i.addEventListener("click", () => {
    toggleMenu();
  })
});

// Listener for toggle patient side menu
menu.patient.toggle.addEventListener("click", i => {
  togglePatient();
  dropdownToggle(i.target);
});

// Responsividade - close side menu on resize window
window.addEventListener("resize", i => {
  if (i.target.innerWidth <= 1100 && !menu.wrap.block.classList.contains(menu.wrap.closeClass)) {
    toggleMenu();
  } else { return }
});

// Listener for loading page and activate loader
document.onreadystatechange = function () {
  if (document.readyState === "loading") {
    layout.loader.classList.add("active");
  } else if (document.readyState === "interactive") {
    if (window.innerWidth <= 1100 && !menu.wrap.block.classList.contains(menu.wrap.closeClass)) {
      toggleMenu();
    }
  } else if (document.readyState === "complete") {
    window.setTimeout(() => layout.loader.classList.remove("active"), 1000);
  }
}

// Header popover menu for user settings
header.user.menu.addEventListener("click", i => {
  header.user.popover.classList.toggle("header-opt__popover___open");
  dropdownToggle(i.target);
});

// Toggle dropdown options on side menu
Array.from(menu.options.dropdown).filter(i => {
  i.addEventListener("click", d => {
    console.log(i, d);
    d.target.nextElementSibling.classList.toggle("dropdown-list___open");
    dropdownToggle(d.target.lastElementChild);
  })
});

// Listener for checkboxes click
Array.from(forms.checkboxes).map(i => {
  i.addEventListener("click", t => {
    let elem = t.target.previousSibling;
    return checkedToggle(elem);
  });
});

// Listener for radio button click
Array.from(forms.radio.trigger).map(i => {
  i.addEventListener("click", t => {
    let elem = t.target.previousSibling;

    radioToggle(i.parentNode.parentNode);
    return checkedToggle(elem);
  })
})

 /*
  * Listener for select list click
  * Select option and change the input
  */
forms.select.trigger.addEventListener("click", i => {
  toggleSelect();
});
Array.from(forms.select.listItem).map(i => {
  i.addEventListener("click", t => {
    changeInput(t);
    toggleSelect();
  });
});

/*
 * Listeners for checkboxes in tables
 * Header checkbox selects all table checkboxes
 */
Array.from(tables.checkboxes.input).map(i => {
  i.addEventListener("change", t => {
    console.log(t);
  });
});
Array.from(tables.checkboxes.header).map(i => {
  i.addEventListener("click", i => {

  });
});
