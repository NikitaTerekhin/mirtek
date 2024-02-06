<template>
    <DefaultLayout>
        <div class="p-4">
            <div class="wrap flex pb-4 w-full">
                <ContentWrapper
                    title="Latest Customers"
                    class="content-wrapper w-1/3 mr-4"
                >
                    <ContentCustomerItem
                        v-for="customer in store.getters.customers"
                        :key="customer.id"
                        :item="customer"
                    />
                </ContentWrapper>

                <ContentWrapper
                    title="Top products"
                    class="content-wrapper w-2/3"
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
                <div class="flex align-center justify-between py-2 border-b border-gray-200 rounded-b-none rounded-xl bg-gray-100 text-gray-500 text-sm font-medium">
                    <div
                        v-for="cell in tableCells"
                        :key="cell.id"
                        class="table-item w-1/4 py-1 px-4"
                        :class="{ 'text-left': cell.id === 't' | cell.id === 'd', 'mobile': cell.id === 'a' | cell.id === 's' }"
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

<style lang="scss" scoped>
@media (max-width: 1399px) {
    .wrap {
        flex-direction: column;
    }

    .content-wrapper {
        width: 100%;

        &:first-child {
            margin-bottom: 1rem;
            margin-right: 0;
        }
    }
}
</style>