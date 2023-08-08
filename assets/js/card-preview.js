const cardSlider = new Swiper(".cardSlider", {
    loop: true,
    slidePerView: 1,
    spaceBetween: 20,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".cardSlider-button-next",
        prevEl: ".cardSlider-button-prev",
    },
    pagination: {
        el: ".cardSlider-pagination",
        clickable: true,
    },
});