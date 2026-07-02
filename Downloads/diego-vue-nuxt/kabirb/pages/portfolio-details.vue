<template>
  <div>
    
    <!-- header area -->
    <header-five />
    <!-- header area -->

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <!-- portfolio details area -->
          <portfolio-details-hero />
          <!-- portfolio details area -->

          <!-- portfolio details area -->
          <portfolio-details-area />
          <!-- portfolio details area -->
        </main>

        <!-- footer area -->
        <footer-one
          cls="tp-footer__customize  black-bg-3 p-relative fix z-index-1"
          :style_2="true"
        />
        <!-- footer area -->
      </div>
    </div>

    <!-- back to top -->
    <back-to-top />
    <!-- back to top -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Portfolio Details Page - Kabir" });
definePageMeta({ layout: false });

onMounted(() => {
  useSmoothScroll();
  setTimeout(() => {
    useAnimationTitle();
  },50)
});
</script>
