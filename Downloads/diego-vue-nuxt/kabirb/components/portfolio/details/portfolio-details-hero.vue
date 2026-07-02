<template>
  <div
    class="porfolio-details__area porfolio-details__color-customize p-relative smooth cursor-style"
  >
    <nuxt-link to="#porfolio-details">
      <div class="tp-hero-3__scrool-down z-index-5">
        <span class="text">Scroll</span>
        <span>
          <svg-scroll-arrow />
        </span>
      </div>
    </nuxt-link>
    <div class="porfolio-details__hero-img">
      <img
        data-speed="1.1"
        src="/images/portfolio/portfolio-details-img.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
