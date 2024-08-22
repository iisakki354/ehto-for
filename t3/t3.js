'use strict';

const kohde = document.querySelector('#target');

const sivu1 = +prompt('syötä 1 sivu');
const sivu2 = +prompt('syötä 2 sivu');
const sivu3 = +prompt('syötä 3 sivu');

if (sivu1 === sivu2 && sivu2 === sivu3) {
  // Tasasivuinen kolmio
  kohde.innerHTML = 'kolmio = tasasivuinen';
} else if (sivu1 === sivu2 || sivu2 === sivu3 || sivu1 === sivu3) {
  // Tasakylkinen kolmio
  kohde.innerHTML = 'kolmio = tasakylkinen';
} else {
  // Epäsäännöllinen kolmio
  kohde.innerHTML = 'kolmio = epäsäännöllinen';
}

