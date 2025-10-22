<template>
  <div>
    <nuxt-layout name="layout-five" :innerStyle="true">

      <!-- portfolio details area -->
      <portfolio-details-area-two />
      <!-- portfolio details area -->

    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Portfolio Details 2 - Kabir" });
definePageMeta({ layout: false });


onMounted(() => {
  useSmoothScroll();
  setTimeout(() => {
    useAnimationTitle();
  },50)
});
</script>
