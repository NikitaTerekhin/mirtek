<template>
    <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <div class="mb-4">
            <h3 class="font-semibold text-gray-900 text-xl text-left">
                {{ title }}
            </h3>

            <p v-if="description" class="mt-1 text-left text-sm text-gray-500">
                {{ description }}
            </p>
        </div>

        <div>
            <slot/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";
import type {PropType} from "vue";

const props = defineProps({
    title: {
        type: String as PropType<string>,
        required: true,
    },
    description: {
        type: String as PropType<string>,
        default: '',
    },
});
</script>