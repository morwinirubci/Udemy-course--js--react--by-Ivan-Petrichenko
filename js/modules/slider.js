
function slider({wrapper, field, sliderSelector, slide, total, current, prevSlide, nextSlide}) {
    const slidesWrap = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        slider = document.querySelector(sliderSelector),
        slides = document.querySelectorAll(slide),
        totalSlides = document.querySelector(total),
        currentSlide = document.querySelector(current),
        prev = document.querySelector(prevSlide),
        next = document.querySelector(nextSlide),
        width = window.getComputedStyle(slidesWrap).width;

    const slideCounter = slides.length;
    let slideNum = 1;
    let offset = 0;

    let countSlides = () => {
        if (slideCounter < 10) {
            totalSlides.textContent = `0${slideCounter}`;
            currentSlide.textContent = `0${slideNum}`;
        } else {
            totalSlides.textContent = slideCounter;
            currentSlide.textContent = slideNum;
        };
    };

    let triggerCurrentDot = () => {

        slidesField.style.transform = `translateX(-${offset}px)`;

        dots.forEach(dot => {
            dot.style.opacity = '.5';
        });
        dots[slideNum - 1].style.opacity = '1';
    };
    countSlides();

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '.5s all';

    slidesWrap.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    let removeWords = (str) => {
        return Number(str.replace(/\D/g, ''));
    };

    next.addEventListener('click', () => {
        if (offset == removeWords(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += removeWords(width);
        }

        if (slideNum == slideCounter) {
            slideNum = 1;
        } else {
            slideNum++;
        }

        countSlides();
        triggerCurrentDot();
    });

    prev.addEventListener('click', () => {

        if (offset == 0) {
            offset = removeWords(width) * (slides.length - 1)

        } else {
            offset -= removeWords(width)
        }

        if (slideNum == 1) {
            slideNum = slideCounter;
        } else {
            slideNum--;
        }

        countSlides();
        triggerCurrentDot();
    });


    const dots = [];

    slider.style.position = 'relative';

    const indicators = document.createElement('ol');
    indicators.classList.add('carousel-indicators');

    slider.append(indicators);

    for (let i = 0; slides.length > i; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', i + 1);
        indicators.append(dot);

        if (i === 0) {
            dot.style.opacity = 1;
        }
        dots.push(dot);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideNum = slideTo;
            offset = removeWords(width) * (slideTo - 1);

            countSlides();
            triggerCurrentDot();

        });
    });
}
export default slider;