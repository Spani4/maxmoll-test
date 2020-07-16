export default function() {

    const scrollToTopBtn = document.querySelector('.js-scroll-top-btn');

    scrollToTopBtn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });


    const adjustBtn = () => {
        if (window.scrollY > 100) {
            scrollToTopBtn.classList.add('show');

        } else {
            scrollToTopBtn.classList.remove('show')
        }
    };

    adjustBtn();

    
    let passiveSupported = false;

    try {
        window.addEventListener(
            "test",
            null,
            Object.defineProperty({}, "passive", { get: function () { passiveSupported = true; } }));
    } catch (err) { }

    window.addEventListener('scroll', adjustBtn, passiveSupported ? { passive: true } : false);
}

