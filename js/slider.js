let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
    });
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});
