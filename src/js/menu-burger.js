const menuBurger = function (nav) {
  const menuActive = document.querySelector('.nav__burger');
  const navItems = document.querySelector('#nav-items');
  const navLogin = document.querySelector('#nav-login');



  menuActive.addEventListener('click', function (event) {
    event.preventDefault();
    this.classList.toggle('nav__burger-active');
  });

  menuActive.addEventListener('click', function () {
    navItems.classList.toggle('active-block');
    navLogin.classList.toggle('active-block');
  });
};



export default menuBurger;