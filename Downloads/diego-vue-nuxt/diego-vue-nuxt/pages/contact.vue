<template>
  <div>
    <!-- header area -->
    <header-five />
    <!-- header area -->
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <!-- contact area -->
          <contact-two />
          <!-- contact area -->
        </main>
        <footer-one
          cls="tp-footer__customize  black-bg-3 p-relative fix z-index-1"
          :style_2="true"
        />
      </div>
    </div>

    <!-- back to top -->
    <back-to-top />
    <!-- back to top -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Contact Page - Kabir" });
definePageMeta({ layout: false });


onMounted(() => {
  useSmoothScroll();
  document.body.classList.add("black-bg-3");

  setTimeout(() => {
    useCharAnimation();
    useAnimationTitle();
  },50)
});
</script>
