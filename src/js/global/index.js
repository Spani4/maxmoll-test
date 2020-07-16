import '../lib/icons';
import LazyLoad from "vanilla-lazyload";

import initScrollToTopBtn from '~/js/components/scrollToTopBtn';


function initFooterYearUpdate() {

    const yearElem = document.querySelector('.js-year');
    yearElem.textContent = new Date().getFullYear();
}


export default function() {

    const lazyloadParams = { elements_selector: '[data-bg], [data-src]' };

    new LazyLoad(lazyloadParams);

    initFooterYearUpdate();
    initScrollToTopBtn();

}