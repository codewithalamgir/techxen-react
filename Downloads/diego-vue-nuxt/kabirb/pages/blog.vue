<template>
  <div>
    <nuxt-layout name="layout-six">
      <!-- blog area -->
      <blog-area />
      <!-- blog area -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Blog Page - Kabir" });
definePageMeta({ layout: false });


onMounted(() => {
  useSmoothScroll();

  setTimeout(() => {
    useAnimationTitle();
    useCharAnimation();
    useBlogAnimation();
  },50)
});
</script>
