<template>
  <ClientOnly>
  <div class="tp-text-slider-4-area tp-text-slider-5-style black-bg-5 fix">
    <div class="tp-text-slider-4-wrap">
      <div class="tp-text-slider-4-active">
        <Vue3Marquee :duration="40" :animateOnOverflow="true">
          <div
            v-for="(t, i) in marquee_text"
            :key="i"
            class="tp-text-slider-4-item d-flex align-items-center"
          >
            <span>{{ t }}</span>
            <img src="/images/new-img/text-slider/shape-2.png" alt="" />
          </div>
        </Vue3Marquee>
      </div>
    </div>
  </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const marquee_text = [
  "Brand promotion",
  "Commercial",
  "Family Shoots",
  "Event",
  "Fashion",
  "Interior photography",
  "Brand promotion",
];
</script>
