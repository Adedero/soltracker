<template>
  <div class="card">
    <Chart type="line" :data="chartData" :options="chartOptions" class="w-full h-[15rem]" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  const minData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 40));
  const maxData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 60) + 41);

  const average = minData.map(data => {
    return maxData.map(d => {
      return Math.floor((data + d)/2);
    })
  });

  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Min',
        data: minData,
        fill: false,
        tension: 0.4,
        borderColor: documentStyle.getPropertyValue('--p-cyan-500')
      },
      {
        label: 'Average',
        data: average,
        fill: false,
        borderDash: [5, 5],
        tension: 0.4,
        borderColor: documentStyle.getPropertyValue('--p-orange-500')
      },
      {
        label: 'Max',
        data: maxData,
        fill: true,
        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
        tension: 0.4,
        backgroundColor: 'rgba(107, 114, 128, 0.2)'
      }
    ]
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      },
      y: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      }
    }
  };
}
</script>