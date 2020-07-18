<template lang="pug">

    include ../../pug/mixins/mixins.pug

    form(
        @submit.prevent="submit"
        :class="theme == 'light' ? 'text-white' : 'text-secondary'"
    )
        .row.py-3

            label.col-6
                .mb-2.pl-4.small * Ваше имя
                .form-elem-container
                    input.form-control.pl-5(
                        type="text"
                        placeholder="Введите имя"
                        v-model="name"
                    )
                    +icon('profile')

            label.col-6
                .mb-2.pl-4.small * Ваш телефон
                .form-elem-container
                    phone-input.form-control.pl-5(
                        v-model="phone"
                    )
                    +icon('phone')

            .col.text-danger.position-relative
                .small.text-bold.position-absolute(v-if="error.length") {{ error }}

        .row.py-3
            .col
                button.button-consult.btn.btn-danger.px-5(
                    type="submit"
                ) {{ btnText }}

</template>

<script>
import PhoneInput from './PhoneInput.vue';

export default {

    components: {
        PhoneInput,
    },

    props: {
        btnText: {
            type: String,
            default: 'Перезвоните мне'
        },
        theme: {
            type: String,
            default: 'dark'
        },
    },

    data() {
        return {
            phone: '',
            name: '',
            error: '',
        }
    },

    methods: {
        submit() {

            if ( !this.isValid ) {
                this.error = 'Введите свое имя и номер телефона';
                return;
            }


            const data = {
                phone: this.phone,
                name: this.name,
            };

            this.$emit('submit', data);
            this.reset();
        },


        reset() {
            this.phone = '';
            this.name = '';
            this.error = '';
        }
    },

    computed: {
        isValid() {
            const phoneValid = this.phone.length == 11;
            const nameValid = this.name.length > 2;

            return phoneValid && nameValid;
        },
    },

    watch: {
        name(newVal, oldVal) {
            if ( newVal.length > 50 ) this.name = oldVal;
        }
    }

}
</script>

<style lang="scss" scoped>

</style>