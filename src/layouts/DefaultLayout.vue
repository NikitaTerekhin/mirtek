<template>
    <div class="h-screen flex flex-col">
        <Header/>

        <div class="flex flex-1 mt-16">
            <Sidebar/>

            <div class="flex-1 content">
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

<style lang="scss" scoped>
.content {
    padding-left: 250px;
}

@media (max-width: 899px) {
    .content {
        padding-left: 0;
    }
}
</style>