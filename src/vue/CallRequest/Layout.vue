<template lang="pug">
    div
        transition(name="modal")
            popup(
                v-if="$root.show"
                @close="$root.toggle()"
            )
                template(v-slot:body)
                    request-form(
                        theme="dark"
                        btnText="Перезвоните мне"
                        @submit="handleSubmit()"
                    )
        transition(name="modal")
            popup(
                v-if="showPopup"
                @close="showPopup = false"
            )
                template(v-slot:body) 
                    .text-center.py-4 Заявка отправлена. Мы свяжемся с Вами в ближайшее время.
</template>

<script>
import RequestForm from '~/vue/components/RequestForm.vue';
import Popup from '~/vue/components/Popup.vue';

export default {
    components: {
        RequestForm,
        Popup
    },

    data() {
        return {
            showPopup: false
        }
    },

    methods: {
        handleSubmit() {
            this.$root.toggle();
            this.showPopup = true;
        }
    }
}
</script>