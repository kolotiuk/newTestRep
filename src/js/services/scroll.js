let scrollBtn = document.querySelector('.scroll-btn');
// console.log(scrollBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollBtn.classList.add('is-activ');
  } else {
    scrollBtn.classList.remove('is-activ');
  }
});
