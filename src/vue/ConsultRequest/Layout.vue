<template lang="pug">
    div
        request-form(
            theme="light"
            btnText="Получить консультацию"
            @submit="showPopup = true"
        )

        transition(name="fade")
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
}
</script>