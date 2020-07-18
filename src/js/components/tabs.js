export default function initTabs(tabsSection) {

    const btns = tabsSection.querySelectorAll('.js-tab-btn');
    const contents = tabsSection.querySelectorAll('.js-tab-content');

    btns.forEach((btn, index) => {

        btn.addEventListener('click', () => {
            btns.forEach((btn, i) => {
                i === index ? btn.classList.add('active') : btn.classList.remove('active');
            });
            contents.forEach((content, i) => {
                i === index ? content.classList.add('active') : content.classList.remove('active');
            });
        })
    });
}