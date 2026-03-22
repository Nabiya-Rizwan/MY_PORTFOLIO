const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navLinks');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    let currentSection = '';
    document.querySelectorAll('section').forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 150) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
});

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
});

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
    });
});

new Swiper('.projects-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1100: { slidesPerView: 3 },
    },
});

function sendForm(event) {
    event.preventDefault();
    const statusBox = document.getElementById('formStatus');
    statusBox.style.display = 'block';
    statusBox.textContent = 'Message sent! I will reply ASAP.';
    event.target.reset();
    setTimeout(function () {
        statusBox.style.display = 'none';
    }, 4000);
}