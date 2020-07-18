<template lang="pug">
    div
        review-form(
            @submit="showPopup = true"
        )
            
        transition(name="modal")
            popup(
                v-if="showPopup"
                @close="showPopup = false"
            )
                template(v-slot:body) 
                    .text-center.py-4 Соощбение будет добавлено после проверки модератором.
</template>


<script>
import ReviewForm from '~/vue/components/ReviewForm.vue';
import Popup from '~/vue/components/Popup.vue';

export default {
    components: {
        ReviewForm,
        Popup
    },

    data() {
        return {
            showPopup: false
        }
    },
}
</script>