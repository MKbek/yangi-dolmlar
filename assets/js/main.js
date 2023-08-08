const adCard = new Swiper(".adCard", {
    slidesPerView: 3,
    loop: false,
    spaceBetween: 30,
    slidesPerGroupSkip: 1,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        1080: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        420: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    },
    navigation: {
        nextEl: ".adCard-button-next",
        prevEl: ".adCard-button-prev",
    },
    pagination: {
        el: ".adCard-pagination",
        clickable: true,
    },
});

const mobileMenuToggle = document.querySelector('#mobile-menu-toggle'),
    mobileMenuContent = document.querySelector('#mobile-menu');

mobileMenuToggle.onclick = () => {
    if (mobileMenuContent.classList.contains('hidden')) {
        mobileMenuContent.classList.remove('hidden')
        mobileMenuContent.classList.add('block')
    } else {
        mobileMenuContent.classList.add('hidden')
        mobileMenuContent.classList.remove('block')
    }
}



const toggleKvartira = document.querySelector('#kvartir-toggle'),
    submenuKvartira = document.querySelector('#submenu-kvartirs');


toggleKvartira.onclick = () => {
    if (submenuKvartira.classList.contains('top-24')) {
        document.body.style.overflow = 'hidden'
        submenuKvartira.classList.add('top-32')
        submenuKvartira.classList.add('active')
        submenuKvartira.classList.remove('top-24')
    } else {
        document.body.style.overflow = 'auto'
        submenuKvartira.classList.add('top-24')
        submenuKvartira.classList.remove('top-32')
        submenuKvartira.classList.remove('active')
    }
}
//
// let adBannersSlideContainer = document.getElementById('adBannersSlideContent'),
//     adBannersSlide = document.getElementById('adBannersSlide'),
//     adBannersSlideCards = document.getElementsByTagName('a'),
//     adBannersSlideShow = 4,
//     adBannersSlideContainerWith = adBannersSlideContainer.clientWidth,
//     adBannersSlideCardWith = adBannersSlideContainerWith/ adBannersSlideShow;
//
// adBannersSlide.style.width = adBannersSlideCards.length * adBannersSlideCardWith + 'px';
//
// for (let i = 0; i < adBannersSlideCards.length; i++) {
//     // adBannersSlideCards[i].style.width = adBannersSlideContainerWith / adBannersSlideshow + 'px';
//     const element = adBannersSlideCards[i];
//     element.style.width = adBannersSlideCardWith + 'px';
// }
//
// adBannersSlideShowPrev = () => {
//     adBannersSlide.style.marginLeft = ((+adBannersSlide.style.marginLeft.slice(0,-2)) - adBannersSlideCardWith) + 'px';
// }
//
// adBannersSlideShowNext = () => {
//     adBannersSlide.style.marginLeft = ((+adBannersSlide.style.marginLeft.slice(0,-2)) + adBannersSlideCardWith) + 'px';
// }