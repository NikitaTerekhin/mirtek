<template>
    <DefaultLayout>
        <div class="flex p-4 w-full">
            <ContentWrapper title="Latest Customers">
                <ContentCustomerItem
                    v-for="customer in store.getters.customers"
                    :key="customer.id"
                    :item="customer"
                />
            </ContentWrapper>

            <ContentWrapper title="Top products">

            </ContentWrapper>
        </div>
    </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import { useStore } from "vuex";
import ContentWrapper from "../components/ContentWrapper.vue";
import ContentCustomerItem from "../components/ContentCustomerItem.vue";

const store = useStore();
</script>