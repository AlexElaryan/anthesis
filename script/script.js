if (document.querySelector('.portfolio-swiper')) {
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
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            750: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
        }
    });
}

if (document.querySelector('.page-type-swiper')) {
    new Swiper(".page-type-swiper", {
        loop: true,
        pagination: {
            el: '.page-type-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: ".page-type-swiper-button-next",
            prevEl: ".page-type-swiper-button-prev",
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            720: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
        }
    });
}

if (document.querySelector('.comments-swiper')) {
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
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            720: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
        }
    });
}

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

function setParentHeight(parentSelector, childSelector) {
    const parent = document.querySelector(parentSelector);
    if (!parent) return;

    const children = parent.querySelectorAll(childSelector);
    if (children.length === 0) return;

    let maxHeight = 0;
    children.forEach(child => {
        const height = child.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    parent.style.height = `${maxHeight}px`;
}

function adjustBottomDiv(imageSelector, bottomDivSelector) {
    const images = document.querySelectorAll(imageSelector);
    const bottomDivs = document.querySelectorAll(bottomDivSelector);
    const parentBlock = document.querySelector('.page-type-swiper .swiper-wrapper');

    if (images.length === 0 || bottomDivs.length === 0 || !parentBlock) return;

    function updateAll() {
        const parentHeight = parentBlock.offsetHeight;

        images.forEach((img, index) => {
            const bottomDiv = bottomDivs[index];
            if (!bottomDiv) return;

            const imgHeight = img.offsetHeight;
            const bottomHeight = (Math.max(0, parentHeight - imgHeight)) - 20;

            bottomDiv.style.height = `${bottomHeight}px`;
        });
    }

    // Initial update
    updateAll();

    // Adjust on resize
    window.addEventListener('resize', debounce(updateAll, 100));

    // Ensure update after images load
    images.forEach((img) => {
        if (!img.complete) {
            img.onload = updateAll;
        }
    });
}

function debounce(func, wait) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

function updateOnResize(parentSelector, childSelector) {
    // Ensure the initial height is set correctly
    setParentHeight(parentSelector, childSelector);

    // Recalculate on resize
    window.addEventListener('resize', () => {
        setParentHeight(parentSelector, childSelector);
    });
}

// Example usage
adjustBottomDiv('.page-type-swiper .page-type-picture-block', '.page-type-swiper .page-type-item-bottom');
updateOnResize('.page-type-swiper .swiper-wrapper', '.page-type-swiper .swiper-slide');


// burger menu start

const burgerBtn = document.querySelectorAll('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuFilter = document.querySelector('.burger-menu-filter');

burgerBtn.forEach(btn => {
    btn.onclick = () => {
        burgerMenu.classList.toggle('burger-menu-active');
        btn.classList.toggle('burger-btn-active');
        burgerMenuFilter.classList.toggle('burger-menu-filter-active');
    }
})

burgerMenuFilter.onclick = () => {
    burgerMenu.classList.remove('burger-menu-active');
    burgerBtn.forEach(btn => { btn.classList.remove('burger-btn-active') });

    burgerMenuFilter.classList.remove('burger-menu-filter-active');

}

// burger menu end

// questions start

const questionItems = document.querySelectorAll('.questions-item');
const questionBtns = document.querySelectorAll('.questions-btn');

questionBtns.forEach((btn, index) => {
    btn.onclick = () => {
        questionItems[index].classList.toggle('questions-item-active');
    }
})

// questions end