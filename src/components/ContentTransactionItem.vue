<template>
    <div class="flex align-center justify-between py-2 rounded-xl">
        <div class="flex w-1/4 py-1 px-4">
            <div class="mr-1">
                Payment from
            </div>

            <div class="text-left font-semibold">
                {{ item.name }}
            </div>
        </div>

        <div class="text-left text-gray-500 text-sm w-1/4 py-1 px-4">
            {{ item.date }}
        </div>

        <div class="font-semibold w-1/4 py-1 px-4">
            {{ item.amount }}
        </div>

        <div class="w-1/4 flex items-center justify-center">
            <AppBadge
                :title="item.status"
                :color="getColor(item.status)"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";
import type {PropType} from "vue";
import type {TransactionType} from "../types";
import AppBadge from "../UI/AppBadge.vue";

const props = defineProps({
    item: {
        type: Object as PropType<TransactionType>,
        required: true,
    },
});

const getColor = (status: string) => {
    switch (status.toLowerCase()) {
        case 'completed':
            return 'green';
        case 'cancelled':
            return 'red';
        case 'in progress':
            return 'blue';
        default:
            return 'gray';
    }
};
</script>