import '../lib/icons';
import LazyLoad from "vanilla-lazyload";

export default function() {

    const lazyloadParams = { elements_selector: '[data-bg], [data-src]' };

    new LazyLoad(lazyloadParams);

}