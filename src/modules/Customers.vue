<template>
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
</template>

<script lang="ts" setup>
import ContentWrapper from "../components/ContentWrapper.vue";
import ContentCustomerItem from "../components/ContentCustomerItem.vue";
import {useStore} from "vuex";

const store = useStore();
</script>