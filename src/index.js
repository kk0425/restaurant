import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

const content = document.querySelector('#content');
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

homeButton.addEventListener("click", () => {
    content.textContent = '';
    home();
});

menuButton.addEventListener("click", () => {
    content.textContent = '';
    menu();
});

aboutButton.addEventListener("click", () => {
    content.textContent = '';
    about();
});

home();