const slider = new Swiper('.hero__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,

    autoplay: {
        delay: 3000,
    },

    navigation: {
        prevEl: '.hero__slider-btn--prev',
        nextEl: '.hero__slider-btn--next',
    },

    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        560: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    }
})