import "../scss/product.scss";

import initGlobalScripts from "./global";
import ProductCounter from "~/vue/ProductCounter";
import PostReview from "~/vue/PostReview";
import initTabs from "~/js/components/tabs";


document.addEventListener('DOMContentLoaded', () => {
    
    initGlobalScripts();
    new ProductCounter();

    const tabsSection = document.querySelector('.js-tabs-product');
    initTabs(tabsSection);

    new PostReview();
});

