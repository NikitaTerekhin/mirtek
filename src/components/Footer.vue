<template>
    <footer class="p-4 pt-0">
        <div class="footer__content flex bg-white rounded-2xl px-6 py-12 border border-gray-200  shadow-sm justify-between">
            <div class="text-gray-500">
                © 2021 Themesberg, LLC. All rights reserved.
            </div>

            <div class="flex justify-between">
                <img
                    v-for="icon in icons"
                    :key="icon.id"
                    :src="`src/assets/icons/${icon.name}.svg`"
                    alt="#"
                    class="footer__icon ml-4"
                >
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const icons = ref([
    {id: 1, name: 'facebook'},
    {id: 2, name: 'twitter'},
    {id: 3, name: 'github'},
    {id: 4, name: 'ball'},
]);
</script>

<style lang="scss" scoped>
@media (max-width: 1299px) {
    .footer {
        &__content {
            flex-direction: column;
            align-items: flex-start;
            text-align: start;
        }

        &__icon {
            margin: 1rem 1rem 0 0;
        }
    }
}
</style>