<template>
  <div>

    <!-- header area -->
    <header-five />
    <!-- header area -->

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <!-- service details area -->
          <service-details-area />
          <!-- service details area -->

          <!-- brand area -->
          <brand-area-two />
          <!-- brand area -->

          <!-- service navigation -->
          <service-details-navigation />
          <!-- service navigation -->
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
useSeoMeta({ title: "Service Details Page - Kabir" });
definePageMeta({ layout: false });


onMounted(() => {
  useSmoothScroll();

  document.body.classList.add("black-bg-3");

  setTimeout(() => {
    useCharAnimation();
    useAnimationTitle();
  },100)
});
</script>
