<template>
  <div v-if="!style_2" class="tp-hero-social">
    <div class="parallax-wrap">
      <div class="parallax-element">
        <a class="gmail" href="#">
          <svg-gmail />
        </a>
      </div>
    </div>
    <div class="parallax-wrap">
      <div class="parallax-element">
        <a class="dribble" href="#">
          <svg-dribble />
        </a>
      </div>
    </div>
    <div class="parallax-wrap">
      <div class="parallax-element">
        <a class="behance" href="#">
          <svg-behance />
        </a>
      </div>
    </div>
    <div class="parallax-wrap">
      <div class="parallax-element">
        <a class="youtube" href="#">
          <svg-youtube />
        </a>
      </div>
    </div>
  </div>

   <div v-if="style_2" class="port-showcase-slider-social d-flex align-items-center d-none d-sm-flex">
      <a class="tp-hover-btn-item tp-hover-btn tp-magnetic-item not-hide-cursor" href="#">Fb</a>
      <a class="tp-hover-btn-item tp-hover-btn tp-magnetic-item not-hide-cursor" href="#">In</a>
      <a class="tp-hover-btn-item tp-hover-btn tp-magnetic-item not-hide-cursor" href="#">Be</a>
  </div>
</template>

<script setup lang="ts">
defineProps<{style_2?: boolean}>();
</script>
