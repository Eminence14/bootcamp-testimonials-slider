const slide1 = document.querySelector('.slides:nth-child(1)')
const slide2 = document.querySelector('.slides:nth-child(2)')
const btnSlide1 = document.querySelectorAll('.btn-slide1')
const btnSlide2 = document.querySelectorAll('.btn-slide2')

for (let slide of btnSlide1)
    slide.addEventListener('click', nextSlide)
for (let slide of btnSlide2)
    slide.addEventListener('click', nextSlideAgain)

if (window.innerWidth > 1300) 
    slide1.style.display = 'flex'

function nextSlide() {
    if (slide1.style.display === 'flex' && window.innerWidth > 1300) {
        slide1.style.display = 'none'
        slide2.style.display = 'flex'
    }
    if (slide1.style.display === 'block') {
        slide1.style.display = 'none'
        slide2.style.display = 'block'
    }
}

function nextSlideAgain() { 
    if (slide2.style.display === 'flex' && window.innerWidth > 1300) {
        slide2.style.display = 'none'
        slide1.style.display = 'flex'
    }
    if (slide2.style.display === 'block') {
        slide2.style.display = 'none'
        slide1.style.display = 'block'
    }
}