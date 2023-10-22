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

index = 0;
function prevIcon() {
  if (index === 0) {
    document.getElementById('left_arrow').style.color = '#a7a8aa';
    return;
  } else {
    this.index -= 1;
    document.getElementById('left_arrow').style.color = 'black';
    document.getElementById(
      'sub_main_content'
    ).style.transform = `translate3d(-${500 * this.index}px, 0, 0)`;
  }
}

function nextIcon() {
  if (this.index === 2) {
    document.getElementById('right_arrow').style.color = '#a7a8aa';
    return;
  } else {
    this.index += 1;
    document.getElementById('right_arrow').style.color = 'black';
    document.getElementById(
      'sub_main_content'
    ).style.transform = `translate3d(-${500 * this.index}px, 0, 0)`;
  }
}
