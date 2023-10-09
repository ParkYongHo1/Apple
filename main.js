const searchButton = document.querySelector('nav .desktop__nav .link__search');
const closeButton = document.querySelector('.search__container .link__close');
const desktopNav = document.querySelector('.desktop__nav');
const searchContainer = document.querySelector('.search__container');
const overlay = document.querySelector('.overlay');
const bagButton = document.querySelector('nav .desktop__nav .link__bag');
const bagContainer = document.querySelector('.bag__container');
let isHidden = true;
searchButton.addEventListener('click', () => {
  desktopNav.classList.add('hide');
  searchContainer.classList.remove('hide');
  overlay.classList.add('show');
});
closeButton.addEventListener('click', () => {
  desktopNav.classList.remove('hide');
  searchContainer.classList.add('hide');
  overlay.classList.remove('show');
});

bagButton.addEventListener('click', () => {
  if (isHidden) {
    bagContainer.classList.remove('hide');
  } else {
    bagContainer.classList.add('hide');
  }

  isHidden = !isHidden;
});
overlay.addEventListener('click', () => {
  desktopNav.classList.remove('hide');
  searchContainer.classList.add('hide');
  overlay.classList.remove('show');
});
