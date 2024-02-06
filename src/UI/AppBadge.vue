<template>
    <div class="app-badge">
        {{ title }}
    </div>
</template>

<script lang="ts" setup>
import type {PropType} from "vue";
import {defineProps} from "vue";

type ColorType = 'red' | 'grey' | 'green' | 'blue';

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
</script>

<style lang="scss" scoped>
.app-badge {
    height: 20px;
    width: 57px;
    border-radius: 10px;
}
</style>