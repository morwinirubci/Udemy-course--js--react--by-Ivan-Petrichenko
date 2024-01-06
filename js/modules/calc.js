function calc() {
    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    }else{
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if(localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio');
    }else{
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }


    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = "____";
            return;
        }

        if (sex === 'female') {
            result.textContent = Math.round(655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age) * ratio);
        } else {
            result.textContent = Math.round(66.5 + (13.75 * weight) + (5.003 * height) - (6.775 * age) * ratio);
        }
    };

    calcTotal();

    function initialLocalSettings(selector, activeClass){
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if(elem.getAttribute('id') === localStorage.getItem('sex')){
                elem.classList.add(activeClass);
            }
            if(elem.getAttribute('data-ratio') === localStorage.getItem('ratio')){
                elem.classList.add(activeClass);
            }
        })
    };

    initialLocalSettings('#gender div', 'calculating__choose-item_active');
    initialLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcStaticDate(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass)
                });

                elem.classList.add(activeClass);
                calcTotal();
            });
        });
    };
    

    calcStaticDate('#gender div', 'calculating__choose-item_active');
    calcStaticDate('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcDynamicDate(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            };
            calcTotal();
        });
    };


    calcDynamicDate('#height');
    calcDynamicDate('#weight');
    calcDynamicDate('#age');

}

export default calc;