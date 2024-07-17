<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>

<template>
  <main class="lg:grid lg:grid-cols-9">
    <nav class="hidden border-r lg:block lg:col-span-2">
      <div class="flex items-center gap-2 px-4 py-6">
        <img src="/logo.png" alt="logo" class="w-12">
        <p class="font-bold text-2xl">SolTracker</p>
      </div>

      <div class="mt-32 p-4">
        <RouterLink :to="{ name: 'dashboard' }" class="flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-100">
          <span class="pi pi-table"></span>
          <p>Dashboard</p>
        </RouterLink>

        <RouterLink :to="{ name: 'devices' }" class="flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-100">
          <span class="pi pi-tablet"></span>
          <p>Devices</p>
        </RouterLink>

        <RouterLink :to="{ name: 'analysis' }" class="flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-100">
          <span class="pi pi-chart-line"></span>
          <p>Analysis</p>
        </RouterLink>

        <RouterLink :to="{ name: 'alerts' }" class="flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-100">
          <span class="pi pi-exclamation-circle"></span>
          <p>Alerts</p>
        </RouterLink>
      </div>
    </nav>

    <section class="w-full lg:col-span-7 lg:h-dvh">
      <header class="p-4 border-b flex items-center gap-2 justify-between lg:hidden">
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="logo" class="w-12">
          <p class="font-bold text-2xl">SolTracker</p>
        </div>
        <Button @click="visible=true" icon="pi pi-bars" severity="success" text />
      </header>

      <RouterView />
    </section>

    <Drawer v-model:visible="visible" position="right" class="max-w-96" header="SolTracker">
      <div class="mt-32 p-4">
        <RouterLink @click="visible = false" :to="{ name: 'dashboard' }"
          class="flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-100">
          <span class="pi pi-table"></span>
          <p>Dashboard</p>
        </RouterLink>

        <RouterLink @click="visible = false" :to="{ name: 'devices' }"
          class="flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-100">
          <span class="pi pi-tablet"></span>
          <p>Devices</p>
        </RouterLink>

        <RouterLink @click="visible = false" :to="{ name: 'analysis' }"
          class="flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-100">
          <span class="pi pi-chart-line"></span>
          <p>Analysis</p>
        </RouterLink>

        <RouterLink @click="visible = false" :to="{ name: 'alerts' }"
          class="flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-100">
          <span class="pi pi-exclamation-circle"></span>
          <p>Alerts</p>
        </RouterLink>
      </div>
    </Drawer>
  </main>
</template>

<style scoped>
a.router-link-exact-active {
  @apply text-green-600 font-medium bg-green-100 bg-opacity-50
}
</style>