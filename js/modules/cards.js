import { postData, getResource } from "../services/services";

function cards(){
    class CardMenu {
        constructor(src, alt, title, description, price) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price * 89;
        }

        render() {
            const menuBlock = document.querySelector('.menu__field .container');
            const newCard = document.createElement('div');
            newCard.classList.add('menu__item');
            newCard.innerHTML = `<img src=${this.src} alt=${this.alt}>
                                     <h3 class="menu__item-subtitle">${this.title}</h3>
                                     <div class="menu__item-descr">${this.description}</div>
                                     <div class="menu__item-divider"></div>
                                     <div class="menu__item-price">
                                        <div class="menu__item-cost">Цена:</div>
                                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                                     </div>`
            menuBlock.append(newCard)
        }
    };

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach((item, i) => {
                console.log(item, i)
            })
            data.forEach(({ img, altimg, title, descr, price }) => {
                new CardMenu(img, altimg, title, descr, price).render();
            });
        });
    
}
export default cards;