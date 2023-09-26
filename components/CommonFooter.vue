<template>
  <footer
    :class="[
      'relative flex flex-col-reverse px-6 text-white bg-black py-36',
      'md:grid md:items-start md:grid-cols-2 lg:grid-cols-3 md:gap-6',
    ]"
  >
    <div class="px-6 md:col-span-2 lg:col-span-1">
      <div class="mb-6 text-5xl font-medium font-brand md:text-7xl">
        ʿIbrah Consulting.
      </div>
      <p class="text-3xl">Every end is a new beginning. Get in touch.</p>
    </div>
    <div class="p-6 text-2xl md:text-3xl">
      <p class="mb-3">Taman Melati, Kuala Lumpur, Malaysia.</p>
      <a
        target="_blank"
        href="https://www.google.com/maps/place/Taman+Melati,+53100+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur/@3.2249815,101.7200531,16z/data=!3m1!4b1!4m6!3m5!1s0x31cb60016ebb8e49:0x42f71e6f84415230!8m2!3d3.221806!4d101.725659!16s%2Fg%2F1tf33g8j"
        class="inline-flex items-center"
      >
        Map
        <ArrowUpRightIcon class="w-6 h-6" />
      </a>
    </div>
    <div class="p-6 text-2xl md:text-3xl">
      <a
        class="block mb-3 text-3xl md:text-3xl lg:text-4xl"
        href="mailto:info@ibrah.consulting"
        >info@ibrah.consulting</a
      >
      <a
        target="_blank"
        href="https://web.whatsapp.com/send?phone=60146660099"
        class="block mb-2"
        >+60 (16) 524 2696</a
      >
      <a
        target="_blank"
        href="https://www.linkedin.com/company/ibrah-consulting/about/"
        class="inline-flex items-center"
      >
        Linkedin
        <ArrowUpRightIcon class="w-6 h-6" />
      </a>
    </div>
    <div class="fixed bottom-0 z-20 px-8 py-6 bg-black rounded-lg end-0">
      Ibrah © {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowUpRightIcon } from "@heroicons/vue/24/outline";
</script>
