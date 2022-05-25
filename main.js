let nav= document.querySelector('nav');
let menu= document.querySelector('#menu-icon');
/*let nav ul=document.querySelector('.nav ul')*/;

window.addEventListener('scroll', () =>{ nav.classList.toggle('shadow', window.scrollY > 0);});

menu.onclick= () => { menu.classList.toggle('bx-x');
                      /*nav ul.classList.toggle('active');*/}

window.onscroll= () => { menu.classList.remove('bx-x');
                         /*nav ul.classList.remove('active');*/}

var swiper= new Swiper(".home", 
{ spaceBetween: 30,
  centeredSlides: true,
  autoplay: { delay: 5000,
              isableOnInteraction: false,},
  pagination: { el: ".swiper-pagination",
                clickable: true,},
});