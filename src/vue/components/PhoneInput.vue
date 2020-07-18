<template lang="pug">
    input(
        type="text"
        :placeholder="placeholder"
        :disabled="isDisabled"
        v-imask="mask"
        :value="value"
        @accept="$emit('input', $event.detail.unmaskedValue)"
        @complete="$emit('input', $event.detail.unmaskedValue)"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
    )
</template>

<script>
import { IMaskDirective } from 'vue-imask';

export default {

    name: 'PhoneInput',

    props: {
        isDisabled: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: "+7 (_ _ _) _ _ _-_ _-_ _"
        },
    },

    data() {
        return {
            mask: {
                mask: '+{7} (000) 000-00-00',
            },
        }
    },

    computed: {
        value() {
            return this.$attrs.value;
        }
    },

    directives: {
        imask: IMaskDirective,    
    },

}
</script>