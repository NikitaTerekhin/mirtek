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
        'red': ['bg-red-200', 'text-red-800'],
        'gray': ['bg-gray-200', 'text-gray-800'],
        'green': ['bg-green-200', 'text-green-800'],
        'blue': ['bg-blue-200', 'text-blue-800'],
    };

    const defaultClass = 'inline-flex justify-center items-center rounded-xl px-2 py-1 text-xs ring-1 ring-inset ring-gray-500/10 w-20';

    return [defaultClass, ...colors[props.color]].join(' ');
});
</script>