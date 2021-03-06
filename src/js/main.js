'use strict';

import Swiper from "swiper";

let backgroundShadow = document.querySelector(".background-shadow");
let slideButtonLeft = document.querySelector(".main-slide__button");
let slideButtonRight = document.querySelector(
    ".main-slide__button.main-slide__button_right"
);

function showBackgroundLeft() {
    backgroundShadow.style.transform = 'translateX(0%)';
}

function showBackgroundRight() {
    backgroundShadow.style.transform = 'translateX(100%)';
}

function hideBackgroundLeft() {
    backgroundShadow.style.transform = 'translateX(-100%)';
}

function hideBackgroundRight() {
    backgroundShadow.style.transform = 'translateX(-100%)';
}
function addButtonsListeners() {
    slideButtonLeft.addEventListener(
        "mouseover", 
        showBackgroundLeft
    );
    slideButtonLeft.addEventListener(
        "mouseout", 
        hideBackgroundLeft
    );
    slideButtonRight.addEventListener(
        "mouseover", 
        showBackgroundRight
    );
    slideButtonRight.addEventListener(
        "mouseout", 
        hideBackgroundRight
    );
}

addButtonsListeners();

let mainSwiper = new Swiper(".main-slider", {
    wrapperClass: "main-slider__wrapper",
    slideClass: "main-slide",
    direction: "vertical",
    autoHeight: true,
    slidesPerView: 1,
    mousewheel: {
        forceToAxis: true,
        releaseOnEdges: true,
        invert: true
    },
    keyboard: true,
    on: {
        reachBeginning: () => {
            backgroundShadow.style.transform = 'translateX(-100%)';
            backgroundShadow.style.width = '50%';
            slideButtonLeft.addEventListener(
                "mouseout", 
                hideBackgroundLeft
            );
            slideButtonRight.addEventListener(
                "mouseout", 
                hideBackgroundRight
            );
        },
        slideNextTransitionStart: () => {
            backgroundShadow.style.transform = 'translateX(0%)';
            slideButtonLeft.removeEventListener(
                "mouseout", 
                hideBackgroundLeft
            );
            slideButtonRight.removeEventListener(
                "mouseout", 
                hideBackgroundRight
            );
        },
        slideNextTransitionEnd: () => {
            backgroundShadow.style.width = '100%';
        }
    },
});

// let scroll = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     slidesPerColumn: 2,
// });

/*

import yuor vue modules example

import Module from '../widgets/module';
const module = new Module('#module-widget');

*/

