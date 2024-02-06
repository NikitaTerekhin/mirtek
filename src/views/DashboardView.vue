<template>
    <DefaultLayout>
        <div class="dashboard">
            <h1 class="dashboard__title">
                dashboard
            </h1>

            <AppBadge
                title="Badge"
                color="red"
            />

            <AppButton title="Button"/>
        </div>
    </DefaultLayout>
</template>

<script lang="ts" setup>
import AppBadge from "../UI/AppBadge.vue";
import AppButton from "../UI/AppButton.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
</script>

<style lang="scss" scoped>

</style>