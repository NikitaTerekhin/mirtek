<template>
    <button class="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 text-white font-semibold py-2 px-4 rounded-lg">
        {{ title }}
    </button>
</template>

<script lang="ts" setup>
import {defineProps, PropType} from "vue/dist/vue";

const props = defineProps({
    title: {
        type: String as PropType<string>,
        required: true,
    },
});
</script>