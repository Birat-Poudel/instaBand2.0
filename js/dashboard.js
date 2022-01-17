//For Navigation Bar
var header = document.querySelector("header");

window.addEventListener('scroll', () => {
    header.classList.toggle("sticky", window.scrollY > 0);
})

const hamBurger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__links");
const navLinks = document.querySelectorAll(".nav__links li");

navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        hamBurger.classList.toggle('toggle');
        nav.classList.toggle('display-off');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        })
        }
    )
})

const navSlide = () => {
  hamBurger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = "";
          }
          else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
          }
      })
      hamBurger.classList.toggle('toggle');
      nav.classList.toggle('display-off');
  })
}

navSlide();

//For Feedback Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 15,
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 3,
        nav: true,
        loop: true,
        stagePadding: 0,
        responsive: {
            0:{
                items:1.08,
                dots:true
            },
            375:{
                items: 1.08,
                dots: true
            },
            425:{
                items: 1.38,
                dots: true
            },
            768: {
                items: 2.38,
                dots: true
            },
            1200: {
                items: 3.05,
                dots: true
            },
        }
    });
})