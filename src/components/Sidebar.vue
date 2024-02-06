<template>
    <div class="bg-white p-4 border-r border-gray-300 h-full">
        <!-- Вкладки сайдбара -->
        <div v-for="(tab, index) in tabs" :key="index">
            <!-- Заголовок вкладки -->
            <div
                class="flex items-center justify-between p-4 cursor-pointer text-gray-800"
                :class="{ 'bg-blue-600 text-white': isActiveTab(tab.id) }"
                @click="toggleTab(tab.id)"
            >
        <span class="flex items-center">
          <svg
              v-if="!isActiveTab(tab.id)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <!-- Иконка вкладки -->
              <!-- Подставьте нужный SVG-код для каждой вкладки -->
          </svg>
          <span v-else class="mr-2">❯</span> <!-- Символ "больше" для открытой вкладки -->
          {{ tab.title }}
        </span>
            </div>
            <!-- Подвкладки -->
            <div v-if="isActiveTab(tab.id)" class="pl-8">
                <div v-for="(subtab, subindex) in tab.subtabs" :key="subindex" class="p-2">
                    <!-- Заголовок подвкладки -->
                    <div class="flex items-center cursor-pointer text-gray-800">
                        <!-- Здесь можете добавить иконку для подвкладки, если необходимо -->
                        <span>{{ subtab.title }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref, reactive} from 'vue';

const tabs = reactive([
    {id: 1, title: 'Tab 1', subtabs: [{title: 'Subtab 1'}, {title: 'Subtab 2'}]},
    {id: 2, title: 'Tab 2', subtabs: null},
    {id: 3, title: 'Tab 3', subtabs: [{title: 'Subtab 1'}]},
]);

let activeTabId = ref(null) as number | null;

const isActiveTab = (id: number) => {
    return activeTabId === id;
};

const toggleTab = (id: number) => {
    if (activeTabId === id) {
        activeTabId = null;
    } else {
        activeTabId = id;
    }
};
</script>