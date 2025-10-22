<template>
  <div class="porfolio-inner__slider-area porfolio-inner__ptb black-bg-3 p-relative fix">
      <div class="container-fluid">
        <div class="row">
            <div class="col-xl-12">
              <div class="porfolio-inner__overlay">
                  <div class="porfolio-inner__text-1">
                    <h4 class="porfolio-inner__slider-title tp_title_anim">
                      Award-Winning Projects <br> Design & Dev.</h4>
                  </div>
                  <ClientOnly>
                  <div class="porfolio-inner__slider-active">
                    <Vue3Marquee :duration="60" :animateOnOverflow="true">
                      <div v-for="(imgSrc,i) in slider_images" :key="i" class="porfolio-inner__thumb mr-20">
                          <img :src="imgSrc" alt="portfolio-image">
                      </div>
                    </Vue3Marquee>
                   </div>
                 </ClientOnly>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

const slider_images = [
  '/images/portfolio/port-inner-1.jpg',
  '/images/portfolio/port-inner-2.jpg',
  '/images/portfolio/port-inner-3.jpg',
  '/images/portfolio/port-inner-2.jpg',
]
</script>