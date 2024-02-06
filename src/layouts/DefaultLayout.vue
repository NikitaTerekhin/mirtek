<template>
    <div class="default">
        <Header/>
        <Sidebar/>
        <slot/>
        <Footer/>
    </div>
</template>

<script lang="ts" setup>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";
</script>