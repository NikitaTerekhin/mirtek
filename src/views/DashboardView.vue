<template>
    <DefaultLayout>
        <div class="flex p-4 w-full">
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
                    v-for="customer in store.getters.products"
                    :key="customer.id"
                    :item="customer"
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

const store = useStore();
</script>