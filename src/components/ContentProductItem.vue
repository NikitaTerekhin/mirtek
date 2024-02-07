<template>
    <div class="flex justify-between align-center border-b border-gray-200 last:border-b-0 py-2">
        <div class="flex justify-center align-center">
            <div>
                <div class="text-left font-semibold leading-none">
                    {{ item.name }}
                </div>

                <div class="text-left text-gray-500 text-sm">
                    {{ item.description }}
                </div>
            </div>
        </div>

        <div class="ml-2 inline-flex">
            <div class="font-semibold">
                {{ item.amount }}
            </div>

            <div class="ml-2">
                sales
            </div>
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