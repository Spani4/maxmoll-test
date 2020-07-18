import Vue from 'vue';
import Layout from './Layout.vue';

export default class ProductCounter {

    constructor() {

        new Vue({
            name: 'ProductCounter',
            el: '#product-counter',
            render: h => h(Layout),
        })
    }
}