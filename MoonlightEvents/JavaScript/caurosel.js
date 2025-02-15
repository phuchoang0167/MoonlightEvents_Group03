// caurosel
var index = 0;
function moveSlide() {
    const carousel = document.getElementById('carousel');
    index = (index + 1) % 3;
    carousel.style.transform = `translateX(${-index * 100}%)`;
}
setInterval(moveSlide, 5000);
