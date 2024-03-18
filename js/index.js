// Slider

function slideChanger(buttonIndex) {
    const activeSlide = document.querySelector("[data-active]")
    const slides = [...document.querySelectorAll(".slider_img")]
    const currentIndex = slides.indexOf(activeSlide)
    let newIndex = currentIndex + 1
    
    if (newIndex >= slides.length) {
        newIndex = 0
    } else if (newIndex < 0) {
        newIndex = slides.length - 1
    }
    slides[newIndex].dataset.active = true
    delete activeSlide.dataset.active
}

const leftButton = () => slideChanger(-1)
const rightButton = () => slideChanger(1)


// DarkMode on/off and Local Storage

const darkModeBtn = document.querySelector(".dark-mode-btn")

// Checking

if (localStorage.getItem("darkMode") === "dark") {
    darkModeBtn.classList.add("dark-mode-btn--active")
    document.body.classList.add("dark")
} 


darkModeBtn.addEventListener('click', function() {
    darkModeBtn.classList.toggle("dark-mode-btn--active")
    const isDark = document.body.classList.toggle("dark")
    
    if (isDark) {
        localStorage.setItem("darkMode", "dark")
    } else {
        localStorage.setItem("darkMode", "light")
    }
})