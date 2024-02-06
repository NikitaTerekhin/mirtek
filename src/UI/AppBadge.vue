<template>
    <span :class="badgeClasses">
        {{ title }}
    </span>
</template>

<script lang="ts" setup>
import type {PropType} from "vue";
import {computed, defineProps} from "vue";

type ColorType = 'red' | 'gray' | 'green' | 'blue';

const props = defineProps({
    title: {
        type: String as PropType<string>,
        required: true,
    },
    color: {
        type: String as PropType<ColorType>,
        required: true,
    },
});

const badgeClasses = computed(() => {
    const colors = {
        'red': ['bg-red-300', 'text-red-800'],
        'gray': ['bg-gray-300', 'text-gray-800'],
        'green': ['bg-green-300', 'text-green-800'],
        'blue': ['bg-blue-300', 'text-blue-800'],
    };

    const defaultClass = 'inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10';

    return [defaultClass, ...colors[props.color]].join(' ');
});
</script>