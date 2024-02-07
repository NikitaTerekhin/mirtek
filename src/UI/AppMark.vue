<template>
    <div class="flex items-center justify-center w-5 h-5 rounded-full bg-red-200 text-red-800 text-xs">
        {{ info }}
    </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";
import type {PropType} from "vue";

const props = defineProps({
    info: {
        type: String as PropType<string>,
        required: true,
    },
});
</script>