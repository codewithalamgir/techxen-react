<template>
  <div>
    <nuxt-layout name="layout-four">

      <!-- portfolio details area -->
      <portfolio-details-area-three />
      <!-- portfolio details area -->

    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Portfolio Details 3 - Kabir" });
definePageMeta({ layout: false });

onMounted(() => {
  useSmoothScroll();
});
</script>
