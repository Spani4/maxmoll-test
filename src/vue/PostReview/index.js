import Vue from 'vue';
import Layout from './Layout.vue';

export default class ProductCounter {

    constructor() {

        new Vue({
            name: 'PostReview',
            el: '#post-review',
            render: h => h(Layout),
        })
    }
}