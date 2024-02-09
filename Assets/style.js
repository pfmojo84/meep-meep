//burger active onclick
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});

//modal
const signUpButton = document.querySelector('#enroll');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

signUpButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click',() => {
    modal.classList.remove('is-active');
});