<template>
    <CustomLayout>
        <div class="flex flex-col items-center justify-center flex-1 mt-16 p-4">
            <img src="../assets/images/404.png" alt="#">

            <div>
                <h3 class="font-bold text-medium text-6xl mb-6">
                    Page not found
                </h3>

                <p class="text-gray-500">
                    Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.
                </p>
            </div>
        </div>
    </CustomLayout>
</template>

<script setup lang="ts">
import CustomLayout from "../layouts/CustomLayout.vue";
</script>