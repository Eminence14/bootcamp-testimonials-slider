const prevBtn = document.querySelector('.prev img')
const nextBtn = document.querySelector('.next img')
const slideOne = document.querySelector('.slides.one')
const slideTwo = document.querySelector('.slides.two')

prevBtn.addEventListener('click', showSlide1)
nextBtn.addEventListener('click', showSlide2)

function showSlide2() {
    slideOne.style.display = 'none'
    slideTwo.style.display = 'block'
}
function showSlide1() {
    slideOne.style.display = 'block'
    slideTwo.style.display = 'none'
}