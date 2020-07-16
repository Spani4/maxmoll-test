<template lang="pug">

form
    phone-input.form-control
    input.form-control(type="text")
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
            name: ''
        }
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