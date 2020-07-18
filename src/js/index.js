import "../scss/main.scss";

import initGlobalScripts from "./global";
import ConsultRequest from "~/vue/ConsultRequest";
import initTabs from "~/js/components/tabs";


document.addEventListener('DOMContentLoaded', () => {
    
    initGlobalScripts();

    new ConsultRequest();

    const usageTabs = document.querySelector('.js-tabs-usage');
    initTabs(usageTabs);
});

