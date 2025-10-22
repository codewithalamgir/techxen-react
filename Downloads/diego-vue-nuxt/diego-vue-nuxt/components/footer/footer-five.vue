<template>
  <footer class="cursor-style">
    <!-- footer area start -->
    <div class="tp-footer-4__main-wrapper black-bg-2 p-relative z-index-1 fix" style="background-image: url(/images/footer/overly-bg.png);">
        <div class="tp-footer-4__area pt-80 pb-60">
          <div class="tp-footer-4__shape">
              <img src="/images/footer/footer-shape-2.png" alt="">
          </div>
          <div class="container">
              <div class="row align-items-start">
                <div class="col-xl-4 col-lg-4 col-md-8 mb-40">
                    <div class="tp-footer-4__widget footer-col-4-1">
                      <div class="tp-footer-4__logo">
                          <nuxt-link href="/">
                            <img src="/images/logo/logo.png" alt="">
                          </nuxt-link>
                      </div>
                      <div class="tp-footer-4__content">
                          <p>Feel free to reach out with questions <br> or inquiries.</p>
                      </div>
                      <!-- social -->
                      <footer-social :style_2="true"/>
                      <!-- social -->
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-4 mb-40">
                    <div class="tp-footer-4__widget footer-col-4-2">
                      <h4 class="tp-footer-4__widget-title">Explore</h4>
                      <ul>
                          <li><nuxt-link href="/about">
                            <i class="fa-regular fa-arrow-right"></i> About</nuxt-link>
                          </li>
                          <li><nuxt-link href="/service">
                            <i class="fa-regular fa-arrow-right"></i> Services</nuxt-link>
                          </li>
                          <li><nuxt-link href="/portfolio">
                            <i class="fa-regular fa-arrow-right"></i> Portfolio</nuxt-link>
                          </li>
                          <li><nuxt-link href="/contact">
                            <i class="fa-regular fa-arrow-right"></i> Contact</nuxt-link>
                          </li>
                      </ul>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-8 mb-40">
                    <div class="tp-footer-4__widget footer-col-4-3">
                      <h4 class="tp-footer-4__widget-title">Address</h4>
                      <div class="tp-footer-4__widget-address">
                          <a href="https://www.google.com/maps" target="_blank">
                            Kingdom of Saudi Arabia <span></span> <br> Al Aziziya , Jeddah , Saudi Arabia
                          </a>
                      </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-4 mb-40">
                    <div class="tp-footer-4__widget footer-col-4-4">
                      <h4 class="tp-footer-4__widget-title">Say Hello</h4>
                      <div class="tp-footer-4__widget-mail">
                          <a href="mailto:Kabir@coderlity.com">Kabir@coderlity.com</a>
                      </div>
                      <div class="tp-footer-4__widget-mail">
                          <a href="tel:+1(789)8001234">+966 559758082</a>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <!-- footer area end -->
        <div class="tp-copyright-4__area tp-copyright-4__bdr-top pt-20 pb-20">
          <div class="container">
              <div class="row">
                <div class="col-xl-12">
                    <div class="tp-copyright-4__text text-center">
                      <span>Kabir @ {{new Date().getFullYear()}}. All Rights Reserved.</span>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>