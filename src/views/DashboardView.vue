<template>
    <DefaultLayout>
        <div class="p-4">
            <div class="wrap flex pb-4 w-full">
                <Customers/>

                <Products/>
            </div>

            <Transactions/>
        </div>
    </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Transactions from "../modules/Transactions.vue";
import Products from "../modules/Products.vue";
import Customers from "../modules/Customers.vue";
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