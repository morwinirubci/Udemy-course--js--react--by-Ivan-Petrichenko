import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import cards from './modules/cards';
import popup from './modules/popup';
import slider from './modules/slider';
import calc from './modules/calc';
import { openModal } from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {

    const windowTimer = setTimeout(() => openModal('.modal', windowTimer), 3000);

    tabs('.tabheader__items', '.tabcontent', '.tabheader__item', 'tabheader__item_active');
    timer('.timer', '2024-06-11');
    modal('[data-modal]', '.modal', windowTimer);
    cards();
    popup('form', '.modal', windowTimer);
    slider({
        wrapper: '.offer__slider-wrapper', 
        field: '.offer__slider-inner', 
        sliderSelector: '.offer__slider', 
        slide: '.offer__slide',
        total: '#total',
        current: "#current",
        prevSlide: '.offer__slider-prev',
        nextSlide: '.offer__slider-next'
    });
    calc();
});

