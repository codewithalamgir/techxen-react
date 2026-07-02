<template>
  <div>
    <nuxt-layout name="layout-six" :style_2="true">

      <!-- blog details 2 area -->
      <blog-details-area-two />
      <!-- blog details 2 area -->

    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Blog Details 2 Page - Kabir" });
definePageMeta({ layout: false });


onMounted(() => {
  useSmoothScroll();

  setTimeout(() => {
    useAnimationTitle();
    useCharAnimation();
    useBlogAnimation();
  },100)
});
</script>
