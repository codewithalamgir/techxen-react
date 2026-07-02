<template>
  <div>
    <nuxt-layout name="layout-one">
      
    <!-- hero banner -->
    <hero-banner-one />
    <!-- hero banner -->

    <!-- brand area -->
    <brand-area-one />
    <!-- brand area -->

    <!-- service area -->
    <service-area-one />
    <!-- service area -->

    <!-- marquee area -->
    <marquee-area />
    <!-- marquee area -->

    <!-- about area -->
    <about-area-one />
    <!-- about area -->

    <!-- portfolio area -->
    <portfolio-area />
    <!-- portfolio area -->

    <!-- skill area -->
    <skill-area />
    <!-- skill area -->

    <!-- award area -->
    <award-area />
    <!-- award area -->

    <!-- testimonial area -->
    <testimonial-one />
    <!-- testimonial area -->

    <!-- resources-area -->
    <resources-area />
    <!-- resources-area -->

    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Full Stack Developer & Digital Marketer : Alamgir Kabir" });
definePageMeta({ layout: false });
import {animatedHeadline} from '@/utils/animatedHeadline';
import {buttonAnimation} from '@/utils/buttonAnimation';

onMounted(() => {
  useSmoothScroll();
  
  setTimeout(() => {
    animatedHeadline();
    useAnimationTitle();
    buttonAnimation();
    useScrollTextAnimation();
  },0)
})
</script>
