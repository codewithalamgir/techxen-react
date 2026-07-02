<template>
  <div class="ab-hero__area ab-hero__customize ab-hero__ptb black-bg-3 p-relative z-index-1 fix">
      <div class="ab-hero__shape-1">
        <img src="/images/hero/hero-shape-2-1.png" alt="">
      </div>
      <div class="ab-hero__text d-none d-lg-block col-md-4">
        <span>About Me</span>
      </div>
      <div class="smooth">
        <nuxt-link to="#about-info-area" class="d-none d-xl-block">
            <div class="tp-hero-3__scrool-down">
              <span class="text">Scroll</span>
              <span>
                  <svg-scroll-arrow />
              </span>
            </div>
        </nuxt-link>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-xl-4 col-lg-5">
              <div class="ab-hero__title-box">
                  <h3 class="ab-hero__title tp-char-animation">I’m Kabir</h3>
              </div>
              <div class="ab-hero__btn-box">
                  <a class="tp-btn-border-sm" href="/images/cv/my_cv.pdf" download>
                    Download CV
                    <span>
                        <svg-download />
                    </span>
                  </a>
              </div>
            </div>
            <div class="col-xl-8 col-lg-7">
              <div class="ab-hero__right-box text-end p-relative mt-25 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                  <div class="ab-hero__signature">
                    <img src="/images/hero/Signature.png" alt="">
                  </div>
                  <div class="ab-hero__circle">
                    <img class="tp-rotate-center" src="/images/hero/ab-circle-img.png" alt="">
                  </div>
                  <div class="ab-hero__big-img">
                    <img src="/images/hero/ab-hero-1.jpg" alt="">
                  </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

</script>