import { ref } from './switch-home-library';

ref.libraryBtn.addEventListener('click', onHandleBtnClick);

function onHandleBtnClick() {
  if (ref.libraryBtn.classList.contains('current')) {
    ref.gallery.innerHTML = '';
  }
}
