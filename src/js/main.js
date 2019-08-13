'use strict';

import Swiper from "swiper";

let backgroundShadow = document.querySelector(".background-shadow");
let slideButtonLeft = document.querySelector(".main-slide__button");
let slideButtonRight = document.querySelector(".main-slide__button.main-slide__button_right");

slideButtonLeft.addEventListener("mouseover", () => {
	backgroundShadow.style.transform = 'translateX(-50%)';
});

slideButtonLeft.addEventListener("mouseout", () => {
	backgroundShadow.style.transform = 'translateX(-100%)';
});

slideButtonRight.addEventListener("mouseover", () => {
	backgroundShadow.style.transform = 'translateX(50%)';
});

slideButtonRight.addEventListener("mouseout", () => {
	backgroundShadow.style.transform = 'translateX(100%)';
});

let mainSwiper = new Swiper(".main-slider", {
    wrapperClass: "main-slider__wrapper",
    slideClass: "main-slide",
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
});

/*
 
import yuor vue modules example

import Module from '../widgets/module';
const module = new Module('#module-widget');

*/

