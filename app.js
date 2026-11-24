const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const companiesSwiper = new Swiper('.companies-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const testimonialsSwiper = new Swiper('.testimonials-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    console.log(`Filtering by: ${button.textContent}`);
  });
});

const ctaForm = document.querySelector('.cta-form');

ctaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = ctaForm.querySelector('input[type="email"]').value;

  if (validateEmail(email)) {
    alert('Thank you for subscribing! We will be in touch soon.');
    ctaForm.reset();
  } else {
    alert('Please enter a valid email address.');
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

document.querySelectorAll('.search-dropdown select').forEach((dropdown) => {
  dropdown.addEventListener('focus', () => {
    dropdown.parentElement.style.boxShadow = '0 0 0 2px var(--primary-light)';
  });

  dropdown.addEventListener('blur', () => {
    dropdown.parentElement.style.boxShadow = 'none';
  });

  dropdown.addEventListener('change', () => {
    console.log(`Selected: ${dropdown.value}`);
  });
});

const animatedElements = document.querySelectorAll(
  '.feature-card, .job-card, .company-slide'
);

function checkScroll() {
  animatedElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
}

animatedElements.forEach((element) => {
  element.style.opacity = 0;
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);