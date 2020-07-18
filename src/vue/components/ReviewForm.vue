<template lang="pug">

    include ../../pug/mixins/mixins.pug

    form(@submit.prevent="submit")

        .title Оставить отзыв о товаре

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

            label.col-12
                .mb-2.pl-4.small * Ваш отзыв
                .form-elem-container
                    textarea.form-control(
                        v-model="message"
                        placeholder="Оставьте ваш отзыв"
                    )

            .col.text-danger.position-relative
                .small.text-bold.position-absolute(v-if="error.length") {{ error }}

        .row.py-3
            .col-12.text-center
                button.button-review.btn.btn-primary.px-5(
                    type="submit"
                ) Отправить

</template>

<script>
import PhoneInput from './PhoneInput.vue';

export default {

    components: {
        PhoneInput,
    },

    data() {
        return {
            phone: '',
            name: '',
            message: '',
            error: '',
        }
    },

    methods: {
        submit() {

            if ( !this.isValid ) {
                this.error = 'Введите имя, номер телефона и отзыв о товаре';
                return;
            }

            const data = {
                phone: this.phone,
                name: this.name,
                message: this.message
            };

            this.$emit('submit', data);
            console.log(data)
            this.reset();
        },


        reset() {
            this.phone = '';
            this.name = '';
            this.message = '';
            this.error = '';
        }
    },

    computed: {
        isValid() {
            const phoneValid = this.phone.length == 11;
            const nameValid = this.name.length > 2;
            const messageValid = this.message.length > 0;

            return phoneValid && nameValid && messageValid;
        },
    },

    watch: {
        name(newVal, oldVal) {
            if ( newVal.length > 50 ) this.name = oldVal;
        },
        message(newVal, oldVal) {
            if ( newVal.length > 5000 ) this.message = newVal.substring(0, 5000);
        }
    }

}
</script>

<style lang="scss" scoped>
.title {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
}
</style>