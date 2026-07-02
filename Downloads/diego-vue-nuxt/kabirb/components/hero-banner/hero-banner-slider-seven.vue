<template>
  <div class="portfolio-slider-2-area black-bg-5 fix">
      <div class="portfolio-slider-2-wrap p-relative">
        <div class="portfolio-slider-2-wrap-box">
            <swiper v-bind="slider_setting" :modules="[Scrollbar, Mousewheel]" class="swiper-container portfolio-slider-2-active">
              <swiper-slide v-for="(item) in slider_data" :key="item.id">
                <div class="portfolio-slider-2-item p-relative not-hide-cursor" data-cursor="View<br>Demo">
                    <nuxt-link class="cursor-hide" href="/portfolio-details-2">
                      <div class="portfolio-slider-2-thumb">
                          <img :src="item.img" alt="">
                      </div>
                      <div class="portfolio-slider-2-content text-center">
                          <div class="portfolio-slider-2-title">
                            <div>
                                <span>{{item.title}}</span>
                            </div>
                          </div>
                          <div class="portfolio-slider-2-subtitle">
                            <div>
                                <span>{{item.subtitle}}</span>
                            </div>
                          </div>
                      </div>
                    </nuxt-link>
                </div>
              </swiper-slide>
            </swiper>
        </div>
        <div class="tp-scrollbar"></div>
        <div class="port-showcase-slider-link d-none d-sm-block">
            <nuxt-link href="/portfolio">
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
import { Scrollbar, Pagination, Autoplay, Mousewheel } from "swiper/modules";

const slider_data = [
  {
    id: 1,
    img: '/images/home-07/slider-1-2.jpg',
    title: "Top Paddock",
    subtitle: "Branding",
  },
  {
    id: 2,
    img: '/images/home-07/slider-1-3.jpg',
    title: "Album cover",
    subtitle: "Branding",
  },
  {
    id: 3,
    img: '/images/home-07/slider-1-4.jpg',
    title: "The Smiths",
    subtitle: "Branding",
  },
  {
    id: 4,
    img: '/images/home-07/slider-1-5.jpg',
    title: "Siyantika  Glory",
    subtitle: "Branding",
  },
];

const slider_setting = {
  spaceBetween: 80,
  slidesPerView: 3,
  centeredSlides: true,
  centeredSlidesBounds:true,
  loop: true,
  mousewheel: true,
  speed: 700,
  centerMode: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    '1400': {
      slidesPerView: 2,
    },
    '1200': {
      slidesPerView: 2,
    },
    '992': {
      slidesPerView: 1,
      centeredSlides: false,
    },
    '768': {
      slidesPerView: 1,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
  // scrollbar
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
}
</script>
