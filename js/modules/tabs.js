function tabs(tabsParent, tabContent, tabs, tabActive) {
    const tabsParent = document.querySelector(tabsParent),
        tabContent = document.querySelectorAll(tabContent),
        tabs = document.querySelectorAll(tabs);

    let contentHide = () => {
        tabContent.forEach((item) => {
            item.style.display = "none";

        });

        tabs.forEach(item => {
            item.classList.remove(tabActive);
        });
    }

    let contentShow = (i = 0) => {
        tabContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    };

    contentHide();
    contentShow();

    tabsParent.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    contentHide();
                    contentShow(i);
                }
            });
        }
    });

}
export default tabs;