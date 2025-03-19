const stableflow = document.querySelector('.stable-flow > img');

window.addEventListener('DOMContentLoaded', pictureChanger(introBg, 'image/promintrobg.png', 'image/promotionintrobglap.png'));
window.addEventListener('DOMContentLoaded', pictureChanger(stableflow, 'image/stableflow.png', 'image/stableflowbglap.png'));

const introTitle = document.querySelector('.promotion-intro h1 ');

textChanger(introTitle, `Эффективное продвижение вашего сайта:
            <span>поисковая оптимизация и Яндекс Директ</span>`, `Эффективное продвижение вашего сайта: <span>поисковая оптимизация</span>
<span>и Яндекс Директ</span>`, `Эффективное продвижение вашего сайта: <span>поисковая</span> <span>оптимизация</span>
<span>и Яндекс</span> <span>Директ</span>`);

const stableflowtitle = document.querySelector('.stable-flow-content h2 ');


textChanger(stableflowtitle, `Создаём <span>стабильный поток</span> исключительно
                целевых клиентов, которые покупают
                и становятся постоянными`, `Создаём <span>стабильный поток</span> исключительно целевых клиентов,
                 которые покупают
и становятся постоянными`);

const feedbackTitle = document.querySelector('.dev-feedback .title');

textChanger(feedbackTitle, `<span>Бесплатно</span> проконсультируем
    и ответим на любые Ваши
    вопросы!`, `<span>Бесплатная</span> консультация`);