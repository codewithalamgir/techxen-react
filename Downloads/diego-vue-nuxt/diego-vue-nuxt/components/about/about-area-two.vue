<template>
  <div class="section">
    <div class="tp-hero-2__bg black-bg-3 tp-hero-2__space-2 d-flex align-items-start justify-content-center p-relative z-index-1">
        <div class="tp-hero-2__boder-circle">
          <span></span>
        </div>
        <div class="container">
          <div class="tp-hero-2__exp-thumb-main p-relative">
              <div class="tp-hero-2__circle-img-wrap">
                <div class="tp-hero-2__circle-img p-relative">
                    <img class="img-1" src="/images/hero/hero-circle-2.png" alt="">
                    <div class="tp-hero-2__circle-img-2">
                      <img src="/images/hero/hero-circle-1.png" alt="">
                    </div>
                </div>
              </div>
              <div class="row align-items-center z-index-5">
                <div class="col-xl-4 col-lg-4 col-md-4">
                    <div class="tp-hero-2__exp-thumb-wrap p-relative text-end">
                      <div class="tp-hero-2__exp-thumb-bg">
                          <img src="/images/hero/hero-2.1-img.png" alt="">
                      </div>
                      <div class="tp-hero-2__exp-thumb-text">
                          <span>12</span>
                          <p>Years <br> Of Working <br>Experience</p>
                      </div>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-8 col-md-8">
                    <div class="tp-hero-2__exp-info">
                      <span class="tp-hero-2__exp-subtitle"> <b>
                        <img class="tp-ring-effect" src="/images/hero/hero-hand.png" alt="">
                      </b> Hello There!</span>
                      <h4 class="tp-hero-2__exp-title">I’m Kabir</h4>
                      <p class="child-1 ">I am a UI Designer building usable human <br> interfaces for the digital world.</p>
                      <p class="child-2 ">Suspendisse convallis, mauris a placerat rutrum, lorem <br> libero sodales ipsum, quis tincidunt.!</p>
                      <nuxt-link class="tp-hero-2__exp-link" href="/contact">
                          NEED THIS? LETS TALK
                         <svg-right-arrow/>
                      </nuxt-link>
                    </div>
                </div>
              </div>
          </div>
          <div class="tp-hero-2__exp-brand-wrap">
              <span class="tp-hero-2__exp-brand-title">
                <b>
                    <img class="tp-zoom-in-out" src="/images/hero/hero-star.png" alt="">
                </b>

                Clients
              </span>
              <div class="row row-cols-lg-4 row-cols-md-2 ">
                <div v-for="(b,i) in brands" :key="i" class="col-xl mb-10">
                    <div class="tp-hero-2__exp-brand">
                      <img :src="b" alt="">
                    </div>
                </div>
              </div>

          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const brands = [
  '/images/brand/logo2-1.svg',
  '/images/brand/logo2-2.svg',
  '/images/brand/logo2-3.svg',
  '/images/brand/logo2-4.svg',
  '/images/brand/logo2-5.svg',
]
</script>