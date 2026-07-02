<template>
  <section class="tp-brand-area p-relative">
      <span class="tp-brand-border transition-3"></span>
      <div class="container container-large">
        <div class="tp-brand-inner p-relative">
            <span class="tp-brand-inner-border left tp-vertical-line"></span>
            <span class="tp-brand-inner-border right tp-vertical-line"></span>

            <div class="row align-items-center">
              <div class="col-xl-3 col-lg-3 col-md-5">
                  <h3 class="tp-brand-title">Trusted by <br> World leading brands</h3>
              </div>
              <div class="col-xl-9 col-lg-9 col-md-7">
                  <div class="tp-brand-slider">
                    <div class="tp-brand-slider-active swiper-container fix">
                        <swiper v-bind="slider_setting" class="swiper-wrapper align-items-center">
                          <swiper-slide v-for="(b,i) in brands" :key="i" class="tp-brand-item text-end">
                              <a href="#">
                                <img :src="b" alt="brand">
                              </a>
                          </swiper-slide>
                        </swiper>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import {Swiper,SwiperSlide} from 'swiper/vue';
const brands = [
  '/images/brand/logo_01.png',
  '/images/brand/logo_02.png',
  '/images/brand/logo_03.png',
  '/images/brand/logo_04.png',
  '/images/brand/logo_05.png',
  '/images/brand/logo_02.png',
  '/images/brand/logo_04.png',
];

const slider_setting = {
  slidesPerView: 5,
  spaceBetween: 64,
  loop: false,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".tp-brand-slider-button-next",
    prevEl: ".tp-brand-slider-button-prev",
  },
  pagination: {
    el: ".tp-brand-slider-dot",
    clickable: true,
  },
  breakpoints: {
    '1400': {
      slidesPerView: 5,
    },
    '1200': {
      slidesPerView: 4,
    },
    '992': {
      slidesPerView: 4,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 3,
    },
    '0': {
      slidesPerView: 2,
    },
  },
};
</script>