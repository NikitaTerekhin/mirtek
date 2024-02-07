<template>
    <div class="flex justify-between align-center border-b border-gray-200 last:border-b-0 py-2">
        <div class="flex justify-center align-center">
            <div>
                <img :src="`src/assets/icons/customers/${item.id}.svg`" alt="#">
            </div>

            <div class="px-2">
                <div class="text-left font-semibold leading-none">
                    {{ item.name }}
                </div>

                <div class="text-left text-gray-500 text-sm">
                    {{ item.email }}
                </div>
            </div>
        </div>

        <div class="font-semibold">
            {{ item.amount }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";
import type {PropType} from "vue";
import type {CustomerType} from "../types";

const props = defineProps({
    item: {
        type: Object as PropType<CustomerType>,
        required: true,
    },
});
</script>