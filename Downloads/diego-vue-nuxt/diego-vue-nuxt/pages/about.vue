<template>
  <div>
    <nuxt-layout name="layout-six">

      <!-- about hero area -->
      <about-hero-area />
      <!-- about hero area -->

      <!-- about info area -->
      <about-info-area />
      <!-- about info area -->

      <!-- about personal info area -->
      <about-personal-info />
      <!-- about personal info area -->

      <!-- about fun fact area -->
      <about-fun-fact />
      <!-- about fun fact area -->

      <!-- award area -->
      <award-area :style_2="true" />
      <!-- award area -->

      <!-- brand area -->
      <brand-area-two />
      <!-- brand area -->

    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "About Page - Kabir" });
definePageMeta({ layout: false });
import throwableAnimation from '@/utils/throwableAnim';
const {servicesPanel} = usePinPanel();


onMounted(() => {
  useSmoothScroll();

  setTimeout(() => {
    useAnimationTitle();
    useCharAnimation();
    throwableAnimation();
    servicesPanel();
  },100)
});
</script>
