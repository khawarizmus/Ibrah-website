<template>
  <footer
    class="relative grid items-end h-screen grid-cols-3 px-6 text-white bg-black py-36"
  >
    <div class="px-6">
      <div class="mb-6 font-medium font-brand text-7xl">ʿIbrah Consulting.</div>
      <p class="text-3xl">Every end is a new beginning. Get in touch.</p>
    </div>
    <div class="col-start-3 text-3xl">
      <a class="block mb-3 text-4xl" href="mailto:info@ibrah.consulting"
        >info@ibrah.consulting</a
      >
      <span class="inline-flex items-center">
        Linkedin
        <ArrowUpRightIcon class="w-6 h-6" />
      </span>
    </div>
    <div class="fixed bottom-0 px-6 py-3 bg-black rounded-lg end-0">
      Ibrah © {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowUpRightIcon } from "@heroicons/vue/24/outline";
</script>
