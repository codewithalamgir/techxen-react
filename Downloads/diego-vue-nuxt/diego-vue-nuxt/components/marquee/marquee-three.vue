<template>
  <ClientOnly>
  <div class="tp-footer-5-slide-active">
    <Vue3Marquee :duration="100" :animateOnOverflow="true">
      <div
        v-for="(t, i) in marquee_text"
        :key="i"
        class="tp-footer-5-text-wrap"
      >
        <span class="tp-footer-5-text">{{ t }}</span>
      </div>
    </Vue3Marquee>
  </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const marquee_text = [
  "Went to reach out",
  "Went to reach out",
  "Went to reach out",
  "Went to reach out",
  "Went to reach out",
  "Went to reach out",
  "Went to reach out",
];
</script>
