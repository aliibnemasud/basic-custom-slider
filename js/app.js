const scrolls = document.querySelectorAll('.scroll');
console.log(scrolls)
let counter = 0;

scrolls.forEach((slide, index)=> {
    slide.style.top = `${index * 100}%`;
})

// slider js

const slides = document.querySelectorAll('.slide');
console.log(slides)

slides.forEach((slide, index)=> {
    slide.style.top = `${index * 100}%`;
})

const goPrev = () => {
    counter--
    slideImage()
    console.log("prev")
}

const goNext = () => {
    counter++
    slideImage()
}

const slideImage = () => {
    slides.forEach((slide)=> {
        slide.style.transform = `translateY(-${counter * 100}%)`;
    })
}


