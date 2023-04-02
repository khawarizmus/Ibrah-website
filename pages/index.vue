<template>
  <CommonHeader />
  <main :class="['bg-black text-white', 'relative w-full h-screen']">
    <div
      class="absolute inset-0 z-10 flex flex-col items-start justify-center w-full h-screen p-24 text-center pointer-events-none"
    >
      <h1 class="font-medium font-brand text-[10rem] leading-snug">ʿIbrah</h1>
      <p class="text-3xl tracking-widest">The past informs the future</p>
    </div>
    <spline-viewer
      ref="viewer"
      url="https://prod.spline.design/ZTPX4ztWsYf0O15X/scene.splinecode"
    ></spline-viewer>
  </main>
  <section
    class="grid h-screen grid-cols-3 grid-rows-2 px-6 text-white bg-black py-36"
  >
    <div class="p-6">
      <p class="text-5xl">
        We are a nimble agency providing business and tech consultancy.
      </p>
    </div>
    <div
      class="grid grid-cols-2 col-span-2 col-start-2 row-start-2 gap-3 p-6 text-5xl grid-row-4"
    >
      <div>Business Strategy</div>
      <div class="w-full rounded-md bg-zinc-950"></div>
      <div class="w-full rounded-md bg-zinc-950"></div>
      <div>Business Auditing</div>
      <div>Tech Consulting</div>
      <div class="w-full rounded-md bg-zinc-950"></div>
      <!-- <div class="w-full rounded-md bg-black-950"></div> -->
    </div>
  </section>
  <CommonFooter />
</template>

<script lang="ts" setup>
useHead({
  link: [
    {
      href: "https://api.fontshare.com/v2/css?f[]=erode@500&display=swap",
      rel: "stylesheet",
    },
  ],
  script: [
    {
      src: "https://unpkg.com/@splinetool/viewer@0.9.280/build/spline-viewer.js",
      type: "module",
    },
  ],
});

// const viewer = ref<any | null>(null);

// onMounted(() => {
//   (
//     viewer.value?.renderRoot.children.container.children.logo as HTMLElement
//   ).hidden = true;
//   console.log(viewer.value?.renderRoot.children.container.children.logo);
//   //   console.log(typeof viewer.value);
// });
</script>
