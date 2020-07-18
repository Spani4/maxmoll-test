<template lang="pug">

    .modal.text-dark
        .modal-dialog.modal-dialog-centered
            .modal-content.shadow
                .modal-header
                    slot(name="header")
                    button.close(aria-label="close"
                        @click="$emit('close')"
                    ) &times;
                .modal-body
                    slot(name="body")
</template>

<script>
export default {
    
    mounted() {
        document.body.classList.toggle('modal-open');
    },
    destroyed() {
        document.body.classList.toggle('modal-open');
    }
}
</script>
<style lang="scss" scoped>

</style>