import { openModal, closeModal } from "./modal";
import { postData } from "../services/services";


function popup(formsSelector, modalSelector, windowTimer) {
    const modal = document.querySelector(modalSelector);
    const forms = document.querySelectorAll(formsSelector);
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро с вами свяжемся!',
        failure: 'Что то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    })


    function bindPostData(form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            let messageStatus = document.createElement('img');
            messageStatus.src = message.loading;
            messageStatus.style.cssText =
                `
                display: block;
                maring: 0 auto;
            `;
            form.insertAdjacentElement('afterend', messageStatus);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data)
                    showThanksModal(message.success)
                    messageStatus.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
        });
    }


    function showThanksModal(msg) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal(modalSelector, windowTimer);

        const thanksMessage = document.createElement('div');
        thanksMessage.classList.add('modal__dialog');
        thanksMessage.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-modal-close>×</div>
            <div class="modal__title">${msg}</div>
        </div>`;

        modal.append(thanksMessage);
        setTimeout(() => {
            thanksMessage.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal(modalSelector);
        }, 4000)
    }
}
export default popup;