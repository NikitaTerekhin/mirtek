<template>
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
</template>

<script lang="ts" setup>
import ContentWrapper from "../components/ContentWrapper.vue";
import ContentProductItem from "../components/ContentProductItem.vue";
import {useStore} from "vuex";

const store = useStore();
</script>