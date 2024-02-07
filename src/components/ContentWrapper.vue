<template>
    <div class="rounded-2xl p-4 border border-gray-200 shadow-sm">
        <div class="mb-4">
            <div class="flex items-center">
                <h3 class="font-semibold text-xl text-left">
                    {{ title }}
                </h3>

                <IconInfo
                    v-if="hasIconInfo"
                    class="ml-2"
                />
            </div>

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
import IconInfo from "../UI/icons/IconInfo.vue";

const props = defineProps({
    title: {
        type: String as PropType<string>,
        required: true,
    },
    description: {
        type: String as PropType<string>,
        default: '',
    },
    hasIconInfo: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
});
</script>