"use strict";

import screenfull from "screenfull";

let menuToggler = document.querySelector(".menu-toggler");

let menu = document.querySelector(".menu");

menuToggler.addEventListener("click", () => {

    menu.classList.toggle("menu_active");
    for (let line of menuToggler.children) {
        line.classList.toggle("menu-toggler__line_active");
    }

});

let test = document.querySelector(".test");

test.addEventListener("click", () => {
    screenfull.toggle();
});
