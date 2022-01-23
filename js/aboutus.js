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
