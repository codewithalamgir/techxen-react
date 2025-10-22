<template>
   <footer>
    <div class="tp-footer-6-area coffe-bg pt-140">
        <div class="container">
          <div class="row">
              <div class="col-xl-12">
                <div class="tp-footer-6-cta-wrap mb-100">
                    <div class="tp-about-5-title-box text-center p-relative">
                      <span class="tp-about-5-subtitle tp-split-text tp-split-in-right">GET TO <br> X <br> KNOW ME</span>
                      <h2 class="tp-section-title-5 fs-140 tp-split-text tp-split-in-right">
                          <em>Find me</em>
                          <span class="d-none d-md-inline-block">
                            <img src="/images/home-05/about/about-img.jpg" alt="">
                          </span>
                          <br><span>in the best suites</span>
                      </h2>
                    </div>
                </div>
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="col-xl-10">
                <div class="tp-footer-6-social-wrap mb-100 d-flex align-items-center justify-content-between">
                    <div v-for="(item,i) in footer_links" :key="i" class="tp-footer-6-social">
                      <span>{{item.subtitle}}</span>
                      <a class="d-flex align-items-center" :href="item.link" target="_blank">
                          {{item.title}}
                          <span>
                            <svg-arrow-up-3/>
                            <svg-arrow-up-3/>
                          </span>
                      </a>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div class="container container-1350">
          <!-- instagram area -->
          <instagram-two />
          <!-- instagram area -->
          <div class="tp-footer-6-copyright pb-30">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="tp-footer-6-copyright-text text-center text-md-start">
                      <span>
                          © All Rights Reserved. By Alamgir Kabir 
                      </span>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="tp-footer-6-copyright-text text-center text-md-end">
                      <span>
                          <a href="mailto:kabir@coderlity.com">kabir@coderlity.com</a>
                      </span>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

const footer_links = [
  { subtitle: 'REGULAR UPDATES ON', title: 'Instagram', link: 'https://www.instagram.com/codewithkabir/' },
  { subtitle: 'WORD TALKS', title: 'Twitter', link: 'https://x.com/codebykabir' },
  { subtitle: 'SINGLE SHOTS', title: 'Dribbble', link: 'https://dribbble.com/codekabir' },
  { subtitle: 'COMPLETE PROJECTS', title: 'Behance', link: 'https://www.behance.net/codekabir' },
]
</script>