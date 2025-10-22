<template>
  <div>

    <!-- header area -->
    <header-five />
    <!-- header area -->

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>

          <!-- portfolio slider area -->
          <portfolio-slider />
          <!-- portfolio slider area -->

          <!-- portfolio area -->
          <portfolio-three />
          <!-- portfolio area -->

          <!-- brand area -->
          <brand-area-two />
          <!-- brand area -->
          
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
useSeoMeta({ title: "Portfolio Page - Kabir" });
definePageMeta({ layout: false });
import { buttonAnimation } from "@/utils/buttonAnimation";

onMounted(() => {
  useSmoothScroll();

  document.body.classList.add("black-bg-3");

  setTimeout(() => {
    useCharAnimation();
    buttonAnimation();
    useScrollTextAnimation();
    useAnimationTitle();
  },50)
});
</script>
