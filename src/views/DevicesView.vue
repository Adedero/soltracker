<script setup>
import { ref } from 'vue';
import { devices } from '@/data/devices';

const data = ref(devices);
</script>

<template>
  <main class="p-5">
    <h1 class="font-semibold">Connected Devices</h1>

    <div class="mt-2">
      <DataTable :value="data" paginator :rows="10" :rowsPerPageOptions="[10, 20, 50]" tableStyle="min-width: 50rem"
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}">

        <Column field="name" header="Units" style="width: 25%"></Column>
        <Column field="units" header="Units" style="width: 25%"></Column>
        <Column field="consumption" header="Power Usage" style="width: 25%">
          <template #body="slotProps">
            <div>
              {{ slotProps.data.consumption }}
              <sup>kW/h</sup>
            </div>
          </template>
        </Column>
        <Column field="percentageConsumption" header="% Power Usage" style="width: 25%">
          <template #body="slotProps">
            {{ slotProps.data.percentageConsumption + '%' }}
          </template>
        </Column>
        <Column field="hoursActive" header="Active Hours" style="width: 25%"></Column>
      </DataTable>
    </div>
  </main>
</template>