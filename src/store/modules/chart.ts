type State = {
    chart: unknown,
}

export default {
    state(): State {
        return {
            chart: {
                data: {
                    labels: [
                        '01 Apr',
                        '02 Apr',
                        '03 Apr',
                        '04 Apr',
                        '05 Apr',
                        '06 Apr',
                        '07 Apr',
                    ],
                    datasets: [
                        {
                            // label: 'Sales',
                            data: [80, 100, 80, 100, 120, 100, 120],
                            fill: false,
                            borderColor: 'rgb(34, 197, 94)',
                            tension: 0.5,
                            interaction: {
                                intersect: false,
                            },
                            scales: {
                                x: {
                                    display: true,
                                    title: {
                                        display: true
                                    }
                                },
                                y: {
                                    display: true,
                                    title: {
                                        display: true,
                                        text: 'Value'
                                    },
                                    suggestedMin: -10,
                                    suggestedMax: 200
                                }
                            }
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                },
            },
        }
    },
    getters: {
        chartData(state: State) {
            return state.chart.data;
        },
        chartOptions(state: State) {
            return state.chart.options;
        },
    },
}