'use strict';

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
/*
 
import yuor vue modules example

import Module from '../widgets/module';
const module = new Module('#module-widget');

*/

