<template>
  <div class="portfolio-slider-2-area black-bg-5 portfolio-slider-3-style fix">
      <div class="portfolio-slider-2-wrap p-relative">
        <div class="portfolio-slider-2-wrap-box">
            <swiper v-bind="slider_setting" :modules="[Scrollbar, Mousewheel]" class="swiper-container portfolio-slider-3-active">
              <swiper-slide v-for="(item) in slider_data" :key="item.id">
                <nuxt-link class="cursor-hide" href="/portfolio-details-2">
                    <div class="portfolio-slider-2-item p-relative not-hide-cursor" data-cursor="View<br>Demo">
                      <div class="portfolio-slider-2-thumb">
                          <img :src="item.img" alt="">
                      </div>
                      <div class="portfolio-slider-3-content">
                          <span class="portfolio-slider-3-meta">{{item.subtitle}}</span>
                          <h4 class="portfolio-slider-3-title">{{item.title}}</h4>
                      </div>
                    </div>
                </nuxt-link>
              </swiper-slide>
            </swiper>
        </div>
        <div class="tp-scrollbar"></div>
        <div class="port-showcase-slider-link d-none d-sm-block">
            <nuxt-link href="/portfolio-details-2">
              <span>
                <svg-arr-up-down />    
              </span>
              <span>All Projects</span>
            </nuxt-link>
        </div>
        <hero-banner-social :style_2="true" />   
      </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Scrollbar, Mousewheel } from "swiper/modules";

const slider_data = [
  {
    id: 1,
    img: '/images/home-07/slider-2-1.jpg',
    subtitle: 'Modelling - 2012',
    title: 'Siyantika Glory',
  },
  {
    id: 2,
    img: '/images/home-07/slider-2-2.jpg',
    subtitle: 'Modelling - 2012',
    title: 'Hannah & John',
  },
  {
    id: 3,
    img: '/images/home-07/slider-2-5.jpg',
    subtitle: 'Modelling - 2012',
    title: 'Out of this world',
  },
  {
    id: 4,
    img: '/images/home-07/slider-2-4.jpg',
    subtitle: 'Modelling - 2012',
    title: 'The Smiths',
  },
  {
    id: 5,
    img: '/images/home-07/slider-2-3.jpg',
    subtitle: 'Modelling - 2012',
    title: 'Digital Paintings',
  },
  {
    id: 6,
    img: '/images/home-07/slider-2-6.jpg',
    subtitle: 'Modelling - 2012',
    title: 'Album cover',
  },
];

const slider_setting = {
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  mousewheel: true,
  speed: 700,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    '1400': {
      slidesPerView: 4,
    },
    '1200': {
      slidesPerView: 4,
    },
    '992': {
      slidesPerView: 3,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
}
</script>