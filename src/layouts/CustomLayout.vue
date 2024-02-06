<template>
    <div class="h-screen flex flex-col">
        <Header/>

        <slot/>
    </div>
</template>

<script lang="ts" setup>
import Header from "../components/Header.vue";
</script>