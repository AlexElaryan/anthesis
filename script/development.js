
const complectTab = document.querySelectorAll('.devpage-complect-tab');
const complectItem = document.querySelectorAll('.devpage-complect-item');

tabSelector(complectTab, complectItem, 'devpage-complect-tab-active', 'devpage-complect-item-active');

// -----------------

const devsiteCmsPic = document.querySelector('.dev-site-cms-left img:last-of-type');
const introBg = document.querySelector('.intro-block > img');

window.addEventListener('DOMContentLoaded', pictureChanger(devsiteCmsPic, 'image/sitecmspicfig.png', 'image/sitecmspicfiglap.png'));
window.addEventListener('DOMContentLoaded', pictureChanger(introBg, 'image/devIntroBg.png', 'image/devintrobglap.png'));

const feedbackTitle = document.querySelector('.dev-feedback .title');

function feedbackTitleChanger() {
    if (window.innerWidth > 1000) {
        feedbackTitle.innerHTML = `<span>Бесплатно</span> проконсультируем
                    и ответим на любые Ваши
                    вопросы!`;
    }
    else {
        feedbackTitle.innerHTML = `<span>Бесплатная</span> консультация`;
    }
}

feedbackTitleChanger();

window.addEventListener('resize', () => {
    feedbackTitleChanger();
});