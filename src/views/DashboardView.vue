<script setup>
import { ref } from 'vue';

const charging = ref(Math.random() < 0.5);

</script>

<template>
  <main class="pr-4 pt-8 pb-6 w-full grid grid-rows-2 lg:h-dvh lg:grid-cols-10">

    <div class="bg-stone-950 grid gap-5 py-5 px-8 text-white text-sm lg:col-span-6">
      <div class="w-full flex items-center gap-2 justify-between">
        <p class="text-base">Performance Monitoring</p>
        <div class="bg-stone-800 text-sm rounded-full p-2 flex items-center gap-2">
          <span class="pi pi-sun text-yellow-300" style="font-size: 0.9rem;"></span>
          <span>32&deg;C</span>
        </div>
      </div>

      <div class="flex">
        <div class="pr-10 w-[40%] text-xs flex-shrink-0 border-r border-r-stone-700">

          <div class="grid gap-2 pb-5 border-b border-b-stone-700">
            <div class="flex items-center gap-2">
              <div class="bg-green-600 w-2 aspect-square rounded-full"></div>
              <p class="text-stone-300">Charge Level</p>
            </div>

            <div class="flex gap-2">
              <h1 class="text-3xl font-medium">80.88</h1>
              <p class="text-sm text-stone-500">%</p>
            </div>

            <div class="w-full text-xs flex items-center justify-between gap-2">
              <p>Min <span class="text-medium text-red-500">32%</span></p>
              <p>Min <span class="text-medium text-green-600">94%</span></p>
            </div>


            <div class="text-xs flex items-center gap-1">
              <span v-show="!charging" class="pi pi-bolt" style="font-size: 0.9rem"></span>
              <span v-show="charging" class="material-symbols-rounded" style="font-size: 1.2rem;">
                battery_charging_60
              </span>
              <p>{{ charging ? 'Charging' : 'Not charging' }}</p>
            </div>
          </div>

          <div class="grid gap-2 mt-5">
            <div class="flex items-center gap-2">
              <div class="bg-yellow-300 w-2 aspect-square rounded-full"></div>
              <p class="text-stone-300">Power Usage</p>
            </div>

            <div class="flex gap-2">
              <h1 class="text-3xl font-medium">17.05</h1>
              <p class="text-xs text-stone-500">KWH</p>
            </div>

            <div class="w-full text-xs flex items-center justify-between gap-2">
              <p class="text-stone-300">1 hour usage <span class="text-white text-semibold">6.8</span> kWh</p>
            </div>
          </div>

        </div>

        <div class="flex-grow flex flex-col justify-between h-full pl-10">
          <img src="../assets/img/panel.png" alt="panel" class="w-full">

          <div class="bg-stone-800 text-xs text-stone-400 p-2 flex justify-between">
            <div class="flex items-center gap-2 justify-between">
              <span class="material-symbols-rounded text-green-600">
                battery_plus
              </span>
              <p class="grid gap-2">
                <span>Capacity</span>
                <span><span class="text-white font-medium text-sm">220.0</span> kWh</span>
              </p>
            </div>

            <div class="flex items-center gap-2 justify-between">
              <span class="material-symbols-rounded text-green-600">
                battery_charging_50
              </span>
              <p class="grid gap-2">
                <span>Total Yield</span>
                <span><span class="text-white font-medium text-sm">175.0</span> kWh</span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="p-5 border lg:col-span-4">
      <h1 class="font-medium">Energy Consumption </h1>
      <small class="text-stone-500">kWh</small>
      <EnergyConsumption />
    </div>

    <div class="p-5 lg:col-span-6">
      <h1 class="font-medium">Energy Generation </h1>
      <small class="text-stone-500">kWh</small>
      <EnergyGeneration />
    </div>

    <div class="p-5 lg:col-span-4 border-x flex flex-col">
      <h1 class="font-medium">Weather Conditions</h1>
      <div class="text-sm flex-grow grid  grid-cols-2 grid-rows-2 mt-2 gap2">

        <div class="bg-stone-100 p-2 grid place-content-center">
          <div class="flex justify-center items-center gap-1">
            <p class="flex gap-1">
              <span class="text-3xl font-semibold">21</span>
              <small>kmph</small>
            </p>
            <span class="material-symbols-rounded">
              air
            </span>
          </div>
          <p class="font-medium text-center">Wind Speed</p>
        </div>

        <div class="bg-stone-100 p-2 grid place-content-center">
          <div class="flex justify-center items-center gap-1">
            <p class="flex gap-1">
              <span class="text-3xl font-semibold">22</span>
              <small>&deg;C</small>
            </p>
            <span class="material-symbols-rounded">
              thermostat
            </span>
          </div>
          <p class="font-medium text-center">Ambient Temp.</p>
        </div>

        <div class="bg-stone-100 p-2 grid place-content-center">
          <div class="flex justify-center items-center gap-1">
            <p class="flex gap-1">
              <span class="text-3xl font-semibold">17</span>
              <small>w/m<sup>2</sup></small>
            </p>
            <span class="material-symbols-rounded">
              sunny
            </span>
          </div>
          <p class="font-medium text-center">Irradiance</p>
        </div>

        <div class="bg-stone-100 p-2 grid place-content-center">
          <div class="flex justify-center items-center gap-1">
            <p class="flex gap-1">
              <span class="text-3xl font-semibold">32</span>
              <small>&deg;C</small>
            </p>
            <span class="material-symbols-rounded">
              device_thermostat
            </span>
          </div>
          <p class="font-medium text-center">Cell Temp.</p>
        </div>
      </div>
    </div>
  </main>
</template>
