<template>
  <div class="sv-inner__slider-area black-bg-3 sv-inner__slider-plr">
      <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6">
              <div class="sv-inner__slider-content-main d-flex justify-content-xl-end justify-content-start">
                  <div class="sv-inner__slider-content-wrap">
                    <div class="sv-inner__slider-title-box">
                        <span class="sv-inner__slider-subtitle tp_title_anim">Services</span>
                        <h4 class="sv-inner__slider-title tp_title_anim">High Quality Projects</h4>
                    </div>
                    <div class="sv-inner__service-list-wrap">
                        <div class="sv-inner__service-list list-1 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                          <span>Web App Development</span>
                        </div>
                      <div class="sv-inner__service-list list-2 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                          <span>Over 40 Websites Built</span>
                        </div>
                        <div class="sv-inner__service-list list-3 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                          <span>UI/UX Designer, Envato</span>
                        </div>
                        <div class="sv-inner__service-list list-4 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                          <span>Digital Marketing, Over 12 years</span>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">

             <ClientOnly>
              <div class="sv-inner__slider-main">
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="sv-inner__slider-wrapper">
                          <div class="sv-inner__slider-active-1">
                            <Vue3Marquee :duration="60" :animateOnOverflow="true" :vertical="true">
                              <div v-for="(imgSrc,i) in slider_images_1" :key="i" class="sv-inner__slider-item mb-20">
                                <img :src="imgSrc" alt="">
                              </div>
                            </Vue3Marquee>
                          </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="sv-inner__slider-wrapper">
                          <div class="sv-inner__slider-active-2">
                            <Vue3Marquee :duration="60" :animateOnOverflow="true" :vertical="true">
                              <div v-for="(imgSrc,i) in slider_images_2" :key="i" class="sv-inner__slider-item mb-20">
                                <img :src="imgSrc" alt="">
                              </div>
                            </Vue3Marquee>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </ClientOnly>

            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

const slider_images_1 = [
  '/images/services/slider/services-slider-1.jpg',
  '/images/services/slider/services-slider-2.jpg',
  '/images/services/slider/services-slider-1.jpg',
  '/images/services/slider/services-slider-2.jpg',
  '/images/services/slider/services-slider-1.jpg',
  '/images/services/slider/services-slider-2.jpg',
  '/images/services/slider/services-slider-1.jpg',
  '/images/services/slider/services-slider-2.jpg',
  '/images/services/slider/services-slider-1.jpg',
];

const slider_images_2 = [
  '/images/services/slider/services-slider-3.jpg',
  '/images/services/slider/services-slider-4.jpg',
  '/images/services/slider/services-slider-3.jpg',
  '/images/services/slider/services-slider-4.jpg',
  '/images/services/slider/services-slider-3.jpg',
  '/images/services/slider/services-slider-4.jpg',
  '/images/services/slider/services-slider-3.jpg',
  '/images/services/slider/services-slider-4.jpg',
  '/images/services/slider/services-slider-3.jpg',
]
</script>