import Vue from 'vue';

import Layout from './Layout.vue';

const el = document.querySelector('#consult-request');

export default class ConsultRequest {

    constructor() {

        new Vue({
            name: 'ConsultRequest',
            el,
            render: h => h(Layout),
        })
    }
}