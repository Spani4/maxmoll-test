import Vue from 'vue';
import Layout from './Layout.vue';


const el = document.querySelector('#modal-city-picker');
const openBtns = document.querySelectorAll('.js-city-picker-btn');

export default class CityPicker {

    constructor() {

        new Vue({
            name: 'CityPicker',
            el,

            data: {
                show: false,
                openBtns,
            },

            methods: {
                toggle() {
                    this.show = !this.show;
                    document.body.classList.toggle('modal-open');
                },
                renderCityName(city) {
                    this.openBtns.forEach(elem => {
                        elem.textContent = city;
                    })
                }                
            },

            created() {
                this.openBtns.forEach(btn => {
                    btn.addEventListener('click', this.toggle);
                });                
            },

            render: (h) => h(Layout),
        });
    }
}