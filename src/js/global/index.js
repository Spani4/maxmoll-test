import '../lib/icons';
import LazyLoad from "vanilla-lazyload";

import CityPicker from '~/vue/CityPicker';

export default function() {

    const lazyloadParams = { elements_selector: '[data-bg], [data-src]' };

    new LazyLoad(lazyloadParams);
    
    new CityPicker();
}