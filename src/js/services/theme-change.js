const ref = {
  body: document.querySelector('body'),
  container: document.querySelector('.theme__container'),
  sunLogo: document.querySelector('.sun-logo'),
  moonLogo: document.querySelector('.moon-logo'),
};

const LOCAL_THEME = 'theme';

ref.container.addEventListener('click', onThemeBtnClick);

function onThemeBtnClick() {
  ref.sunLogo.classList.toggle('animate-sun');
  ref.moonLogo.classList.toggle('animate-moon');
  ref.body.classList.toggle('dark');
}
