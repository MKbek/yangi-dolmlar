const adBanner = new Swiper(".adBanner", {
    loop: true,
    slidePerView: 4,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        1080: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        726: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        520: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        380: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        }
    },
    navigation: {
        nextEl: ".adBanner-button-next",
        prevEl: ".adBanner-button-prev",
    },
    pagination: {
        el: ".adBanner-pagination",
        clickable: true,
    },
});