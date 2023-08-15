<script setup lang="ts">
const demoLine = reactive(useDemoLine())

function useDemoLine() {
  const { primary } = useTailwindColors()
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
    colors: [primary.value],
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
      name: 'Nombre de points total',
      data: [
        18, 36, 61, 70, 95, 110, 135, 160, 162, 189, 214, 235, 250, 260, 262,
        295,
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
          <span>Nombre de points total</span>
        </BaseHeading>
      </div>
      <AddonApexcharts v-bind="demoLine" />
    </BaseCard>
  </div>
</template>
