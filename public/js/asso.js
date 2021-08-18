

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('#side-menu');
  const navLinks = document.querySelectorAll('#side-menu a');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

  
    navLinks.forEach((link, index) => {

      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.9s ease forwards`;
      }
     
    });
  });

 
}

navSlide();