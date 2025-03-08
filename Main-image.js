const container = document.querySelector('.scroll-container');
const content = document.querySelector('.scroll-content');
const images = document.querySelectorAll('.sizingImg-sty');
let currentIndex = 0;

function changeImage(direction) {
    const totalImages = images.length;

    currentIndex += direction;

    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    const imageWidth = images[0].clientWidth;
    const offset = currentIndex * imageWidth;

    content.style.transform = `translateX(-${offset}px)`;
}
