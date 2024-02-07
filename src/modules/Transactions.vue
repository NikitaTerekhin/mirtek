<template>
    <ContentWrapper
        title="Transactions"
        description="This is a list of latest transactions."
    >
        <div
            class="flex align-center justify-between py-2 border-b border-gray-200 rounded-b-none rounded-xl bg-gray-100 text-gray-500 text-sm font-medium">
            <div
                v-for="cell in tableCells"
                :key="cell.id"
                class="table-item w-1/4 py-1 px-4"
                :class="{
                    'text-left': cell.id === 't' | cell.id === 'd',
                    'mobile': cell.id === 'a' | cell.id === 's',
                    'table-item--text-end': cell.id === 'd'
                }"
            >
                {{ cell.name.toUpperCase() }}
            </div>
        </div>

        <ContentTransactionItem
            v-for="(transaction, index) in store.getters.transactions"
            :key="transaction.id"
            :item="transaction"
            :class="{ 'transaction__item--colored bg-gray-100': index % 2 !== 0 }"
        />
    </ContentWrapper>
</template>

<script lang="ts" setup>
import ContentWrapper from "../components/ContentWrapper.vue";
import ContentTransactionItem from "../components/ContentTransactionItem.vue";
import {useStore} from "vuex";
import {ref} from "vue";

const store = useStore();

const tableCells = ref([
    {id: 't', name: 'transaction'},
    {id: 'd', name: 'date & time'},
    {id: 'a', name: 'amount'},
    {id: 's', name: 'status'},
]);
</script>