<template>
    <div class="h-screen flex flex-col">
        <Header/>

        <div class="flex flex-1 mt-16">
            <Sidebar/>

            <div class="flex-1">
                <slot/>

                <Footer/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";
</script>