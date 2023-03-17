// Slider

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

// Calculator

const calcForm = document.querySelector('.js-calc-form')
const totalSquare = document.querySelector('.js-square')
const totalPrice = document.querySelector('.js-total-price')
const calcResultWrapper = document.querySelector('.js-calc-result-wrapper')

const tariff = {
    economy: 550,
    comfort: 1400,
    premium: 2700,
}

calcForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const width = calcForm.width.value
    const length = calcForm.length.value
    const chosenTariff = calcForm.tariff.value

    if (width > 0 && length >0) {
        const square = width * length
        const total = square * tariff[chosenTariff]
        
        totalSquare.textContent = `${square} кв м`
        totalPrice.textContent = `${total} руб`

        calcResultWrapper.style.display = 'block'
    }
})
