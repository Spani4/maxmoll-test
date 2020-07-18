import Vue from 'vue';

import Layout from './Layout.vue';

const el = document.querySelector('#modal-call-request');
const openBtns = document.querySelectorAll('.js-call-me-btn');

export default class CallRequest {

    constructor() {

        new Vue({
            name: 'CallRequest',
            el,

            data: {
                show: false,
                openBtns,
            },

            methods: {
                toggle() {
                    this.show = !this.show;
                },
            },

            created() {
                this.openBtns.forEach(btn => {
                    btn.addEventListener('click', this.toggle);
                });
            },


            render: h => h(Layout),
        })
    }
}