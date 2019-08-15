"use strict";

let menuToggler = document.querySelector(".menu-toggler");

let menu = document.querySelector(".menu");

menuToggler.addEventListener("click", () => {

    menu.classList.toggle("menu_active");
    for (let line of menuToggler.children) {
        line.classList.toggle("menu-toggler__line_active");
    }

});

window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});
