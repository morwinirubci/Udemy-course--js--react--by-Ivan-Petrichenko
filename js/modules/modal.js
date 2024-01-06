function openModal(modalSelector, windowTimer) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    if(windowTimer){
        clearInterval(windowTimer);
    }
};

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
};

function modal(triggerSelector, modalSelector, windowTimer) {
    const btn = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

   

    btn.forEach((btn) => {
        
        btn.addEventListener('click', () => openModal(modalSelector, windowTimer));
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal || e.target.getAttribute('data-modal-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    

    function showWindowByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector, windowTimer);
            window.removeEventListener('scroll', showWindowByScroll);
        }
    }

    window.addEventListener('scroll', showWindowByScroll);

}
export default modal;
export {openModal, closeModal}