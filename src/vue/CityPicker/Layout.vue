<template lang="pug">

transition(name="modal")
    .modal(v-if="$root.show")
        .modal-dialog.shadow-lg.modal-lg
            .modal-content
                .modal-header
                    h4.modal-title Выберите город
                    button.close(aria-label="close"
                        @click="close()"
                    ) &times;
                .modal-body
                    input.form-control.mb-3(
                        type="text"
                        placeholder="Найти город..."
                        v-model="filterText"
                    )
                    .city-list.row.px-3
                        template(
                            v-for="(city, index) in filteredCities"
                        )
                            .city-list__separator.border-bottom.border-gray(
                                v-if="index === 0 || city.toLowerCase()[0] !== filteredCities[index -1].toLowerCase()[0]"
                            ) {{ city[0] }}
                            .city-list__item.col-12.col-lg-6(
                                @click="setCity(city)"
                                :key="city"
                                :class="{ active: city == activeCity }"
                            ) {{ city }}
</template>

<script>
import cities from '~/js/config/cities';

export default {

    data() {
        return {
            activeCity: 'Петропавловск-Камчатский',
            cities,
            filterText: '',
        }
    },

    computed: {
        sortedCities() {
            return cities.sort();
        },
        filteredCities() {
            return this.sortedCities.filter(city => city.toLowerCase().startsWith(this.filterText.toLowerCase()));
        }
    },

    methods: {
        close() {
            this.$root.toggle();
        },

        setCity(city) {
            this.activeCity = city;
            this.renderCityName();
            this.close();
        },

        renderCityName() {
            this.$root.renderCityName(this.activeCity);
        }
    },

    created() {
        this.renderCityName();
    },
}
</script>

<style lang="scss" scoped>
.city-list {

    &__item {
        line-height: 150%;
        cursor: pointer;

        &.active {
            font-weight: bold;
        }
        &:hover {
            text-shadow: 0 0 0 black;
        }
    }

    &__separator {
        width: 100%;
        margin: 0 1rem 1rem;
        padding: 1rem 2rem 0;
        font-weight: bold;
        font-size: 2rem;
    }
}
</style>