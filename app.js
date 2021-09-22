const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        slide.classList.add('active')
    })
}

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        clearActiveClasses();

        slide.classList.add('active');
    })
});

const clearActiveClasses = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
};
