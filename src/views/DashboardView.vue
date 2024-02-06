<template>
    <DefaultLayout>
        <div class="p-4">
            <div class="flex pb-4 w-full">
                <ContentWrapper
                    title="Latest Customers"
                    class="w-1/3 mr-4"
                >
                    <ContentCustomerItem
                        v-for="customer in store.getters.customers"
                        :key="customer.id"
                        :item="customer"
                    />
                </ContentWrapper>

                <ContentWrapper
                    title="Top products"
                    class="w-2/3"
                >
                    <ContentProductItem
                        v-for="product in store.getters.products"
                        :key="product.id"
                        :item="product"
                    />
                </ContentWrapper>
            </div>

            <ContentWrapper
                title="Transactions"
                description="This is a list of latest transactions."
                class="pb-4"
            >
                <div class="flex align-center justify-between py-2 rounded-r rounded-xl bg-gray-100 text-gray-500 text-sm font-medium">
                    <div
                        v-for="cell in tableCells"
                        :key="cell.id"
                        class="w-1/4 py-1 px-4"
                        :class="{ 'text-left': cell.id === 't' | cell.id === 'd' }"
                    >
                        {{ cell.name.toUpperCase() }}
                    </div>
                </div>

                <ContentTransactionItem
                    v-for="(transaction, index) in store.getters.transactions"
                    :key="transaction.id"
                    :item="transaction"
                    :class="{ 'bg-gray-100': index % 2 !== 0 }"
                />
            </ContentWrapper>
        </div>
    </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import { useStore } from "vuex";
import ContentWrapper from "../components/ContentWrapper.vue";
import ContentCustomerItem from "../components/ContentCustomerItem.vue";
import ContentProductItem from "../components/ContentProductItem.vue";
import ContentTransactionItem from "../components/ContentTransactionItem.vue";
import {ref} from "vue";

const store = useStore();

const tableCells = ref([
    {id: 't', name: 'transaction'},
    {id: 'd', name: 'date & time'},
    {id: 'a', name: 'amount'},
    {id: 's', name: 'status'},
]);
</script>