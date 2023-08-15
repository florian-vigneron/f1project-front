<script setup lang="ts">
const demoLine = reactive(useDemoLine())

function useDemoLine() {
  const { primary, info } = useTailwindColors()
  const type = 'line'
  const height = 280

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value, info.value],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'straight',
    },
    title: {
      text: '',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    yaxis: {
      reversed: true,
      min: 1,
      max: 22,
    },
    xaxis: {
      categories: [
        '🇫🇷 FRA',
        '🇫🇷 FRA',
        '🇫🇷 FRA',
        '🇫🇷 FRA',
        '🇫🇷 FRA',
        '🇫🇷 FRA',
        '🇫🇷 FRA',
        '🇫🇷 FRA',
        '🇫🇷 FRA',
        '🇫🇷 FRA',
        '🇫🇷 FRA',
        '🇫🇷 FRA',
        '🇫🇷 FRA',
        '🇫🇷 FRA',
        '🇫🇷 FRA',
        '🇫🇷 FRA',
      ],
    },
  }

  const series = ref([
    {
      name: "Position à l'arrivée",
      data: [1, 2, 2, 1, 1, 1, 1, 5, 12, 22, 1, 1, 2, 1, 4, 6],
    },
    {
      name: "Position à l'arrivée (Sprint)",
      data: [
        null,
        null,
        10,
        8,
        null,
        null,
        12,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
  ])

  return {
    type,
    height,
    options,
    series,
  }
}
</script>

<template>
  <div class="relative">
    <BaseCard class="p-6">
      <div class="mb-6">
        <BaseHeading
          as="h3"
          size="md"
          weight="semibold"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>Position à l'arrivée</span>
        </BaseHeading>
      </div>
      <AddonApexcharts v-bind="demoLine" />
    </BaseCard>
  </div>
</template>
