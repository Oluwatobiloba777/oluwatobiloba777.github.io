// Hamburger

const ham_btn = document.getElementById('hamburger-menu-btn')
const ham_menu = document.getElementById('hamburger-menu')

ham_btn.addEventListener('click', () => {
    ham_btn.classList.toggle('open')
    ham_menu.classList.toggle('flex')
    ham_menu.classList.toggle('hidden')
})

// Slider

const slider = document.querySelector('.slider');
let slideIndex = 1;

function showSlides() {
    const slides = document.querySelectorAll('.slider img');
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
    slideIndex++;
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();


/* SCROLL REVEAL ANIMATION */
// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

// Configure the elements to reveal
sr.reveal(`.hero_content, .hero_slider,
            .about_content, .about_img,
            .services_content, .menu_content,
            .order_content, .contact_content,
            .footer_content`, {
    interval: 200
});
