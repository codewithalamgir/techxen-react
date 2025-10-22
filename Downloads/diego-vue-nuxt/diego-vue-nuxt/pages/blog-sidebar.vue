<template>
  <div>
    <nuxt-layout name="layout-six">
      <!-- blog postbox area -->
      <blog-postbox-area />
      <!-- blog postbox area -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Blog Sidebar Page - Kabir" });
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
