const introBg = document.querySelector('.intro-block > img');

function introBgChanger() {
    if (window.innerWidth > 1000) {
        introBg.src = 'image/introbg.png';

    }
    else {
        introBg.src = 'image/introbglap.png';
    }
}

introBgChanger();

window.addEventListener('resize', introBgChanger);