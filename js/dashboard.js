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