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

//For Show More and Show Less
const abContainerExtra = document.querySelector('.ab__container__extra');
const abContainerText = document.querySelector('#abc__text');
const abContainerIcon = document.querySelector('img#abc__icon');
const abContainerBody = document.querySelector('.ab__container__body');

abContainerExtra.addEventListener('click', (e)=>{
    abContainerBody.classList.toggle('show__more');
    
    if (abContainerText.innerText === "Show More"){
        abContainerText.innerText = "Show Less";
        abContainerIcon.style.transform = 'rotate(180deg)';
    }
    else{
        abContainerText.innerText = "Show More"; 
        abContainerIcon.style.transform = 'rotate(0deg)';
    }
})

//For Feedback Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        margin: 2,
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 3,
        nav: true,
        loop: true,
        stagePadding: 20,
        responsive: {
            0:{
                items:1,
                dots:false
            },
            768: {
                items: 2,
                dots: false
            },
            1200: {
                items: 3,
                dots: true
            },
        }
    });
})
