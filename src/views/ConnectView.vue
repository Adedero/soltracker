<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);

const handleConnect = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    router.push('/app')
  }, 5000);
}
</script>

<template>
  <main class="h-dvh w-dvh flex flex-col items-center justify-center gap-5 bg-slate-800 text-slate-200">
    <img src="/logo.png" alt="logo" class="w-20">
    <h1 class="text-center text-3xl md:text-4xl font-light">Welcome to <span class="font-bold">SolTrack</span></h1>

    <p v-show="!loading">To track your solar panel system, please click connect.</p>

    <p v-show="loading" class="text-slate-400">Connecting . . .</p>

    <Button v-show="!loading" @click="handleConnect" label="Connect" icon="pi pi-plus" />

    <svg v-show="loading" class="pl" viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
          <stop offset="0%" stop-color="hsl(313,90%,55%)" />
          <stop offset="100%" stop-color="hsl(223,90%,55%)" />
        </linearGradient>
        <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="hsl(313,90%,55%)" />
          <stop offset="100%" stop-color="hsl(223,90%,55%)" />
        </linearGradient>
      </defs>
      <circle class="pl__ring" cx="100" cy="100" r="82" fill="none" stroke="url(#pl-grad1)" stroke-width="36"
        stroke-dasharray="0 257 1 257" stroke-dashoffset="0.01" stroke-linecap="round"
        transform="rotate(-90,100,100)" />
      <line class="pl__ball" stroke="url(#pl-grad2)" x1="100" y1="18" x2="100.01" y2="182" stroke-width="36"
        stroke-dasharray="1 165" stroke-linecap="round" />
    </svg>

  </main>
</template>

<style scoped>
.pl {
  display: block;
  width: 6.25em;
  height: 6.25em;
}

.pl__ring,
.pl__ball {
  animation: ring 2s ease-out infinite;
}

.pl__ball {
  animation-name: ball;
}

/* Animation */
@keyframes ring {
  from {
    stroke-dasharray: 0 257 0 0 1 0 0 258;
  }

  25% {
    stroke-dasharray: 0 0 0 0 257 0 258 0;
  }

  50%,
  to {
    stroke-dasharray: 0 0 0 0 0 515 0 0;
  }
}

@keyframes ball {

  from,
  50% {
    animation-timing-function: ease-in;
    stroke-dashoffset: 1;
  }

  64% {
    animation-timing-function: ease-in;
    stroke-dashoffset: -109;
  }

  78% {
    animation-timing-function: ease-in;
    stroke-dashoffset: -145;
  }

  92% {
    animation-timing-function: ease-in;
    stroke-dashoffset: -157;
  }

  57%,
  71%,
  85%,
  99%,
  to {
    animation-timing-function: ease-out;
    stroke-dashoffset: -163;
  }
}
</style>