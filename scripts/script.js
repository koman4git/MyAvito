'use strict';
//disabled - блокировка кнопки
//reset() перезагрузка формы
//Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.

const modalAdd = document.querySelector('.modal__add'),
      addAd = document.querySelector('.add__ad'),
      modalBtnSubmit = document.querySelector('.modal__btn-submit'),
      modalSubmit = document.querySelector('.modal__submit'),
      catalog = document.querySelector('.catalog'),
      modalItem = document.querySelector('.modal__item')

// const closeModal = event => {
//   const target = event.target;
//   if(target.classList.contains('modal__close') || target === modalAdd || target === modalItem) {
//     modalAdd.classList.add('hide');
//     modalItem.classList.add('hide');
//     modalSubmit.reset();
//   }    
// };
const closeModal = function (event) {
  const target = event.target;
  if(target.closest('.modal__close') || target === this) {
    this.classList.add('hide');
    modalSubmit.reset();
  }
}

addAd.addEventListener('click', () => {
  modalAdd.classList.remove('hide');
  modalBtnSubmit.disabled = true;//disabled - блокировка кнопки
});

modalAdd.addEventListener('click', closeModal);
modalItem.addEventListener('click', closeModal);

catalog.addEventListener('click', event => {
  const target = event.target;
  if(target.closest('.card')){
    modalItem.classList.remove('hide');
  }
});

