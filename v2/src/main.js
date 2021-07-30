import {
  createApp
} from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

//ANIMATION NAVBAR

let menu = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');
let navNoe = document.querySelector('.navNoe');
let navAbout = document.querySelector('.navAbout');
let navProjects = document.querySelector('.navProjects');

menu.onclick = function() {
  menu.classList.toggle('open');
  navbar.classList.toggle('open');
  navNoe.classList.toggle('open');
  navAbout.classList.toggle('open');
  navProjects.classList.toggle('open');
};


//ANIMATION UNDERLIGN

let projects = document.getElementById('projects');
let header = document.getElementById('top');
let about = document.getElementById('about');

window.addEventListener('scroll', () => {
  if ((window.scrollY > header.offsetTop - 100) && (window.scrollY < projects.offsetTop - 100)) {
    navNoe.classList.add('underlign');
  } else {
    navNoe.classList.remove('underlign');
  }

  if (window.scrollY > navbar.offsetHeight + 5) {
    navbar.classList.add('underlign');
  } else {
    navbar.classList.remove('underlign');
  }

  if ((window.scrollY > projects.offsetTop - 100) && (window.scrollY < about.offsetTop - 100)) {
    navProjects.classList.add('underlign');
  } else {
    navProjects.classList.remove('underlign');
  }

  if (window.scrollY > about.offsetTop - 100) {
    navAbout.classList.add('underlign');

  } else {
    navAbout.classList.remove('underlign');
  }

});

//ANIMATON PHOTOS ABOUT
let studies = document.querySelector('.studies');
let passion = document.querySelector('.passion');

window.addEventListener('scroll', () => {
  if (window.scrollY > about.offsetTop - 200) {
    studies.classList.add('open');
  }

  if (window.scrollY > about.offsetTop + studies.offsetHeight - 200) {
    passion.classList.add('open');
  }
});
