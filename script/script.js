
new Swiper(".portfolio-swiper", {
    loop: true,
    pagination: {
        el: '.work-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".work-swiper-button-next",
        prevEl: ".work-swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 20,
});

new Swiper(".comments-swiper", {
    loop: true,
    pagination: {
        el: '.comments-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".comments-swiper-button-next",
        prevEl: ".comments-swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 20,
});

// modals 

const modal = document.querySelectorAll('.modal');
const filter = document.querySelector('.body-filter');
const feedbackmodalOpenBtn = document.querySelectorAll('.openFeedbackModal');

function modalOpen(modalName) {
    modalName.classList.add('modal-active');
    filter.classList.add('body-filter-active');
    document.body.style.overflow = 'hidden';
}

function modalClose(modalName) {
    modalName.classList.remove('modal-active');
    filter.classList.remove('body-filter-active');
    document.body.style.overflow = 'auto';
}

filter.onclick = () => modal.forEach(el => modalClose(el));


feedbackmodalOpenBtn.forEach(btn => {
    btn.onclick = () => {
        modalOpen(document.querySelector('.feedback-modal'));
    }
})