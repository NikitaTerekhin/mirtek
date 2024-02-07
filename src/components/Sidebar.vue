<template>
    <aside class="sidebar fixed p-4 border-r border-gray-200 h-full min-w-1/6">
        <div
            v-for="tab in tabs"
            :key="tab.id"
            class="mb-4"
            :class="{'border-t pt-4': tab.id === 6}"
        >
            <div
                class="sidebar__item flex items-center justify-between py-1 px-2 rounded-lg cursor-pointer font-semibold hover:bg-gray-100"
                :class="{ 'text-green-500': isActiveTab(tab.id) }"
                @click="toggleTab(tab.id)"
            >
                <div class="flex items-center">
                    <img :src="(`src/assets/icons/${tab.title.toLowerCase()}.svg`)" alt="#" class="w-6 h-6 mr-2">

                    {{ tab.title }}
                </div>

                <IconArrow
                    v-if="tab.children.length"
                    :rotate="isOpenedTab(tab.id)"
                    class="ml-4"
                />
            </div>

            <div v-if="isOpenedTab(tab.id)" class="pl-8">
                <div v-for="(child, index) in tab.children" :key="index" class="p-2">
                    <div class="flex items-center cursor-pointer font-semibold">
                        <span>{{ child.title }}</span>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script lang="ts" setup>
import {ref, reactive} from 'vue';
import IconArrow from "../UI/icons/IconArrow.vue";

const tabs = reactive([
    {id: 1, title: 'Overview', children: []},
    {id: 2, title: 'Pages', children: [{title: 'Child 1'}]},
    {id: 3, title: 'Sales', children: [{title: 'Product List'}, {title: 'Billing'}, {title: 'Invoice'}]},
    {id: 4, title: 'Messages', children: []},
    {id: 5, title: 'Authentication', children: [{title: 'Child 1'}]},
    {id: 6, title: 'Docs', children: []},
    {id: 7, title: 'Components', children: []},
    {id: 8, title: 'Help', children: []}
]);

let activeTabId = ref(1);

const isActiveTab = (id: number) => {
    return activeTabId.value === id;
};

let openedTabs = ref([]);

const toggleTab = (id: number) => {
    if (openedTabs.value.includes(id)) {
        openedTabs.value = openedTabs.value.filter((e: number) => e !== id);
    } else {
        openedTabs.value.push(id);
    }
};

const isOpenedTab = (id: number) => {
    return openedTabs.value.includes(id);
};
</script>

<style lang="scss" scoped>
.sidebar {
    width: 250px;
}

@media (max-width: 899px) {
    .sidebar {
        display: none;
    }
}
</style>