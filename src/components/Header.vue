<template>
    <header class="border-b border-gray-200 fixed top-0 w-full z-10 px-4 shadow-sm">
        <div class="mx-auto flex items-center justify-between py-4 h-16">
            <div class="flex items-center space-x-4">
                <IconLogo/>

                <template v-if="$route.name !== 'dashboard'">
                    <RouterLink
                        v-for="link in links"
                        :key="link.id"
                        :to="link.url"
                        class="hover:text-gray-800 header__item"
                        :class="{ 'text-blue-500': $route.name === link.name.toLowerCase() }"
                    >
                        {{ link.name }}
                    </RouterLink>
                </template>

                <AppInput
                    v-if="store.getters.isAuth && $route.name === 'dashboard'"
                    class="header__item"
                />

                <img src="../assets/icons/burger.svg" alt="#" class="header__item--mobile">
            </div>

            <div class="flex items-center space-x-2">
                <button
                    class="border border-gray-200 rounded-xl py-1 px-2"
                    @click="toggleTheme"
                >
                    Toggle theme
                </button>

                <template v-if="!store.getters.isAuth">
                    <button
                        class="hover:text-gray-600 flex items-center"
                        @click="login"
                    >
                        <IconLogin class="px-2"/>
                        <span>Login/Register</span>
                    </button>
                </template>

                <template v-else>
                    <IconBell class="px-2"/>
                    <img src="../assets/icons/avatar.svg" alt="" class="cursor-pointer">
                </template>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useStore } from 'vuex';
import AppInput from "../UI/AppInput.vue";
import IconLogo from "../UI/icons/IconLogo.vue";
import IconLogin from "../UI/icons/IconLogin.vue";
import IconBell from "../UI/icons/IconBell.vue";

const store = useStore();

const links = reactive([
    {id: 1, name: 'Dashboard', url: '/'},
    {id: 2, name: 'Team', url: '/team'},
    {id: 3, name: 'Projects', url: '/projects'},
    {id: 4, name: 'Calendar', url: '/calendar'},
]);

const login = () => {
    store.commit('setIsAuth', true);
}

const toggleTheme = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
}
</script>

<style lang="scss" scoped>
.header {
    &__item {
        &--mobile {
            display: none;
        }
    }
}

@media (max-width: 899px) {
    .header {
        &__item {
            display: none;

            &--mobile {
                display: block;
            }
        }
    }
}
</style>