<template>
  <footer>
      <div class="tp-footer-3__wrapper tp-footer-3__overlay-bg black-bg-2 p-relative z-index-1 fix tp-mouse-move-btn-section cursor-style">
        <div class="tp-footer-3__shape-1">
            <img src="/images/footer/footer-shape.png" alt="">
        </div>
        <div class="tp-footer-3__img">
            <img src="/images/footer/footer-3-1.png" alt="">
        </div>
        <div class="tp-footer-3__area pt-120 pb-120">
            <div class="container">
              <div class="row align-items-center">
                  <div class="col-xl-7 col-lg-7">
                    <div class="tp-footer-3__title-box">
                        <span class="tp-footer-3__subtitle">Contact Me</span>
                        <h3 class="tp-footer-3__title tp_title_anim">Let's work Together</h3>
                    </div>
                    <div class="tp-footer-3__widget">
                        <div class="tp-footer-3__widget-top d-flex align-items-center justify-content-between">
                          <div class="tp-footer-3__logo">
                              <nuxt-link href="/contact">
                                <img src="/images/logo/logo.png" alt="">
                              </nuxt-link>
                          </div>
                          <div class="tp-footer-3__menu tp_title_anim">
                              <ul>
                                <li><nuxt-link href="/about">About</nuxt-link></li>
                                <li><nuxt-link href="/portfolio">Works</nuxt-link></li>
                                <li><nuxt-link href="/service">Services</nuxt-link></li>
                              </ul>
                          </div>
                        </div>
                        <div class="tp-footer-3__text">
                          <p class="tp_title_anim">
                              A template made for professional designers, photographers and all people <br> who work with creativity and those who don't, this template is yours, use it <br>  as you want happy.</p>
                        </div>
                    </div>
                  </div>
                  <div class="col-xl-5 col-lg-5">
                    <div class="tp-footer-3__link text-xxl-start text-center">
                        <a class="p-relative d-inline-block tp-mouse-move-btn" href="#">
                          <img src="/images/footer/foooter-btn.png" alt="">
                          <span>
                              <svg-arrow-up-2/>
                              <svg-arrow-up-2/>
                          </span>
                        </a>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="tp-copyright-3__area">
            <div class="tp-copyright-3__border-top">
              <div class="container">
                  <div class="row align-items-center">
                    <div class="col-xl-3 col-lg-3 col-md-3">
                        <div class="tp-copyright-3__left text-center text-md-start">
                          <p>© {{ new Date().getFullYear() }} Themepure.</p>
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-9 d-none d-md-block">
                        <div class="tp-copyright-3__social text-end">
                          <ul>
                              <li v-for="(s,i) in social_data" :key="i">
                                <a :href="s.link" target="_blank">
                                  <i :class="s.icon"></i>
                                  {{ s.name }}
                                </a>
                              </li>
                          </ul>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </footer>
</template>

<script setup lang="ts">
import social_data from "@/data/social-data";
const {btnMouseMove} = useMoveText();
onMounted(() => {
  btnMouseMove();
})
</script>