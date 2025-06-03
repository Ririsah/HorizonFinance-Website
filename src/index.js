const navbar = document.querySelector('.nav-container');
const nav_links = document.querySelector('.nav-links');
const cover = document.querySelector('.cover-container');

const sections = document.querySelectorAll('.section');

const btn_transf = document.querySelector('.transf');
const btn_loan = document.querySelector('.loan');
const btn_close = document.querySelector('.close');

const div_transf = document.querySelector('.operation-div-1');
const div_loan = document.querySelector('.operation-div-2');
const div_close = document.querySelector('.operation-div-3');

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btn_slide_left = document.querySelector('.slider-btn-left');
const btn_slide_right = document.querySelector('.slider-btn-right');



//sticky navbar animation
const navHeight = navbar.getBoundingClientRect().height;
const stickyNav = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
        navbar.classList.add('sticky-nav');
        cover.style.paddingTop = `${navHeight}px`;
    } else {
        navbar.classList.remove('sticky-nav');
        cover.style.paddingTop = `0`;
    }
};

const coverObserver = new IntersectionObserver (stickyNav, {
    root: null,
    threshold: 0,
});

coverObserver.observe(cover);



//nav links fade animation
const navOpacityAnimation = function (e, opacity) {
    if (e.target.classList.contains('nav-link')) {
        const selected = e.target;
        const links = selected.closest('.nav-links').querySelectorAll('.nav-link');

        links.forEach(element => {
            if (element !== selected) {
                element.style.opacity = opacity;
            }
        });
    }
};

nav_links.addEventListener('mouseover', function (e) {
    navOpacityAnimation(e, 0.3);
});

nav_links.addEventListener('mouseout', function (e) {
    navOpacityAnimation(e, 1);
});


const addActiveBtn = function (selected, btn2, btn3) {
    selected.classList.add('operations-btn-active');
    btn2.classList.remove('operations-btn-active');
    btn3.classList.remove('operations-btn-active');
}

const addActiveDiv = function (selected, div2, div3) {
    selected.classList.add('operation-div-active');
    div2.classList.remove('operation-div-active');
    div3.classList.remove('operation-div-active');
};

btn_transf.addEventListener('click', function () {
    addActiveBtn(btn_transf, btn_loan, btn_close);
    addActiveDiv(div_transf, div_loan, div_close);
});

btn_loan.addEventListener('click', function () {
    addActiveBtn(btn_loan, btn_transf, btn_close);
    addActiveDiv(div_loan, div_transf, div_close);
});

btn_close.addEventListener('click', function () {
    addActiveBtn(btn_close, btn_loan, btn_transf);
    addActiveDiv(div_close, div_loan, div_transf);
});



//nav links fade animation
const revealSection = function (entries, observer) {
    const [entry] = entries;

    if(!entry.isIntersecting) {
        return;
    } else {
        entry.target.classList.remove('section-hidden');
    }
};

const sectionObserver = new IntersectionObserver (revealSection, {
    root: null,
    threshold: 0.15,
});

sections.forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add('section-hidden');
});



//nav links fade animation
let currentSlide = 0
const maxSlide = slides.length;
const goToSlide = function (slide) {
    slides.forEach((slide, i) => (slide.style.transform = 
                                `translateX(${100 * (i - currentSlide)}%)`));
}

goToSlide(0);


const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    goToSlide(currentSlide);
}

const previousSlide = function () {
    if (currentSlide === 0) {
        currentSlide = maxSlide - 1;
    } else {
        currentSlide--;
    }

    goToSlide(currentSlide);
}


btn_slide_right.addEventListener('click', nextSlide);
btn_slide_left.addEventListener('click', previousSlide);