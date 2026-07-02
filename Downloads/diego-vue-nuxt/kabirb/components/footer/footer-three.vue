<template>
  <footer class="cursor-style fix">
    <div class="tp-footer-5-area pt-150 pb-60 black-bg-5">
        <div class="container">
          <div class="row justify-content-center">
              <div class="col-xl-8 col-lg-8">
                <div class="tp-footer-5-subscribe-box text-center">
                    <span class="tp-footer-5-subscribe-title">
                      Subscribe and never miss out
                    </span>
                    <div class="tp-footer-5-input-box">
                      <div class="tp-footer-5-input">
                          <form action="#">
                            <input type="text" placeholder="Your Email">
                            <button class="tp-btn-subscribe" type="submit">Subscribe</button>
                          </form>
                      </div>
                    </div>
                    <div class="tp-footer-5-info-box">
                      <a class="tp-footer-5-info-mail" href="mailto:hello@yourwebsite.com">hello@yourwebsite.com</a>
                        <div class="tp-footer-5-social">
                          <a href="#">Facebook</a>
                          <a href="#">Twitter</a>
                          <a href="#">Instagram</a>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div class="tp-footer-5-text-slide">
          <!-- marquee area -->
          <marquee-three/>
          <!-- marquee area -->
        </div>
    </div>
    <div class="tp-copyright-5-area black-bg-5">
        <div class="tp-copyright-5-wrap">
          <div class="container container-1320">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="tp-copyright-5-left text-center text-md-start">
                      <span>
                        Themepure © {{new Date().getFullYear()}}. All rights reserved.
                      </span>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="tp-copyright-5-right-menu text-center text-md-end">
                      <a href="#">Home</a>
                      <a href="#">About</a>
                      <a href="#">Project</a>
                      <a href="#">Contact</a>
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