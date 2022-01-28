
 let menu = document.querySelector('#menu-btn');
 let navbar = document.querySelector('.header .navbar');
 
 menu.onclick = () =>{
     menu.classList.toggle('fa-times');
     navbar.classList.toggle('active');
 };
 window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

//----- HOME SWIPER --------

var swiper = new Swiper(".home-slider", {
    autoplay: {
        delay: 3000,
      },
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

//----- TESTIMONIAL SWIPER -------
var swiper = new Swiper(".testimonials-slider", {
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

//-------- BLOG SWIPER --------

var swiper = new Swiper(".blog-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});

