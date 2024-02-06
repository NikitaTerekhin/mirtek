<template>
    <header class="bg-white shadow-lg">
        <div class="container mx-auto flex items-center justify-between py-4 px-6">
            <div class="flex items-center space-x-4">
                <RouterLink
                    v-for="link in links"
                    :key="link.id"
                    :to="link.url"
                    class="text-gray-600 hover:text-gray-800"
                    :class="{ 'text-blue-500': $route.name === link.name.toLowerCase() }"
                >
                    {{ link.name }}
                </RouterLink>
            </div>

            <div class="flex items-center space-x-2">
                <button
                    class="text-gray-600 hover:text-gray-800 flex items-center"
                    @click="navigateToPage('/login')"
                >
                    <img src="../assets/icons/login.svg" alt="#" class="px-2">
                    <span>Login/Register</span>
                </button>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import {reactive} from "vue";
import {useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const links = reactive([
    {id: 1, name: 'Dashboard', url: '/'},
    {id: 2, name: 'Team', url: '/team'},
    {id: 3, name: 'Projects', url: '/projects'},
    {id: 4, name: 'Calendar', url: '/calendar'},
]);

const navigateToPage = (url: string) => {
    router.push(url);
}
</script>