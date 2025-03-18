const introBg = document.querySelector('.intro-block > img');

window.addEventListener('DOMContentLoaded', pictureChanger(introBg, 'image/refinementintrobg.png', 'image/refinementintrobglap.png'));

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