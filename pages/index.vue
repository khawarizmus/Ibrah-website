<template>
  <CommonHeader />
  <main :class="['bg-black text-white', 'relative w-full h-screen']">
    <div
      class="absolute inset-0 z-10 flex flex-col items-start w-full h-screen p-6 mt-24 text-center pointer-events-none lg:mt-0 lg:justify-center md:p-24"
    >
      <h1
        class="font-medium font-brand text-8xl md:text-9xl lg:text-[10rem] lg:leading-snug"
      >
        ʿIbrah
      </h1>
      <p class="text-xl tracking-widest md:text-2xl lg:text-3xl">
        The past informs the future
      </p>
    </div>
    <spline-viewer
      ref="viewer"
      url="https://prod.spline.design/ZTPX4ztWsYf0O15X/scene.splinecode"
    ></spline-viewer>
  </main>
  <section
    class="flex flex-col grid-rows-2 px-6 text-white bg-black md:grid lg:h-screen md:grid-cols-2 lg:grid-cols-3 py-36"
  >
    <div class="p-6 mb-12 md:col-span-2 lg:col-span-1">
      <p class="text-4xl md:text-5xl">
        We are a nimble agency providing business and tech consultancy.
      </p>
    </div>
    <div
      class="grid items-center grid-cols-2 col-span-2 row-start-2 gap-3 p-6 text-3xl md:text-4xl lg:text-5xl lg:col-start-2 grid-row-4"
    >
      <div>Business Strategy</div>
      <div class="self-stretch w-full rounded-md bg-zinc-950"></div>
      <div class="self-stretch w-full rounded-md bg-zinc-950"></div>
      <div>Business Auditing</div>
      <div>Tech Consulting</div>
      <div class="self-stretch w-full rounded-md bg-zinc-950"></div>
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
