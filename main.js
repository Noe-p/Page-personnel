let menu = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');
let noe = document.querySelector('.noe');
let about = document.querySelector('.about');

menu.onclick = function() {
   menu.classList.toggle('open');
   navbar.classList.toggle('open');
   noe.classList.toggle('open');
   about.classList.toggle('open');
};
