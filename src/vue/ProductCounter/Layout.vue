<template lang="pug">
    .row.align-items-center.mb-5
        .col-auto
            .btn-group
                button.btn.btn-primary(@click="quantity--") -
                .btn.border.border-primary {{ quantity }}
                button.btn.btn-primary(@click="quantity++") +
        .col-auto
            .product-buy-block__price-old {{ totalOld }}&nbsp;&#x20bd;
        .col-auto
            .product-buy-block__price-new {{ totalNew }}&nbsp;&#x20bd;    
</template>

<script>
export default {
    data() {
        return {
            quantity: 1,
            price: {
                old: 15050,
                new: 4970
            }
        }
    },

    computed: {
        totalOld() {
            let price = this.quantity * this.price.old;
            let formatted = [];

            price.toString().split('').reverse().forEach((digit, i) => {
                formatted.push(digit);
                if ( !((i+1) % 3) ) formatted.push(' ');
            });

            return formatted.reverse().join('');
        },
        totalNew() {
            let price = this.quantity * this.price.new;
            let formatted = [];

            price.toString().split('').reverse().forEach((digit, i) => {
                formatted.push(digit);
                if ( !((i+1) % 3) ) formatted.push(' ');
            });

            return formatted.reverse().join('');
        }
    },

    watch: {
        quantity(newVal) {
            if ( newVal < 1 ) {
                this.quantity = 1;
            }
        }
    },
}
</script>