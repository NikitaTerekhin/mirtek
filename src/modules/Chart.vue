<template>
    <ContentWrapper
        title="Sales"
        has-icon-info
        class="mb-4"
    >
        <Line
            id="chart"
            :options="store.getters.chartOptions"
            :data="store.getters.chartData"
        />
    </ContentWrapper>
</template>

<script lang="ts" setup>
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import ContentWrapper from "../components/ContentWrapper.vue";
import {useStore} from "vuex";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const store = useStore();
</script>

<style lang="scss" scoped>
#chart {
    max-height: 492px;
}
</style>